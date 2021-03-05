class Human {
  returnBookingHistory(hotel, id = this.id) {
    if (!hotel.bookings.some(roomBooked => roomBooked.userID === id)) {
      return [];
    }
    return hotel.bookings.filter(room => room.userID === id);
  }

  returnTotalBookingCost(hotel, id = this.id) {
    const roomsBooked = this.returnBookingHistory(hotel, id);
    const cost = hotel.rooms.reduce((totalCost, room) => {
      roomsBooked.forEach(booking => {
        if(booking.roomNumber === room.number) {
          totalCost += room.costPerNight;
        }
      });
      return totalCost;
    }, 0);
    return parseFloat(cost.toFixed(2));
  }
}

export default Human