import { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "Miiro Sadat",
    phone: "+256787760797",
    address: "Lubiri Ring Road, Mengo",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    if (
      !shippingInfo.fullName.trim() ||
      !shippingInfo.phone.trim() ||
      !shippingInfo.address.trim()
    ) {
      alert("Please complete all shipping information.");
      return;
    }

    if (cart.products.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setIsSubmitting(true);

    try {
      const order = {
        customer: shippingInfo,
        paymentMethod,
        products: cart.products,
        totalItems: cart.totalQuantity,
        totalPrice: cart.totalPrice,
      };

      console.log(order);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert("Order placed successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Checkout
          </h1>

          <p className="mt-2 text-gray-500">
            Complete your order by confirming your shipping information.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left Side */}
          <div className="lg:w-2/3">
            {/* Shipping Card */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Shipping Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  We'll use these details to deliver your order.
                </p>
              </div>

              <div className="space-y-6">
                {/* Full Name */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={shippingInfo.fullName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all duration-300 focus:border-black focus:bg-white focus:ring-4 focus:ring-gray-200"
                  />
                </div>

                {/* Phone */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all duration-300 focus:border-black focus:bg-white focus:ring-4 focus:ring-gray-200"
                  />
                </div>

                {/* Address */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Delivery Address
                  </label>

                  <textarea
                    rows={4}
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all duration-300 focus:border-black focus:bg-white focus:ring-4 focus:ring-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Placeholder */}

          {/* Right Side */}
          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                {/* Header */}

                <div className="border-b border-gray-100 px-7 py-6">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Order Summary
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Review your order before placing it.
                  </p>
                </div>

                {/* Body */}

                <div className="space-y-6 p-7">
                  {/* Items */}

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Items</span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                      {cart.totalQuantity}
                    </span>
                  </div>

                  {/* Shipping */}

                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-gray-300">
                    <div className="flex justify-between">
                      <h4 className="font-semibold text-gray-900">
                        Deliver To
                      </h4>

                      <span className="text-green-600 text-sm font-semibold">
                        Active
                      </span>
                    </div>

                    <div className="mt-4 space-y-1">
                      <p className="font-semibold text-gray-900">
                        {shippingInfo.fullName}
                      </p>

                      <p className="text-sm text-gray-600">
                        {shippingInfo.phone}
                      </p>

                      <p className="text-sm leading-6 text-gray-600">
                        {shippingInfo.address}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}

                  <div className="border-t border-dashed border-gray-200"></div>

                  {/* Price */}

                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>

                      <span className="font-semibold">
                        UGX {cart.totalPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>

                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200"></div>

                  {/* Total */}

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-500">Total</p>

                      <p className="text-xs text-gray-400">VAT Included</p>
                    </div>

                    <h2 className="text-xl font-bold tracking-tight text-gray-900">
                      UGX {cart.totalPrice.toFixed(2)}
                    </h2>
                  </div>

                  {/* Payment */}

                  <div>
                    <h4 className="mb-4 font-semibold text-gray-900">
                      Payment Method
                    </h4>

                    <div className="space-y-3">
                      <label className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-black">
                        <div>
                          <p className="font-medium">Cash on Delivery</p>

                          <p className="text-sm text-gray-500">
                            Pay when your package arrives.
                          </p>
                        </div>

                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "cod"}
                          onChange={() => setPaymentMethod("cod")}
                          className="h-5 w-5 accent-black"
                        />
                      </label>

                      <label className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-black">
                        <div>
                          <p className="font-medium">Mobile Money</p>

                          <p className="text-sm text-gray-500">
                            MTN & Airtel supported.
                          </p>
                        </div>

                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "mobile"}
                          onChange={() => setPaymentMethod("mobile")}
                          className="h-5 w-5 accent-black"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Button */}

                  <button
                    onClick={handlePlaceOrder}
                    disabled={isSubmitting}
                    className="w-full rounded-2xl bg-orange-600 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Order Placed" : "Place Order"}
                  </button>

                  {/* Security */}

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
                          Your information is encrypted and protected.
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
    </div>
  );
};

export default Checkout;
