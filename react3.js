import React from 'react';
import ReactDOM from 'react-dom/client';

// Custom class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// React Component using the Person class
class GreetingComponent extends React.Component {
  constructor(props) {
    super(props);

    // Creating an instance of the Person class
    this.personInstance = new Person(props.name, props.age);

    // Setting initial state with a message from the class instance
    this.state = {
      introduction: this.personInstance.introduce(),
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.introduction}</h1>
      </div>
    );
  }
}

// Get a reference to the root element
const rootElement = document.getElementById('root');

// Create a root for rendering
const root = ReactDOM.createRoot(rootElement);

// Rendering the GreetingComponent into the DOM
root.render(<GreetingComponent name="Alice" age={30} />);
