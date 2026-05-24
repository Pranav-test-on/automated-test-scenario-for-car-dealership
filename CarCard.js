
import React from 'react';

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />

      <div className="car-content">
        <h3>{car.name}</h3>
        <p>{car.description}</p>

        <ul>
          <li><strong>Price:</strong> {car.price}</li>
          <li><strong>Fuel:</strong> {car.fuel}</li>
          <li><strong>Transmission:</strong> {car.transmission}</li>
        </ul>

        <button>View Details</button>
      </div>
    </div>
  );
}

export default CarCard;
