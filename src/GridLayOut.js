import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./Card";
import Favourite from "./Favourite";

export default class Example extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      favouriteCount:0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(id) {
    let index = this.state.movies.findIndex( (item) => item.imdbID === id);
    let data = this.state.movies[index];
    data.isFavourite = !data.isFavourite;
    let newMovies = [...this.state.movies];
    newMovies[index] = data;
    let newfavouriteCount = newMovies.filter((item)=>item.isFavourite).length;
    this.setState({movies:newMovies, favouriteCount: newfavouriteCount});
  }

  componentDidMount() {
    fetch("https://thoughtworksreactreduxmovies.firebaseio.com/movies.json")
      .then(results => results.json())
      .then(data => this.setState({ movies: data }));
  }

  render() {
    return (
      <div>
      <Favourite favouriteCount={this.state.favouriteCount} /> 
      <Container>
        <Row>
          {this.state.movies.map(data => (
            <Col sm="3">
              <Card Url={data.Poster} 
              Title={data.Title}
              Year={data.Year}
              Type={data.imdbRating}
              imdbID={data.imdbID}
              isFavourite={data.isFavourite}
              handleClick={this.handleClick}/>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    );
  }
}
