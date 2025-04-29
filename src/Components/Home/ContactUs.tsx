import { MapPin, Phone, Mail, Send, User } from "lucide-react"

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white relative inline-block pb-2">
              Contact Us
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-600 rounded-full"></span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Looking for premium, eco-friendly charcoal for your home or business? We're here to help! Reach out to us
              for high-quality charcoal solutions tailored to your requirements. Together, let's fuel Rwanda
              sustainably.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Our Location</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Kigali, Rwanda</p>
                    <p className="text-gray-600 dark:text-gray-300">KG 123 St, Nyarugenge</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone Number</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">+250 785 623 396</p>
                    <p className="text-gray-600 dark:text-gray-300">+250 783 154 587</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email Address</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">info@blackdiamondcharcoal.com</p>
                    <p className="text-gray-600 dark:text-gray-300">support@blackdiamondcharcoal.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Business Hours</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monday - Friday:</span>
                    <span className="font-medium text-gray-900 dark:text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Saturday:</span>
                    <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Sunday:</span>
                    <span className="font-medium text-gray-900 dark:text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>

              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                        placeholder="John Doe"
                        required
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                        placeholder="name@blackdiamondcharcoal.com"
                        required
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-white shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all"
                    placeholder="Tell us about your needs and how we can assist you..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 dark:text-gray-300">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
