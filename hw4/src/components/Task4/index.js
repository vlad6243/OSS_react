import React from 'react'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import Container from "react-bootstrap/Container";

const styleForTask = {
    textAlign:"center",
}

export default class Task4 extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            error: null,
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return (<div style={styleForTask}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>);
        } else {
            return (
                <div>
                    <Container>
                    <Table striped bordered hover>
                        <tbody>
                        {posts.map((row) => (
                            <tr key={row.id}>
                                <div><b>ID:</b> {row.id}</div>
                                <div><b>Title:</b> {row.title}</div>
                                <div><b>Body:</b> {row.body}</div>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    </Container>
                </div>
            )
        }
    }
}