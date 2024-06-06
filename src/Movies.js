import Review from './Review'

let allReviews = [];

function Movie({movies}){
    const[reviews, setReviews] = useState(allReviews)
    return (
        <div className="movieContainer">
            <div className="moviePicture">
                <img src="{movieImage}" />
            </div>
            <div className="movieReview">
                <Review reviews={reviews}/>
            </div>
        </div>
    )
}


export default Movie;

