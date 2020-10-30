import React, {useCallback, useMemo, useRef, useState} from 'react';
import { Form, Field } from 'react-final-form'
import {FORM_ERROR} from 'final-form';
import {notification, Button, Input, Row, Col, Select} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, SmileOutlined, UserOutlined} from "@ant-design/icons";
import {Logo} from '../../../common/components/Logo/Logo'
import './Registration.css';
import {Link, Redirect} from 'react-router-dom';
import validate, {FormValues} from "../../../common/utils/validators/userRegister";
import {useDispatch} from 'react-redux';
import {createUser} from "../../../redux/user/userActions";
import InputText from "../../../common/components/inputs/InputText/InputText";
import SelectInput from "../../../common/components/inputs/SelectInputText/SelectInput";
import OpenNotificationWithIcon from "../../../common/components/Notifications/NotificationPop";
import {UseApiQuery} from '../../../common/hooks/useApiQuery'
import ServiceSelectorScreen from "../../mainHome/ServiceSelector/ServiceSelectorScreen";
import InputPassword from "../../../common/components/inputs/InputPassword/InputPassword";

const { Option } = Select;
const openNotification = () => {
    notification.open({
        message: 'Registro Exitoso',
        description:
            'Se ha registrado correctamente tu cuenta',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
};
const openNotificationError = () => {
    notification.open({
        message: 'Registro Fallido',
        description:
            'No se ha registrado correctamente tu cuenta',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
};

const RegistrationScreen = () => {

    const firstNameRef = useRef<Input>(null);

    const cityItems = [
            {label: 'Bogotá', value: 2},
            {label: 'Medellín', value: 3},
            {label: 'Cali', value: 1},
            {label: 'Barranquilla', value: 4},
        ];
    const listOptionsCities = cityItems.map((item, index) =>
        <Option value={item.value} style={{ borderRadius:10 }} key={index}>{item.label}</Option>
    );
    const documentTypeItems = [
            {label: 'Cédula de ciudadania', value: 1},
            {label: 'Cédula de extranjería', value: 2},
            {label: 'Pasaporte', value: 3},
            {label: '(DNI)', value: 4},
        ];
    const listOptionsDocTypes = documentTypeItems.map((item, index) =>
        <Option value={item.value} style={{ borderRadius:10 }} key={index}>{item.label}</Option>
    )
    const {runRequests} = UseApiQuery();
    //const dispatch = useDispatch();
    const onSubmit = useCallback(async (values:FormValues)=>{
        console.log(values.firstName);
        const userData = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            cel: values.cel,
            password: values.password,
            documentId: values.documentId,
            TypeDocumentId: values.typeDocumentId,
            CityId: values.city,
        };

        const createUserResponse = await runRequests({runType:'parallel'})(
            'createUser',
        )(() => createUser(userData));

        if (!createUserResponse[0].error){
            openNotification();
             return <Redirect to={`/login`}/>
        } else {
            openNotificationError();
        }

    },[runRequests]);
    //console.log('estado del RESPONSE',response);

    return(
        <div style={styles.container}>
            <Row className={'titleContainer'}>
                <h2 className={'titleText'}>Registro</h2>
            </Row>

            <Form<FormValues>
                onSubmit={onSubmit}
                validate={validate}>
                {({handleSubmit, submitting, submitError}) => {
                    return (
                        <div>
                            <div className={'inputsContent'}>
                                    <p className={'infoText'}>No te preocupes, los datos recolectados son para  poder prestarte un mejor servicio y tener  todos los datos en caso
                                        de alguna emergencia.</p>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                                    <Col span={12} style={{marginTop:15}}>
                                        <Field<string> name={'firstName'}>
                                            {({input, meta}) => (
                                                <InputText name={'firstName'} label={'Nombre'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                                            )}
                                        </Field>
                                    </Col>
                                    <Col span={12} style={{marginTop:15}}>
                                        <Field<string> name={'lastName'}>
                                            {({input, meta}) => (
                                                <InputText name={'lastName'} label={'Apellido'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                                            )}
                                        </Field>
                                    </Col>
                                </Row>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                                    <Col span={12} style={{marginTop:15}}>
                                        <Field<string> name={'email'}>
                                            {({input, meta}) => (
                                                <InputText name={'email'} label={'Correo Electrónico'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                                            )}
                                        </Field>
                                    </Col>

                                    <Col   style={{marginTop:15}} span={12}>
                                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }} className="inputs">
                                            <Col>
                                                <Field<string> name={'typeDocumentId'}>
                                                    {({input, meta}) => (
                                                        <SelectInput name={'typeDocumentId'} label={'Tipo de documento'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} listOptions={listOptionsDocTypes} />
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col>
                                                <Field<string> name={'documentId'}>
                                                    {({input, meta}) => (
                                                        <InputText name={'documentId'} label={'documento'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} />
                                                    )}
                                                </Field>
                                            </Col>

                                        </Row>
                                    </Col>
                                </Row>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                                    <Col span={12} style={{marginTop:15}}>
                                        <Field<string> name={'city'}>
                                            {({input, meta}) => (
                                               <SelectInput name={'city'} label={'Selecciona Ciudad'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} listOptions={listOptionsCities} />
                                            )}
                                        </Field>
                                    </Col>

                                    <Col span={12} style={{marginTop:15}}>
                                        <Field<string> name={'cel'}>
                                            {({input, meta}) => (
                                                <InputText name={'cel'} label={'Celular'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                                            )}
                                        </Field>
                                    </Col>
                                </Row>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                                    <Col span={12} style={{marginTop:15}}>
                                        <Field<string> name={'password'}>
                                            {({input, meta}) => (
                                                <InputPassword name={'password'} label={'Contraseña'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                                            )}
                                        </Field>

                                    </Col>

                                    <Col span={12} style={{marginTop:15}}>
                                        <Field<string> name={'passwordConfirmation'}>
                                            {({input, meta}) => (
                                                <InputPassword name={'passwordConfirmation'} label={'Confirma contraseña'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                                            )}
                                        </Field>
                                    </Col>
                                </Row>
                                {submitError && (
                                    <div style={styles.inputsRow}>
                                        <div style={styles.marginInputs}>
                                            <label color={'red'}>{submitError}</label>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Row style={{justifyContent:'center'}}>
                                <Col>
                                    <Link to='/Login'>
                                        <Button
                                            onClick={() => console.log('')}
                                            style={styles.button}
                                            type="primary"
                                            size={`large`}
                                        >
                                            Cancelar
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Button
                                        onClick={handleSubmit}
                                        style={styles.button2}
                                        type="primary"
                                        size={`large`}
                                        disabled={submitting}
                                    >
                                        Registro
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    );
                }}
            </Form>
        </div>

    )
};

export default RegistrationScreen;

const styles = {
    container:{
        width:'40%',
        padding:50,
        borderRadius: 15,
        shadowBlur:50,
        elevation:6,
        boxShadow: '0.2em 0 0.1em rgba(0, 0, 0, 0.1), -0.2em 0 0.4em rgba(0, 0, 0, 0.1)',
},
    titleContainer:{
        fontFamily:'Montserrat',
    },
    title:{
        color:'#28327F',
        paddingVertical:150
    },
    button:{
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
    button2:{
        color:'#FFF',
        backgroundColor: '#28327F',
        borderWidth:0,
        borderRadius:15,
        margin:10,
        alignSelf: 'center',
        paddingHorizontal: 100,
        paddingRight:20,
        paddingLeft:20
    },
    infoText:{
        color:'#28293D',
        fontSize:15,
    },
    inputsRow: {

    },
    marginInputs: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 10,
    },
};
