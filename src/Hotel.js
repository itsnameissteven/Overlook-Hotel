class Hotel {
  constructor(name, rooms, bookings, customers) {
    this.name = name;
    this.rooms = rooms;
    this.bookings = bookings;
    this.customers = customers;
  }
  checkAvailableRooms(checkIn) {
    if(!checkIn) {
      return true
    }
    const unavailable = this.bookings.filter(room => room.date === checkIn)
      .map(room => room.roomNumber);
    return this.rooms.filter(room => !unavailable.includes(room.number))
  }

  filterRoomsBySearchCriteria(availableRooms, searchInput, type) {
    if(!searchInput) {
      return availableRooms;
    }
    const searchParameters = searchInput.split(' ');
    const results = searchParameters.reduce((foundRooms, keyword) => {
      availableRooms.forEach(room => {
        if(room[type].toString() === keyword && !foundRooms.includes(room)) {
          foundRooms.push(room);
        }
      });
     return foundRooms;
    }, []);
    return results;
  }
}

export default Hotel;