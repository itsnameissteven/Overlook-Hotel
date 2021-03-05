import './css/base.scss';
import './images/turing-logo.png'
import Hotel from './Hotel';
import Customer from './Customer';
import data from './data';


let overlook;
let user;



const createHotel = () => {
  console.log(data.getAllHotelData())
  Promise.all(data.getAllHotelData())
    .then(values => overlook = new Hotel("overLook", values[0], values[1], values[2]))
}

// const getHotelData = () => {
//   const rooms = fetch('http://localhost:3001/api/v1/rooms')
//   .then(response => response.json())
//   .then(data => data.rooms)
//   .catch(err => console.log(err));

//   const bookings = fetch('http://localhost:3001/api/v1/bookings')
//   .then(response => response.json())
//   .then(data => data.bookings)
//   .catch(err => console.log(err));
  
//   const customers = fetch('http://localhost:3001/api/v1/customers')
//   .then(response => response.json())
//   .then(data => data.customers)
//   .catch(err => console.log(err))
  
//   const data = Promise.all([rooms, bookings, customers]) 
//   .then(values => {
//     overlook = new Hotel('Overlook', values[0], values[1], values[2]);
//   })
// }

const getUserData = (customer) => {
  fetch(customer)
    .then(response => response.json())
    .then(data => {
      user = new Customer(data)
      console.log(user)
    })
    .catch(err => console.log(err))
}

const login = (e) => {
  e.preventDefault();
  const userName = document.getElementById('userNameInput').value;
  const password = document.getElementById('passwordInput').value;
  const url = `http://localhost:3001/api/v1/customers/${userName.replace('overlook', '')}`
  getUserData(url)
  setTimeout(() => {
    console.log(user)
  }, 1000)
}


document.getElementById('loginBtn').addEventListener('click', login)
// console.log(data.getHotelData())
window.onload = createHotel();
setTimeout(() => {
  console.log(overlook)
},200)