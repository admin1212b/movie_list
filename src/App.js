import Card from "./components/card";
import movies from "./mocks/movies";

function App() {
  return (
    <div className="container">
      <div className="heading">Movies list</div>
      <div className="cards">
        {movies.map((movie, index) => {
          return <Card key={index} props={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
