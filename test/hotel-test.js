import chai from 'chai';
const expect = chai.expect;
import data from './test-data';
import Hotel from '../src/Hotel';

describe('Hotel', () => {
  const overlook = new Hotel("Overlook", data.rooms, 
    data.bookings, data.customers);

  it('Should be an instance of Hotel', () => {
    expect(Hotel).to.be.a('function');
    expect(overlook).to.be.an.instanceOf(Hotel);
  });

  it('Should hold data on it\'s rooms, bookings, and customers', () => {
    expect(overlook.name).to.deep.equal('Overlook');
    expect(overlook.rooms).to.deep.equal(data.rooms);
    expect(overlook.bookings).to.deep.equal(data.bookings);
    expect(overlook.customers).to.deep.equal(data.customers);
  });

  it('Should return rooms available by selected day', () => {
    expect(overlook.checkAvailableRooms("2022/07/78")).to.deep.equal(overlook.rooms)
    overlook.rooms.splice(5, 1)
    expect(overlook.checkAvailableRooms("2020/02/15")).to.deep.equal(overlook.rooms)
  });
  
  it('Should let you know if no date was selected', () => {
    expect(overlook.checkAvailableRooms()).to.deep.equal(true)
  });

  it('Should return rooms by type', () => {
    const suites = [
      {
        number: 2,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 477.38
      },
      {
        number: 10,
        roomType: 'suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 497.64
      }
    ];

    expect(overlook.filterRoomsBySearchCriteria(overlook.rooms, 'suite', 'roomType'))
      .to.deep.equal(suites);
  });

  it('Should return all rooms if no search input entered', () => {
    expect(overlook.filterRoomsBySearchCriteria(overlook.rooms, '', 'roomType'))
      .to.deep.equal(overlook.rooms)
  })
  console.log(overlook.rooms)
})