import React, {useCallback} from 'react';
import { Form, Field } from 'react-final-form'
import {notification, Button, Input, Col, Row} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, SmileOutlined, UserOutlined} from "@ant-design/icons";
import {Logo} from '../../../common/components/Logo/Logo'
import InputText from "../../../common/components/inputs/InputText/InputText";
import InputPassword from "../../../common/components/inputs/InputPassword/InputPassword";
import CustomButton from "../../../common/components/Button";
import {Link} from "react-router-dom";
import './RecoverPassword.css';
import validate, {FormValues} from "../../../common/utils/validators/recoverPassword";
import SelectInput from "../../../common/components/inputs/SelectInputText/SelectInput";
import {useDispatch} from "react-redux";
import {sendEmailResetPassword} from "../../../redux/user/userActions";



const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
};

const RecoverPasswordScreen = () => {
    const dispatch = useDispatch();
    const onSubmit = useCallback(async (values:FormValues)=>{
        const resetResponse = await dispatch(
            sendEmailResetPassword(values.email),
        );
        return console.log('se mando el recover password', resetResponse);

    },[dispatch]);

    return(
        <div style={styles.container}>
            <div className={'wrapperContent'}>
                <Logo size={1.5}/>
                <Form<FormValues>
                    onSubmit={onSubmit}
                    validate={validate}>
                    {({handleSubmit, submitting, submitError}) => {
                        return (
                            <div>
                                <div className={'generalMargin'}>
                                    <p className={'infoText'}>Introduce tu correo electrónico para recuperar la contraseña</p>
                                    <Field<string> name={'email'}>
                                        {({input, meta}) => (
                                            <InputText name={'email'} label={'Correo Electrónico'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                                        )}
                                    </Field>
                                </div>
                                {submitError && (
                                    <div>
                                        <div style={styles.marginInputs}>
                                            <label color={'red'}>{submitError}</label>
                                        </div>
                                    </div>
                                )}

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
                                            Recuperar
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        );
                    }}
                </Form>
            </div>
        </div>
    )
};

export default RecoverPasswordScreen;

const styles = {
    container:{
        width:'25%',
        height:'60%',
        padding:50,
        borderRadius: 15,
        shadowBlur:50,
        elevation:6,
        boxShadow: '0.2em 0 0.1em rgba(0, 0, 0, 0.1), -0.2em 0 0.4em rgba(0, 0, 0, 0.1)',

        display:'flex',
        alignItems:'center'

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
    marginInputs: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 10,
    },
};
