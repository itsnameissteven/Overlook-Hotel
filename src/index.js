import './css/base.scss';
import Hotel from './Hotel';
import Customer from './Customer';
import data from './data';

import './images/overlook-hotel.jpg';
import './images/search_icon.svg';
import './images/exit.svg';
import './images/joshua-tree.jpg';
import './images/login-hotel.jpg';
import './images/sunset.jpg';
import './images/room-1.jpg';
import './images/room-2.jpg';
import './images/room-3.jpg';
import './images/room-4.jpg';
import './images/room-5.jpg';
import './images/room-6.jpg';
import './images/room-7.jpg';
import './images/room-8.jpg';
import './images/room-9.jpg';
import './images/room-10.jpg';
import './images/room-11.jpg';
import './images/room-12.jpg';
import './images/room-13.jpg';
import './images/room-14.jpg';
import './images/room-15.jpg';
import './images/room-16.jpg';
import './images/room-17.jpg';
import './images/room-18.jpg';
import './images/room-19.jpg';
import './images/room-20.jpg';
import './images/room-21.jpg';
import './images/room-22.jpg';
import './images/room-23.jpg';
import './images/room-24.jpg';
import './images/room-25.jpg';


const searchButton = document.getElementById('searchBtn');
const availableRoomsSection = document.getElementById('availableRooms');
const bookedRooms = document.getElementById('bookedRooms');
const searchForm = document.getElementById('searchForm');
const bookingErrorMessage = document.getElementById('bookingErrorMessage');

let hotel;
let customer;

const createHotel = () => {
  Promise.all(data.getAllHotelData())
    .then(values => hotel = new Hotel("overLook", values[0], values[1], values[2]));
};

const toggleHidden = (element, hidden = 'true') => element.setAttribute('aria-hidden', hidden);


const createUser = (e) => {
  e.preventDefault();
  const userName = document.getElementById('userNameInput').value;
  Promise.resolve(data.getUserData(parseInt(findUserID(userName)), () => showLoginError()))
  .then(value => {
      customer = new Customer(value);
      login();
      displayRooms();
      displayPointsEarned();
    })
};

const login = () => {
  const password = document.getElementById('passwordInput').value;
  if (password !== 'overlook2021') {
    showLoginError();
    return;
  }
  showMain();
}

const disableButton = (date) => {
  if(new Date(date) < new Date()) {
    return 'disabled';
  }
  return;
}

const displayRooms = () => {
  const bookedRooms = document.getElementById('bookedRooms');
  bookedRooms.innerHTML = '';
  customer.organizeBookingsByDate(hotel).forEach(room => {
    const section = document.createElement('section');
    section.className = 'booked-room__card';
    section.tabIndex ="0"
    section.dataset.bookingID = room.bookingID;
    section.innerHTML = 
      `<img src="./images/room-${room.number}.jpg" alt="Hotel room with a bed and desk" class="booked-room__card__img">
      <p class="booked-room__card__room-number">Room ${room.number}</p>
      <p class="booked-room__card__date-booked">${fixDate(room.dateBooked)}</p>
      <p class="booked-room__card__type"> ${capitalizeWords(room.roomType)}</p>
      <p class="booked-room__card__bed-size">Bed Size ${capitalizeWords(room.bedSize)}</p>
      <p class="booked-room__card__number-of-beds">Beds: ${room.numBeds}</p>
      <p class="booked-room__card__cost">${room.costPerNight} / Night</p>
      <button class="booked-room__card__btn btn" ${disableButton(room.dateBooked)}>Cancel Reservation</button>`; 
    bookedRooms.append(section);
  });
};

const displayPointsEarned = () => {
  const pointsEarned = document.getElementById('pointsEarned');
  const customerName = document.getElementById('customerName')
  pointsEarned.innerText = 
    `You've earned ${customer.returnPointsEarned(hotel)} points
    Total spent ${customer.returnTotalBookingCost(hotel)}`;
  customerName.innerText = `Welcome back ${customer.name.split(' ')[0]}!`
}

const compileFormData = (elements) => {
  const data = {
    date: elements[0].value.replace(/-/g, "/"),
    roomType: [],
    bedSize: [],
    numBeds: []
  };
  elements.forEach(element => {
    if(element.className.includes('room-type') && element.checked) {
      data.roomType.push(element.value);
    }
    if(element.className.includes('bed-size') && element.checked) {
      data.bedSize.push(element.value);
    }
    if(element.className.includes('number-of-beds') && element.checked) {
      data.numBeds.push(element.value);
    }
  });
  return data;
}

const retrieveFormValues = () => {
  const values = document.getElementById('searchForm');
  const data = compileFormData(Array.from(values.elements));
  return data;
}

const displaySearchResults = (e) => {
  e.preventDefault();
  const data = retrieveFormValues();
  const results = hotel.returnAllFilteredResults(data.date, 
    data.roomType, data.bedSize, data.numBeds);
  const header = results.length === 0 ? 
    `Sorry no rooms match your search criteria for ${fixDate(data.date)}. Please try again.` : `Rooms available on ${fixDate(data.date)}`
  if(results) {
    const availableRooms = document.getElementById('availableRooms');
    availableRooms.innerHTML = "";
    availableRooms.innerHTML =
    `<h2 class="available-rooms__header"> ${header} </h2>`;
    results.forEach(result => {
      availableRooms.innerHTML += 
      `<section class="available-rooms__card" data-booking-data=${storeBookingData(data.date, result)} >
        <div class="hotel-img-container">
          <img src="./images/room-${result.number}.jpg" alt="Your next hotel room" class="available-rooms__card__img">
        </div>
        <p class="info available-rooms__card__room-number">Room ${result.number}</p>
        <p class="info available-rooms__card__room-type">${capitalizeWords(result.roomType)}</p>
        <p class="info available-rooms__card__bed-size">Bed Size - ${capitalizeWords(result.bedSize)}</p>
        <p class="info available-rooms__card__number-of-beds">Total Beds - ${result.numBeds}</p>
        <p class="info available-rooms__card__has-bidet">${result.bidet ? "Complimentary Bidet!" : ""}</p>
        <button class="available-rooms__card__book-btn book-now btn">Book Now</button>
      </section>`
    });
    document.location.href = '#availableRooms';
    searchForm.reset();
    return; 
  }
  toggleHidden(bookingErrorMessage, 'false');
}

let fixDate = (date) => {
    const splitDate = date.split('/');
    splitDate.push(splitDate.shift())
    const joined = splitDate.join('/')
    return joined
}

const capitalizeWords = (string) => {
  let words = string.split(' ');
  let capitalized = words.map( word => word.charAt(0).toUpperCase() + word.slice(1, word.length))
  return capitalized.join(' ');
}

const storeBookingData = (date, data) => {
  const bookingData = {
    userID: customer.id,
    date: date,
    roomNumber: data.number
  };
  return JSON.stringify(bookingData);
}

const makeReservation = (e) => {
  if(e.target.className.includes('btn')) {
    data.bookRoom(JSON.parse(e.target.parentElement.dataset.bookingData))
      .then(response => response.json())
      .then(data => {
          hotel.bookings.push(data.newBooking)
          displayRooms();
          displayPointsEarned();
      })
      .catch(err => alert(err));
    e.target.parentElement.remove();
  }
}

const cancelReservation = (e) => {
  if(e.target.className.includes('btn')) {
    const id = e.target.parentElement.dataset.bookingID;
    data.cancelBooking(id)
      .then(response => response.json())
      .then(data =>  data)
      .catch(err => alert(err));
  }
  Promise.resolve(data.getData('bookings')) 
    .then(values => {
      hotel.bookings = values;
      displayRooms();
      displayPointsEarned();
    });
}


const findUserID = (userName) => userName.replace("overlook", "");

const showMain = () => {
  const mainElements = document.querySelectorAll('.main-page');
  const loginPage = document.getElementById('loginPage')
  toggleHidden(loginPage)
  mainElements.forEach(element => toggleHidden(element, 'false'));
}


const showLoginError = () => {
  const errorMessage = document.getElementById('errorMessage')
  toggleHidden(errorMessage, 'false')
}


const handleSearchEvents = (e) => {
  hideSearchDropDowns();
  if (!!e.target.closest('.clickable')) {
    const target = e.target.closest('.clickable').childNodes[3];
    toggleHidden(target, 'false');
  }
}




const closeSearchBar = (e) => { 
  if(e.target.className.includes('exit-btn')) {
    hideErrorMessage();
  }
  if (!e.target.closest('.search-bar')) {
    hideSearchDropDowns() ;
  }
}

const hideSearchDropDowns = () => {
  const menus = document.querySelectorAll('.drop-down-menu');
  menus.forEach(element => toggleHidden(element));
}

const hideErrorMessage = () => toggleHidden(bookingErrorMessage);

const hideOnScroll = () => {
  hideErrorMessage();
  hideSearchDropDowns();
}

const tabThroughSearch = (e) => {
  if (e.keyCode === 13) {
    hideSearchDropDowns();
    const target = e.target.closest('.clickable').childNodes[3]
    toggleHidden(target, 'false')
  }
}

document.getElementById('loginBtn').addEventListener('click', createUser)
window.onload = createHotel();
window.addEventListener('click', closeSearchBar);
window.addEventListener('scroll', hideOnScroll);
searchButton.addEventListener('click', displaySearchResults);
availableRoomsSection.addEventListener('click', makeReservation);
bookedRooms.addEventListener('click', cancelReservation);
searchForm.addEventListener('click', handleSearchEvents);
searchForm.addEventListener('keydown', tabThroughSearch);

