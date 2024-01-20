// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cupoane, setCupoane] = useState([]);

  useEffect(() => {
    async function getCupoane() {
      try {
        const response = await axios.get('http://localhost:3000/api/cupoane');

        setCupoane(response.data);
      } catch (error) {
        console.error('Eroare la obținerea cupoanelor:', error);
      }
    }

    getCupoane();
  }, []);

  return (
    <div>
      <h1>Gestionare Cupoane de Reduceri</h1>
      <ul>
        {cupoane.map((cupon) => (
          <li key={cupon.id}>
            <strong>{cupon.nume}</strong>
            <p>{cupon.descriere}</p>
            <p>Locație: {cupon.locatie}</p>
            <p>Categorie: {cupon.categorie}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
