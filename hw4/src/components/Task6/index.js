import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
import Button from "react-bootstrap/Button";

const styleForTask = {
    textAlign:"center",
}

export default class Task6 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded:false,
            images: []
        }
    }

    componentDidMount() {
        fetch("https://picsum.photos/v2/list?page=1&limit=10")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        images: result
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
        const { error, isLoaded, images } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return(
            <div style={styleForTask}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
            )
        } else {
            return (
                <div>
                    <Gallery images={this.state.images}/>
                </div>
            );
        }
    }
}

class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            showAuthor: false,
            authorName:''
        }
    }

    changeShowAuthor(name){
        this.setState({
            showAuthor: !this.state.showAuthor,
            authorName: name
        })
    }
    render() {
        return(
            <div>
                <Container>
                    <Carousel>
                        {this.props.images.map( el => (
                            <Carousel.Item key={el.id}>
                                <img
                                    className="d-block w-100"
                                    src={el.download_url}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <p>
                                        <Button onClick={() => this.changeShowAuthor()} variant="primary">
                                        Show author
                                        </Button>
                                    </p>
                                    <h2>
                                        {this.state.showAuthor
                                        ? <Author name={el.author} />
                                        : <p>-</p>}
                                    </h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </div>
        )
    }
}

function Author(props) {
    return <div>Author: {props.name}</div>
}