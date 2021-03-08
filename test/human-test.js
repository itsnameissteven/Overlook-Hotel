import chai from 'chai';
const expect = chai.expect;
import data from './test-data';
import Hotel from '../src/Hotel';
import Human from '../src/Human';

describe('Human behaviour', () => {
  const overlook = new Hotel('Overlook', data.rooms, data.bookings, data.customers)
  const human = new Human();
  const customersBookings = [
    {
      id: '5fwrgu4i7k55hl6tc',
      userID: 6,
      date: '2022/01/30',
      roomNumber: 13,
      roomServiceCharges: []
    },
    {
      id: '5fwrgu4i7k55hl6td',
      userID: 6,
      date: '2022/01/31',
      roomNumber: 18,
      roomServiceCharges: []
    },
    {
      id: '5fwrgu4i7k55hl6te',
      userID: 6,
      date: '2022/01/19',
      roomNumber: 8,
      roomServiceCharges: []
    }
  ]
  const roomsBooked = [
    {
      number: 13,
      roomType: 'single room',
      bidet: false,
      bedSize: 'queen',
      numBeds: 2,
      costPerNight: 423.92,
      dateBooked: "2022/01/30",
      bookingID: "5fwrgu4i7k55hl6tc"
    },
    {
      number: 18,
      roomType: 'junior suite',
      bidet: false,
      bedSize: 'king',
      numBeds: 2,
      costPerNight: 496.41,
      dateBooked: "2022/01/31",
      bookingID: "5fwrgu4i7k55hl6td"
    },
    {
      number: 8,
      roomType: 'junior suite',
      bidet: false,
      bedSize: 'king',
      numBeds: 1,
      costPerNight: 261.26,
      dateBooked: "2022/01/19",
      bookingID: "5fwrgu4i7k55hl6te"
    }
  ]

  it('Should instantiate a new Human', () => {
    expect(Human).to.be.a('function');
    expect(human).to.be.an.instanceOf(Human);
  });

  it('Should return all rooms booked for past and present based on id', () => {
    expect(human.returnBookingHistory(overlook, 6))
      .to.deep.equal(customersBookings);
  });

  it('Should let you know if no rooms have been booked', () => {
    expect(human.returnBookingHistory(overlook, 22))
      .to.deep.equal([])
  });

  it('Should return a list of hotel rooms data', () => {
    expect(human.findSpecificRooms(overlook, 6)).to.deep.equal(roomsBooked)
  })

  it('Should return the amount of money spent at the hotel', () => {
    expect(human.returnTotalBookingCost(overlook, 6)).to.deep.equal(1181.59)
    expect(human.returnTotalBookingCost(overlook, 22)).to.deep.equal(0)
  });

  it('Should be able to see how many points are earned', () => {
    expect(human.returnPointsEarned(overlook, 6)).to.deep.equal(118);
    expect(human.returnPointsEarned(overlook, 22)).to.deep.equal(0);
  }) 
})