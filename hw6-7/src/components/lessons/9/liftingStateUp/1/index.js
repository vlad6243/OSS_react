import React from 'react';
import PropTypes from 'prop-types';

class VoteComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //   votesNumber: 0,
    // };
  }

  style = {
    padding: '8px',
    marginTop: '16px',
    border: 'solid 1px grey',
  };

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.state.votesNumber !== prevState.votesNumber) {
  //     this.props.onVote(this.state.votesNumber);
  //   }
  // }

  increase = () => {
    // this.setState(({ votesNumber }) => ({ votesNumber: votesNumber + 1 }));
      const numb = this.props.voteNumb + 1;
      this.props.onVote(numb)
  };

  decrease = () => {
    // this.setState(({ votesNumber }) => ({ votesNumber: votesNumber - 1 }));
      const numb = this.props.voteNumb - 1;
      this.props.onVote(numb)

  };

  render() {
    const { resolution, terminalNumber } = this.props;
    return (
      <div style={this.style}>
        <h6>Terminal number: {terminalNumber}</h6>
        <h3>Resolution: "{resolution}"</h3>
        <button onClick={this.decrease}>No</button>
        <button onClick={this.increase}>Yes</button>
      </div>
    );
  }
}

VoteComponent.propTypes = {
    voteNumb: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    onVote: PropTypes.func,
    terminalNumber:PropTypes.number.isRequired,
    resolution:PropTypes.string.isRequired
}

const VotingDisplay = ({ resolution, result }) => {
  return (
    <React.Fragment>
      <h1>Resolution: {resolution}</h1>
      <h2>Result: {result}</h2>
    </React.Fragment>
  );
};

VotingDisplay.propTypes = {
    resolution: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired
}

class VotingSystem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votesNumber: 0,
    };
  }

  onVote = (votesNumber) => {
    this.setState({ votesNumber});
  };

  render() {
    const { resolution } = this.props;
    const { votesNumber } = this.state;
    return (
      <React.Fragment>
        <VotingDisplay resolution={resolution} result={votesNumber} />
        <VoteComponent
          resolution={resolution}
          onVote={this.onVote}
          voteNumb={this.state.votesNumber}
          terminalNumber={1}
        />
        <VoteComponent
          resolution={resolution}
          onVote={this.onVote}
          voteNumb={this.state.votesNumber}
          terminalNumber={2}
        />
        <VoteComponent
          resolution={resolution}
          onVote={this.onVote}
          voteNumb={this.state.votesNumber}
          terminalNumber={3}
        />
      </React.Fragment>
    );
  }
}

VotingSystem.propTypes = {
    resolution:PropTypes.string.isRequired,
}

const resolution = 'Free beer to all programmers';

const Task = () => {
  return (
    <div>
      <VotingSystem resolution={resolution} />
    </div>
  );
};

export default Task;
