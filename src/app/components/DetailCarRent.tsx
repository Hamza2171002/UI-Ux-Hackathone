import React from "react";

const CategoryCarRent = () => {
  return (
    <div className="max-w-[1440px] mx-auto h-auto lg:h-[1600px] p-6 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar (Filters) */}
        <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Filter</h2>
          {/* Type */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-2">Type</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <input type="checkbox" id="sport" className="mr-2" />
                <label htmlFor="sport">Sport (10)</label>
              </li>
              <li>
                <input type="checkbox" id="suv" className="mr-2" />
                <label htmlFor="suv">SUV (12)</label>
              </li>
              <li>
                <input type="checkbox" id="mpv" className="mr-2" />
                <label htmlFor="mpv">MPV (14)</label>
              </li>
              <li>
                <input type="checkbox" id="coupe" className="mr-2" />
                <label htmlFor="coupe">Coupe (14)</label>
              </li>
              <li>
                <input type="checkbox" id="hatchback" className="mr-2" />
                <label htmlFor="hatchback">Hatchback (14)</label>
              </li>
            </ul>
          </div>

          {/* Capacity */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-2">Capacity</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <input type="checkbox" id="2-person" className="mr-2" />
                <label htmlFor="2-person">2 Person (10)</label>
              </li>
              <li>
                <input type="checkbox" id="4-person" className="mr-2" />
                <label htmlFor="4-person">4 Person (14)</label>
              </li>
              <li>
                <input type="checkbox" id="8-or-more" className="mr-2" />
                <label htmlFor="8-or-more">8 or More (16)</label>
              </li>
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="100"
              className="w-full"
            />
            <div className="flex justify-between text-gray-500 text-sm mt-2">
              <span>Min: $0</span>
              <span>Max: $100</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          {/* Featured Car */}
          <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
            <h2 className="text-2xl font-bold mb-4">
              Sports car with the best design and acceleration
            </h2>
            <p className="text-gray-700 mb-4">
              Stylish and comfortable with a unique futuristic and elegant design.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="image 8.png"
                alt="Featured Car"
                className="w-full md:w-1/2 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-semibold">Nissan GT - R</h3>
                <p className="text-gray-500">Type: Sport</p>
                <p className="text-gray-500">Capacity: 2 Person</p>
                <p className="text-gray-500">Steering: Manual</p>
                <p className="text-gray-500">Price: $80.00/day</p>
                <button className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4">
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium">Alex Stanton</h3>
                <p className="text-gray-500 text-sm">21 May 2022</p>
                <p className="text-gray-700 mt-2">
                &quot;This car is amazing, and the service was incredibly smooth.&quot;
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium">Skylar Dias</h3>
                <p className="text-gray-500 text-sm">15 May 2022</p>
                <p className="text-gray-700 mt-2">
                &quot;Great flexibility and excellent condition of the car.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Recent Cars Section */}

          

          {/* Recent Cars Section */}
<section className="mb-6">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-semibold">Recent Cars</h2>
    <button className="text-blue-500 font-medium hover:underline">
      View All
    </button>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Sample car data */}
    {[
      {
        id: 1,
        name: "Koenigsegg",
        type: "Sport",
        price: "$99.00/day",
        imgUrl: "car2.png",
        capacity: "2 People",
      },
      {
        id: 2,
        name: "Nissan GT - R",
        type: "Sport",
        price: "$80.00/day",
        imgUrl: "gtr.png",
        capacity: "2 People",
      },
      {
        id: 3,
        name: "Rolls-Royce",
        type: "Luxury",
        price: "$96.00/day",
        imgUrl: "rolls.png",
        capacity: "4 People",
      },
      {
        id: 4,
        name: "All New Rush",
        type: "SUV",
        price: "$72.00/day",
        imgUrl: "rush.png",
        capacity: "5 People",
      },
      {
        id: 5,
        name: "CR - V",
        type: "SUV",
        price: "$80.00/day",
        imgUrl: "cvr.png",
        capacity: "5 People",
      },
      {
        id: 6,
        name: "All New Terios",
        type: "SUV",
        price: "$74.00/day",
        imgUrl: "tor.jpg",
        capacity: "5 People",
      },
    ].map((car) => (
      <div
        key={car.id}
        className="border rounded-lg p-4 shadow bg-white hover:shadow-lg transition-shadow"
      >
        <img
          src={car.imgUrl}
          alt={car.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold mb-1">{car.name}</h3>
        <p className="text-gray-500">Type: {car.type}</p>
        <p className="text-gray-500">Capacity: {car.capacity}</p>
        <p className="text-gray-700 font-semibold mt-2">{car.price}</p>
        <button className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4 w-full hover:bg-blue-600">
          Rent Now
        </button>
      </div>
    ))}
  </div>
</section>




        </main>
      </div>
    </div>
  );
};

export default CategoryCarRent;
