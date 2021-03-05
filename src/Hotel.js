class Hotel {
  constructor(name, rooms, bookings, customers) {
    this.name = name;
    this.rooms = rooms;
    this.bookings = bookings;
    this.customers = customers;
  }
  returnAvailableRooms(checkIn, checkOut) {
      //find the value of the checkCheckin date
      //find the value of the CheckOut date
      //Check the currentBookings
      //if a room is available from the day of checkin to the day of checkout
      //return an array of available rooms
  }
  
}

export default Hotel;