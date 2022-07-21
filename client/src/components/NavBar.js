import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import "../css/NavBar.css"
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";


const NavBar = observer(() => {
    const {user} =useContext(Context)
    const navigate = useNavigate()
    return (
        <Nav className="navbar navbar-dark bg-dark">
            <Container><NavLink className="ms-2 label" to={SHOP_ROUTE}>ХочуКуплю</NavLink>
                {user.isAuth
                    ?
                    <Nav className="ml-auto pages">
                        <Button
                            onClick={() => navigate(ADMIN_ROUTE)}
                            variant={"outline-light"}
                        >
                            Админ панель
                        </Button>
                        <Button
                            className="ms-2"
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto pages">
                        <Button
                            variant={"outline-light"}
                            onClick={() => user.setIsAuth(true) }
                        >Авторизация</Button>
                    </Nav>
                }
            </Container>

        </Nav>
    );

})

export default NavBar;