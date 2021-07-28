import React from 'react'
import { Card } from 'react-bootstrap';
import "./stories.css"
export default function Stories() {
    const carddata = [{ image: "logo192.png" }];
    return (
        <div className="containerpage" >
            <div className="row">
                <div className="col-sm">
                    <Card >
                        <Card.Img variant="top" src="logo192.png" alt="" height="200px" />
                        <Card.Body>
                            <Card.Title className="cardtitle">Card Title</Card.Title>
                            <Card.Text className="carddesc">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm">
                    <Card >
                        <Card.Img variant="top" src="logo192.png" height="200px"/>
                        <Card.Body>
                            <Card.Title className="cardtitle">Card Title</Card.Title>
                            <Card.Text className="carddesc">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    )
}
