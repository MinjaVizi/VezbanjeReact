import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const Details = ({ products }) => {
  const { id } = useParams();
  const product = products.find(prod => prod.id === parseInt(id));

  const [ocena, setOcena] = useState(0);
  const [ocene, setOcene] = useState([]);
  const [averageOcena, setAverageOcena] = useState(0);

  useEffect(() => {
    const savedOcena = localStorage.getItem(`ocena_${id}`);
    const savedOcene = localStorage.getItem(`ocene_${id}`);
    if (savedOcena !== null && savedOcene !== null) {
      setOcena(parseInt(savedOcena));
      setOcene(JSON.parse(savedOcene));
    }
  }, [id]);

  useEffect(() => {
    const totalOcena = ocene.reduce((sum, ocena) => sum + ocena, 0);
    setAverageOcena(ocena > 0 && ocene.length > 0 ? totalOcena / ocene.length : 0);
    localStorage.setItem(`ocena_${id}`, ocena);
    localStorage.setItem(`ocene_${id}`, JSON.stringify(ocene));
  }, [ocena, ocene, id]);

  const handleOcenaChange = novaOcena => {
    setOcene([...ocene, novaOcena]);
    setOcena(novaOcena);
  };

  if (!product) {
    return <div>Proizvod nije pronađen.</div>;
  }

  return (
    <div className="details-content">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Cena: {product.price} RSD</p>
      <img src={product.imageURL} alt={product.title} />

      <div className="ocenite-proizvod">
        <h3>Ocenite proizvod:</h3>
        {[1, 2, 3, 4, 5].map(brojZvezda => (
          <span
            key={brojZvezda}
            className={`star ${brojZvezda <= ocena ? 'selektovana' : ''}`}
            onClick={() => handleOcenaChange(brojZvezda)}
          >
            ★
          </span>
        ))}
      </div>

      <div className="ocenite-proizvod">
        <p>Broj ocena: {ocene.length}</p>
        <p className="rating-label">Prosečna ocena: {averageOcena.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Details;
