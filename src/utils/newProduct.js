export default function newProduct(id, name, description = '', price = 0, image = '') {
  return {
    id, name, description, price, image,
  };
}
