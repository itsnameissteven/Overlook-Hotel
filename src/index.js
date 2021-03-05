import './css/base.scss';
import './images/turing-logo.png'
import Hotel from './Hotel';
import Customer from './Customer';
import data from './data';


let hotel;
let customer;

const createHotel = () => {
  Promise.all(data.getAllHotelData())
    .then(values => hotel = new Hotel("overLook", values[0], values[1], values[2]))
    .then(createUser)
};

const createUser = () => {
  Promise.resolve(data.getUserData(50))
    .then(value => {
      customer = new Customer(value)
      console.log(customer.returnBookingHistory(hotel))
    })
}
const displayRooms = (customer) => {
  hotel.rooms()
  customer.returnBookingHistory(hotel)
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
  createHotel()
}
setTimeout(() => {
  console.log(hotel)
}, 200)