import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const order = useSelector((state) => state.cart.currentOrder);

  // Prevent users from accessing this page directly
  if (!order) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">No Order Found</h2>

          <p className="mt-3 text-gray-500">You haven't placed an order yet.</p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-xl bg-black px-8 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Success */}

        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
            <FaCheckCircle size={60} className="text-green-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900">Thank You!</h1>

          <p className="mt-3 text-lg text-gray-500">
            Your order has been placed successfully.
          </p>
        </div>

        {/* Summary Card */}

        <div className="rounded-3xl border border-gray-200 bg-white shadow-xl">
          {/* Header */}

          <div className="border-b border-gray-100 px-8 py-6">
            <h2 className="text-2xl font-bold">Order Summary</h2>
          </div>

          {/* Customer */}

          <div className="border-b border-gray-100 p-8">
            <h3 className="mb-5 text-lg font-semibold">Shipping Information</h3>

            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-semibold text-gray-900">Name:</span>{" "}
                {order.customer.name}
              </p>

              <p>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                {order.customer.phone}
              </p>

              <p>
                <span className="font-semibold text-gray-900">Address:</span>{" "}
                {order.customer.address}
              </p>
            </div>
          </div>

          {/* Products */}

          <div className="p-8">
            <h3 className="mb-6 text-lg font-semibold">Products</h3>

            <div className="space-y-5">
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between rounded-2xl bg-gray-50 p-5"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 rounded-xl object-contain bg-white p-2"
                    />

                    <div>
                      <h4 className="font-semibold">{product.name}</h4>

                      <p className="text-sm text-gray-500">
                        Qty: {product.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="font-bold">
                    UGX {(product.quantity * product.price).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Totals */}

            <div className="mt-8 border-t pt-6">
              <div className="mb-3 flex justify-between">
                <span>Total Items</span>

                <span className="font-semibold">{order.totalItems}</span>
              </div>

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span>UGX {order.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <button className="flex-1 rounded-2xl bg-black py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800">
            Track Order
          </button>

          <Link
            to="/"
            className="flex-1 rounded-2xl border border-gray-300 py-4 text-center font-semibold transition-all duration-300 hover:border-black hover:bg-gray-100"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
