"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Filter, ShoppingBag, CheckCircle, Star } from "lucide-react"

const Gallery = () => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState("all")

  const handleOrderRedirect = () => {
    navigate("/order")
  }

  // Product categories
  const categories = [
    { id: "all", name: "All Products" },
    { id: "premium", name: "Premium Charcoal" },
    { id: "restaurant", name: "Restaurant Grade" },
    { id: "household", name: "Household" },
  ]

  // Product data with more details
  const products = [
    {
      id: 1,
      name: "Premium Hardwood Charcoal",
      description: "Long-burning, high-heat premium charcoal for professional cooking",
      price: "12,000 RWF",
      image: "https://cfnielsen.com/wp-content/uploads/2024/05/DSC01195.jpg",
      category: "premium",
      weight: "10 kg",
      rating: 5,
      features: ["Long-burning", "Low smoke", "High heat"],
    },
    {
      id: 2,
      name: "Restaurant Grade Charcoal",
      description: "Specially formulated for restaurants and commercial cooking",
      price: "18,500 RWF",
      image: "https://cfnielsen.com/wp-content/uploads/2024/05/DSC01195.jpg",
      category: "restaurant",
      weight: "15 kg",
      rating: 4.5,
      features: ["Consistent heat", "Commercial grade", "Extra clean"],
    },
    {
      id: 3,
      name: "Household Charcoal Pack",
      description: "Everyday charcoal for household cooking and small gatherings",
      price: "5,000 RWF",
      image:
        "https://cfnielsen.com/wp-content/uploads/2024/05/DSC01195.jpg",
      category: "household",
      weight: "5 kg",
      rating: 4,
      features: ["Affordable", "Easy lighting", "Eco-friendly"],
    },
    {
      id: 4,
      name: "Premium Coconut  Charcoal",
      description: "Specialty charcoal made from coconut shells for distinct flavor",
      price: "15,000 RWF",
      image: "https://cfnielsen.com/wp-content/uploads/2024/05/DSC01195.jpg",
      category: "premium",
      weight: "8 kg",
      rating: 5,
      features: ["Unique flavor", "Ultra long-burning", "Low ash"],
    },
    {
      id: 5,
      name: "Industrial Grade Briquettes",
      description: "Compressed charcoal briquettes for industrial applications",
      price: "22,000 RWF",
      image: "https://cfnielsen.com/wp-content/uploads/2024/05/DSC01195.jpg",
      category: "restaurant",
      weight: "20 kg",
      rating: 4.5,
      features: ["High efficiency", "Uniform shape", "Consistent burning"],
    },
    {
      id: 6,
      name: "Eco-Friendly Household Pack",
      description: "Sustainably sourced charcoal for environmentally conscious consumers",
      price: "7,500 RWF",
      image: "https://cfnielsen.com/wp-content/uploads/2024/05/DSC01195.jpg",
      category: "household",
      weight: "5 kg",
      rating: 4,
      features: ["Sustainable", "Minimal impact", "Carbon neutral"],
    },
  ]

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  // Generate star rating display
  const renderRating = (rating : number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
            Our Offerings
          </h2>
          <h3 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Premium Charcoal Products
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Discover our range of high-quality, eco-friendly charcoal products for every need
          </p>
          <div className="mt-2 max-w-3xl mx-auto">
            <span className="inline-block w-40 h-1 bg-green-600 rounded-full"></span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="flex items-center mr-2 text-gray-600 dark:text-gray-300">
            <Filter className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quick Action Button */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button
                    onClick={handleOrderRedirect}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full flex items-center space-x-2 shadow-lg"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h4>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium px-2.5 py-0.5 rounded-full">
                    {product.weight}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mr-1" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating and Price */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <div className="flex mr-1">{renderRating(product.rating)}</div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">({product.rating})</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-10 sm:px-12 relative">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 max-w-xl">
              <h4 className="text-white text-2xl sm:text-3xl font-bold mb-4">Ready to experience premium charcoal?</h4>
              <p className="text-green-100 mb-6">
                Bulk orders, special requirements, or custom packaging - we've got you covered. Contact us today for
                wholesale pricing and business partnerships.
              </p>
              <button
                onClick={handleOrderRedirect}
                className="inline-flex items-center px-5 py-3 bg-white text-green-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Place Your Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
