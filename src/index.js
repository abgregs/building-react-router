import ReactDOM from "react-dom";
import React from "react";

import "./index.css";

import SelectMenu from './SelectMenu';

import App1 from "./complete/App-1";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <App1 />
    }
  }

  handleNavigate = (to) => {
   this.navigate(to);
  }

  navigate = (to) => {
    this.setState({
      component: to
    })
  }

  render() {
    return (
      <div className="container">
        <div className="w-full flex justify-end my-4">
          <SelectMenu activeComponent={this.state.component} handleNavigate={this.handleNavigate} />
        </div>
        <h1 className="app-title text-center text-3xl font-bold mb-8;">
          Top Surfing Destinations
        </h1>
          {this.state.component}
      </div>
    )
  }
}


ReactDOM.render(
  <AppContainer />,
  document.getElementById("root")
);
