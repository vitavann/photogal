import React from "react";
import axios from "axios";
import Carousel from './Carousel.jsx';
import {
  CollageContainer,
  SoloContainer,
  CollageImage,
  SoloResize,
  CollageResize,
  ParentContainer
} from "./styles.js";


var header = "https://housesvitavann.s3-us-west-1.amazonaws.com/";

class Collage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      carouselHouses: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/houses").then(res => {
      this.setState({ houses: res.data.slice(0, 5), carouselHouses: res.data.slice(0,10)});
    });
  }

  renderImages() {
    return (
      this.state.houses.length > 0 && (
        <ParentContainer>
          <SoloContainer>
            <CollageImage>
              <SoloResize
                key={`$house.id`}
                src={`${header}${this.state.houses[0].url_pathway}`}
              />
            </CollageImage>
          </SoloContainer>
          <CollageContainer>
            <CollageImage>
              <CollageResize
                src={`${header}${this.state.houses[1].url_pathway}`}
              />
            </CollageImage>
            <CollageImage>
              <CollageResize
                src={`${header}${this.state.houses[2].url_pathway}`}
              />
            </CollageImage>
            <CollageImage>
              <CollageResize
                src={`${header}${this.state.houses[3].url_pathway}`}
              />
            </CollageImage>
            <CollageImage>
              <CollageResize
                src={`${header}${this.state.houses[4].url_pathway}`}
              />
            </CollageImage>
          </CollageContainer>
        </ParentContainer>
      )
    );
  }

  renderCarousel() {
    return <Carousel caroHouses={this.state.carouselHouses} />;
  }

  render() {
    return <div>{this.renderCarousel()}</div>;
  }
}

export default Collage;
