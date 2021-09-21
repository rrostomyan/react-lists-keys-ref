import React from "react";
import "./App.css";
import Li from "./components/Li";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    items: [1, 2, 3],
  };
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(`App did clicked`);
  }

  showRefExample = () => {
    this.ref.current.handleBtnClick();
  };
  componentDidMount() {
    alert("component did mount");

    this.timer = setInterval(() => {
      this.setState({
        items: [
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
        ],
      });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App did update");
  }

  componentWillUnmount() {
    console.log("App did unmount");
    if (this.timer) clearInterval(this.timer);
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <Li key={item} item={item} />
          ))}
        </ul>
        <button onClick={this.showRefExample}>Show ref example</button>
        <Button handleParentClick={this.handleClick} name="click me 1" />
        <Button ref={this.ref} name="click me 2" />
      </div>
    );
  }
}

export default App;
