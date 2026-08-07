import React from "react";

const Register = ({ openLogin }) => {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-6">
      {/* Header */}
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>

        <p className="mt-1 text-xs text-gray-500">
          Join Kikuubo Shop and start shopping
        </p>
      </div>

      <form className="space-y-3">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-semibold text-gray-700"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-semibold text-gray-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-xs font-semibold text-gray-700"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="+256 7XX XXX XXX"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-xs font-semibold text-gray-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-1 block text-xs font-semibold text-gray-700"
          >
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>

        {/* Terms */}
        <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-400"
          />

          <span>I agree to the terms and conditions</span>
        </label>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-red-500 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-lg active:translate-y-0"
        >
          Create Account
        </button>
      </form>

      {/* Login link */}
      <div className="mt-4 text-center text-xs text-gray-600">
        <span>Already have an account?</span>

        <button
          className="ml-2 font-semibold text-red-500 transition hover:text-red-600"
          onClick={openLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
