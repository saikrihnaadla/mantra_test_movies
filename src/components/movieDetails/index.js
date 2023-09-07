import "./index.css"


const MovieDetails =( props)=>{
    const{moviesData} = props
    const {image, name, message, date, rating} = moviesData
    return(
            <div className ="movie-bg-container">
                    <img src={image} alt={name} className="image-size"/>
                    <div className="rating-conatiner">
                        <h1 className="rating-number">{rating}</h1>
                        <h1 className="rating">Rate</h1>
                    </div>
                    <h1 className ="movie-Name">{name}</h1>
                    <p className="rating-number">{message}</p>
                    <div className="date-container">
                        <h1 className = "date-style">{date}</h1>
                    </div>
                </div>
 
    )
}

export default MovieDetails