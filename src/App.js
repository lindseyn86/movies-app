import './App.css'
import Movies from './Movies'
import {useState} from 'react'

// Create a JSON object with an image URL 
const imgObject = { 
  "movieImage": "image link", 
}; 
console.log(JSON.stringify(imgObject));


let date = new Date()

let singleUser = {
  name: 'Harry Potter',
  todaysDate: date.toDateString(),
}

let allMovies = [
  {
    movieTitle: 'Se7en',
    movieImage: 'https://static.tvtropes.org/pmwiki/pub/images/se7en_poster.png',
    movieRelease: '1995',
    movieReview:'',
  },
  {
    movieTitle: '12 Angry Men',
    movieImage: 'https://m.media-amazon.com/images/M/MV5BNDhjMjE4NDItZTkyOC00NjIwLWI0MDQtYTJhZjY2YzlkMDQ0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg',
    movieRelease: '1957',
    movieReview:'',
  },
  {
    movieTitle: 'Harry Potter and the Half-Blood Prince',
    movieImage: 'https://static.wikia.nocookie.net/harrypotter/images/4/45/Harry_and_Dumbledore_HBPF_promo.jpg/',
    movieRelease: '2009',
    movieReview:'',
  },
  {
    movieTitle: 'Jaws',
    movieImage: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/192/2021/05/10145225/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg',
    movieRelease: '1975',
    movieReview:'',
  }
];

function App() {
  const[movies, setMovies] = useState(allMovies)
  return (
    <div className="App">
      <section className="welcomeSection">
        <h1>Welcome, {singleUser.name}</h1>
        <p>Todays date is: {singleUser.todaysDate}</p>
      </section>
      <Movies movies={movies} />
    </div>
  )
}

export default App;
