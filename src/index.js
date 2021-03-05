import './css/base.scss';
import './images/turing-logo.png'
import Hotel from './Hotel'


let overlook;





const getHotelData = () => {
  const rooms = fetch('http://localhost:3001/api/v1/rooms')
  .then(response => response.json())
  .then(data => data.rooms)
  .catch(err => console.log(err));
  
  const bookings = fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  .then(data => data.bookings)
  .catch(err => console.log(err));
  
  const customers = fetch('http://localhost:3001/api/v1/customers')
  .then(response => response.json())
  .then(data => data.customers)
  .catch(err => console.log(err))
  
  const data = Promise.all([rooms, bookings, customers]) 
  .then(values => {
    overlook = new Hotel('Overlook', values[0], values[1], values[2]);
  })
}


window.onload = getHotelData();
setTimeout(() => {
  console.log(overlook)
},1000)