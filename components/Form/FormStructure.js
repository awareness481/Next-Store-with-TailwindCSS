import React from "react";

const FormStructure = ({ setData}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firtName: e.target['first-name'].value,
      lastName: e.target['last-name'].value,
      street: e.target['address'].value,
      country: e.target['country'].value,
      city: e.target['city'].value,
      email: e.target['emailAddress'].value,
      phone: e.target['phone'].value,
      zip: e.target['zip-code'].value,
      card: e.target['card-number'].value,
      card_name: e.target['card-name'].value,
      expire_date: e.target['expire-date'].value,
      cvv: e.target['security-code'].value
    }

    setData(data);
    console.log('payment done!')
  }

  return (
    <div className="max-w-6xl text-2xl p-6 mx-auto mt-32 bg-white rounded-md shadow-md">
      <h2 className="text-2xl text-gray-700 font-semibold capitalize">
        Personal details
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
          <div>
            <label className="text-gray-700" htmlFor="first-name">
              First name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="last-name">
              Last name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="phone">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="country">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="city">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="zip-code">
              Zip code
            </label>
            <input
              id="zip-code"
              name="zip-code"
              type="text"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <label className="text-gray-700" htmlFor="card-number">
              Card Number
            </label>
            <input
              id="card-number"
              name="card-number"
              type="text"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <label className="text-gray-700" htmlFor="expire-date">
              Expire date
            </label>
            <input
              id="expire-date"
              name="expire-date"
              type="text"
              className="w-1/3 mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <label className="text-gray-700" htmlFor="card-name">
              Cardholder name
            </label>
            <input
              id="card-name"
              name="card-name"
              type="text"
              className="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <label className="text-gray-700" htmlFor="security-code">
              CVV/Security code
            </label>
            <input
              id="security-code"
              name="security-code"
              type="text"
              className="w-1/3 mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStructure;
