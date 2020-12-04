import React from 'react';

export default class Task6 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }

    onChange(){
        if(this.state.score >= 10) {
            this.setState({
                score:0
            })
        }else{
            this.setState({
                score: this.state.score + 1
            })
        }
    }

    render() {
        return(
            <div>
                <Result result={this.state.score} />
                <h2>Your score: {this.state.score}</h2>
                <button onClick={()=> this.onChange()}>Change your score</button>
            </div>
        )
    }
}

const Result =({result})=> {
    if( result>=1 && result <= 4) return <h1>Your result is poor</h1>
    if( result>=5 && result <= 7) return <h1>Your result is average</h1>
    if( result>=8 && result <= 10) return <h1>Your result is excellent</h1>
    return null
}