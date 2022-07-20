import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import "../css/NavBar.css"
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    const {user} =useContext(Context)
    return (
        <Nav className="navbar navbar-dark bg-dark">
            <Container><NavLink className="ms-2 label" to={SHOP_ROUTE}>ХочуКуплю</NavLink>
                {user.isAuth
                    ?
                    <Nav className="ml-auto pages">
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button
                            className="ms-2"
                            variant={"outline-light"}
                            onClick={() => user.setIsAuth(false)}
                        >Выйти</Button>
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