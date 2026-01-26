import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-24 px-6 md:px-10 lg:px-20">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full border px-3 py-2 rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
