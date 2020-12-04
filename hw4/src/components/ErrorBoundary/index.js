import React from 'react';
import Container from 'react-bootstrap/Container';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };

    }

    render() {
        if (this.state.hasError) {
            return(
                <Container>
                    <h1>Что-то пошло не так.</h1>
                </Container>
            )
        }

        return this.props.children;
    }
}