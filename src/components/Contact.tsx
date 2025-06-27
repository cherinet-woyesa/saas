export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-indigo-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Have questions? Reach out and we’ll get back to you shortly.
        </p>
        <form className="space-y-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
