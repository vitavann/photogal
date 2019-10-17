import React from "react";
import axios from "axios";
import Collage from './Collage.jsx'

var header = "https://housesvitavann.s3-us-west-1.amazonaws.com/"

class App extends React.Component {
    render () {
        return (
            <div>
              <Collage />
            </div>
        )
    }
}

export default App;