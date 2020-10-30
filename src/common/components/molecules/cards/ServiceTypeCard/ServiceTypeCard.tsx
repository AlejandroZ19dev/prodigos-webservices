import React, {FC} from 'react';
import {Button, Col, Row} from "antd";
import './ServiceTypeCard.css'
import {Link, Redirect} from "react-router-dom";

interface Props {
    title: string;
    description: string;
    img: any;
    path: string
}

const ServiceTypeCard:FC<Props> = ({img, title, description,path}) => {
    return(
        <div style={styles.container}>
            <div style={{ width: 350 }}>
                <Row  className={'titleContainer'}>
                    <img src={img} height={35} alt={''}/>
                    <h2 className={'titleCard'}>{title}</h2>
                </Row>
                <Row>
                    <p className={'description'}>{description}</p>
                </Row>

                <Link to={path}>
                    <Button
                        onClick={()=>{}}
                        className={'button'}
                        type="primary"
                        size={`large`}
                    >
                        Solicitar
                    </Button>
                </Link>
            </div>
        </div>
    )
};

export default ServiceTypeCard;
const styles = {
    container: {
        padding: 35,
        borderRadius: 15,
        shadowBlur: 50,
        boxShadow: '0.2em 0 0.1em rgba(0, 0, 0, 0.1), -0.2em 0 0.4em rgba(0, 0, 0, 0.1)',
    },
}
