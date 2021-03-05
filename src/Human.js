class Human {
  returnBookingHistory(hotel, id = this.id) {
    if (!hotel.bookings.some(roomBooked => roomBooked.userID === id)) {
      return [];
    }
    return hotel.bookings.filter(room => room.userID === id);
  }

  findSpecificRooms(hotel, id = this.id) {
    const roomsBooked = this.returnBookingHistory(hotel, id);
    const specificRooms = roomsBooked.map(room => {
      return hotel.rooms.find(hotelRoom => hotelRoom.number === room.roomNumber)
    })
    return specificRooms;
  }

  returnTotalBookingCost(hotel, id = this.id) {
    const roomsBooked = this.findSpecificRooms(hotel, id);
    const amountPaid = roomsBooked.reduce((totalCost, room) => {
      totalCost += room.costPerNight;
      return totalCost;
    }, 0);
    return parseFloat(amountPaid.toFixed(2));
  }

  returnPointsEarned(hotel, id = this.id) {
    const amountPaid = this.returnTotalBookingCost(hotel, id);
    return Math.floor(amountPaid / 10);
  }  
}

export default Human;