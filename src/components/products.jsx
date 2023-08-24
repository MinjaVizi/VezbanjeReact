import React from "react";
import OneProduct from "./OneProduct";

function Products({ products, onAdd, onRemove, searchTerm }) {
  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-products">
      {filteredProducts.map((prod) => (
        <OneProduct
          product={prod}
          key={prod.id}
          onAdd={onAdd}
          onRemove={onRemove}
          inCart={1}
        />
      ))}
    </div>
  );
}

export default Products;
