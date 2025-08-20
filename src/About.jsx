import React from "react";
import my_self from "./assets/my_self.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#F4E1B0] text-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="lg:text-5xl text-2xl font-extrabold mb-6">
            Welcome to <span className="text-gray-700">Book Shub</span>
          </h1>
          <p className="lg:text-lg text-sm text-gray-800 leading-relaxed">
            A space where imagination meets knowledge. Since 2025, we’ve been
            curating stories, ideas, and experiences for every kind of reader.
          </p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </section>

      {/* About Story */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
            alt="Book shop interior"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-gray-600 lg:text-sm text-xs leading-relaxed mb-4">
            What started as a small corner shop in 2025 has grown into a haven
            for readers worldwide. At{" "}
            <span className="font-semibold">Book Haven</span>, we believe books
            are more than just pages — they are gateways to new worlds, ideas,
            and emotions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we not only sell books but create an experience — with a
            reading café, book clubs, author meetups, and a vibrant community
            that shares the joy of stories together.
          </p>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="lg:text-3xl text-2xl font-bold text-center mb-12 text-gray-800">
            Why Readers Love Us ❤️
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
              <span className="text-4xl">📚</span>
              <h3 className="lg:text-xl text-lg font-semibold mt-4">
                Curated Collection
              </h3>
              <p className="text-gray-600 mt-2">
                From rare classics to modern bestsellers, we bring you only the
                best books.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
              <span className="lg:text-4xl text-3xl">☕</span>
              <h3 className="lg:text-xl text-lg font-semibold mt-4">
                Cozy Café
              </h3>
              <p className="text-gray-600 mt-2">
                Enjoy a warm coffee while reading your favorite novel in our
                in-store café.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
              <span className="text-4xl">🤝</span>
              <h3 className="text-xl font-semibold mt-4">Community Events</h3>
              <p className="text-gray-600 mt-2">
                Book clubs, workshops, and author meetups to bring readers
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="lg:text-3xl text-2xl font-bold mb-10 text-gray-800">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Jai Pradeep",
                role: "Founder",
                img: my_self,
              },
              {
                name: "David Lee",
                role: "Store Manager",
                img: "https://i.pravatar.cc/150?img=49",
              },
              {
                name: "Sophia Patel",
                role: "Community Lead",
                img: "https://i.pravatar.cc/150?img=52",
              },
              {
                name: "Rahul Sharma",
                role: "Café Manager",
                img: "https://i.pravatar.cc/150?img=55",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="lg:w-24 lg:h-24 w-20 h-20 mx-auto rounded-full object-fill"
                />
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="lg:text-3xl text-2xl font-bold mb-4">
          Join Our Reading Journey 📖
        </h2>
        <p className="mb-6 max-w-2xl text-sm mx-auto">
          Be a part of our global community of readers and storytellers. Visit
          our store, join events, or simply grab a book and coffee with us!
        </p>
        <Link to="/book_collection">
          <button className="bg-yellow-400 text-gray-900 font-semibold lg:px-6 lg:py-3 px-4 py-2 rounded-xl hover:bg-yellow-300 transition shadow-md">
            Explore Collections
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
