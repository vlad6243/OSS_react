import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default function PageItem(props) {

    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={props.item.img} />
                        <Card.Body>
                            <Card.Text>
                                {props.item.description}
                            </Card.Text>
                            <Card.Text>
                                Cost : {props.item.cost}
                            </Card.Text>
                            <Card.Text>
                                Amount: {props.item.amount}
                            </Card.Text>
                        </Card.Body>
                        <Button variant="primary">Buy</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}