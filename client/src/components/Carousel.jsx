import React from "react";
import Slide from './Slide.jsx';
import {CarouselContainer, MetaContainer, SlideContainer, CaroImage, ButtonStyler} from "./styles.js"


var header = "https://housesvitavann.s3-us-west-1.amazonaws.com/";

class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentImage: 0,
      translateValue: 0,
    }
    this.forwardClick = this.forwardClick.bind(this);
    this.backwardClick = this.backwardClick.bind(this);
    this.isPhotoVerified = this.isPhotoVerified.bind(this);
    this.renderSlide = this.renderSlide.bind(this);
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

  isPhotoVerified () {
    if (this.props.caroHouses.length > 0 ) {
      if (this.props.caroHouses[this.state.currentImage].verified === 1) {
        return 'Photo Verified by Airbnb'
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  renderSlide() {
    return this.props.caroHouses && this.props.caroHouses.map((image, idx) => <Slide key={idx} image={`${header}${image.url_pathway}`}/>)
  }

  render() {
    const currentCaroHouses = this.props.caroHouses.length > 0 ? this.props.caroHouses[this.state.currentImage].url_pathway : '';
    const currentCaroInfo = this.props.caroHouses.length > 0 ? this.props.caroHouses[this.state.currentImage].caption : '';
    return (
      <CarouselContainer>
        <ButtonStyler onClick={this.backwardClick}>&#8249;</ButtonStyler>
        <CaroImage src={`${header}${currentCaroHouses}`} />
        <ButtonStyler onClick={this.forwardClick}>&#8250;</ButtonStyler>
        <SlideContainer>
          {this.renderSlide()}
        </SlideContainer>
        <MetaContainer>
        <p>{currentCaroInfo}</p>
        <p>{this.isPhotoVerified()}</p>
        </MetaContainer>
      </CarouselContainer>
    );
  }
}

export default Carousel;