import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default class Task3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            numb:0
        }
    }

    random(){
        let rand = this.props.min + Math.random() * (this.props.max + 1 - this.props.min);
        this.setState({
            numb: Math.floor(rand)
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState.numb)
        if(nextState.numb % 2 == 0) return true;
        else return false;
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Random nubmer: {this.state.numb}</h1>
                    <br/>
                    <Button onClick={() => this.random()} variant="primary" >generate</Button>
                </Container>
            </div>
        )
    }
}
