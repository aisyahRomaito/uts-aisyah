import { useState } from "react";
import { Trash, SquarePen, ShoppingBag, Heart } from "lucide-react";

export default function Film() {
  const initialFilms = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/id/9/91/Inception_poster.jpg",
      genre: "Sci-Fi",
      duration: "148 minutes",
      synopsis:
        "A thief who enters the dreams of others to steal secrets from their subconscious.",
      liked: false,
    },
    {
      id: 2,
      title: "The Godfather",
      year: 1972,
      imageUrl:
        "https://down-id.img.susercontent.com/file/6d6fdb80292670c66cdab7f5e4eacb13",
      genre: "Crime, Drama",
      duration: "175 minutes",
      synopsis:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      liked: false,
    },
    {
      id: 3,
      title: "Pulp Fiction",
      year: 1994,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOQWb7qwGT0Lx3Lhazq-rmUPtugkJ4UEaAA&s",
      genre: "Crime, Drama",
      duration: "154 minutes",
      synopsis:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      liked: false,
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      year: 1994,
      imageUrl:
        "https://resizing.flixster.com/yaZKEGNxS8xvb7kKX4l0hn0ktEY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_v_v10_aw.jpg",
      genre: "Drama",
      duration: "142 minutes",
      synopsis:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      liked: false,
    },
    {
      id: 5,
      title: "The Dark Knight",
      year: 2008,
      imageUrl:
        "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
      genre: "Action, Crime, Drama",
      duration: "152 minutes",
      synopsis:
        "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      liked: false,
    },
    {
      id: 6,
      title: "Laskar Pelangi",
      year: 2008,
      imageUrl:
        "https://thumbor.prod.vidiocdn.com/Gig2iEVFJQqHXWkMtnKWhItTfuc=/filters:quality(70)/vidio-web-prod-film/uploads/film/image_portrait/5903/laskar-pelangi-the-series-e57f05.jpg",
      genre: "Drama",
      duration: "124 minutes",
      synopsis:
        "A teacher fights to keep a school open in the face of poverty and the colonial past.",
      liked: false,
    },
    {
      id: 7,
      title: "Ada Apa dengan Cinta?",
      year: 2002,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/id/d/d5/Ada-apa-dengan-cinta.jpg",
      genre: "Romance, Drama",
      duration: "112 minutes",
      synopsis:
        "A teenage romance that blossoms between two high school students.",
      liked: false,
    },
  ];

  // const savedFilms = localStorage.getItem('films');
  const [films, setFilms] = useState(initialFilms);
  // useEffect(()=>{
  //   localStorage.setItem('films', JSON.stringify(films));
  // })

  const [updateFilm, setUpdateFilm] = useState(null);
  const [newFilm, setNewFilm] = useState({
    title: "",
    year: "",
    imageUrl: "",
    genre: "",
    duration: "",
    synopsis: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [wishlist, setWishlist] = useState(initialFilms);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [genreFilter, setGenreFilter] = useState("All");

  function handleDelete(film) {
    if (window.confirm("Are you sure you want to delete this film?")) {
      setFilms(films.filter((f) => f.id !== film.id));
    }
  }

  function handleUpdate() {
    setFilms(films.map((f) => (f.id === updateFilm.id ? updateFilm : f)));
    setUpdateFilm(null);
  }

  function handleAdd() {
    setFilms([
      ...films,
      {
        id: films.length + 1,
        ...newFilm,
        year: parseInt(newFilm.year),
        liked: false,
      },
    ]);
    setNewFilm({
      title: "",
      year: "",
      imageUrl: "",
      genre: "",
      duration: "",
      synopsis: "",
    });
    setShowAddForm(false);
  }

  function addToWishlist(film) {
    if (!wishlist.some((f) => f.id === film.id)) {
      setWishlist([...wishlist, film]);
    }
  }

  function removeFromWishlist(film) {
    setWishlist(wishlist.filter((f) => f.id !== film.id));
  }

  function toggleLike(film) {
    const updatedFilms = films.map((f) =>
      f.id === film.id ? { ...f, liked: !f.liked } : f
    );
    setFilms(updatedFilms);
  }

  const showInformation = (film) => {
    alert(
      `Title: ${film.title}\nGenre: ${film.genre}\nDuration: ${film.duration}\nSynopsis: ${film.synopsis}`
    );
  };

  const promptComment = () => {
    let comment = prompt("Enter your comment:");
    if (comment === null || comment.trim() === "") {
      alert("Comment cannot be empty!");
    } else {
      alert("Comment: " + comment);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] < b[sortBy] ? -1 : 1;
    } else {
      return a[sortBy] > b[sortBy] ? -1 : 1;
    }
  };

  const filteredFilms = films
    .filter(
      (film) =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (genreFilter === "All" || film.genre === genreFilter)
    )
    .sort(handleSort);

  return (
    <div className="bg-gray-200 min-h-screen flex">
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Film List</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              {showAddForm ? "Cancel" : "Add Film"}
            </button>
            <input
              type="text"
              placeholder="Search films..."
              className="border border-gray-300 px-3 py-2 rounded-md"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <label htmlFor="sortby" className="mr-2 font-medium text-gray-800">
              Sort by:
            </label>
            <select
              id="sortby"
              className="border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="id">Normal</option>
              <option value="title">Title</option>
              <option value="year">Year</option>
              <option value="genre">Genre</option>
            </select>
            <select
              className="ml-2 border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className="flex items-center">
            <label
              htmlFor="genreFilter"
              className="mr-2 font-medium text-gray-800"
            >
              Filter by Genre:
            </label>
            <select
              id="genreFilter"
              className="border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Crime, Drama">Crime, Drama</option>
              <option value="Drama">Drama</option>
              <option value="Action, Crime, Drama">Action, Crime, Drama</option>
              <option value="Romance, Drama">Romance, Drama</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilms.map((film) => (
            <div
              key={film.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={film.imageUrl}
                alt={film.title}
                className="w-full h-40 object-cover mb-2 rounded-md cursor-pointer"
                onClick={() => setUpdateFilm(film)}
              />
              <div className="flex justify-between items-center">
                <div
                  className="text-lg font-semibold text-gray-800 cursor-pointer"
                  onClick={() => setUpdateFilm(film)}
                >
                  {film.title} - {film.year}
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleDelete(film)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-300"
                  >
                    <Trash />
                  </button>
                  <button
                    onClick={() => setUpdateFilm(film)}
                    className="text-yellow-500 hover:text-yellow-700 transition-colors duration-300"
                  >
                    <SquarePen />
                  </button>
                  <button
                    onClick={() => addToWishlist(film)}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    <ShoppingBag />
                  </button>
                  <button>
                    <Heart
                      fill="red"
                      onClick={() => toggleLike(film)}
                      className={`${
                        film.liked
                          ? "text-red-500 hover:text-red-700"
                          : "text-gray-500 hover:text-gray-700"
                      } transition-colors duration-300`}
                    />
                  </button>
                  <button
                    onClick={() => showInformation(film)}
                    className="bg-teal-500 text-white text-sm py-2 px-4 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  >
                    Info
                  </button>
                  <button
                    onClick={promptComment}
                    className="bg-teal-500 text-white text-sm py-2 px-4 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showAddForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
              <h2 className="text-2xl font-bold mb-4">Add New Film</h2>
              <input
                type="text"
                placeholder="Title"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={newFilm.title}
                onChange={(e) =>
                  setNewFilm({ ...newFilm, title: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Year"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={newFilm.year}
                onChange={(e) =>
                  setNewFilm({ ...newFilm, year: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Image URL"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={newFilm.imageUrl}
                onChange={(e) =>
                  setNewFilm({ ...newFilm, imageUrl: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Genre"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={newFilm.genre}
                onChange={(e) =>
                  setNewFilm({ ...newFilm, genre: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Duration"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={newFilm.duration}
                onChange={(e) =>
                  setNewFilm({ ...newFilm, duration: e.target.value })
                }
              />
              <textarea
                placeholder="Synopsis"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={newFilm.synopsis}
                onChange={(e) =>
                  setNewFilm({ ...newFilm, synopsis: e.target.value })
                }
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdd}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  Add Film
                </button>
              </div>
            </div>
          </div>
        )}

        {updateFilm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
              <h2 className="text-2xl font-bold mb-4">Edit Film</h2>
              <input
                type="text"
                placeholder="Title"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={updateFilm.title}
                onChange={(e) =>
                  setUpdateFilm({ ...updateFilm, title: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Year"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={updateFilm.year}
                onChange={(e) =>
                  setUpdateFilm({ ...updateFilm, year: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Image URL"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={updateFilm.imageUrl}
                onChange={(e) =>
                  setUpdateFilm({ ...updateFilm, imageUrl: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Genre"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={updateFilm.genre}
                onChange={(e) =>
                  setUpdateFilm({ ...updateFilm, genre: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Duration"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={updateFilm.duration}
                onChange={(e) =>
                  setUpdateFilm({ ...updateFilm, duration: e.target.value })
                }
              />
              <textarea
                placeholder="Synopsis"
                className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full"
                value={updateFilm.synopsis}
                onChange={(e) =>
                  setUpdateFilm({ ...updateFilm, synopsis: e.target.value })
                }
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setUpdateFilm(null)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/4 p-8 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          wishlist.map((film) => (
            <div
              key={film.id}
              className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={film.imageUrl}
                alt={film.title}
                className="w-full h-40 object-cover mb-2 rounded-md"
              />
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold text-gray-800">
                  {film.title} - {film.year}
                </div>
                <button
                  onClick={() => removeFromWishlist(film)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-300"
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
