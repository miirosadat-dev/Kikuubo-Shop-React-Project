import React, { useState } from "react";
import { useSelector } from "react-redux";
import emptyCart from "../assets/images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState({
    name: "Miiro Sadat",
    phone: "+256-787760797",
    address: "Lubiri Ring Road, Mengo",
  });
  return (
    <div className="container mx-auto min-h-screen py-12 px-4 lg:px-16 xl:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
            Shopping Cart
          </h3>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start mt-8">
            <div className="lg:w-2/3">
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="group flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 rounded-2xl border border-gray-300 bg-gray-50 p-5 mb-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Left Side */}
                    <div className="flex items-center gap-5 flex-1">
                      <div className="h-24 w-24 flex items-center justify-center rounded-xl bg-gray-100 p-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-col justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">Unit Price</p>

                        <p className="font-medium text-gray-700">
                          UGX {product.price}
                        </p>

                        <div className="mt-4 flex items-center">
                          <div className="flex items-center rounded-full border border-gray-300 overflow-hidden">
                            <button className="w-10 h-10 text-lg font-semibold hover:bg-gray-100 transition">
                              -
                            </button>

                            <div className="w-12 text-center font-semibold">
                              {product.quantity}
                            </div>

                            <button className="w-10 h-10 text-lg font-semibold hover:bg-gray-100 transition">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between lg:justify-end gap-8">
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Subtotal</p>

                        <p className="text-xl font-bold text-gray-900">
                          UGX {(product.quantity * product.price).toFixed(2)}
                        </p>
                      </div>

                      <button className="flex h-11 w-11 items-center justify-center rounded-full border border-red-100 bg-red-50 text-red-500 transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white">
                        <FaTrashAlt size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The right side */}
            {/* Right Side */}
            <div className="lg:w-1/3">
              <div className="sticky top-6">
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                  {/* Header */}
                  <div className="border-b border-gray-100 px-7 py-6">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      Order Summary
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Review your order before checkout.
                    </p>
                  </div>

                  {/* Body */}
                  <div className="space-y-6 p-7">
                    {/* Items */}
                    <div className="flex items-center justify-between text-gray-600">
                      <span>Total Items</span>

                      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-900">
                        {cart.totalQuantity}
                      </span>
                    </div>

                    {/* Shipping */}
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:border-gray-300">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">
                          Shipping Address
                        </h4>

                        <button className="text-sm font-medium text-black transition hover:text-gray-600">
                          Change
                        </button>
                      </div>

                      <div className="mt-3 space-y-1 text-sm text-gray-600">
                        <p className="font-medium text-gray-900">
                          {address.name}
                        </p>

                        <p>{address.phone}</p>

                        <p>{address.address}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed border-gray-200"></div>

                    {/* Price Breakdown */}

                    <div className="space-y-4">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>

                        <span className="font-medium">
                          UGX {cart.totalPrice.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>

                        <span className="text-green-600 font-semibold">
                          Free
                        </span>
                      </div>

                      <div className="flex justify-between text-gray-600">
                        <span>Taxes</span>

                        <span>Calculated at checkout</span>
                      </div>
                    </div>

                    {/* Divider */}

                    <div className="border-t border-gray-200"></div>

                    {/* Total */}

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Total</p>

                        <p className="text-xs text-gray-400">
                          Inclusive of applicable charges
                        </p>
                      </div>

                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        UGX {cart.totalPrice.toFixed(2)}
                      </h2>
                    </div>

                    {/* Checkout Button */}

                    <button className="group relative w-full overflow-hidden rounded-2xl bg-black py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl active:scale-[0.98]">
                      Proceed to Checkout
                    </button>

                    {/* Trust Section */}

                    <div className="rounded-2xl bg-gray-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900">
                            Secure Checkout
                          </p>

                          <p className="text-sm text-gray-500">
                            Payments are encrypted and protected.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emptyCart} className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
