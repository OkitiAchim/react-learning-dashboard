import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Component not mounted ",
    };
  }

  componentDidMount() {
    console.log("Component Mounted");

    this.setState({
      message: "Component Successfully Mounted 🚀",
    });
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <h2>Lifecycle Demo (Class Component)</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default LifecycleDemo;
