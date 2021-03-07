import './css/base.scss';
import Hotel from './Hotel';
import Customer from './Customer';
import data from './data';

import './images/overlook-hotel.jpg';
import './images/search_icon.svg';
import './images/joshua-tree.jpg';
import './images/room-1.jpg';

const searchButton = document.getElementById('searchBtn')

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
      displayRooms(customer)
      displayPointsEarned(customer)
    })
};

const displayRooms = (customer) => {
  const bookedRooms = document.getElementById('bookedRooms')
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

const displayPointsEarned = (customer) => {
  
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
  // e.preventDefault()
  const values = document.getElementById('searchForm');
  const data = compileFormData(Array.from(values.elements))
  return data
  // console.log(hotel.returnAllFilteredResults(data.date, data.roomType, data.bedSize, data.numBeds))
}

const displaySearchResults = (e) => {
  e.preventDefault()
  const data = retrieveFormValues()
  console.log(hotel.returnAllFilteredResults(data.date, data.roomType, data.bedSize, data.numBeds))
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


// setTimeout(() => {
//   console.log(hotel)
//   console.log(hotel.checkAvailableRooms("2020/01/31"))
// }, 200)