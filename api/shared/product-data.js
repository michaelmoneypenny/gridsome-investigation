const data = {
  products: [
    {
      id: 10,
      name: "Outsourced switchboard",
      description: "24/7 team of Moneypenny receptionists",
      quantity: "1",
    },
    {
      id: 20,
      name: "Small business phone system",
      description: "Transform your mobile into a business phone system",
      quantity: 1,
    },
    {
      id: 30,
      name: "Telephone answering",
      description: "Your own Moneypenny PA",
      quantity: 1,
    },
  ],
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};

const addProduct = (product) => {
  product.id = getRandomInt();
  data.products.push(product);
  return product;
};

const updateProduct = (product) => {
  const index = data.products.findIndex((v) => v.id === product.id);
  console.log(product);
  data.products.splice(index, 1, product);
  return product;
};

const deleteProduct = (id) => {
  const value = parseInt(id, 10);
  data.products = data.products.filter((v) => v.id !== value);
  return true;
};

const getProducts = () => {
  return data.products;
};

module.exports = { addProduct, updateProduct, deleteProduct, getProducts };
