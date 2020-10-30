import React, {useState, useEffect, useCallback, FC} from 'react';
import {Button, Col, Input, Row, Select, Steps} from 'antd';
import {Logo} from "../../../Logo/Logo";
import {Field, Form} from "react-final-form";
import validate, {FormValues} from "../../../../utils/validators/login";
import InputText from "../../../inputs/InputText/InputText";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {Link} from "react-router-dom";
import SelectInput from "../../../inputs/SelectInputText/SelectInput";
import CalendarInput from "../../../inputs/CalendarInput/CalendarInput";
import TextAreaInput from "../../../inputs/TextAreaInput/TextAreaInput";
import Map from "../../GoogleMap/GoogleMap";

import './ServiceInfoForm.css'
const { Option } = Select;

interface Props {
    pressCallBack?: () => void;
}
const ServiceInfoForm : FC<Props> =({pressCallBack})=> {

    const documentTypeItems = [
        {label: 'Cédula de ciudadania', value: 1},
        {label: 'Cédula de extranjería', value: 2},
        {label: 'Pasaporte', value: 3},
        {label: '(DNI)', value: 4},
    ];
    const listOptionsDocTypes = documentTypeItems.map((item, index) =>
        <Option value={item.value} style={{ borderRadius:10 }} key={index}>{item.label}</Option>
    )

    return(
        <>

            <Row>
                <span className={'title'}>
                    Información de servicioS
                </span>
            </Row>
            <Row style={styles.marginRow} gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col className="gutter-row" span={12}>
                    <Field<string> name={'firstName'}>
                        {({input, meta}) => (
                            <InputText name={'firstName'} label={'Dirección'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                        )}
                    </Field>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Field<string> name={'helperAddress'}>
                        {({input, meta}) => (
                            <TextAreaInput label={'Ayuda'} placeHolder={'Escribe una ayuda porfa :)'} name={'helperAddress'} value={input.value} onChange={input.onChange} metaError={meta.error}/>
                        )}
                    </Field>
                </Col>
            </Row>

            <Row style={styles.marginRow} gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col className="gutter-row" span={12}>
                    <Field<string> name={'healthyEntity'}>
                        {({input, meta}) => (
                            <TextAreaInput
                                label={'¿Qué se debe hacer en el servicio?'}
                                placeHolder={'Describe detalladamente qué se debe hacer el servicio'}
                                name={'helperAddress'}
                                value={input.value}
                                onChange={input.onChange}
                                metaError={meta.error}/>
                        )}
                    </Field>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Field<string> name={'healthyEmergency'}>
                        {({input, meta}) => (
                            <TextAreaInput
                                label={'Recomendaciones'}
                                placeHolder={'Escribe las recomendaciones que nuestros cuidadores deben tener al momento de cumplir el servicio'}
                                name={'helperAddress'}
                                value={input.value}
                                onChange={input.onChange}
                                metaError={meta.error}/>
                        )}
                    </Field>
                </Col>
            </Row>

            <Row>
                <span className={'title'}>
                    Información de emergencia
                </span>
            </Row>
            <Row style={styles.marginRow} gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col  className="gutter-row" span={12}>
                    <Field<string> name={'contactName'}>
                        {({input, meta}) => (
                            <InputText name={'contactName'} label={'Nombre contacto de emergencia'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error}/>
                        )}
                    </Field>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Field<string> name={'contactLastName'}>
                        {({input, meta}) => (
                            <InputText name={'contactLastName'} label={'Apellido contacto de emergencia'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                        )}
                    </Field>
                </Col>

            </Row>

            <Row  style={styles.marginRow} gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col  className="gutter-row" span={12}>
                    <Field<string> name={'cel'}>
                        {({input, meta}) => (
                            <InputText name={'cel'} label={'Número contacto de emergencia'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error}/>
                        )}
                    </Field>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Field<string> name={'protocole'}>
                        {({input, meta}) => (
                            <TextAreaInput
                                label={'Protocolo'}
                                placeHolder={'Escribe el protocolo de seguridad a complir en caso de emergencia'}
                                name={'helperAddress'}
                                value={input.value}
                                onChange={input.onChange}
                                metaError={meta.error}/>
                        )}
                    </Field>
                </Col>
            </Row>



            <Col>
                <Button
                    onClick={pressCallBack}
                    style={styles.button2}
                    type="primary"
                    size={`large`}
                >
                    Siguientes
                </Button>
            </Col>
        </>
    )
};

export default ServiceInfoForm;

const styles = {
    button2:{
        color:'#28327F',
        backgroundColor: '#FFCC00',
        borderWidth:0,
        borderRadius:15,
        margin:10,
        alignSelf: 'center',
        paddingHorizontal: 100,
        paddingRight:20,
        paddingLeft:20
    },
    marginRow:{
        marginTop:10
    }
}
