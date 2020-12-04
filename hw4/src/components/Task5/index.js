import React from 'react';

export default class Task5 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
        }
    }

    componentDidMount(){
    fetch("https://github.com/kkmkkkkk")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error:true
                });
            }
        )
}

    render() {
        if(this.state.error)  throw new Error('I crashed!');
        return (
            <div></div>
        );
    }
}