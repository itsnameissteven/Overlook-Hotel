import Human from './Human'

class Costumer extends Human {
  constructor(customer) {
    super()
    this.id = customer.id;
    this.name = customer.name;
  }
}

export default Costumer;