import './css/base.scss';
import Hotel from './Hotel';
import Customer from './Customer';
import data from './data';

import './images/overlook-hotel.jpg';
import './images/search_icon.svg';
import './images/joshua-tree.jpg';
import './images/room-1.jpg';

const searchButton = document.getElementById('searchBtn');
const availableRoomsSection = document.getElementById('availableRooms')

let hotel;
let customer;

const createHotel = () => {
  Promise.all(data.getAllHotelData())
    .then(values => hotel = new Hotel("overLook", values[0], values[1], values[2]))
    .then(createUser);
};

const createUser = () => {
  Promise.resolve(data.getUserData(50))
    .then(value => {
      customer = new Customer(value);
      displayRooms()
      displayPointsEarned()
    })
};

const displayRooms = () => {
  const bookedRooms = document.getElementById('bookedRooms')
  bookedRooms.innerHTML = '';
  customer.organizeBookingsByDate(hotel).forEach(room => {
    const section = document.createElement('section');
    section.className = 'booked-room__card';
    section.innerHTML = 
      `<img src="./images/room-1.jpg" alt="Hotel room with a bed and desk" class="booked-room__card__img">
      <p class="booked-room__card__room-number">Room ${room.number}</p>
      <p class="booked-room__card__date-booked">${room.dateBooked}</p>
      <p class="booked-room__card__type"> ${room.roomType}</p>
      <p class="booked-room__card__bed-size">Bed Size ${room.bedSize}</p>
      <p class="booked-room__card__number-of-beds">Beds: ${room.numBeds}</p>
      <p class="booked-room__card__cost">${room.costPerNight}</p>
      <button class="booked-room__card__btn btn">I'm a button</button>` 
    bookedRooms.append(section);
  });
};

const displayPointsEarned = () => {
  const pointsEarned = document.getElementById('pointsEarned')
  pointsEarned.innerText = 
    `You've earned ${customer.returnPointsEarned(hotel)} points
    Total spent ${customer.returnTotalBookingCost(hotel)}`
}

const compileFormData = (elements) => {
  const data = {
    date: elements[0].value.replace(/-/g, "/"),
    roomType: [],
    bedSize: [],
    numBeds: []
  }
  elements.forEach(element => {
    if(element.className.includes('room-type') && element.checked) {
      data.roomType.push(element.value)
    }
    if(element.className.includes('bed-size') && element.checked) {
      data.bedSize.push(element.value)
    }
    if(element.className.includes('number-of-beds') && element.checked) {
      data.numBeds.push(element.value)
    }
  })
  return data
}

const retrieveFormValues = (e) => {
  const values = document.getElementById('searchForm');
  const data = compileFormData(Array.from(values.elements))
  return data
}

const displaySearchResults = (e) => {
  e.preventDefault()
  const data = retrieveFormValues()
  const results = hotel.returnAllFilteredResults(data.date, 
    data.roomType, data.bedSize, data.numBeds)
  const availableRooms = document.getElementById('availableRooms');
  availableRooms.innerHTML = ""
  availableRooms.innerHTML =
  `<h2 class="available-rooms__header"> Rooms available on ${data.date}</h2>`
  results.forEach(result => {
    availableRooms.innerHTML += 
    `<section class="available-rooms__card" data-booking-data=${storeBookingData(data.date, result)} >
      <img src="./images/room-1.jpg" alt="Your next hotel room" class="available-rooms__card__img">
      <p class="available-rooms__card__room-number">Room ${result.number}</p>
      <p class="available-rooms__card__room-type">${result.roomType}</p>
      <p class="available-rooms__card__bed-size">${result.bedSize}</p>
      <p class="available-rooms__card__number-of-beds">${result.numBeds}</p>
      <p class="available-rooms__card__has-bidet">${result.bidet ? "Complimentary Bidet!" : ""}</p>
      <button class="available-rooms__card__book-btn book-now btn">Book Now</button>
    </section>`
  });
}

const storeBookingData = (date, data) => {
  const bookingData = {
    userID: customer.id,
    date: date,
    roomNumber: data.number
  }
  return JSON.stringify(bookingData)
}

const bookRoom = (e) => {
  data.bookRoom(JSON.parse(e.target.parentElement.dataset.bookingData))
    .then(response => response.json())
    .then(data => {
        hotel.bookings.push(data.newBooking)
        console.log(hotel.bookings)
        displayRooms()
    })
    .catch(err => alert(err))
  e.target.parentElement.remove()
}

// const login = (e) => {
//   e.preventDefault();
//   const userName = document.getElementById('userNameInput').value;
//   const password = document.getElementById('passwordInput').value;
//   const url = `http://localhost:3001/api/v1/customers/${userName.replace('overlook', '')}`
//   getUserData(url)
//   setTimeout(() => {
//     console.log(user)
//   }, 1000)
// }

// document.getElementById('loginBtn').addEventListener('click', login)

window.onload = () =>  createHotel();

searchButton.addEventListener('click', displaySearchResults)
availableRoomsSection.addEventListener('click', bookRoom)

// setTimeout(() => {
//   console.log(hotel)
//   console.log(hotel.checkAvailableRooms("2020/01/31"))
// }, 200)