export class Product {

  constructor(id, description, brand, name, supplier, sizes, colors, categories){
    this.id = id;
    this.description = description;
    this.brand = brand;
    this.name = name;
    this.supplier = supplier;
    this.sizes = sizes;
    this.colors = colors;
    this.categories = categories;
    this.variant = {
      id: "",
      price: "",
      buyPrice: "",
      color: "",
      size: "",
      quantity: ""
    }
  }

}