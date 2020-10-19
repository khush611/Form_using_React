import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      location: "",
      diet: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    event.target.type === "checkbox"
      ? this.setState({
          [event.target.name]: event.target.checked
        })
      : this.setState({
          [event.target.name]: event.target.value
        });
  }

  render() {
    return (
      <main>
        <form>
          <input
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Age"
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          {/* Create radio buttons for gender here */}
          <br />
          <label>Your location</label>
          <select
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="India">India</option>
            <option value="Nepal">Nepal</option>
            <option value="Sri Lanka">Sri Lanka</option>
          </select>
          {/* Create select box for location here */}
          <br />
          <label>
            <input
              type="checkbox"
              name="diet"
              checked={this.state.checked}
              onChange={this.handleChange}
            />
            Dietary Restriction
          </label>
          {/* Create check boxes for dietary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          {this.state.diet ? "yes" : "no"}
        </p>
      </main>
    );
  }
}

export default App;
