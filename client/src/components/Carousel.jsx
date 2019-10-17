import React from "react";
import {CarouselContainer, MetaContainer, SlideContainer, CaroImage} from "./styles.js"


var header = "https://housesvitavann.s3-us-west-1.amazonaws.com/";

class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentImage: 0
    }
    this.forwardClick = this.forwardClick.bind(this);
    this.backwardClick = this.backwardClick.bind(this);
  }

  forwardClick(){
    if(this.state.currentImage === this.props.caroHouses.length-1){
      return this.setState({
        currentImage : 0
      })
    }
    return this.setState(prevState => ({ currentImage: prevState.currentImage + 1}))
  }

  backwardClick(){
    if (this.state.currentImage === 0) {
      const lengthOfHouses = this.props.caroHouses.length - 1;
      return this.setState({ currentImage: lengthOfHouses });
    }
    return this.setState(prevState => ({
      currentImage: prevState.currentImage - 1
    }))
  }

  render() {
    const currentCaroHouses = this.props.caroHouses.length > 0 ? this.props.caroHouses[this.state.currentImage].url_pathway : '';

    return (
      <CarouselContainer>
        <button onClick={this.backwardClick}>prev</button>
        <CaroImage src={`${header}${currentCaroHouses}`} />
        <button onClick={this.forwardClick}>next</button>
        <SlideContainer>
        </SlideContainer>
        <MetaContainer>
        </MetaContainer>
      </CarouselContainer>
    );
  }
}

export default Carousel;