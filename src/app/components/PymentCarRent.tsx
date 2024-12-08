import React from "react";

const PaymentCarRent = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-6">
      {/* Billing Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Billing Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Town / City
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Town / City"
                />
              </div>
            </div>
          </div>

          {/* Rental Info Section */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Rental Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pick-up Location
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Select your city</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Drop-off Location
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Select your city</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <input type="radio" name="payment" className="w-5 h-5" />
                <label className="text-gray-700 font-medium">Credit Card</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="p-3 border rounded-lg"
                  placeholder="Card Number"
                />
                <input
                  type="text"
                  className="p-3 border rounded-lg"
                  placeholder="Expiration Date (MM/YY)"
                />
                <input
                  type="text"
                  className="p-3 border rounded-lg"
                  placeholder="Cardholder Name"
                />
                <input
                  type="text"
                  className="p-3 border rounded-lg"
                  placeholder="CVC"
                />
              </div>
              <div className="flex items-center space-x-4">
                <input type="radio" name="payment" className="w-5 h-5" />
                <label className="text-gray-700 font-medium">PayPal</label>
              </div>
              <div className="flex items-center space-x-4">
                <input type="radio" name="payment" className="w-5 h-5" />
                <label className="text-gray-700 font-medium">Bitcoin</label>
              </div>
            </div>
          </div>

          {/* Confirmation Section */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" className="w-5 h-5" />
                <label className="ml-2 text-gray-700">
                  I agree with sending marketing emails.
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="w-5 h-5" />
                <label className="ml-2 text-gray-700">
                  I agree with terms and conditions.
                </label>
              </div>
              <button className="bg-blue-500 text-white rounded-lg py-3 px-6 w-full hover:bg-blue-600">
                Rent Now
              </button>
              <p className="text-sm text-gray-500 mt-4">
                All your data is safe. We are using the most advanced security
                measures to protect your data.
              </p>
            </div>
          </div>
        </div>

        {/* Rental Summary */}
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="nissan.png"
                alt="Car"
                className="w-20 h-14 object-cover rounded bg-blue-400"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Nissan GT - R</h3>
                <p className="text-gray-500">Sport</p>
              </div>
            </div>
            <div>
              <p className="flex justify-between">
                <span>Subtotal</span>
                <span>$80.00</span>
              </p>
              <p className="flex justify-between">
                <span>Tax</span>
                <span>$8.00</span>
              </p>
              <input
                type="text"
                placeholder="Apply promo code"
                className="w-full p-3 border rounded-lg mt-4"
              />
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Rental Price</span>
              <span>$88.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCarRent;
