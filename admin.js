document.addEventListener('DOMContentLoaded', () => {
    const user = getCurrentUser();
    if (!user || (user.username !== 'admin' && user.role !== 'admin') || user.blocked) {
        alert('Access Denied: Admin login required');
        window.location.href = 'index.html';
        return;
    }

    initDashboard();
});

function toggleSidebar() {
    const sidebar = document.querySelector('aside');
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('fixed');
    sidebar.classList.toggle('inset-0');
    sidebar.classList.toggle('z-50');
    sidebar.classList.toggle('w-full');
}

function showSection(sectionId) {
    ['dashboard', 'rooms', 'bookings', 'users', 'settings'].forEach(id => {
        document.getElementById(`section-${id}`).classList.add('hidden');
        const nav = document.getElementById(`nav-${id}`);
        if (nav) {
            nav.classList.remove('bg-gray-800', 'text-white');
            nav.classList.add('text-gray-400');
        }
    });

    document.getElementById(`section-${sectionId}`).classList.remove('hidden');
    const activeNav = document.getElementById(`nav-${sectionId}`);
    if (activeNav) {
        activeNav.classList.add('bg-gray-800', 'text-white');
        activeNav.classList.remove('text-gray-400');
    }

    if (sectionId === 'rooms') loadRoomsTable();
    if (sectionId === 'bookings') loadBookingsTable();
    if (sectionId === 'users') loadUsersTable();
    if (sectionId === 'settings') loadSettingsForm();
}

function initDashboard() {
    const rooms = getRooms();
    const bookings = getBookings();
    const users = getUsers();

    document.getElementById('dash-rooms').textContent = rooms.length;
    document.getElementById('dash-bookings').textContent = bookings.length;
    document.getElementById('dash-users').textContent = users.length;

    // Recent Bookings
    const recentBookings = bookings.slice(-5).reverse();
    const tbody = document.getElementById('recent-bookings-table');
    tbody.innerHTML = '';
    
    recentBookings.forEach(booking => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4 font-medium text-gray-900">${booking.id}</td>
            <td class="px-6 py-4">${booking.username}</td>
            <td class="px-6 py-4">${booking.roomName}</td>
            <td class="px-6 py-4">${new Date(booking.date).toLocaleDateString()}</td>
            <td class="px-6 py-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">${booking.status}</span></td>
            <td class="px-6 py-4 font-bold text-gray-900">${booking.totalAmount}</td>
        `;
        tbody.appendChild(tr);
    });

    setPeriod('weekly');
}

// --- Rooms Management ---
function loadRoomsTable() {
    const rooms = getRooms();
    const tbody = document.getElementById('rooms-table');
    tbody.innerHTML = '';

    rooms.forEach(room => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4">
                <img src="${(room.images && room.images[0]) || 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'}" class="w-16 h-10 object-cover rounded" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'">
            </td>
            <td class="px-6 py-4 font-medium text-gray-900">${room.name}</td>
            <td class="px-6 py-4">${room.city}</td>
            <td class="px-6 py-4">₹${room.price.toLocaleString()}</td>
            <td class="px-6 py-4">${room.guests}</td>
            <td class="px-6 py-4 text-right space-x-2">
                <button onclick="editRoom(${room.id})" class="text-blue-600 hover:text-blue-900"><i class="fas fa-edit"></i></button>
                <button onclick="deleteRoom(${room.id})" class="text-red-600 hover:text-red-900"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function editRoom(id) {
    openRoomModal(id);
}

function openRoomModal(roomId = null) {
    const modal = document.getElementById('room-modal');
    modal.classList.remove('hidden');
    
    if (roomId) {
        // Edit Mode
        const rooms = getRooms();
        const room = rooms.find(r => r.id === roomId);
        document.getElementById('modal-title').textContent = 'Edit Room';
        document.getElementById('room-id').value = room.id;
        document.getElementById('room-name').value = room.name;
        document.getElementById('room-price').value = room.price;
        document.getElementById('room-city').value = room.city;
        document.getElementById('room-guests').value = room.guests;
        document.getElementById('room-rating').value = room.rating;
        document.getElementById('room-desc').value = room.description;
        document.getElementById('room-image').value = (room.images || []).join(', ');
    } else {
        // Add Mode
        document.getElementById('modal-title').textContent = 'Add New Room';
        document.getElementById('room-form').reset();
        document.getElementById('room-id').value = '';
    }
}

function closeRoomModal() {
    document.getElementById('room-modal').classList.add('hidden');
}

function handleRoomSubmit(e) {
    e.preventDefault();
    const rooms = getRooms();
    const id = document.getElementById('room-id').value;
    
    const newRoom = {
        id: id ? parseInt(id) : Date.now(),
        name: document.getElementById('room-name').value,
        price: parseInt(document.getElementById('room-price').value),
        city: document.getElementById('room-city').value,
        guests: parseInt(document.getElementById('room-guests').value),
        rating: parseFloat(document.getElementById('room-rating').value),
        description: document.getElementById('room-desc').value,
        amenities: ["Free Wifi", "City View"], // Default for now
        images: document.getElementById('room-image').value.split(',').map(s => s.trim()).filter(Boolean)
    };

    if (id) {
        // Update
        const index = rooms.findIndex(r => r.id === parseInt(id));
        if (index !== -1) {
            rooms[index] = newRoom;
        }
    } else {
        // Add
        rooms.push(newRoom);
    }

    saveRooms(rooms);
    closeRoomModal();
    loadRoomsTable();
    initDashboard(); // Update counts
}

function deleteRoom(id) {
    if (confirm('Are you sure you want to delete this room?')) {
        let rooms = getRooms();
        rooms = rooms.filter(r => r.id !== id);
        saveRooms(rooms);
        loadRoomsTable();
        initDashboard();
    }
}

// --- Bookings Management ---
function loadBookingsTable() {
    const bookings = getBookings().reverse();
    const tbody = document.getElementById('all-bookings-table');
    tbody.innerHTML = '';

    bookings.forEach(booking => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4 font-medium text-gray-900">${booking.id}</td>
            <td class="px-6 py-4">${booking.username}</td>
            <td class="px-6 py-4">${booking.roomName}</td>
            <td class="px-6 py-4">
                <div class="text-xs">In: ${booking.checkIn}</div>
                <div class="text-xs">Out: ${booking.checkOut}</div>
            </td>
            <td class="px-6 py-4">
                <div class="text-xs">${(booking.paymentStatus || 'Pending')} · ${(booking.paymentMethod || 'N/A')}</div>
                ${booking.paymentId ? `<div class="text-xs text-gray-500">ID: ${booking.paymentId}</div>` : ''}
            </td>
            <td class="px-6 py-4 font-bold text-gray-900">${booking.totalAmount}</td>
        `;
        tbody.appendChild(tr);
    });
}

// --- Users Management ---
function loadUsersTable() {
    const users = getUsers();
    const tbody = document.getElementById('users-table');
    tbody.innerHTML = '';

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4 font-medium text-gray-900">${user.username}</td>
            <td class="px-6 py-4">${user.email}</td>
            <td class="px-6 py-4">
                <span class="px-2 py-1 ${user.blocked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'} rounded-full text-xs">
                    ${user.blocked ? 'Blocked' : (user.role === 'admin' ? 'Admin' : 'Active')}
                </span>
            </td>
            <td class="px-6 py-4 text-right">
                ${user.username !== 'admin' ? `<button onclick="toggleBlockUser('${user.username}')" class="text-${user.blocked ? 'green' : 'red'}-600 hover:text-${user.blocked ? 'green' : 'red'}-900">${user.blocked ? 'Unblock' : 'Block'}</button>` : '<span class="text-gray-400">Admin</span>'}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function toggleBlockUser(username) {
    const users = getUsers();
    const idx = users.findIndex(u => u.username === username);
    if (idx !== -1) {
        users[idx].blocked = !users[idx].blocked;
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        loadUsersTable();
    }
}

// --- Charts ---
let currentPeriod = 'weekly';

function setPeriod(period) {
    currentPeriod = period;
    ['weekly','monthly','yearly','all'].forEach(p => {
        const btn = document.getElementById(`period-${p}`);
        if (btn) {
            if (p === period) {
                btn.classList.add('bg-secondary','text-white');
                btn.classList.remove('bg-gray-200','text-gray-800');
            } else {
                btn.classList.remove('bg-secondary','text-white');
                btn.classList.add('bg-gray-200','text-gray-800');
            }
        }
    });
    renderCharts();
}

function parseAmount(str) {
    if (!str) return 0;
    const n = parseInt(String(str).replace(/[^0-9]/g,''));
    return isNaN(n) ? 0 : n;
}

function renderBarChart(containerId, labels, values, colorClass) {
    const container = document.getElementById(containerId);
    const labelsDiv = document.getElementById(containerId + '-labels');
    if (!container || !labelsDiv) return;
    container.innerHTML = '';
    labelsDiv.innerHTML = '';
    const max = Math.max(1, ...values);
    values.forEach((v, i) => {
        const bar = document.createElement('div');
        bar.className = `flex-1 ${colorClass}`;
        bar.style.height = `${Math.round((v / max) * 100)}%`;
        bar.title = `${labels[i]}: ${v}`;
        container.appendChild(bar);
        const lbl = document.createElement('div');
        lbl.textContent = labels[i];
        labelsDiv.appendChild(lbl);
    });
}

function renderCharts() {
    const bookings = getBookings();
    const loginEvents = getLoginEvents();
    const visits = getVisits();
    const now = new Date();

    function lastNDaysData(n, source, dateField) {
        const labels = [];
        const values = [];
        for (let i = n-1; i >= 0; i--) {
            const d = new Date(now);
            d.setDate(now.getDate() - i);
            const dayStr = d.toISOString().slice(0,10);
            labels.push(dayStr.slice(5)); // MM-DD
            const count = source.filter(item => new Date(item[dateField]).toISOString().slice(0,10) === dayStr).length;
            values.push(count);
        }
        return { labels, values };
    }

    function lastNMonthsData(n, source, dateField) {
        const labels = [];
        const values = [];
        for (let i = n-1; i >= 0; i--) {
            const d = new Date(now);
            d.setMonth(now.getMonth() - i);
            const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
            labels.push(key);
            const count = source.filter(item => {
                const di = new Date(item[dateField]);
                return di.getFullYear() === d.getFullYear() && di.getMonth() === d.getMonth();
            }).length;
            values.push(count);
        }
        return { labels, values };
    }

    function lastNYearsData(n, source, dateField) {
        const labels = [];
        const values = [];
        for (let i = n-1; i >= 0; i--) {
            const y = now.getFullYear() - i;
            labels.push(String(y));
            const count = source.filter(item => new Date(item[dateField]).getFullYear() === y).length;
            values.push(count);
        }
        return { labels, values };
    }

    // Bookings count
    let bk, pm, lg, vs;
    if (currentPeriod === 'weekly') {
        bk = lastNDaysData(7, bookings, 'date');
        pm = lastNDaysData(7, bookings.map(b => ({date: b.date, amt: parseAmount(b.totalAmount)})), 'date');
        lg = lastNDaysData(7, loginEvents, 'ts');
        vs = lastNDaysData(7, visits.map(v => ({ts: v.ts})), 'ts');
    } else if (currentPeriod === 'monthly') {
        bk = lastNMonthsData(12, bookings, 'date');
        pm = lastNMonthsData(12, bookings.map(b => ({date: b.date, amt: parseAmount(b.totalAmount)})), 'date');
        lg = lastNMonthsData(12, loginEvents, 'ts');
        vs = lastNMonthsData(12, visits.map(v => ({ts: v.ts})), 'ts');
    } else if (currentPeriod === 'yearly') {
        bk = lastNYearsData(5, bookings, 'date');
        pm = lastNYearsData(5, bookings.map(b => ({date: b.date, amt: parseAmount(b.totalAmount)})), 'date');
        lg = lastNYearsData(5, loginEvents, 'ts');
        vs = lastNYearsData(5, visits.map(v => ({ts: v.ts})), 'ts');
    } else {
        bk = { labels: ['All'], values: [bookings.length] };
        pm = { labels: ['All'], values: [bookings.reduce((sum,b)=> sum + parseAmount(b.totalAmount),0)] };
        lg = { labels: ['All'], values: [loginEvents.length] };
        vs = { labels: ['All'], values: [visits.length] };
    }

    renderBarChart('chart-bookings', bk.labels, bk.values, 'bg-yellow-400');
    renderBarChart('chart-payments', pm.labels, pm.values, 'bg-blue-400');
    renderBarChart('chart-logins', lg.labels, lg.values, 'bg-green-400');
    renderBarChart('chart-visits', vs.labels, vs.values, 'bg-gray-400');
}

function getSettings() {
    return JSON.parse(localStorage.getItem('ayush_settings') || '{}');
}

function saveSettings(settings) {
    localStorage.setItem('ayush_settings', JSON.stringify(settings));
}

function loadSettingsForm() {
    const s = getSettings();
    const n1 = document.getElementById('set-site-name');
    if (!n1) return;
    n1.value = s.siteName || 'Ayush';
    document.getElementById('set-about-p1').value = s.aboutP1 || '';
    document.getElementById('set-about-p2').value = s.aboutP2 || '';
    document.getElementById('set-about-p3').value = s.aboutP3 || '';
    document.getElementById('set-contact-email').value = s.contactEmail || 'info@ayush.com';
    document.getElementById('set-contact-phone').value = s.contactPhone || '+1 (555) 123-4567';
    document.getElementById('set-contact-address').value = s.contactAddress || '123 Luxury Blvd, Paradise City, PC 12345';
}

function handleSettingsSubmit(e) {
    e.preventDefault();
    const settings = {
        siteName: document.getElementById('set-site-name').value,
        aboutP1: document.getElementById('set-about-p1').value,
        aboutP2: document.getElementById('set-about-p2').value,
        aboutP3: document.getElementById('set-about-p3').value,
        contactEmail: document.getElementById('set-contact-email').value,
        contactPhone: document.getElementById('set-contact-phone').value,
        contactAddress: document.getElementById('set-contact-address').value
    };
    saveSettings(settings);
    alert('Settings saved');
}
