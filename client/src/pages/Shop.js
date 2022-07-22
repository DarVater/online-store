import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(brands => device.setBrands(brands))
        fetchDevices(null, null, 1, 2).then(devises => {
            device.setDevices(devises.rows)
            device.setTotalCount(devises.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(
            device.selectedType.id,
            device.selectedBrand.id,
            device.page,
            2
            // device.limit
        ).then(devises => {
            device.setDevices(devises.rows)
            device.setTotalCount(devises.count)
        })
    }, [device.selectedType, device.selectedBrand,device.page])

    return (
        <Container>
            <Row className="mt-2 ">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;