import React from 'react';
import debounce from 'lodash/debounce';

class WindowSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: '', width: '' };
  }

  componentDidMount() {
    this.storeWindowSize(this.getWindowSize());
  }

  componentWillUnmount() {
    this.onResize.cancel();
  }

  getWindowSize() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    return { height, width };
  }

  storeWindowSize({ height, width }) {
    this.setState({ height, width });
  }

  onResize = debounce(() => {
      this.storeWindowSize(this.getWindowSize());
  },500)

  render() {
    const { height, width } = this.state;
    return (
      <div>
        <h2>Window size</h2>
        <div>
          Window height: {height} px, window width: {width} px
        </div>
        <br />
        <textarea  onChange={this.onResize}/>
      </div>
    );
  }
}

const Task = () => {
  return (
    <div className="task">
      <WindowSize />
    </div>
  );
};

export default Task;
