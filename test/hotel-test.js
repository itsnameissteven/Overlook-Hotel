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
    expect(overlook.checkAvailableRooms("2022/07/78"))
      .to.deep.equal(overlook.rooms);
    overlook.rooms.splice(5, 1);
    expect(overlook.checkAvailableRooms("2020/02/15"))
      .to.deep.equal(overlook.rooms);
  });
  
  it('Should let you know if no date was selected', () => {
    expect(overlook.checkAvailableRooms()).to.deep.equal(true)
  });

  it('Should return rooms by type if matched', () => {
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
    const suitesSearch = overlook.filterRoomsBySearchCriteria(overlook.rooms, ['suite'], 'roomType')
    expect(suitesSearch).to.deep.equal(suites);
  });

  it('Should return rooms with matching bed size', () => {
    const kingBeds = [
      {
        number: 3,
        roomType: 'single room',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 491.14
      },
      {
        number: 8,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 261.26
      },
      {
        number: 18,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 2,
        costPerNight: 496.41
      }
    ]
    const kingBedSearch = overlook.filterRoomsBySearchCriteria(overlook.rooms, ['king'], 'bedSize');

    expect(kingBedSearch).to.deep.equal(kingBeds);
  })

  it('Should return all rooms if they have enough beds', () => {
    const roomsByBedNumber = overlook.rooms.filter(room => room.numBeds === 2);
    const bedNumSearch = overlook.filterRoomsBySearchCriteria(overlook.rooms, ['2'], 'numBeds');
    expect(bedNumSearch).to.deep.equal(roomsByBedNumber);
  })

  it('Should return all rooms if no search input entered', () => {
    expect(overlook.filterRoomsBySearchCriteria(overlook.rooms, [], 'roomType'))
      .to.deep.equal(overlook.rooms)
    expect(overlook.filterRoomsBySearchCriteria(overlook.rooms, [], 'bedSize'))
      .to.deep.equal(overlook.rooms)
    expect(overlook.filterRoomsBySearchCriteria(overlook.rooms, [], 'numBeds'))
      .to.deep.equal(overlook.rooms)
  });
 
  it('Should return filtered search results for all categories', () => {
    overlook.bookings = data.bookingsForSearch;
    const search = overlook.returnAllFilteredResults('2020/01/31', ["junior suite","suite"], ["full"], ["2"])

    expect(search).to.deep.equal([
      {
        number: 2,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 477.38
      }
    ]);
  })

  it('Should not work if no date is selected', () => {
    const search = overlook.returnAllFilteredResults('', ["junior", "suite-suite"], "full", "2");
    expect(search).to.deep.equal(true);
  })
})