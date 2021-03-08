const data = {
  getData(type) {
    return fetch(`http://localhost:3001/api/v1/${type}`)
      .then(data.handleErrors)
      .then(data => data[type])
      .catch(err => alert(err));
  },
  getAllHotelData() {
    const dataTypes = ['rooms', 'bookings', 'customers'];
    return dataTypes.map(this.getData);
  },
  getUserData(customerID) {
    return fetch(`http://localhost:3001/api/v1/customers/${customerID}`)
      .then(response => response.json())
      .then(data => data)
      .catch(err => alert(err))
  },
  bookRoom(room) {
    return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(room),
    })
  },
  cancelBooking(id) {
    // console.log(typeof thinkg)
    return fetch('http://localhost:3001/api/v1/bookings/' + id, {
      method: 'DELETE',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify(id),
    })
  },
  


  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json()
  }
}

export default data;