class Hotel {
  constructor(name, rooms, bookings, customers) {
    this.name = name;
    this.rooms = rooms;
    this.bookings = bookings;
    this.customers = customers;
  }
  checkAvailableRooms(checkIn) {
    if (!checkIn) {
      return true
    }
    const unavailable = this.bookings.filter(room => room.date === checkIn)
      .map(room => room.roomNumber);
    return this.rooms.filter(room => !unavailable.includes(room.number))
  }

  filterRoomsBySearchCriteria(availableRooms, searchInput, type) {
    if (!searchInput) {
      return availableRooms;
    }
    const searchParameters = searchInput.split('-');
    const results = searchParameters.reduce((foundRooms, keyword) => {
      availableRooms.forEach(room => {
        if (room[type].toString() === keyword && !foundRooms.includes(room)) {
          foundRooms.push(room);
        }
      });
      return foundRooms;
    }, []);
    return results;
  }

  returnAllFilteredResults(date, typeOfRoom, numberOfBeds, sizeOfBed) {
    const availableRooms = this.checkAvailableRooms(date)
    if (availableRooms === true) {
      return true
    }
    const byType = this.filterRoomsBySearchCriteria(availableRooms, typeOfRoom, 'roomType');
    const byNumberOfBeds = this.filterRoomsBySearchCriteria(byType, numberOfBeds, 'numBeds');
    const byBedSize = this.filterRoomsBySearchCriteria(byNumberOfBeds, sizeOfBed, 'bedSize');
    const finalResult = byBedSize;
    return finalResult;
  }

}

export default Hotel;