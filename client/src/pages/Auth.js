import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import "../css/Auth.css"
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try { 
            let data;
            if (isLogin) {

                data = await login(email, password)
                console.log('login')
                console.log(data)
            } else {
                data = await registration(email, password, 'ADMIN')
                console.log('registration')
                console.log(data)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container
            style={{height: window.innerHeight - 54}}
            className="d-flex justify-content-center align-items-center"
        >
            <Card className="card p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="mt-4"
                        type="password"
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
                        onClick={click}
                    >
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;