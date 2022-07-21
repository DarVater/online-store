import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/Big_star.png'

const DevicePage = () => {
    const device = {id: 1,
        name: "Iphone 12 pro",
        price: 35000,
        rating: 5,
        Img: 'http://localhost:5000/95ccd4d0-dfb8-4b3c-abbf-a38906c77eb1.jpg'
    }
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 1, title: 'Камера', description: '12 мп'},
        {id: 1, title: 'Процессор', description: 'Seleron4'},
        {id: 4, title: 'Кол-во ядер', description: '2'},
        {id: 5, title: 'Акамулятор', description: '4000'}
    ]
    return (
        <div>
            <Container>
                <Row className="mt-3">
                    <Col md={4} >
                        <Image width={300} height={300} src={device.Img}/>
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
                    {description.map((info,index) =>
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
};

export default DevicePage;