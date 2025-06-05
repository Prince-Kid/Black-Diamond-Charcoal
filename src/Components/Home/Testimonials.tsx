import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// You can replace these with actual images later
const person1 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";
const person2 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";
const person3 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";
const person4 = "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";
const person5 = "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";
const person6 = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";

type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  rating: number;
  testimonial: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, rating, testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <img src={image} alt={name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`} 
            />
          ))}
        </div>
        
        <div className="relative flex-1">
          <Quote className="absolute top-0 left-0 h-6 w-6 text-green-100 dark:text-green-900/30 -translate-x-2 -translate-y-1" />
          <p className="text-gray-600 dark:text-gray-300 italic pl-4">{testimonial}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jean-Pierre Uwimana",
      role: "Restaurant Owner",
      image: person1,
      rating: 5,
      testimonial: "Black Diamond Charcoal has transformed our kitchen operations. Their premium hardwood charcoal burns longer and produces less smoke, allowing us to prepare authentic Rwandan dishes with consistent heat and exceptional flavor. Our customers have noticed the difference!"
    },
    {
      name: "Marie Uwase",
      role: "Hotel Manager",
      image: person2,
      rating: 4,
      testimonial: "We've been using Black Diamond Charcoal for our outdoor grilling area for over a year now. Their consistent quality and reliable delivery make them our preferred supplier. The charcoal lights quickly and burns evenly, which is essential for our busy hotel kitchen."
    },
    {
      name: "Emmanuel Ndayisaba",
      role: "Household Customer",
      image: person3,
      rating: 5,
      testimonial: "As someone who cooks for my family daily, I appreciate the eco-friendly nature of Black Diamond Charcoal. It's affordable yet high quality, and I feel good knowing it's produced sustainably right here in Rwanda. Their household packs are perfectly sized for my needs."
    },
    {
      name: "Claudine Mukamana",
      role: "Catering Business Owner",
      image: person4,
      rating: 5,
      testimonial: "Running a catering business requires reliability and quality. Black Diamond Charcoal delivers both. Their briquettes maintain consistent temperature throughout long cooking sessions, which is crucial for our large events. The minimal ash production also means less cleanup!"
    },
    {
      name: "Patrick Habimana",
      role: "BBQ Enthusiast",
      image: person5,
      rating: 4,
      testimonial: "I've tried many charcoal brands for my weekend barbecues, but Black Diamond produces the best flavor profile. The charcoal imparts a subtle smokiness that enhances meat without overpowering it. Plus, it's locally produced which makes me feel good about supporting Rwandan businesses."
    },
    {
      name: "Diane Ishimwe",
      role: "Eco-friendly Homestay Host",
      image: person6,
      rating: 5,
      testimonial: "For our eco-tourism homestay, we wanted a sustainable cooking solution that showcases Rwandan culture. Black Diamond's eco-friendly charcoal aligns perfectly with our values. Guests love learning about sustainable charcoal production while enjoying delicious traditionally cooked meals."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const itemsPerSlide = {
    sm: 1,
    md: 2,
    lg: 3
  };
  
  // Calculate how many slides we need based on the number of testimonials and items per slide
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide.lg);
  
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slides every 5 seconds
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };
  
  // Pause autoplay when user interacts with slider
  const handleManualNavigation = (callback: () => void) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      setIsAutoPlaying(false);
    }
    callback();
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  // Calculate which testimonials to show in the current slide
  const getCurrentTestimonials = () => {
    // For large screens - 3 items per slide
    let startIndex = currentIndex * itemsPerSlide.lg;
    let endIndex = Math.min(startIndex + itemsPerSlide.lg, testimonials.length);
    
    return testimonials.slice(startIndex, endIndex);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <section id="testimonials" className="py-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-16">
            <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white relative inline-block">
              Customer Testimonials
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-600 rounded-full"></span>
            </h2>
            <p className="font-light text-gray-600 lg:mb-16 sm:text-xl dark:text-gray-300">
              Hear what our customers have to say about our premium charcoal products. We're proud to serve households, restaurants, and businesses across Rwanda with sustainable energy solutions.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Left Navigation Arrow */}
            <button 
              onClick={() => handleManualNavigation(prevSlide)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(0%)` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  {getCurrentTestimonials().map((testimonial, index) => (
                    <div
                      key={index}
                      className="transform transition-transform duration-300 hover:-translate-y-2 h-full"
                    >
                      <TestimonialCard
                        name={testimonial.name}
                        role={testimonial.role}
                        image={testimonial.image}
                        rating={testimonial.rating}
                        testimonial={testimonial.testimonial}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Navigation Arrow */}
            <button 
              onClick={() => handleManualNavigation(nextSlide)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Slider Dots/Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  currentIndex === index 
                    ? "bg-green-600 w-8" 
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <button className="inline-flex items-center px-5 py-3 text-base font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
              See All Testimonials
              <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;