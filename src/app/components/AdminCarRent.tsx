import React from 'react';
import { Home, CarFront, PieChart, DollarSign, Inbox, Calendar, Settings, HelpCircle, Moon, LogOut } from 'lucide-react';

const AdminCarRent = () => {
    const carTransactions = [
      { 
        name: 'Nissan GT-R', 
        type: 'Sport Car', 
        price: 80.00, 
        date: '20 July',
        image: 'image 8.png'  // First car image placeholder
      },
      { 
        name: 'Koenig', 
        type: 'Sport Car', 
        price: 99.00, 
        date: '19 July',
        image: 'image 6.png'  // Second car image placeholder
      },
      { 
        name: 'Rolls-Royce', 
        type: 'Sport Car', 
        price: 96.00, 
        date: '18 July',
        image: 'Car.png'  // Third car image placeholder
      },
      { 
        name: 'CR-V', 
        type: 'SUV', 
        price: 80.00, 
        date: '17 July',
        image: 'Jeep.png'  // Fourth car image placeholder
      }
  ]
  return (
    <div className="flex h-screen max-w-[1440px] mx-auto">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-6 flex flex-col">
        <div className="space-y-6">
          <h2 className="text-sm text-gray-500">MAIN MENU</h2>
          
          <div className="space-y-2">
            <button className="flex items-center space-x-3 w-full p-3 bg-blue-600 text-white rounded-lg">
              <Home size={20} />
              <span>Dashboard</span>
            </button>
            
            <button className="flex items-center space-x-3 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <CarFront size={20} />
              <span>Car Rent</span>
            </button>
            
            <button className="flex items-center space-x-3 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <PieChart size={20} />
              <span>Insight</span>
            </button>
            
            <button className="flex items-center space-x-3 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <DollarSign size={20} />
              <span>Reimburse</span>
            </button>
            
            <button className="flex items-center space-x-3 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Inbox size={20} />
              <span>Inbox</span>
            </button>
            
            <button className="flex items-center space-x-3 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Calendar size={20} />
              <span>Calendar</span>
            </button>
          </div>

          <h2 className="text-sm text-gray-500 pt-6">PREFERENCES</h2>
          
          <div className="space-y-2">
            <button className="flex items-center space-x-3 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Settings size={20} />
              <span>Settings</span>
            </button>
            
            <button className="flex items-center space-x-3 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <HelpCircle size={20} />
              <span>Help & Center</span>
            </button>
            
            <button className="flex items-center space-x-3 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Moon size={20} />
              <span>Dark Mode</span>
            </button>
          </div>
        </div>
        
        <button className="flex items-center space-x-3 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg mt-auto">
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Details Rental */}
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Details Rental</h2>
            <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
            
            <div className="flex space-x-4">
              <img src="image 8.png" alt="Car" className="rounded-lg bg-blue-400" />
              <div>
                <h3 className="font-semibold">Nissan GT-R</h3>
                <p className="text-sm text-gray-500">Sport Car</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Pick-Up</p>
                <select className="w-full p-2 border rounded-lg">
                  <option>Kota Semarang</option>
                </select>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Drop-Off</p>
                <select className="w-full p-2 border rounded-lg">
                  <option>Kota Semarang</option>
                </select>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500">Total Rental Price</p>
                <p className="text-2xl font-semibold">$80.00</p>
              </div>
            </div>
          </div>

          {/* Top 5 Car Rental */}
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Top 5 Car Rental</h2>
              <button className="text-gray-400">•••</button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Sport Car</span>
                <span className="font-semibold">17,439</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">SUV</span>
                <span className="font-semibold">9,478</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Coupe</span>
                <span className="font-semibold">18,197</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Hatchback</span>
                <span className="font-semibold">12,510</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">MPV</span>
                <span className="font-semibold">14,406</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Recent Transaction</h3>
                <button className="text-blue-600 text-sm">View All</button>
              </div>

              <div className="space-y-4">
                {carTransactions.map((car, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src={car.image} alt={car.name} className="rounded-lg" />
                      <div>
                        <p className="font-medium">{car.name}</p>
                        <p className="text-sm text-gray-500">{car.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${car.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">{car.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCarRent;