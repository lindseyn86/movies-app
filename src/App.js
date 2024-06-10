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
