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

  handleErrors(response) {
    if(!response.ok) {
      throw Error(response.statusText);
    }
    return response.json()
  },

  returnAvailableRooms(checkIn) {
    this.getData('bookings')
      .then(data => {
        const unavailable = data.filter(room => room.date == checkIn).map(room => room.roomNumber);
        
      })
    console.log(new Date(checkIn))
    // console.log(new Date(checkOut))

      //find the value of the checkCheckin date
      //find the value of the CheckOut date
      //Check the currentBookings
      //if a room is available from the day of checkin to the day of checkout
      //return an array of available rooms
  }
}

export default data;