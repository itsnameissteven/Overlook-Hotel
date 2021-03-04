class Costumer {
  constructor(id, name) {
    this.id = id;
    this.name = name
  }

  returnBookingHistory(bookings) {
    if (!bookings.some(room => room.userID === this.id)) {
      return 'You have not booked any rooms yet.';
    }
    return bookings.filter(room => room.userID === this.id) ;
  }

  returnPointsEarned() {
    this.
  }
}

export default Costumer;