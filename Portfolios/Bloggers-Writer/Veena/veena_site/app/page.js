import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="w-full h-[400px] relative">
          <Image
            src="/cover.png"
            alt="Cover Image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />

          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center gap-40 text-white">
            <div className="flex flex-col gap-4 items-center justify-center text-center">
              <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
              <h2>
                Hi, I’m Veena — a storyteller, blogger, and coffee lover from
                India
              </h2>
              <button
                type="button"
                className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                Contact Me
              </button>
            </div>

            <div className=" relative rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/Veena.png"
                alt="Profile Image"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 rounded-full opacity-25" />

      <section className="px-6 py-16 bg-[#fef9f4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-beta mb-4">What I Write About</h2>
          <p className="text-lg font-main text-gray-600">
            From personal reflections and poetry to deep dives on books and
            storytelling—this space captures my journey as a writer.
          </p>
        </div>
      </section>
      <div className="w-full h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 rounded-full  opacity-25" />

      <section className="px-6 py-16 bg-[#fef9f4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-beta text-center mb-10">Recent Posts</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Card 1 */}
            <div className="border p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-beta mb-2">
                The Art of Quiet Mornings
              </h3>
              <p className="text-gray-600 font-main">
                How starting your day with stillness can spark creativity and
                presence.
              </p>
              <button className="mt-4 text-pink-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>

            {/* Blog Card 2 */}
            <div className="border p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-beta mb-2">
                Finding Stories in Daily Life
              </h3>
              <p className="text-gray-600 font-main">
                Learn how everyday moments hold powerful stories waiting to be
                written.
              </p>
              <button className="mt-4 text-pink-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>

            {/* Blog Card 3 */}
            <div className="border p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-beta mb-2">
                Writing Through the Chaos
              </h3>
              <p className="text-gray-600 font-main">
                Embracing messy days and turning them into meaningful
                reflections on the page.
              </p>
              <button className="mt-4 text-pink-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>

            {/* Blog Card 4 */}
            <div className="border p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-beta mb-2">
                Letters to My Younger Self
              </h3>
              <p className="text-gray-600 font-main">
                A heartfelt note on growth, softness, and the power of
                self-compassion.
              </p>
              <button className="mt-4 text-pink-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-pink-600 text-white rounded-md font-main hover:bg-pink-700 transition">
            View All Blog Posts
          </button>
        </div>
        
      </section>
    </>
  );
}
