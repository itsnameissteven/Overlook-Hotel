import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer';
import data from './test-data';


describe('Customer', () => {
  const customer = new Customer(6, 'Fleta Schuppe')

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
        date: '2020/01/30',
        roomNumber: 13,
        roomServiceCharges: []
      },
      {
        id: '5fwrgu4i7k55hl6td',
        userID: 6,
        date: '2020/01/31',
        roomNumber: 20,
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
    expect(customer.returnBookingHistory(data.bookings)).to.be.an('array');
    expect(customer.returnBookingHistory(data.bookings)).to.deep.equal(roomsBooked)
  })
  
  it('Should let you know if you have not booked rooms', () => {
    let customer = new Customer(22, "Steven Mancine");
    expect(customer.returnBookingHistory(data.bookings)).to.deep.equal('You have not booked any rooms yet.')
  })
});
