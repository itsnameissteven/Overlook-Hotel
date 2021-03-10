const data = {
  getData(type) {
    return fetch(`https://overlook-hotel.herokuapp.com/api/v1/${type}`)
      .then(data.handleErrors)
      .then(data => data[type])
      .catch(err => alert(err));
  },
  getAllHotelData() {
    const dataTypes = ['rooms', 'bookings', 'customers'];
    return dataTypes.map(this.getData);
  },
  getUserData(customerID, callback) {
    return fetch(`https://overlook-hotel.herokuapp.com/api/v1/customers/${customerID}`)
      .then(data.handleErrors)
      .then(data => data)
      .catch(callback)
  },
  bookRoom(room) {
    return fetch('https://overlook-hotel.herokuapp.com/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(room),
    })
  },
  cancelBooking(id) {
    return fetch('https://overlook-hotel.herokuapp.com/api/v1/bookings/' + id, {
      method: 'DELETE',
    })
  },
  handleErrors(response) {
    if (!response.ok) {
      throw Error('Oops! Something went wrong please try again.');
    }
    return response.json()
  }
}

export default data;