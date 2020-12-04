import React from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class Task2 extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            todos: ["First","Second","Third"],
            todoTemp:""
        }
    }

    deleteHandler = (index) => {
        const todos = this.state.todos.concat()
        todos.splice(index,1)
        this.setState({todos})
    }

    addHandler = event =>{
        this.setState({todoTemp: event.target.value});
    }

    submitHandler = event =>{
        event.preventDefault();
        if(this.state.todoTemp.trim()!==""){
            this.setState({
                todos: [...this.state.todos, this.state.todoTemp]
            })
        }else alert('Please fill the form');
    }

    render() {
        return (
            <div>
                <Container>
                    <TodoList todos={this.state.todos} onDelete={this.deleteHandler.bind(this)}/>
                    <br />
                    <TodoForm add={this.addHandler.bind(this)} submit={this.submitHandler.bind(this)}/>
                </Container>
            </div>
        )
    }
}

function TodoItem(props) {
    return(
        <div>
            <ListGroup.Item action variant="light" onClick={props.delete}>
                {props.name}
            </ListGroup.Item>
        </div>
    )
}

function TodoList(props) {
    let todos = props.todos.map((el,index) => {
        return <TodoItem key={index} delete={props.onDelete.bind(this,index)} name={el} />
    })
    return (
        <div>
            <ListGroup>
                {todos}
            </ListGroup>
        </div>
    )
}

function TodoForm(props) {
    return(
        <div>
            <Form onSubmit={props.submit}>
                <Form.Control type="text" placeholder="Enter todo" onChange={props.add} />
                <br />
                <Button variant="primary" type="submit" value="Submit">
                    Add
                </Button>
            </Form>
        </div>
    )
}
