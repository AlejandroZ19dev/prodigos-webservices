import React, {useState, useEffect, useCallback} from 'react';
import {Steps, Divider, Row, Col, Button} from 'antd';
import {Logo} from "../../../../common/components/Logo/Logo";
import {Form} from "react-final-form";
import validate, {FormValues} from "../../../../common/utils/validators/login";
import BeneficiaryInfoForm
    from "../../../../common/components/organisms/servicesForms/BeneficiaryInfoForm/BeneficiaryInfoForm";
import ServiceInfoForm from "../../../../common/components/organisms/servicesForms/ServiceInfoForm/ServiceInfoForm";

const { Step } = Steps;
const AccompanimentScreen = () => {


    const [step, setStep] = useState<number>(0);

    const handlerSetStep = useCallback((step)=>{
        setStep(step)
    },[]);

    const handlerNextStep = useCallback(()=>{
        if(step ===1){
            console.log('step 1');
            setStep(step+1);
        } else{
            setStep(step+1);
        }
    },[step]);

    const onSubmit= useCallback(()=> {
        handlerNextStep();
    },[handlerNextStep]);


    return(
        <div style={{width:'80%'}}>
            <Row>
                <Steps current={step} onChange={handlerSetStep}>
                    <Step title="Información del beneficiario" description="Información de quien recibirá el servicio" />
                    <Step title="Información del servicio" description="Detalles del servicio" />
                    <Step title="Pago" description="hay que pagar papu" />
                </Steps>
            </Row>
            <Row>
                <Col span={24}>
                    <Form<FormValues>
                            onSubmit={onSubmit}
                            validate={validate}>
                            {({handleSubmit, submitting, submitError}) => {
                                return (
                                    <div style={{padding:60}}>
                                        {step===0 ?  <BeneficiaryInfoForm pressCallBack={onSubmit}/> : <></>}
                                        {step===1 ?  <ServiceInfoForm pressCallBack={onSubmit}/> : <></>}
                                    </div>

                                );
                            }}
                        </Form>
                </Col>
            </Row>
        </div>
    )
};

export default AccompanimentScreen;
const styles = {
    container:{
        padding:50,
        borderRadius: 15,
        shadowBlur:50,
        elevation:6,
        boxShadow: '0.2em 0 0.1em rgba(0, 0, 0, 0.1), -0.2em 0 0.4em rgba(0, 0, 0, 0.1)',
    },
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
}
