import React from 'react'
import Button from 'react-bootstrap/Button';

const styleForTask = {
    textAlign:"center",
}

export default class Task1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            names: ["Vlad","Andrey","Oleg","Brad"],
            name:"Vlad"
        }
    }

    randomName(){
        let items = this.state.names;
        this.setState({
            name:items[Math.floor(Math.random() * items.length)]
        })
    }

    render() {
        return (
            <div style={styleForTask}>
                <h1>Random name: {this.state.name}</h1>
                <Button onClick={() => this.randomName()} variant="primary" >
                    Random name
                </Button>
            </div>
        )
    }
}
