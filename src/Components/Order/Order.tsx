"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "emailjs-com"
import NavBar from "../Home/NavBar"
import { CheckCircle, Package, Truck, CreditCard, ShoppingBag, Phone, MapPin, Mail, User } from "lucide-react"

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: "",
    quantity: "1",
    size: "5kg",
    paymentMethod: "cash",
    notes: "",
    totalPrice: "",
  })

  const [orderSubmitted, setOrderSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target
  
  // Update the form data with the new value
  const updatedFormData = {
    ...formData,
    [name]: value,
  };
  
  // Calculate and update price if product or quantity changes
  if (name === "product" || name === "quantity") {
    const selectedProduct = products.find(p => p.id === (name === "product" ? value : formData.product));
    
    if (selectedProduct) {
      // Extract price from product name
      const priceText = selectedProduct.name.split(" - ")[1];
      const priceValue = parseInt(priceText.replace(/[^0-9]/g, ''));
      
      // Calculate total based on quantity
      const quantity = parseInt(name === "quantity" ? value : formData.quantity) || 1;
      const total = priceValue * quantity;
      
      // Update price in form data
      updatedFormData.totalPrice = total.toString();
    }
  }
  
  setFormData(updatedFormData);
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Send email using EmailJS
    emailjs
      .send(
        "service_qpf5oy4", // replace with your EmailJS service ID
        "template_5lgqpz6", // replace with your EmailJS template ID
        formData, // this will populate the template fields
        "2PQjSbFP5pTWeqNQQ", // replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response.status, response.text)
          setOrderSubmitted(true)
          setIsSubmitting(false)
        },
        (err) => {
          console.error("Failed to send email. Error:", err)
          setIsSubmitting(false)
          // You could add error handling UI here
        },
      )
  }

  // Product options
  const products = [
    { id: "premium", name: "Premium Hardwood Charcoal - 12,000 RWF" },
    { id: "restaurant", name: "Restaurant Grade Charcoal - 18,500 RWF" },
    { id: "household", name: "Household Charcoal Pack - 5,000 RWF" },
    { id: "coconut", name: "Premium Coconut Shell Charcoal - 15,000 RWF" },
    { id: "briquettes", name: "Industrial Grade Briquettes - 22,000 RWF" },
    { id: "eco", name: "Eco-Friendly Household Pack - 7,500 RWF" },
  ]

  // Size options
  const sizes = ["5kg", "10kg", "15kg", "20kg", "25kg", "Custom"]

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Order Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
              <ShoppingBag className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
              <span className="text-sm font-medium text-green-800 dark:text-green-300">Place Your Order</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Order Premium Charcoal</h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fill out the form below to place your order for our high-quality, eco-friendly charcoal products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              {!orderSubmitted ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Package className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                    Order Details
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">
                        Personal Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Full Name
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                              placeholder="John Doe"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Phone Number
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                              placeholder="+250 7XX XXX XXX"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Delivery Address
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <MapPin className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                              placeholder="Your delivery address"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Selection */}
                    <div className="space-y-4">
                      <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">
                        Product Selection
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Select Product
                          </label>
                          <select
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                            required
                          >
                            <option value="">Select a product</option>
                            {products.map((product) => (
                              <option key={product.id} value={product.id}>
                                {product.name}
                              </option>
                            ))}s
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Package Size
                          </label>
                          <select
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                            required
                          >
                            {sizes.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Quantity
                          </label>
                          <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            min="1"
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Payment Method
                          </label>
                          <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                            required
                          >
                            <option value="cash">Cash on Delivery</option>
                            <option value="mobileMoney">Mobile Money</option>
                            <option value="bankTransfer">Bank Transfer</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                        placeholder="Any special instructions for your order..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="mr-2 h-5 w-5" />
                            Submit Order
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Order Successfully Submitted!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you, {formData.name}, for placing your order. We have received your request and will process
                    it shortly.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6">
                    <div className="text-left space-y-2">
                      <p className="text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Order Reference:</span>{" "}
                        <span className="text-gray-600 dark:text-gray-400">
                          BCD-
                          {Math.floor(Math.random() * 10000)
                            .toString()
                            .padStart(4, "0")}
                        </span>
                      </p>
                      <p className="text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Email:</span>{" "}
                        <span className="text-gray-600 dark:text-gray-400">{formData.email}</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Product:</span>{" "}
                        <span className="text-gray-600 dark:text-gray-400">
                          {products.find((p) => p.id === formData.product)?.name || formData.product}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    We will contact you shortly with confirmation and delivery details.
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => (window.location.href = "/")}
                      className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                    >
                      Return to Homepage
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
  <div className="flex justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
    <span className="text-gray-600 dark:text-gray-300">Selected Product</span>
    <span className="font-medium text-gray-900 dark:text-white">
      {formData.product
        ? products.find((p) => p.id === formData.product)?.name.split(" - ")[0] || "Select a product"
        : "Select a product"}
    </span>
  </div>
  <div className="flex justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
    <span className="text-gray-600 dark:text-gray-300">Size</span>
    <span className="font-medium text-gray-900 dark:text-white">{formData.size}</span>
  </div>
  <div className="flex justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
    <span className="text-gray-600 dark:text-gray-300">Quantity</span>
    <span className="font-medium text-gray-900 dark:text-white">{formData.quantity}</span>
  </div>
  <div className="flex justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
    <span className="text-gray-600 dark:text-gray-300">Payment Method</span>
    <span className="font-medium text-gray-900 dark:text-white">
      {formData.paymentMethod === "cash"
        ? "Cash on Delivery"
        : formData.paymentMethod === "mobileMoney"
          ? "Mobile Money"
          : "Bank Transfer"}
    </span>
  </div>
  {formData.product && (
    <div className="flex justify-between pt-2">
      <span className="text-lg font-medium text-gray-800 dark:text-gray-200">Total</span>
      <span className="text-lg font-bold text-green-600 dark:text-green-400">
        {(() => {
          const selectedProduct = products.find(p => p.id === formData.product);
          if (!selectedProduct) return "0 RWF";
          
          // Extract price from the product name
          const priceText = selectedProduct.name.split(" - ")[1];
          const priceValue = parseInt(priceText.replace(/[^0-9]/g, ''));
          
          // Calculate total
          const total = priceValue * parseInt(formData.quantity || "1");
          
          // Format with thousand separators
          return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " RWF";
        })()}
      </span>
    </div>
  )}
</div>
                {/* Order Process Steps */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-4">How It Works</h3>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <ShoppingBag className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">1. Place Your Order</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Fill out the form with your details</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">2. Order Confirmation</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">We'll contact you to confirm details</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <CreditCard className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">3. Payment</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Pay using your selected payment method</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <Truck className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">4. Delivery</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        We'll deliver your order to your location
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Support */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Need help with your order?</p>
                  <a
                    href="tel:+250785623396"
                    className="text-green-600 dark:text-green-400 text-sm font-medium hover:text-green-700 dark:hover:text-green-300"
                  >
                    Call us at +250 785 623 396
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
