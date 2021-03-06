import './css/base.scss';
import './images/turing-logo.png'
import Hotel from './Hotel';
import Customer from './Customer';
import data from './data';

import './images/overlook-hotel'


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
      // console.log(customer.returnPointsEarned(hotel))
      displayRooms(customer)
      displayPointsEarned(customer)
    })
};

const displayRooms = (customer) => {
  const bookedRooms = document.getElementById('bookedRooms')
  customer.findSpecificRooms(hotel).forEach(room => {
    bookedRooms.innerHTML += 
      `<p class="booked-room">${JSON.stringify(room)}</p>`;
  });
};

const displayPointsEarned = (customer) => {
  
  const pointsEarned = document.getElementById('pointsEarned')
  pointsEarned.innerText = 
    `You've earned ${customer.returnPointsEarned(hotel)}
    Earn 1 point for every $10 spent
    total spent ${customer.returnTotalBookingCost(hotel)}`
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

window.onload = () => {
  createHotel();
}

// setTimeout(() => {
//   console.log(hotel)
//   console.log(hotel.checkAvailableRooms("2020/01/31"))
// }, 200)