import { useState } from "react";

export const ShoppingCart = () => {

  const products = [
    { id: 1, name: "Camisa", price: 50000 },
    { id: 2, name: "Pantalón", price: 80000 },
    { id: 3, name: "Zapatos", price: 120000 }
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      const updated = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeProduct(id) {
    const filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
  }

  return (
    <div>
      <h1>Productos</h1>

      <div >
        {products.map((product) => (
          <div
            key={product.id}
          >
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>
              Agregar
            </button>
          </div>
        ))}
      </div>

      <h2>Carrito</h2>

      {cart.length === 0 && <p>El carrito está vacío</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} x {item.quantity}
          </p>

          <button onClick={() => removeProduct(item.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};