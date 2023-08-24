import React from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiOutlineMinusSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CgDetailsMore } from 'react-icons/cg';

function OneProduct(props) {
  const stil = { margin: '2em', borderStyle: 'dotted' };

  const shortenDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 5) {
      return words.slice(0, 5).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className={props.inCart === 1 ? 'card' : 'card-cart'} style={stil}>
      <img
        className={props.inCart === 1 ? 'card-img-top' : 'card-img-left'}
        src={props.product.imageURL}
        alt="Proizvodna slika"
      />
      <div className="card-body">
        <h3 className="card-title">{props.product.title}</h3>
        <p className="card-text">{shortenDescription(props.product.description)}</p>
        <p>Cena: {props.product.price} RSD</p>
      </div>
      {props.inCart === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => props.onAdd(props.product.title, props.product.id)}
          >
            <AiOutlinePlusSquare />
          </button>
          <button
            className="btn"
            onClick={() => props.onRemove(props.product.title, props.product.id)}
          >
            <AiOutlineMinusSquare />
          </button>
          <Link to={`/products/${props.product.id}`} className="btn">
            <CgDetailsMore />
          </Link>
        </>
      ) : (
        <h3>Količina: {props.product.amount} </h3>
      )}
    </div>
  );
}

export default OneProduct;
