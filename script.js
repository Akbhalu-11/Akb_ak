// script.js

const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 
    'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 
    'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 
    'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 
    'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 
    'Howrah', 'Ranchi', 'Gwalior', 'Jabalpur', 'Coimbatore', 'Vijayawada', 'Jodhpur', 
    'Madurai', 'Raipur', 'Kota', 'Guwahati', 'Chandigarh', 'Solapur', 'Hubli-Dharwad', 
    'Mysore', 'Tiruchirappalli', 'Bareilly', 'Aligarh', 'Tiruppur', 'Gurgaon', 'Moradabad', 
    'Jalandhar', 'Bhubaneswar', 'Salem', 'Warangal', 'Mira-Bhayandar', 'Jalgaon', 'Guntur', 
    'Thiruvananthapuram', 'Bhiwandi', 'Saharanpur', 'Gorakhpur', 'Bikaner', 'Amravati', 
    'Noida', 'Jamshedpur', 'Bhilai', 'Cuttack', 'Firozabad', 'Kochi', 'Nellore', 'Bhavnagar', 
    'Dehradun', 'Durgapur', 'Asansol', 'Rourkela', 'Nanded', 'Kolhapur', 'Ajmer', 'Akola', 
    'Gulbarga', 'Jamnagar', 'Ujjain', 'Loni', 'Siliguri', 'Jhansi', 'Ulhasnagar', 'Jammu', 
    'Sangli-Miraj & Kupwad', 'Mangalore', 'Erode', 'Belgaum', 'Ambattur', 'Tirunelveli', 
    'Malegaon', 'Gaya', 'Udaipur', 'Kakinada', 'Davanagere', 'Kozhikode', 'Maheshtala', 
    'Rajpur Sonarpur', 'Rajahmundry', 'Bokaro', 'South Dumdum', 'Bellary', 'Patiala', 
    'Gopalpur', 'Agartala', 'Bhagalpur', 'Muzaffarnagar', 'Bhatpara', 'Panihati', 'Latur', 
    'Dhule', 'Tirupati', 'Rohtak', 'Korba', 'Bhilwara', 'Berhampur', 'Muzaffarpur', 
    'Ahmednagar', 'Mathura', 'Kollam', 'Avadi', 'Kadapa', 'Kamarhati', 'Sambalpur', 
    'Bilaspur', 'Shahjahanpur', 'Satara', 'Bijapur', 'Kurnool', 'Rampur', 'Shimoga', 
    'Chandrapur', 'Junagadh', 'Thrissur', 'Alwar', 'Bardhaman', 'Kulti', 'Nizamabad', 
    'Parbhani', 'Tumkur', 'Khammam', 'Ozhukarai', 'Bihar Sharif', 'Panipat', 'Darbhanga', 
    'Bally', 'Aizawl', 'Dewas', 'Ichalkaranji', 'Karnal', 'Bathinda', 'Jalna', 'Eluru', 
    'Kirari Suleman Nagar', 'Barasat', 'Purnia', 'Satna', 'Mau', 'Sonipat', 'Farrukhabad', 
    'Sagar', 'Rourkela', 'Durg', 'Imphal', 'Ratlam', 'Hapur', 'Arrah', 'Karimnagar', 
    'Anantapur', 'Etawah', 'Ambernath', 'North Dumdum', 'Bharatpur', 'Begusarai', 'New Delhi', 
    'Gandhidham', 'Baranagar', 'Tiruvottiyur', 'Pondicherry', 'Sikar', 'Thoothukudi', 'Rewa', 
    'Mirzapur', 'Raichur', 'Pali', 'Ramagundam', 'Haridwar', 'Vijayanagaram', 'Katihar', 
    'Nagercoil', 'Sri Ganganagar', 'Karawal Nagar', 'Mango', 'Thanjavur', 'Bulandshahr', 
    'Uluberia', 'Murwara', 'Sambhal', 'Singrauli', 'Nadiad', 'Secunderabad', 'Naihati', 
    'Yamunanagar', 'Bidhan Nagar', 'Pallavaram', 'Bidar', 'Munger', 'Panchkula', 'Burhanpur', 
    'Raurkela Industrial Township', 'Kharagpur', 'Dindigul', 'Gandhinagar', 'Hospet', 
    'Nangloi Jat', 'Malda', 'Ongole', 'Deoghar', 'Chapra', 'Haldia', 'Khandwa', 'Nandyal', 
    'Chittoor', 'Morena', 'Amroha', 'Anand', 'Bhind', 'Bhalswa Jahangir Pur', 'Madhyamgram', 
    'Bhiwani', 'Navi Mumbai Panvel Raigad', 'Baharampur', 'Ambala', 'Morvi', 'Fatehpur', 
    'Rae Bareli', 'Khora', 'Bhusawal', 'Orai', 'Bahraich', 'Vellore', 'Mahesana', 'Sambalpur', 
    'Raiganj', 'Sirsa', 'Danapur', 'Serampore', 'Sultan Pur Majra', 'Guna', 'Jaunpur', 
    'Panvel', 'Shivpuri', 'Surendranagar Dudhrej', 'Unnao', 'Hugli and Chinsurah', 'Alappuzha', 
    'Kottayam', 'Shimla', 'Karaikudi'
];

const ROOMS_KEY = 'ayush_rooms';
const BOOKINGS_KEY = 'ayush_bookings';
const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80';

// Default Room Data (used if localStorage is empty)
const DEFAULT_ROOMS = [
    {
        id: 1,
        name: "Deluxe Ocean View",
        price: 12000,
        city: "Goa",
        guests: 2,
        rating: 5,
        description: "Wake up to the sound of waves in our spacious Deluxe Ocean View room featuring a private balcony and stunning sea views.",
        amenities: ["1 King Bed", "Free Wifi", "Ocean View", "Balcony", "Mini Bar"],
        images: [
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1590490360182-f33fb0d41022?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        name: "Executive Suite",
        price: 25000,
        city: "Mumbai",
        guests: 4,
        rating: 4.5,
        description: "Experience premium luxury in our Executive Suite with a separate living area, premium amenities, and city skyline views.",
        amenities: ["2 Queen Beds", "Jacuzzi", "Living Area", "Work Desk", "City View"],
        images: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 3,
        name: "Presidential Villa",
        price: 60000,
        city: "Udaipur",
        guests: 6,
        rating: 5,
        description: "The ultimate private retreat. Our Presidential Villa offers a private pool, personal chef service, and magnificent lake views.",
        amenities: ["3 Bedrooms", "Private Pool", "Chef Service", "Lake View", "Butler"],
        images: [
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1590490360182-f33fb0d41022?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 4,
        name: "Family Suite",
        price: 18000,
        city: "Bangalore",
        guests: 4,
        rating: 4.5,
        description: "Perfect for families. Two interconnected bedrooms with a shared living space, kid-friendly amenities, and garden access.",
        amenities: ["2 King Beds", "Play Area", "Garden Access", "Kitchenette", "Smart TV"],
        images: [
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 5,
        name: "Garden View Room",
        price: 10000,
        city: "Kochi",
        guests: 2,
        rating: 4,
        description: "Serene views of our lush gardens. A peaceful retreat for nature lovers with private patio access.",
        amenities: ["1 Queen Bed", "Garden View", "Coffee Maker", "Patio", "Rain Shower"],
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1590490360182-f33fb0d41022?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 6,
        name: "Heritage Suite",
        price: 30000,
        city: "Jaipur",
        guests: 3,
        rating: 5,
        description: "Experience royalty in our Heritage Suite, featuring traditional Rajasthani decor, antique furniture, and modern luxury.",
        amenities: ["King Bed", "Royal Decor", "Butler Service", "City View", "Bathtub"],
        images: [
            "https://images.unsplash.com/photo-1590490360182-f33fb0d41022?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 7,
        name: "Junior Suite",
        price: 15000,
        city: "Delhi",
        guests: 3,
        rating: 4.5,
        description: "Spacious comfort with a dedicated sitting area. Ideal for business travelers or small families.",
        amenities: ["King Bed", "Sitting Area", "Work Desk", "City View", "Minibar"],
        images: [
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 8,
        name: "Skyline Penthouse",
        price: 45000,
        city: "Mumbai",
        guests: 4,
        rating: 5,
        description: "Breathtaking city views from the top floor. Includes private terrace, exclusive lounge access, and premium services.",
        amenities: ["2 Bedrooms", "Top Floor", "Lounge Access", "Terrace", "Jacuzzi"],
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 9,
        name: "Royal Rajasthan Suite",
        price: 35000,
        city: "Jodhpur",
        guests: 3,
        rating: 5,
        description: "Immerse yourself in history with authentic Rajasthani architecture, royal furnishings, and modern comforts.",
        amenities: ["Heritage Decor", "Mini Bar", "City View", "Butler", "King Bed"],
        images: [
            "https://images.unsplash.com/photo-1590490360182-f33fb0d41022?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 10,
        name: "Urban Loft",
        price: 22000,
        city: "Bangalore",
        guests: 2,
        rating: 4.5,
        description: "Modern, chic design with floor-to-ceiling windows. Perfect for the contemporary traveler seeking style and comfort.",
        amenities: ["High-Speed Wifi", "Smart TV", "City View", "Work Space", "Rain Shower"],
        images: [
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    }
];

// Initialize and get rooms
function getRooms() {
    const rooms = localStorage.getItem(ROOMS_KEY);
    if (!rooms) {
        localStorage.setItem(ROOMS_KEY, JSON.stringify(DEFAULT_ROOMS));
        return DEFAULT_ROOMS;
    }
    return JSON.parse(rooms);
}

function saveRooms(rooms) {
    localStorage.setItem(ROOMS_KEY, JSON.stringify(rooms));
}

function getBookings() {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]');
}

function saveBooking(booking) {
    const bookings = getBookings();
    bookings.push(booking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
}

let roomsData = getRooms();


function renderRooms(roomsToRender) {
    const container = document.getElementById('room-list');
    if (!container) return; // Guard clause for Admin page
 
    container.innerHTML = '';
    
    if (roomsToRender.length === 0) {
        container.innerHTML = '<div class="col-span-1 md:col-span-3 text-center text-gray-500 text-xl py-10">No rooms found matching your criteria.</div>';
        return;
    }

    roomsToRender.forEach(room => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group';
        
        // Stars
        let starsHtml = '';
        const fullStars = Math.floor(room.rating);
        const hasHalfStar = room.rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star"></i>';
        if (hasHalfStar) starsHtml += '<i class="fas fa-star-half-alt"></i>';
        
        card.innerHTML = `
            <div class="relative h-64 overflow-hidden bg-gray-100">
                <img src="${(room.images && room.images[0]) || PLACEHOLDER_IMG}" alt="${room.name}" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-500" loading="lazy" onerror="this.src='${PLACEHOLDER_IMG}'">
                <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-secondary shadow">
                    ₹${room.price.toLocaleString()}/night
                </div>
                <div class="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    <i class="fas fa-map-marker-alt mr-1"></i> ${room.city}
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-900">${room.name}</h3>
                    <div class="flex text-yellow-400 text-sm">
                        ${starsHtml}
                    </div>
                </div>
                <p class="text-gray-600 mb-4 text-sm line-clamp-2">${room.description}</p>
                <div class="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                    <span class="flex items-center"><i class="fas fa-user mr-2"></i> ${room.guests} Guests</span>
                    <span class="flex items-center"><i class="fas fa-wifi mr-2"></i> Free Wifi</span>
                </div>
                <button onclick="openRoomDetails(${room.id})" class="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold py-2 rounded-lg transition duration-300">View Details</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function openRoomDetails(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;

    document.getElementById('rd-title').textContent = room.name;
    document.getElementById('rd-desc').textContent = room.description;
    document.getElementById('rd-price').textContent = '₹' + room.price.toLocaleString();
    document.getElementById('rd-city').innerHTML = `<i class="fas fa-map-marker-alt mr-2 text-secondary"></i>${room.city}`;
    
    // Images
    document.getElementById('rd-main-image').src = (room.images && room.images[0]) || PLACEHOLDER_IMG;
    document.getElementById('rd-main-image').loading = 'lazy';
    document.getElementById('rd-main-image').onerror = function() { this.src = PLACEHOLDER_IMG };
    for (let i = 1; i <= 4; i++) {
        const img = document.getElementById(`rd-img-${i}`);
        if (img && room.images[i-1]) {
            img.src = room.images[i-1];
            // Add click to swap with main
            img.onclick = function() {
                const mainSrc = document.getElementById('rd-main-image').src;
                document.getElementById('rd-main-image').src = this.src;
                this.src = mainSrc;
            };
            img.loading = 'lazy';
            img.onerror = function() { this.src = PLACEHOLDER_IMG };
        }
    }

    // Amenities
    const amContainer = document.getElementById('rd-amenities');
    amContainer.innerHTML = room.amenities.map(am => `<span class="flex items-center"><i class="fas fa-check text-secondary mr-2"></i> ${am}</span>`).join('');

    // Setup Book Button
    const btn = document.getElementById('rd-book-btn');
    btn.onclick = function() {
        closeRoomDetails();
        openBookingModal(room.name, room.price, room.images[0]);
    };

    const modal = document.getElementById('room-details-modal');
    modal.classList.remove('hidden');
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeRoomDetails() {
    const modal = document.getElementById('room-details-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

const USERS_KEY = 'luxe_users';
const CURRENT_USER_KEY = 'luxe_current_user';
const LOGIN_EVENTS_KEY = 'ayush_login_events';
const VISITS_KEY = 'ayush_site_visits';
const FIRST_RUN_KEY = 'ayush_first_run_done';
const SETTINGS_KEY = 'ayush_settings';

function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    updateNavAuth();
}

function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    updateNavAuth();
    window.location.reload();
}

function ensureAdminUser() {
    const users = getUsers();
    const exists = users.find(u => u.username === 'admin');
    if (!exists) {
        const adminUser = {
            username: 'admin',
            email: 'admin@ayush.com',
            password: '1234',
            role: 'admin',
            blocked: false,
            createdAt: new Date().toISOString()
        };
        saveUser(adminUser);
    }
}

function getLoginEvents() {
    return JSON.parse(localStorage.getItem(LOGIN_EVENTS_KEY) || '[]');
}

function saveLoginEvent(event) {
    const events = getLoginEvents();
    events.push(event);
    localStorage.setItem(LOGIN_EVENTS_KEY, JSON.stringify(events));
}

function getVisits() {
    return JSON.parse(localStorage.getItem(VISITS_KEY) || '[]');
}

function saveVisit(visit) {
    const visits = getVisits();
    visits.push(visit);
    localStorage.setItem(VISITS_KEY, JSON.stringify(visits));
}

function getSettings() {
    return JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
}

function applySettings() {
    const s = getSettings();
    const siteNameEl = document.getElementById('site-name');
    const footerNameEl = document.getElementById('footer-site-name');
    const chatTitleEl = document.getElementById('chat-title');
    if (siteNameEl && s.siteName) siteNameEl.textContent = s.siteName;
    if (footerNameEl && s.siteName) footerNameEl.textContent = s.siteName;
    if (chatTitleEl && s.siteName) chatTitleEl.textContent = s.siteName + ' Support';
    const ap1 = document.getElementById('about-p1');
    const ap2 = document.getElementById('about-p2');
    const ap3 = document.getElementById('about-p3');
    if (ap1 && s.aboutP1) ap1.textContent = s.aboutP1;
    if (ap2 && s.aboutP2) ap2.textContent = s.aboutP2;
    if (ap3 && s.aboutP3) ap3.textContent = s.aboutP3;
    const cAddr = document.getElementById('contact-address');
    const cPhone = document.getElementById('contact-phone');
    const cEmail = document.getElementById('contact-email');
    if (cAddr && s.contactAddress) cAddr.innerHTML = '<i class="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i> ' + s.contactAddress;
    if (cPhone && s.contactPhone) cPhone.innerHTML = '<i class="fas fa-phone-alt mr-3 text-secondary"></i> ' + s.contactPhone;
    if (cEmail && s.contactEmail) cEmail.innerHTML = '<i class="fas fa-envelope mr-3 text-secondary"></i> ' + s.contactEmail;
}
function updateNavAuth() {
    const user = getCurrentUser();
    const authButtons = document.getElementById('auth-buttons');
    const userProfile = document.getElementById('user-profile');
    const usernameDisplay = document.getElementById('username-display');

    if (user) {
        if (authButtons) authButtons.classList.add('hidden');
        if (userProfile) {
            userProfile.classList.remove('hidden');
            userProfile.classList.add('flex');
            usernameDisplay.textContent = `Hi, ${user.username}`;
        }
    } else {
        if (authButtons) authButtons.classList.remove('hidden');
        if (userProfile) {
            userProfile.classList.add('hidden');
            userProfile.classList.remove('flex');
        }
    }
}

// Modal Logic
function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;
    modal.classList.add('active');
    toggleAuth('login');
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function toggleAuth(mode) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const regUsername = document.getElementById('reg-username');
    const loginUsername = document.getElementById('login-username');

    if (mode === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        
        // Update tabs
        tabLogin.classList.add('text-secondary', 'border-b-2', 'border-secondary');
        tabLogin.classList.remove('text-gray-400');
        tabRegister.classList.remove('text-secondary', 'border-b-2', 'border-secondary');
        tabRegister.classList.add('text-gray-400');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');

        // Update tabs
        tabRegister.classList.add('text-secondary', 'border-b-2', 'border-secondary');
        tabRegister.classList.remove('text-gray-400');
        tabLogin.classList.remove('text-secondary', 'border-b-2', 'border-secondary');
        tabLogin.classList.add('text-gray-400');

        // Pre-fill username if switching from failed login
        if (loginUsername && loginUsername.value) {
            regUsername.value = loginUsername.value;
        }
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        if (user.blocked) {
            alert('This account is blocked. Please contact support.');
            saveLoginEvent({ username, ts: new Date().toISOString(), status: 'blocked' });
            return;
        }
        setCurrentUser(user);
        closeAuthModal();
        saveLoginEvent({ username, ts: new Date().toISOString(), status: 'success' });
        if (user.role === 'admin' || user.username === 'admin') {
            window.location.href = 'admin.html';
            return;
        }
        alert('Login Successful!');
    } else {
        // Smart Redirect: User not found, switch to register
        const userExists = users.find(u => u.username === username);
        if (!userExists) {
            alert('User not found. Redirecting to registration...');
            toggleAuth('register');
            saveLoginEvent({ username, ts: new Date().toISOString(), status: 'not_found' });
        } else {
            alert('Invalid password. Please try again.');
            saveLoginEvent({ username, ts: new Date().toISOString(), status: 'invalid_password' });
        }
    }
}

function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    const users = getUsers();
    if (users.find(u => u.username === username)) {
        alert('Username already exists. Please login.');
        toggleAuth('login');
        return;
    }

    const newUser = { username, email, password, role: 'user', blocked: false, createdAt: new Date().toISOString() };
    saveUser(newUser);
    setCurrentUser(newUser);
    closeAuthModal();
    alert('Registration Successful! You are now logged in.');
}

// Booking Logic
let currentRoomPrice = 0;
let currentRoomName = '';

function openBookingModal(roomName, price, imageSrc) {
    const user = getCurrentUser();
    if (!user) {
        alert('Please login to book a room.');
        openAuthModal();
        return;
    }

    const modal = document.getElementById('booking-modal');
    
    // Set Room Details
    document.getElementById('booking-room-name').textContent = roomName;
    document.getElementById('booking-room-price').textContent = typeof price === 'number' ? '₹' + price.toLocaleString() : price;
    if (imageSrc) {
        document.getElementById('booking-room-img').src = imageSrc;
    }
    
    currentRoomName = roomName;
    if (typeof price === 'number') {
        currentRoomPrice = price;
    } else {
        currentRoomPrice = parseInt(price.replace(/[^0-9]/g, ''));
    }

    // Set Default Dates (Today & Tomorrow)
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];
    
    document.getElementById('bk-check-in').value = today;
    document.getElementById('bk-check-in').min = today;
    document.getElementById('bk-check-out').value = tomorrow;
    document.getElementById('bk-check-out').min = tomorrow;

    // Reset Form
    document.getElementById('booking-form').reset();
    document.getElementById('bk-check-in').value = today;
    document.getElementById('bk-check-out').value = tomorrow;

    updateBookingTotal();

    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;
    modal.classList.add('active');
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function updateBookingTotal() {
    const checkIn = new Date(document.getElementById('bk-check-in').value);
    const checkOut = new Date(document.getElementById('bk-check-out').value);
    
    // Validate dates
    if (checkOut <= checkIn) {
        document.getElementById('bk-nights').textContent = '0';
        document.getElementById('bk-room-cost').textContent = '₹0';
        document.getElementById('bk-total-cost').textContent = '₹0';
        return;
    }

    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    document.getElementById('bk-nights').textContent = nights;

    // Room Cost
    const roomCost = currentRoomPrice * nights;
    document.getElementById('bk-room-cost').textContent = '₹' + roomCost.toLocaleString();

    // Meal Cost
    let mealCostPerDay = 0;
    const guests = parseInt(document.getElementById('bk-guests').value) || 2;
    
    let guestCount = parseInt(document.getElementById('bk-guests').value);
    
    if (document.getElementById('meal-breakfast').checked) mealCostPerDay += 500;
    if (document.getElementById('meal-lunch').checked) mealCostPerDay += 800;
    if (document.getElementById('meal-drinks').checked) mealCostPerDay += 300;

    const totalMealCost = mealCostPerDay * guestCount * nights;
    document.getElementById('bk-meal-cost').textContent = '₹' + totalMealCost.toLocaleString();

    // Tax & Total
    const subtotal = roomCost + totalMealCost;
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    document.getElementById('bk-tax-cost').textContent = '₹' + tax.toLocaleString();
    document.getElementById('bk-total-cost').textContent = '₹' + total.toLocaleString();
}

function confirmBooking(e) {
    e.preventDefault();
    const user = getCurrentUser();
    
    const checkIn = document.getElementById('bk-check-in').value;
    const checkOut = document.getElementById('bk-check-out').value;
    const guests = document.getElementById('bk-guests').options[document.getElementById('bk-guests').selectedIndex].text;
    const paymentMethod = document.getElementById('bk-payment-method').value;
    
    const nightsText = document.getElementById('bk-nights').textContent;
    const roomCostText = document.getElementById('bk-room-cost').textContent;
    const mealCostText = document.getElementById('bk-meal-cost').textContent;
    const taxText = document.getElementById('bk-tax-cost').textContent;
    const totalText = document.getElementById('bk-total-cost').textContent;

    // Create Booking Object
    const bookingId = '#BK-' + Math.floor(Math.random() * 100000);
    const booking = {
        id: bookingId,
        username: user.username,
        roomName: currentRoomName,
        checkIn,
        checkOut,
        guests,
        paymentMethod,
        paymentStatus: paymentMethod === 'Pay at Hotel' ? 'Pending' : 'Initiated',
        paymentId: null,
        gateway: paymentMethod === 'Pay at Hotel' ? null : 'Razorpay',
        totalAmount: totalText,
        status: 'Confirmed',
        date: new Date().toISOString()
    };

    saveBooking(booking);

    const amountPaise = parseInt(totalText.replace(/[^0-9]/g, '')) * 100;
    if (paymentMethod && paymentMethod !== 'Pay at Hotel') {
        startRazorpayPayment({
            amountPaise,
            bookingId,
            username: user.username,
            roomName: currentRoomName,
            paymentMethod,
            nightsText,
            roomCostText,
            mealCostText,
            taxText,
            totalText
        });
        return;
    }
 
    closeBookingModal();

    // Open Receipt Modal
    const modal = document.getElementById('receipt-modal');
    
    document.getElementById('receipt-name').textContent = user.username;
    document.getElementById('receipt-id').textContent = bookingId;
    document.getElementById('receipt-checkin').textContent = checkIn;
    document.getElementById('receipt-checkout').textContent = checkOut;
    document.getElementById('receipt-room').textContent = currentRoomName;
    document.getElementById('receipt-guests').textContent = guests;
    document.getElementById('receipt-payment').textContent = paymentMethod;
    
    document.getElementById('receipt-nights').textContent = nightsText;
    document.getElementById('receipt-room-cost').textContent = roomCostText;
    document.getElementById('receipt-meal-cost').textContent = mealCostText;
    document.getElementById('receipt-tax').textContent = taxText;
    document.getElementById('receipt-total').textContent = totalText;

    modal.classList.remove('hidden');
    void modal.offsetWidth;
    modal.classList.add('active');
}

function updateBookingPayment(id, details) {
    const bookings = getBookings();
    const idx = bookings.findIndex(b => b.id === id);
    if (idx !== -1) {
        bookings[idx] = { ...bookings[idx], ...details };
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    }
}

function startRazorpayPayment(opts) {
    if (typeof Razorpay === 'undefined') {
        alert('Payment gateway not loaded. Please check your internet and try again.');
        return;
    }
    const key = window.RAZORPAY_KEY_ID || 'rzp_test_placeholder';
    const options = {
        key,
        amount: opts.amountPaise,
        currency: 'INR',
        name: 'Ayush Hotels',
        description: `Booking ${opts.bookingId} - ${opts.roomName}`,
        prefill: {
            name: opts.username
        },
        theme: { color: '#c5a365' },
        handler: function (response) {
            updateBookingPayment(opts.bookingId, {
                paymentStatus: 'Paid',
                paymentId: response.razorpay_payment_id,
                gateway: 'Razorpay'
            });
            closeBookingModal();
            const modal = document.getElementById('receipt-modal');
            document.getElementById('receipt-name').textContent = opts.username;
            document.getElementById('receipt-id').textContent = opts.bookingId;
            document.getElementById('receipt-checkin').textContent = document.getElementById('bk-check-in').value;
            document.getElementById('receipt-checkout').textContent = document.getElementById('bk-check-out').value;
            document.getElementById('receipt-room').textContent = opts.roomName;
            document.getElementById('receipt-guests').textContent = document.getElementById('bk-guests').options[document.getElementById('bk-guests').selectedIndex].text;
            document.getElementById('receipt-payment').textContent = `${opts.paymentMethod} (Paid)`;
            document.getElementById('receipt-nights').textContent = opts.nightsText;
            document.getElementById('receipt-room-cost').textContent = opts.roomCostText;
            document.getElementById('receipt-meal-cost').textContent = opts.mealCostText;
            document.getElementById('receipt-tax').textContent = opts.taxText;
            document.getElementById('receipt-total').textContent = opts.totalText;
            modal.classList.remove('hidden');
            void modal.offsetWidth;
            modal.classList.add('active');
        }
    };
    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function () {
        updateBookingPayment(opts.bookingId, {
            paymentStatus: 'Failed'
        });
        alert('Payment failed. You can try again from Admin or book with Pay at Hotel.');
    });
    rzp.open();
}

function closeReceiptModal() {
    const modal = document.getElementById('receipt-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function printReceipt() {
    window.print();
}

function setupAutocomplete(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (!input || !list) return;

    input.addEventListener('input', function() {
        const value = this.value;
        list.innerHTML = '';
        if (!value) {
            list.classList.add('hidden');
            return;
        }

        const filtered = indianCities.filter(city => city.toLowerCase().startsWith(value.toLowerCase()));
        
        if (filtered.length > 0) {
            list.classList.remove('hidden');
            filtered.forEach(city => {
                const item = document.createElement('li');
                item.textContent = city;
                item.addEventListener('click', () => {
                    input.value = city;
                    list.classList.add('hidden');
                });
                list.appendChild(item);
            });
        } else {
            list.classList.add('hidden');
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target !== input && e.target !== list) {
            list.classList.add('hidden');
        }
    });
}

// Search Functionality
function searchRooms() {
    const destination = document.getElementById('destination').value || document.getElementById('m-destination').value;
    const checkIn = document.getElementById('check-in').value || document.getElementById('m-check-in').value;
    const checkOut = document.getElementById('check-out').value || document.getElementById('m-check-out').value;
    const guests = parseInt(document.getElementById('guests').value) || 1;
    
    if (!destination && !checkIn && !checkOut) {
        // If empty search, just show all rooms
        renderRooms(roomsData);
    } else {
        // Filter rooms
        const filteredRooms = roomsData.filter(room => {
            const matchesCity = !destination || room.city.toLowerCase().includes(destination.toLowerCase());
            const matchesGuests = room.guests >= guests;
            return matchesCity && matchesGuests;
        });
        
        renderRooms(filteredRooms);
    }
    
    const resultsSection = document.getElementById('featured-rooms');
    if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ensureAdminUser();
    if (!sessionStorage.getItem('visit_recorded')) {
        saveVisit({ ts: new Date().toISOString() });
        sessionStorage.setItem('visit_recorded', '1');
    }
    updateNavAuth();

    // Mobile menu (Main Site Only)
    const nav = document.querySelector('nav');
    const menuButton = document.getElementById('mobile-menu-toggle');
    
    if (nav && menuButton) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'md:hidden bg-white shadow-lg fixed top-16 left-0 w-full hidden z-50';
        mobileMenu.innerHTML = `
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
                <a href="#rooms" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Rooms</a>
                <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
                <a href="#services" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</a>
                <a href="#contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
                <a href="bookings.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">My Bookings</a>
                <button onclick="openAuthModal()" class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:bg-gray-50 font-bold">Login / Sign Up</button>
            </div>
        `;
        nav.appendChild(mobileMenu);

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Initialize autocomplete
    setupAutocomplete('destination', 'suggestions-list');
    setupAutocomplete('m-destination', 'm-suggestions-list');

    // Initial Render
    renderRooms(roomsData);
    applySettings();
});
 
// --- Chatbot Logic ---
function toggleChat() {
    const modal = document.getElementById('chat-modal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('scale-95', 'opacity-0');
            modal.classList.add('scale-100', 'opacity-100');
        }, 10);
        document.getElementById('chat-input').focus();
    } else {
        modal.classList.remove('scale-100', 'opacity-100');
        modal.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

function handleChatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    addChatMessage(message, 'user');
    input.value = '';

    // Simulate Bot Response
    setTimeout(() => {
        const response = getBotResponse(message);
        addChatMessage(response, 'bot');
    }, 1000);
}

function addChatMessage(text, sender) {
    const container = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = sender === 'user' ? 'flex justify-end' : 'flex justify-start';
    
    const bubble = document.createElement('div');
    bubble.className = sender === 'user' 
        ? 'bg-secondary text-white p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%] text-sm' 
        : 'bg-white text-gray-800 p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%] text-sm';
    bubble.textContent = text;
    
    div.appendChild(bubble);
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function getBotResponse(message) {
    const txt = String(message || '').toLowerCase();
    const s = getSettings();
    const site = s.siteName || 'Ayush';
    const rooms = typeof getRooms === 'function' ? getRooms() : roomsData || [];
    const cities = Array.from(new Set(rooms.map(r => r.city))).slice(0,6);
    if (txt.match(/\b(hello|hi|hey|namaste|नमस्ते)\b/)) {
        return `Hi! Welcome to ${site}. How can I help you today?`;
    }
    if (txt.match(/\b(price|cost|rate|kitna|कीमत|भाड़ा)\b/)) {
        return `Our rooms start around ₹12,000 per night. Open Rooms to see exact prices per room and city.`;
    }
    if (txt.match(/\b(location|city|cities|where|kahaan|कहाँ)\b/)) {
        return `We currently serve ${cities.length ? cities.join(', ') : 'multiple cities in India'}. You can search by city in the booking form.`;
    }
    if (txt.match(/\b(book|reserve|booking|बुक)\b/)) {
        return `To book, open Rooms, click View Details for a room, then confirm your dates and payment. If you prefer, choose Pay at Hotel.`;
    }
    if (txt.match(/\b(cancel|cancellation|रद्द)\b/)) {
        const email = s.contactEmail || 'support@ayushhotels.com';
        return `For cancellations, please contact our support at ${email}. Include your Booking ID for faster help.`;
    }
    if (txt.match(/\b(payment|pay|razorpay|card|debit|credit|upi|net banking)\b/)) {
        return `We support online payment via Razorpay (Card, UPI, Net Banking). You can also choose Pay at Hotel during booking.`;
    }
    if (txt.match(/\b(check[\s-]?in|check[\s-]?out|time|timings)\b/)) {
        return `Standard check-in is 2 PM and check-out is 11 AM. You can request early check-in or late check-out subject to availability.`;
    }
    if (txt.match(/\b(contact|phone|email|support|help|human|agent)\b/)) {
        const phone = s.contactPhone || '+1 (555) 123-4567';
        const email = s.contactEmail || 'info@ayush.com';
        return `You can reach our human support at ${phone} or ${email}. I can also guide you through booking here.`;
    }
    const cityMatch = indianCities.find(c => txt.includes(c.toLowerCase()));
    if (cityMatch) {
        return `Great choice. Search for ${cityMatch} using the Destination field to see available rooms and prices.`;
    }
    const roomMatch = rooms.find(r => txt.includes(r.name.toLowerCase()));
    if (roomMatch) {
        return `The ${roomMatch.name} in ${roomMatch.city} is available from about ₹${roomMatch.price.toLocaleString()}/night. Open Rooms, select ${roomMatch.name}, and proceed to book.`;
    }
    return `I can help with booking, prices, cities, payments, and support. Try asking, “What rooms are in Mumbai?” or “How do I pay online?”`;
}
