import Hotel from './Hotel';

const data = {
  getData(type) {
    return fetch(`http://localhost:3001/api/v1/${type}`)
      .then(response => response.json())
      .then(data => data[type])
      .catch(err => console.log(err));
  },


  getAllHotelData() {
    const dataTypes = ['rooms', 'bookings', 'customers'];
    return dataTypes.map(this.getData);
  }
}

export default data;