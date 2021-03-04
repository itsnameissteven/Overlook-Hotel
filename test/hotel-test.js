import chai from 'chai';
const expect = chai.expect;
import data from './test-data';
import Hotel from '../src/Hotel';

describe('Hotel', () => {
  const overlook = new Hotel("Overlook", data.rooms, data.bookings, data.customers)

  it('Should be an instance of Hotel', () => {
    expect(Hotel).to.be.a('function');
    expect(overlook).to.be.an.instanceOf(Hotel);
  });

  it('Should hold data on it\'s rooms, bookings, and customers', () => {
    expect(overlook.name).to.deep.equal('Overlook');
    expect(overlook.rooms).to.deep.equal(data.rooms);
    expect(overlook.bookings).to.deep.equal(data.bookings);
    expect(overlook.customers).to.deep.equal(data.customers);
  })
})