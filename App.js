
import React from 'react';
import CarCard from './components/CarCard';
import cars from './data/cars';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Velocity Motors</h1>
        <p>Premium Cars for Every Journey</p>
      </header>

      <section className="inventory">
        <h2>Available Cars</h2>

        <div className="car-grid">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
