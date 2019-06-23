import React, { Component } from "react";

class swapi extends Component {
  constructor() {
    super();
    this.state = {
      character: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    fetch("https://swapi.co/api/people/1")
      //  .then(response => response.json())
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          //TODO: call error handling function (Error Boundary)
          console.log("wrong url");
          //     new Error("Something went wrong in api call")
        }
      })
      .then(data =>
        this.setState({
          character: data,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error: error,
          isLoading: false
        })
      );
  }
  render() {
    const { character, isLoading, error } = this.state;
    const name = isLoading ? "Loading ..." : character.name;
    if (error) {
      return <p>{error.message}</p>;
    }
    return (
      <div className="App">
        <h1>Hello {name}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default swapi;
