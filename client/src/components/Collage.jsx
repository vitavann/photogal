import React from "react";
import axios from "axios";
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
      houses: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/houses").then(res => {
      console.log(this.state.houses);
      this.setState({ houses: res.data.slice(0, 5) });
      console.log(this.state.houses);
      console.log(this.state.houses[0]);
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

  render() {
    return <div>{this.renderImages()}</div>;
  }
}

export default Collage;
