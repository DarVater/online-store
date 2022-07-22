import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/Big_star.png'
import {useParams} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {fetchOneDevices } from "../http/deviceAPI";

const DevicePage = observer(() => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [])

    return (
        <div>
            <Container>
                <Row className="mt-3">
                    <Col md={4} >
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{device.name}</h2>
                            <div
                                style={{
                                    background: `url(${bigStar}) no-repeat center center`,
                                    width: 240, height:240,
                                    backgroundSize: 'cover',
                                    fontSize: 64

                                }}
                                className="d-flex align-items-center justify-content-center"
                            >
                                {device.rating}
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                        >
                            <h3>От: {device.price} грн.</h3>
                            <Button variant={"outline-dark"}>Добавить в корзину</Button>
                        </Card>

                    </Col>

                </Row>
                <Row className="d-flex flex-column m-5">
                    <h1>Характеристики:</h1>
                    {device.info.map((info,index) =>
                        <Row
                            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}
                            key={info.id}
                        >
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
            </Container>
        </div>
    );
});

export default DevicePage;