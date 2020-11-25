import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";

export default function ProfilePage(props) {
    return(
        <Container>
            <Card>
                <Card.Header as="h5">Profile Page</Card.Header>
                <Card.Body>
                    <Card.Img src={props.profile.img}/>
                    <Card.Title>{props.profile.fName + ' ' + props.profile.lName}</Card.Title>
                    <Card.Text>
                        <p>Age: {props.profile.age}</p>
                        <p>Phone :{props.profile.phone}</p>
                        <p>Email: {props.profile.email}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}