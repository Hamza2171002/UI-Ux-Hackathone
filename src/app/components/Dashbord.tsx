import React from 'react';
import {
  LayoutDashboard,
  Car,
  LineChart,
  Wallet2,
  Inbox,
  Calendar,
  Settings,
  HelpCircle,
  Moon,
  LogOut,
  MoreVertical,
} from 'lucide-react';

const Dashboard = () => {
  const rentalStats = [
    { type: 'Sport Car', count: 17439 },
    { type: 'SUV', count: 9478 },
    { type: 'Coupe', count: 18197 },
    { type: 'Hatchback', count: 12510 },
    { type: 'MPV', count: 14406 },
  ];

  const recentTransactions = [
    { name: 'Nissan GT - R', image: 'image 8.png', type: 'Sport Car', price: 80.0, date: '20 July' },
    { name: 'Koenigsegg', image: 'image 6.png', type: 'Sport Car', price: 99.0, date: '19 July' },
    { name: 'Rolls - Royce', image: 'Car.png', type: 'Sport Car', price: 96.0, date: '18 July' },
    { name: 'CR - V', image: 'Jeep.png', type: 'SUV', price: 80.0, date: '17 July' },
  ];

  return (
    <div className="w-full h-auto max-w-[1440px] mx-auto bg-gray-50">
      <div className="flex flex-col md:flex-row h-full">
        {/* Sidebar */}
        <div className="w-full md:w-60 bg-white p-6 flex flex-col">
          <div className="mb-8">
            <h2 className="text-xs font-medium text-gray-400 mb-4">MAIN MENU</h2>
            <div className="space-y-2">
              <button className="flex items-center w-full p-2.5 bg-blue-600 text-white rounded-lg">
                <LayoutDashboard size={20} className="mr-3" />
                <span>Dashboard</span>
              </button>
              <button className="flex items-center w-full p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Car size={20} className="mr-3" />
                <span>Car Rent</span>
              </button>
              <button className="flex items-center w-full p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg">
                <LineChart size={20} className="mr-3" />
                <span>Insight</span>
              </button>
              <button className="flex items-center w-full p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Wallet2 size={20} className="mr-3" />
                <span>Reimburse</span>
              </button>
              <button className="flex items-center w-full p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Inbox size={20} className="mr-3" />
                <span>Inbox</span>
              </button>
              <button className="flex items-center w-full p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Calendar size={20} className="mr-3" />
                <span>Calendar</span>
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xs font-medium text-gray-400 mb-4">PREFERENCES</h2>
            <div className="space-y-2">
              <button className="flex items-center w-full p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Settings size={20} className="mr-3" />
                <span>Settings</span>
              </button>
              <button className="flex items-center w-full p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg">
                <HelpCircle size={20} className="mr-3" />
                <span>Help & Center</span>
              </button>
              <button className="flex items-center w-full p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Moon size={20} className="mr-3" />
                <span>Dark Mode</span>
              </button>
            </div>
          </div>

          <button className="flex items-center w-full p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg mt-auto">
            <LogOut size={20} className="mr-3" />
            <span>Log Out</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Details Rental */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
              <div className="bg-gray-100 h-48 rounded-xl mb-4">{/* Map placeholder */}</div>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <img src="image 8.png" alt="Nissan GT-R" className="w h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="font-semibold">Nissan GT - R</h3>
                  <p className="text-sm text-gray-500">Sport Car</p>
                </div>
                <span className="ml-auto text-blue-600">#9761</span>
              </div>

              <div className="space-y-4">
                {/* Pickup */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <p className="text-sm font-medium">Pick - Up</p>
                  </div>
                  <select className="w-full p-2.5 border rounded-lg mb-2">
                    <option>Kota Semarang</option>
                  </select>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="p-2.5 border rounded-lg">
                      <option>20 July 2022</option>
                    </select>
                    <select className="p-2.5 border rounded-lg">
                      <option>07:00</option>
                    </select>
                  </div>
                </div>

                {/* Dropoff */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <p className="text-sm font-medium">Drop - Off</p>
                  </div>
                  <select className="w-full p-2.5 border rounded-lg mb-2">
                    <option>Kota Semarang</option>
                  </select>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="p-2.5 border rounded-lg">
                      <option>21 July 2022</option>
                    </select>
                    <select className="p-2.5 border rounded-lg">
                      <option>07:00</option>
                    </select>
                  </div>
                </div>

                {/* Total Price */}
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500">Total Rental Price</p>
                  <p className="text-2xl font-semibold">$80.00</p>
                </div>
              </div>
            </div>

            {/* Top 5 Car Rental */}
            <div className="bg-white p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Top 5 Car Rental</h2>
                <button className="text-gray-400">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-8 border-blue-100">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-2xl font-bold">72,030</p>
                    <p className="text-sm text-gray-500">Rental Car</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {rentalStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{stat.type}</span>
                    <span className="font-semibold">{stat.count.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Recent Transaction</h3>
                  <button className="text-blue-600 text-sm">View All</button>
                </div>

                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div className="flex items-center space-x-3">
                        <img
                          src={transaction.image}
                          alt={transaction.name}
                          className=" h-16 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium">{transaction.name}</p>
                          <p className="text-sm text-gray-500">{transaction.type}</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right mt-2 sm:mt-0">
                        <p className="font-semibold">${transaction.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
