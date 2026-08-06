import { useState } from "react";
import { updateShippingAddress } from "../redux/CartSlice";

const ChangeAddress = ({ address, dispatch, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState({
    name: address.name,
    phone: address.phone,
    address: address.address,
  });

  const onClose = () => {
    dispatch(updateShippingAddress(newAddress));
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={newAddress.name}
            onChange={(e) =>
              setNewAddress((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-gray-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+256 7XX XXX XXX"
            value={newAddress.phone}
            onChange={(e) =>
              setNewAddress((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-gray-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Delivery Address
          </label>

          <textarea
            rows={4}
            placeholder="Enter your delivery address"
            value={newAddress.address}
            onChange={(e) =>
              setNewAddress((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-gray-200"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white cursor-pointer py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white cursor-pointer py-2 px-4 rounded"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
