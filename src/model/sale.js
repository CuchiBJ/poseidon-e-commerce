export class Sale {

  constructor(id, client, date, total, products){
    this.id = id;
    this.date = date;
    this.total = total;
    this.client = client;
    this.products = products;
  }

}