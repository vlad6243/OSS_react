import React from 'react';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
    };
    // change code below this line
    this.addItem = this.addItem.bind(this);
    // change code above this line
  }

  addItem() {
    this.setState(({ itemCount }) => ({
      itemCount: itemCount + 1,
    }));
  }

  render() {
    return (
      <div>
        {/* change code below this line */}
        <button onClick={this.addItem}>Click Me</button>
        {/* change code above this line */}
        <h1>Current click count: {this.state.itemCount}</h1>
      </div>
    );
  }
}

const Task = () => {
  return (
    <div className="task">
      <ClickCounter />
    </div>
  );
};

export default Task;
