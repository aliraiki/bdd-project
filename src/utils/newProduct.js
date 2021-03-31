export default function newProduct(id, name, description = '', price = 0) {
  return {
    id, name, description, price,
  };
}
