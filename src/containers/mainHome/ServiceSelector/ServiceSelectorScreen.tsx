import React from 'react';
import logo from '../../../assets/svgs/hand.svg'
import logo2  from '../../../assets/svgs/moto.svg'
import icon2 from  '../../../assets/svgs/hands.svg'
import {Row, Col, Select} from "antd";
import ServiceTypeCard from "../../../common/components/molecules/cards/ServiceTypeCard/ServiceTypeCard";
import {Spring} from "react-spring/renderprops-universal";
import {Field, Form} from "react-final-form";
import SelectInput from "../../../common/components/inputs/SelectInputText/SelectInput";
import './ServiceSelectorScreen.css'
const { Option } = Select;
const ServiceSelectorScreen = () => {

    const cityItems = [
        {label: 'Bogotá', value: 2},
        {label: 'Medellín', value: 3},
        {label: 'Cali', value: 1},
        {label: 'Barranquilla', value: 4},
    ];
    const listOptionsCities = cityItems.map((item, index) =>
        <Option value={item.value} style={{ borderRadius:10 }} key={index}>{item.label}</Option>
    );

    const Condition = ({when, is, children}: any) => (
        <Field name={when} subscription={{value: true}}>
            {({input: {value}}) => (value === is ? children : null)}
        </Field>
    );

  return(
      <div style={{width:'80%', paddingLeft:150}}>
              <Row>
                  <Col span={24}>
                      <Form  onSubmit={()=> console.log('holi')}>
                          {({handleSubmit, submitting, submitError}) => {
                              return (
                                  <>
                                      <Row >
                                          <Col span={12} offset={6}>
                                              <div style={{width:'50%', margin:20}}>
                                                  <span style={{color:'#28327f', fontSize:16}}>Selecciona la ciudad donde deseas el servicio</span>
                                                  <Field<string> name={'city'} >
                                                      {({input, meta}) => (
                                                          <SelectInput name={'city'} label={'Selecciona Ciudad'} classes={''} onChange={input.onChange} value={input.value} metaError={meta.error} listOptions={listOptionsCities} />
                                                      )}
                                                  </Field>
                                              </div>
                                          </Col>
                                      </Row>


                                  <Condition when="city" is={1}>
                                      <Spring
                                          from={{opacity:0, marginTop:200 }}
                                          to={{opacity:1, marginTop:0, margin:15}}
                                      >
                                          {props => (
                                              <Row>
                                                  <Col style={props}>
                                                      <ServiceTypeCard
                                                          path={'formulario-cuidado-acompanamineto'}
                                                          title={'Cuidado por horas'}
                                                          description={'Cuidado y acompañamiento no recurrente por horas en casa, clínica o en donde lo requieras. Estos servicios se cobran por horas'}
                                                          img={logo}
                                                      />
                                                  </Col>
                                                  <Col style={props}>
                                                      <ServiceTypeCard
                                                          path={'/formulario-cuidado-acompanamineto'}
                                                          title={'Cuidado permanente'}
                                                          description={'Cuidado y acompañamiento no recurrente por horas en casa, clínica o en donde lo requieras. Estos servicios se cobran por horas'}
                                                          img={icon2}

                                                      />
                                                  </Col>
                                              </Row>
                                          )}
                                      </Spring>
                                  </Condition>

                                      <Condition when="city" is={2}>
                                          <Spring
                                              from={{opacity:0, marginTop:200 }}
                                              to={{opacity:1, marginTop:0, margin:15}}
                                          >
                                              {props => (
                                                  <Row>
                                                      <Col style={props}>
                                                          <ServiceTypeCard
                                                              path={'/formulario-cuidado-acompanamineto'}
                                                              title={'Cuidado por horas'}
                                                              description={'Cuidado y acompañamiento no recurrente por horas en casa, clínica o en donde lo requieras. Estos servicios se cobran por horas'}
                                                              img={logo}
                                                          />
                                                      </Col>
                                                      <Col style={props}>
                                                          <ServiceTypeCard
                                                              path={'/formulario-cuidado-acompanamineto'}
                                                              title={'Cuidado permanente'}
                                                              description={'Cuidado y acompañamiento no recurrente por horas en casa, clínica o en donde lo requieras. Estos servicios se cobran por horas'}
                                                              img={icon2}
                                                          />
                                                      </Col>
                                                      <Col style={props}>
                                                          <ServiceTypeCard
                                                              path={'/formulario-cuidado-acompanamineto'}
                                                              title={'Trámites médicos'}
                                                              description={'Cuidado y acompañamiento no recurrente por horas en casa, clínica o en donde lo requieras. Estos servicios se cobran por horas. '}
                                                              img={logo2}
                                                          />
                                                      </Col>
                                                  </Row>
                                              )}
                                          </Spring>
                                      </Condition>
                                  </>
                              );
                          }}
                      </Form>

                  </Col>
              </Row>
      </div>

  )
};

export default ServiceSelectorScreen;

const styles = {
    container: {
        width: '25%',
        padding: 50,
        borderRadius: 15,
        shadowBlur: 50,
        elevation: 6,
        boxShadow: '0.2em 0 0.1em rgba(0, 0, 0, 0.1), -0.2em 0 0.4em rgba(0, 0, 0, 0.1)',
    },
    wrapperSelector:{
    }
}
