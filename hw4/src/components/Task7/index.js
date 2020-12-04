import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import './style.css';

export default class Task7 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: [
                {name: "first", url: "https://google.com"}
            ],
            nameTemp: '',
            urlTemp: ''

        }
    }

    addBookmarks(){
        let bookmarkTemp = {
            name: this.state.nameTemp,
            url: this.state.urlTemp
        }
        this.setState({
            bookmarks:[...this.state.bookmarks,bookmarkTemp]
        })
    }

    addHandlerName = event =>{
        this.setState({nameTemp: event.target.value});
    }

    addHandlerUrl = event =>{
        this.setState({urlTemp: event.target.value});
    }

    clearForm(){
        this.setState({
            nameTemp:"",
            urlTemp:""
        })
    }

    validateForm(){
        if(this.state.nameTemp.trim() ==="" && this.state.urlTemp.trim() ===""){
            alert('Please fill the form');
            return false
        }

        let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        let regex = new RegExp(expression);
        if (!this.state.urlTemp.match(regex)) {
            alert('Please use a valid url');
            return false;
        }

        return true;
    }

    submitHandler = event =>{
        event.preventDefault();
        if(this.validateForm()){
            this.addBookmarks();
            this.clearForm();
        }
    }

    deleteBookmark(index){
        const bookmarks = this.state.bookmarks.concat()
        bookmarks.splice(index,1)
        this.setState({bookmarks})
    }

    render() {
        return(
            <Container>
                <div className="header clearfix">
                    <nav>
                    </nav>
                    <h3 className="text-muted">My Bookmarker</h3>
                </div>

                <div className="jumbotron">
                    <h2>Bookmark your favorite Sites</h2>
                    <Form onSubmit={this.submitHandler}>
                        <Form.Group>
                            <Form.Label><b>Site Name</b></Form.Label>
                            <Form.Control type="text"
                                          placeholder="Website Name"
                                          value={this.state.nameTemp}
                                          onChange={this.addHandlerName}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><b>Site URL</b></Form.Label>
                            <Form.Control type="text"
                                          value={this.state.urlTemp}
                                          placeholder="Website URL"
                                          onChange={this.addHandlerUrl}/>
                        </Form.Group>
                        <Button type="submit" variant="primary">Submit</Button>
                    </Form>
                </div>

                <div className="row marketing">
                    <div className="col-lg-12">
                        <div id="bookmarksResult">
                            {this.state.bookmarks.map((el,index) => (
                                <Bookmark key={index} name={el.name} url={el.url} delete={this.deleteBookmark.bind(this)}/>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <p>&copy; 2019 Bookmarker, Inc. | Developed by Rotimi Best</p>
                </footer>
            </Container>
        )
    }
}

function Bookmark(props) {
    return(
        <div className="well">
            <h3>{props.name}&nbsp;
                <Button href={props.url}
                        target="_blank"
                        variant="outline-dark">
                    Visit
                </Button>&nbsp;
                <Button onClick={props.delete} variant="danger">Delete</Button>
            </h3>
        </div>
    )
}