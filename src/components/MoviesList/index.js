import {Component} from "react"
import "./index.css"
import MovieDetails from "../movieDetails/index"


const moviesDataList = [{
    id:1,
    date:"01/09/2023",
    name:"Indiana Jones",
    image:"https://pbs.twimg.com/media/FxZCpf2aYAAEBrH?format=jpg&name=large",
    message:"2023 4hr 34min",
    rating:6.9,
    
},
{
    id:2,
    date:"02/09/2023",
    name:"No Hard Feeling",
    image:"https://m.media-amazon.com/images/M/MV5BMjg3N2M3OWUtZGQ3NC00OGI1LTllZDUtMTdiYWQxMTk0YTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    message:"2023 3hr 24min",
    rating:6.9
},
{   id:3,
    date:"03/09/2023",
    name:"Flash",
    image:"https://images.indianexpress.com/2023/04/The-Flash.jpg",
    message:"2023 4hr",
    rating:6.9
},
{
    id:4,
    date:"04/09/2023",
    name:"Iron man",
    image:"https://media.contentapi.ea.com/content/dam/news/www-ea/images/2022/09/ea-motive-new-title-teaser-16x9-featured.jpg.adapt.crop191x100.628p.jpg",
    message:"2023 4hr",
    rating:6.9
},
{   id:5,
    date:"05/09/2023",
    name:"Avengers 1",
    image:"https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.jpg",
    message:"2023 4hr",
    rating:6.9
},
{
    id:6,
    date:"06/09/2023",
    name:"Avengers age of aultron",
    image:"https://www.koimoi.com/wp-content/new-galleries/2023/07/marvel-copied-final-battle-sequence-of-the-avengers-from-a-cartoon-001.jpg",
    message:"2023 4hr",
    rating:6.9
},
https://github.com/saikrihnaadla/mantra_coding_test.git
{
    id:7,
    date:"07/09/2023",
    name:"Super Man",
    image:" https://www.indiewire.com/wp-content/uploads/2022/07/SML111a_0251r.jpg?w=600&h=337&crop=1",
    message:"2023 4hr",
    rating:6.9
},
{
    id:8,
    date:"08/09/2023",
    name:"indiana jones",
    image:"https://www.koimoi.com/wp-content/new-galleries/2023/07/marvel-copied-final-battle-sequence-of-the-avengers-from-a-cartoon-001.jpg",
    message:"2023 4hr",
    rating:6.9
},

{
    id:9,
    date:"08/09 /2023",
    name:"indiana jones",
    image:"https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.jpg",
    message:"2023 4hr",
    rating:6.9
},

]


class MoviesList extends Component{

    state = {fromDate:"",
            toDate:"",
        moviesData:moviesDataList}

    fromOnChangeDate = (event)=>{
        console.log(event.target.value)
        this.setState({fromDate:event.target.value})
        this.setState({moviesData:moviesDataList})
        
    }

    onChangeToDate= (event)=>{
        const value = event.target.value
        this.setState({toDate:value})
        this.setState({moviesData:moviesDataList})
      
    }

    onSubmit=(event)=>{
        event.preventDefault()

        const{fromDate, toDate, moviesData} = this.state
        

        const splitingFromDate = fromDate.split("-")
        const splittingToDate = toDate.split("-")
        console.log(splittingToDate)

        const fromdateNo = splitingFromDate[2]
        const todateNo = splittingToDate[2]

        console.log(fromdateNo)
        console.log(todateNo)
       
        
        const newList = moviesData.filter(eachObject=>eachObject.id>=fromdateNo && eachObject.id<=todateNo)
        console.log(newList)
        this.setState({moviesData:newList})
        
    }

    render(){
        const{moviesData} = this.state
        const {fromDate, toDate} = moviesData
        return(
            <div className="bg-container">
                <form className="input-container">
                    <h1>From</h1>
                    <input type ="date" onChange={this.fromOnChangeDate} value={fromDate}/>
                    <h1>To</h1>
                    <input type= "date" onChange={this.onChangeToDate} value={toDate}  />
                    <button type= "submit"
                    className = "button-style" onClick = {this.onSubmit}
                    >Submit</button>
                </form>
                <div className = "movies-list-conatnier">
                    {moviesData.map(eachObject=>
                        <MovieDetails moviesData={eachObject} key={eachObject.id}/>
                    )}
                </div>
               
            </div>
        )
    }
}

export default MoviesList