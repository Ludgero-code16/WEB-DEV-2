
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import "./App.css";

// Information for the six movies
const movies = [
  {
    title: "Who Framed Roger Rabbit",
    image: "/assets/who-framed-roger-rabbit.jpg",
    description:
      "A detective investigates a mystery in a world where cartoon characters and humans live together.",
  },
  {
    title: "Hook",
    image: "/assets/hook.jpg",
    description:
      "Peter Pan returns to Neverland to rescue his children and face Captain Hook.",
  },
  {
    title: "La La Land",
    image: "/assets/la-la-land.jpg",
    description:
      "A musician and an actress follow their dreams while falling in love.",
  },
  {
    title: "Hidden Figures",
    image: "/assets/hidden-figures.jpg",
    description:
      "Three brilliant women mathematicians help NASA achieve an important space mission.",
  },
  {
    title: "Palm Springs",
    image: "/assets/palm-springs.jpg",
    description:
      "Two wedding guests become trapped in a time loop, reliving the same day over and over again.",
  },
  {
    title: "Barbie",
    image: "/assets/barbie.jpg",
    description:
      "Barbie leaves her perfect world and discovers what it means to be human.",
  },
];

function App() {
  return (
    <>
      <Header />

      <main className="movie-grid" id="movies">
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            image={movie.image}
            description={movie.description}
            featured={index === 0}
          />
        ))}
      </main>
    </>
  );
}

export default App;
