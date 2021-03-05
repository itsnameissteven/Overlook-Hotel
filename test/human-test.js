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
      date: '2020/01/30',
      roomNumber: 13,
      roomServiceCharges: []
    },
    {
      id: '5fwrgu4i7k55hl6td',
      userID: 6,
      date: '2020/01/31',
      roomNumber: 18,
      roomServiceCharges: []
    },
    {
      id: '5fwrgu4i7k55hl6te',
      userID: 6,
      date: '2020/01/19',
      roomNumber: 8,
      roomServiceCharges: []
    }
  ]

  it('Should instantiate a new Human', () => {
    expect(Human).to.be.a('function');
    expect(human).to.be.an.instanceOf(Human);
  });

  it('Should return all rooms booked for past and present based on id', () => {
    expect(human.returnBookingHistory(overlook, 6)).to.deep.equal(customersBookings);
  });

  it('Should let you know if no rooms have been booked', () => {
    expect(human.returnBookingHistory(overlook, 22))
      .to.deep.equal([])
  });

  it('Should return the amount of money spent at the hotel', () => {
    expect(human.returnTotalBookingCost(overlook, 6)).to.deep.equal(1181.59)
    expect(human.returnTotalBookingCost(overlook, 22)).to.deep.equal(0)
  });
})