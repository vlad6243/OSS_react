import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {CardDeck} from "react-bootstrap";

export default function ListItems(props) {

    return(
        <Container>
            <CardDeck >
            {props.itemsArray.map( el => {
                return <Item id={el.id} itemsArray = {el}/>
            })}
            </CardDeck>
        </Container>
    )
}

function Item(props) {
    return(

            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={props.itemsArray.img} />
                <Card.Body>
                    <Card.Title>{props.itemsArray.name}</Card.Title>
                    <Card.Text>
                        Cost: {props.itemsArray.cost}
                    </Card.Text>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
            </Card>
    )
}