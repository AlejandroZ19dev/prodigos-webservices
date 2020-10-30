import React, {useCallback} from 'react';
import { Form, Field } from 'react-final-form'
import {notification, Button, Input, Col, Row} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, SmileOutlined} from "@ant-design/icons";
import {Logo} from '../../../common/components/Logo/Logo'
import InputText from "../../../common/components/inputs/InputText/InputText";
import InputPassword from "../../../common/components/inputs/InputPassword/InputPassword";

import {Link, Redirect} from "react-router-dom";
import './Login.css';
import validate, {FormValues} from "../../../common/utils/validators/login";
import {useDispatch} from "react-redux";
import {thunkSignIn} from "../../../redux/user/userActions";
import {UseApiQuery} from '../../../common/hooks/useApiQuery'


const openNotification = () => {
    notification.open({
        message: 'Inicio de sesion exitoso',
        description:
            'Se ha iniciado correctamente tu cuenta',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
};
const openNotificationError = () => {
    notification.open({
        message: 'Inicio de sesion Fallido',
        description:
            'No se ha iniciado incorrectamente tu cuenta',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
};


const LoginScreen = () => {

    const {runRequests} = UseApiQuery();
    //const dispatch = useDispatch();

    const setData = useCallback((data)=>{
            localStorage.setItem('dataSession',JSON.stringify(data));
    },[]);


    const onSubmit = useCallback(async (values:FormValues)=>{
        //const response= await dispatch(thunkSignIn(values.email, values.password, 1))
        const response = (await runRequests({runType:'parallel'})('thunkSignIn')(()=>
            thunkSignIn(values.email, values.password, 1)
        ))[0];
        if (!response.error){
            openNotification();
        } else {
            openNotificationError();
        }

    },[runRequests]);

    return(
        <div style={styles.container}>
            <Row justify="center" align="middle">
                <Col span={24}>
                    <div className={'wrapper2'}>
                    <Logo size={1.5}/>
                    <Form<FormValues>
                        onSubmit={onSubmit}
                        validate={validate}>
                        {({handleSubmit, submitting, submitError}) => {
                            return (
                                <div>
                                    <div className={'generalMargin'}>
                                        <Row className="margin-top-1" gutter={15}>
                                            <Col span={24} style={{marginTop:10}}>
                                                <Field<string> name={'email'}>
                                                    {({input, meta}) => (
                                                        <InputText name={'email'} label={'Correo Electrónico'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col span={24}  style={{marginTop:15}}>
                                                <Field<string> name={'password'}>
                                                    {({input, meta}) => (
                                                        <InputPassword name={'password'} label={'Contraseña'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                                                    )}
                                                </Field>
                                            </Col>
                                        </Row>
                                        <Row className="margin-top-1 recoverPasswordText-Wrapper" >
                                            <Col className="recoverPasswordText-Wrapper">
                                                <Link to='/recuperar-contrasena'>
                                                    <span className={'recoverPasswordText'}>¿Olvidaste tu contraseña?</span>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                    {submitError && (
                                        <div>
                                            <div>
                                                <label color={'red'}>{submitError}</label>
                                            </div>
                                        </div>
                                    )}

                                    <Row style={{justifyContent:'center'}}>
                                        <Col>
                                            <Link to='/Registro'>
                                                <Button
                                                    onClick={() => console.log('')}
                                                    style={styles.button}
                                                    type="primary"
                                                    size={`large`}
                                                >
                                                    Regístrate
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
                                                Iniciar
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        }}
                    </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default LoginScreen;

const styles = {
    container:{
        padding:50,
        borderRadius: 15,
        shadowBlur:50,
        elevation:6,
        boxShadow: '0.2em 0 0.1em rgba(0, 0, 0, 0.1), -0.2em 0 0.4em rgba(0, 0, 0, 0.1)',
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
    },};
