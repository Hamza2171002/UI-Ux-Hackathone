'use client'
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const CategoryCarRent = () => {
  const [priceRange, setPriceRange] = useState(100);

  const categories = [
    { name: 'Sport', count: 10, type: 'type' },
    { name: 'SUV', count: 12, type: 'type' },
    { name: 'MPV', count: 16, type: 'type' },
    { name: 'Sedan', count: 20, type: 'type' },
    { name: 'Coupe', count: 14, type: 'type' },
    { name: 'Hatchback', count: 14, type: 'type' }
  ];

  const capacity = [
    { name: '2 Person', count: 10 },
    { name: '4 Person', count: 14 },
    { name: '6 Person', count: 12 },
    { name: '8 or More', count: 16 }
  ];

  const cars = [
    {
      name: 'Koenigsegg',
      type: 'Sport',
      price: 99.00,
      image: '/image 7.png',
      specs: { seats: '2', manual: true, people: '2 People' }
    },
    {
      name: 'Nissan GT-R',
      type: 'Sport',
      price: 80.00,
      image: '/image 8.png',
      specs: { seats: '4', manual: true, people: '4 People' }
    },
    {
        name: 'Rolls-Royce',
        type: 'Sport',
        price: 96.00,
        image: '/Car.png',
        specs: { seats: '4', manual: true, people: '4 People' }
      },
      {
        name: 'All New Rush',
        type: 'SUV',
        price: 72.00,
        image: '/Car (1).png',
        specs: { seats: '4', manual: true, people: '4 People' }
      },
      {
        name: 'CR - V',
        type: 'SUV',
        price: 80.00,
        image: '/Jeep.png',
        specs: { seats: '4', manual: true, people: '4 People' }
      },
      {
        name: 'All New Terios',
        type: 'SUV',
        price: 74.00,
        image: '/Car (1).png',
        specs: { seats: '4', manual: true, people: '4 People' }
      },
      {
        name: 'MG ZX Exclusice',
        type: 'Hatchback',
        price: 76.00,
        image: '/Car (2).png',
        specs: { seats: '4', manual: true, people: '4 People' }
      },
      {
        name: 'New MG ZS',
        type: 'SUV',
        price: 80.00,
        image: '/Car (3).png',
        specs: { seats: '4', manual: true, people: '4 People' }
      },
      {
        name: 'MG ZX Excite',
        type: 'Hatchback',
        price: 74.00,
        image: '/Car (2).png',
        specs: { seats: '4', manual: true, people: '4 People' }
      },
      
    // Add more cars as needed
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 space-y-6">
          {/* Type Filter */}
          <div>
            <h3 className="font-semibold mb-4">TYPE</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.name} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-500" />
                  <span className="text-gray-700">{category.name}</span>
                  <span className="text-gray-400 text-sm">({category.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Filter */}
          <div>
            <h3 className="font-semibold mb-4">CAPACITY</h3>
            <div className="space-y-2">
              {capacity.map((item) => (
                <label key={item.name} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-500" />
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-gray-400 text-sm">({item.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold mb-4">PRICE</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>Max. ${priceRange}.00</span>
              </div>
            </div>
          </div>
        </div>

        

        {/* Car Listings */}
        <div className="flex-1">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-32 object-contain my-4"
                />

                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>{car.specs.people}</span>
                    <span>{car.specs.manual ? 'Manual' : 'Auto'}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold">${car.price.toFixed(2)}</span>
                    <span className="text-gray-500">/day</span>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Show more cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarRent;