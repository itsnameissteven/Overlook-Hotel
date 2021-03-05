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
  },
  getUserData(customerID) {
    return fetch(`http://localhost:3001/api/v1/customers/${customerID}`)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err))
  }
}

export default data;