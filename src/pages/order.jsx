import CartDrawer from "../components/CartDrawer";

export default function Order() {
  return (
    <>
     
      <div className="pt-20 md:pt-24 px-4 md:px-10 lg:px-20">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Place Your Order
        </h1>

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
            <label className="block font-semibold mb-2">Address</label>
            <input
              type="text"
              placeholder="Delivery address"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
          >
            Submit Order
          </button>
        </form>
      </div>
      <CartDrawer />
    </>
  );
}
