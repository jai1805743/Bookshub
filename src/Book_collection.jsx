import React from "react";

const Book_collection = () => {
  const collections = [
    {
      title: "Fiction",
      desc: "Explore stories that spark imagination.",
      img: "https://picsum.photos/300/200?random=1",
    },
    {
      title: "Non-Fiction",
      desc: "Discover real-life events and knowledge.",
      img: "https://picsum.photos/300/200?random=2",
    },
    {
      title: "Science",
      desc: "Dive into the wonders of science.",
      img: "https://picsum.photos/300/200?random=3",
    },
    {
      title: "Comics",
      desc: "Enjoy fun and adventurous comic books.",
      img: "https://picsum.photos/300/200?random=4",
    },
    {
      title: "Biographies",
      desc: "Learn from inspiring life stories.",
      img: "https://picsum.photos/300/200?random=5",
    },
    {
      title: "Children’s Books",
      desc: "Fun and learning for young readers.",
      img: "https://picsum.photos/300/200?random=6",
    },
    {
      title: "Fantasy",
      desc: "Step into magical and mythical worlds.",
      img: "https://picsum.photos/300/200?random=7",
    },
    {
      title: "Mystery & Thriller",
      desc: "Unravel suspenseful and thrilling tales.",
      img: "https://picsum.photos/300/200?random=8",
    },
    {
      title: "Romance",
      desc: "Heartwarming stories of love and passion.",
      img: "https://picsum.photos/300/200?random=9",
    },
    {
      title: "History",
      desc: "Learn about past events and civilizations.",
      img: "https://picsum.photos/300/200?random=10",
    },
    {
      title: "Self-Help",
      desc: "Books that inspire growth and motivation.",
      img: "https://picsum.photos/300/200?random=11",
    },
    {
      title: "Poetry",
      desc: "Beautiful collections of poems and verses.",
      img: "https://picsum.photos/300/200?random=12",
    },
  ];

  return (
    <div className="py-10 px-6 bg-gray-50">
      <h2 className="lg:text-3xl text-2xl font-bold text-center mb-8">
        📚 Book Collections
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={book.img}
              alt={book.title}
              className="lg:w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="lg:text-xl text-lg h-12 font-semibold">
                {book.title}
              </h3>
              <p className="text-gray-600 h-14 lg:text-sm text-xs mt-2">
                {book.desc}
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book_collection;
