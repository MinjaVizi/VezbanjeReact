import React, { useState, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function NavBar({ cartNum, setSearchTerm, products }) {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSearchTerm(searchTermLocal);
  }, [searchTermLocal, setSearchTerm]);

  const isProductDetailsPage = location.pathname.startsWith("/products/");
  const isCartPage = location.pathname === "/cart";

  function printInvoice(products) { // Dodajemo 'products' kao argument
    const cartContent = products
      .map((product) => {
        return `Naziv: ${product.title}\nCena: ${product.price} RSD\n\n`;
      })
      .join("");

    const invoiceContent = `
      RAČUN\n
      ----------------\n
      ${cartContent}
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`<pre>${invoiceContent}</pre>`);
    printWindow.document.close();
    printWindow.print();
  }

  return (
    <div className="navBar">
      <Link to="/">Moja prodavnica</Link>
      <Link to="/cart" className="cart-items">
        <div className="cart-items">
          <BsCart4 />
          <p className="cart-num">{cartNum}</p>
        </div>
      </Link>
      {!isProductDetailsPage && (
        <input
          type="text"
          placeholder="Pretraga proizvoda..."
          value={searchTermLocal}
          onChange={(e) => setSearchTermLocal(e.target.value)}
          style={{ marginLeft: "auto", marginRight: "2rem" }}
        />
      )}
      {isCartPage && cartNum > 0 && (
        <button className="print-invoice-button" onClick={() => printInvoice(products)}> {/* Dodajemo prosleđivanje 'products' */}
          Štampaj račun
        </button>
      )}
    </div>
  );
}

export default NavBar;
