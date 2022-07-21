import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import "../css/Auth.css"
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            style={{height: window.innerHeight - 54}}
            className="d-flex justify-content-center align-items-center"
        >
            <Card className="card p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-4"
                        placeholder="Введите ваш пароль..."
                    />
                    <Row className="d-flex justify-content-between mt-3 ps-1">
                        {isLogin ?
                            <div>
                                Нет аккаунта?
                                <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                        :
                            <div>
                                Есть аккаунт?
                                <NavLink
                                    to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                    </Row>
                    <Button
                        className="mt-3 align-self-end"
                        variant={"outline-success"}
                    >
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;