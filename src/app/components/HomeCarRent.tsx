import React from 'react';
import { Heart, Calendar, Clock, User, Settings } from 'lucide-react';

interface CarType {
  name: string;
  type: string;
  price: string;
  image: string;
  mode: string;
  capacity: string;
  liked: boolean;
}
const CarCard: React.FC<{ car: CarType }> = ({ car }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg">{car.name}</h3>
          <p className="text-sm text-gray-500">{car.type}</p>
        </div>
        <button className="text-red-500">
          <Heart className={`h-5 w-5 ${car.liked ? 'fill-red-500' : ''}`} />
        </button>
      </div>
      <div className="my-4">
        <img src={car.image} alt={car.name} className="w-full h-40 object-contain" />
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <div className="flex items-center text-gray-500">
            <Settings className="h-4 w-4 mr-1" />
            <span className="text-sm">{car.mode}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <User className="h-4 w-4 mr-1" />
            <span className="text-sm">{car.capacity}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold">${car.price}</span>
          <span className="text-gray-500">/day</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Rent Now
        </button>
      </div>
    </div>
  );
};

// interface JeepType {
//   name: string;
//   type: string;
//   price: string;
//   image: string;
//   mode: string;
//   capacity: string & number;
//   liked: boolean;
// }
// const JeepCard = ({ jeep }: {jeep: JeepType}) => {
//     return (
//       <div className="bg-white p-4 rounded-lg shadow">
//         <div className="flex justify-between items-start mb-4">
//           <div>
//             <h3 className="font-semibold text-lg">{jeep.name}</h3>
//             <p className="text-sm text-gray-500">{jeep.type}</p>
//           </div>
//           <button className="text-red-500">
//             <Heart className={`h-5 w-5 ${jeep.liked ? 'fill-red-500' : ''}`} />
//           </button>
//         </div>
//         <div className="my-4">
//           <img src={jeep.image} alt={jeep.name} className="w-full h-40 object-contain" />
//         </div>
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex space-x-4">
//             <div className="flex items-center text-gray-500">
//               <Settings className="h-4 w-4 mr-1" />
//               <span className="text-sm">{jeep.mode}</span>
//             </div>
//             <div className="flex items-center text-gray-500">
//               <User className="h-4 w-4 mr-1" />
//               <span className="text-sm">{jeep.capacity}</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <div>
//             <span className="font-bold">${jeep.price}</span>
//             <span className="text-gray-500">/day</span>
//           </div>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//             Rent Now
//           </button>
//         </div>
//       </div>
//     );
//   };

const HomeCarRent = () => {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: "99.00",
      image: "/image 7.png",
      mode: "Manual",
      capacity: "2 People",
      liked: true
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      price: "80.00",
      image: "/image 8.png",
      mode: "Manual",
      capacity: "2 People",
      liked: false
    },
    {
        name: "Rolls-Royce",
        type: "Sport",
        price: "90.00",
        image: "/Car.png",
        mode: "Manual",
        capacity: "2 People",
        liked: true
      },
      {
        name: "Nissan GT-R",
        type: "Sport",
        price: "80.00",
        image: "/image 8.png",
        mode: "Manual",
        capacity: "2 People",
        liked: false
      },
     
    // Add more cars as needed
  ];

  const jeeps = [
    {
        name: "All New Rush",
        type: "SUV",
        price: "72.00",
        image: "/Car (1).png",
        mode: "Manual",
        capacity: "6 People",
        liked: false
      },
      {
        name: "CR-V",
        type: "SUV",
        price: "80.00",
        image: "/Jeep.png",
        mode: "Manual",
        capacity: "6 People",
        liked: true
      },
      {
        name: "All New Terios",
        type: "SUV",
        price: "74.00",
        image: "/Car (1).png",
        mode: "Manual",
        capacity: "6 People",
        liked: false
      },
      {
        name: "CR-V",
        type: "SUV",
        price: "80.00",
        image: "/Jeep.png",
        mode: "Manual",
        capacity: "6 People",
        liked: true
      },
      {
        name: "MG ZX Exclusice",
        type: "SUV",
        price: "76.00",
        image: "/Car (2).png",
        mode: "Manual",
        capacity: "6 People",
        liked: true
      },
      {
        name: "New MG ZS",
        type: "SUV",
        price: "80.00",
        image: "/Car (3).png",
        mode: "Manual",
        capacity: "6 People",
        liked: false
      },
      {
        name: "MG ZX Excite",
        type: "SUV",
        price: "74.00",
        image: "/Car (2).png",
        mode: "Manual",
        capacity: "6 People",
        liked: true
      },
      {
        name: "New MG ZS",
        type: "SUV",
        price: "80.00",
        image: "/Car (3).png",
        mode: "Manual",
        capacity: "6 People",
        liked: false
      },
  ]

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8 mt-12">
      {/* Hero Banners */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#54A6FF] text-white p-6 rounded-lg relative overflow-hidden">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold mb-2">The Best Platform for Car Rental</h2>
            <p className=" text-white mb-4">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Rental Car
            </button>
          </div>
          <img 
            src="/image 7.png" 
            alt="Luxury car" 
            className="absolute right-0 bottom-0 w-48 h-32 object-contain"
          />
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg relative overflow-hidden">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold mb-2">Easy way to rent a car at a low price</h2>
            <p className="mb-4">Providing cheap car rental services and safe and comfortable facilities.</p>
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-900">
              Rental Car
            </button>
          </div>
          <img 
            src="/image 8.png" 
            alt="Luxury car" 
            className="absolute right-0 bottom-0 w-48 h-32 object-contain"
          />
        </div>
      </div>

      {/* Search Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium">Pick-Up</p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center border rounded-lg p-2">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <input type="date" className="outline-none text-sm" />
                </div>
                <div className="flex items-center border rounded-lg p-2">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <input type="time" className="outline-none text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium">Drop-Off</p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center border rounded-lg p-2">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <input type="date" className="outline-none text-sm" />
                </div>
                <div className="flex items-center border rounded-lg p-2">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <input type="time" className="outline-none text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Car Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Popular Car</h2>
          <button className="text-blue-500">View All</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>

      {/* Recommended Car Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recommended Car</h2>
          <button className="text-blue-500">View All</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jeeps.map((jeep, index) => (
            <CarCard key={index} car={jeep} />
          ))}
        </div>
      </div>
      
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">
          Show more car
        </button>
      </div>
    </div>
  );
};

export default HomeCarRent;