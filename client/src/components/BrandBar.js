import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex  ">
            {device.brands.map(brand =>
            <Card
                style={{cursor: 'pointer' }}
                key={brand.id}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                onClick={() => device.setSelectedBrand(brand)}
                className="p-3 col-lg-auto"
            >
                {brand.name}
            </Card>)}

        </Row>
    );
});

export default BrandBar;