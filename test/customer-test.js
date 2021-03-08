import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer';
import data from './test-data';
import Hotel from '../src/Hotel';


describe('Customer', () => {
  const customer = new Customer({id: 6, name: 'Fleta Schuppe'});
  const overlook = new Hotel('Overlook', data.rooms, data.bookings, data.customers);

  it('Should instantiate a new Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
    expect(Customer).to.be.a('function')
  });

  it('Should have an id and name', () => {
    expect(customer.name).to.deep.equal('Fleta Schuppe');
    expect(customer.id).to.deep.equal(6)
  })

  it('Should be able to see their booking history', () => {
    const roomsBooked = [
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
    expect(customer.returnBookingHistory(overlook)).to.be.an('array');
    expect(customer.returnBookingHistory(overlook))
      .to.deep.equal(roomsBooked);
  })
  
  it('Should let you know if you have not booked rooms', () => {
    const customer = new Customer({id: 22, name: "Steven Mancine"});
    expect(customer.returnBookingHistory(overlook))
      .to.deep.equal([]);
  })
});
