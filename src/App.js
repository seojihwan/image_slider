import React, { Component } from "react";
// import "./App.css";
import data from "./data/data";
import Slide from "./Slide";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0],
    };
  }
  nextProperty = () => {
    const newIdx = this.state.property.idx + 1;
    this.setState({
      property: data.properties[newIdx],
    });
  };
  prevProperty = () => {
    const newIdx = this.state.property.idx - 1;
    this.setState({
      property: data.properties[newIdx],
    });
  };
  render() {
    const { properties, property } = this.state;
    return (
      <div className="App">
        <button
          onClick={() => this.nextProperty()}
          disabled={property.idx === data.properties.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => this.prevProperty()}
          disabled={property.idx === 0}
        >
          Prev
        </button>

        <div className="page">
          <div className="col">
            <div className={`active-slide-${property.idx}`}>
              <div
                className="slider-wrapper"
                style={{
                  transform: `translateX(-${
                    property.idx * (100 / properties.length)
                  }%)`,
                }}
              >
                {properties.map((property, id) => (
                  <Slide key={id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
