import React, {FC, useState, useEffect, useCallback} from 'react';
import {Button, Col, Input, Row, Select, Steps, DatePicker} from 'antd';
import {Logo} from "../../../Logo/Logo";
import {Field, Form} from "react-final-form";
import validate, {FormValues} from "../../../../utils/validators/login";
import InputText from "../../../inputs/InputText/InputText";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {Link} from "react-router-dom";
import SelectInput from "../../../inputs/SelectInputText/SelectInput";
import CalendarInput from "../../../inputs/CalendarInput/CalendarInput";
const { Option } = Select;
const { RangePicker } = DatePicker;

interface Props {
    pressCallBack?: () => void;
}

const BeneficiaryInfoForm : FC<Props> =({pressCallBack}) => {

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
        <Row style={styles.marginRow} gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
            <Col className="gutter-row" span={12}>
                <Field<string> name={'firstName'}>
                    {({input, meta}) => (
                        <InputText name={'firstName'} label={'Nombre(s)'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                    )}
                </Field>
            </Col>
            <Col className="gutter-row" span={12}>
                <Field<string> name={'lastName'}>
                    {({input, meta}) => (
                        <InputText name={'lastName'} label={'Apellido(s)'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                    )}
                </Field>
            </Col>
        </Row>

            <Row style={styles.marginRow} gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col className="gutter-row" span={12}>
                    <Field<string> name={'healthyEntity'}>
                        {({input, meta}) => (
                            <InputText name={'healthyEntity'} label={'Entidad prestadora de salud (EPS)'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                        )}
                    </Field>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Field<string> name={'healthyEmergency'}>
                        {({input, meta}) => (
                            <InputText name={'healthyEmergency'} label={'Hospital de emergencia (IPS)'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                        )}
                    </Field>
                </Col>
            </Row>

            <Row style={styles.marginRow} gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col  className="gutter-row" span={12}>
                    <Field<string> name={'medPrepagada'}>
                        {({input, meta}) => (
                            <InputText name={'medPrepagada'} label={'Medicina prepagada (opcional)'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error}/>
                        )}
                    </Field>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Field<string> name={'relationship'}>
                        {({input, meta}) => (
                            <InputText name={'relationship'} label={'Parentesco'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} touched={meta.touched}/>
                        )}
                    </Field>
                </Col>

            </Row>

            <Row  style={styles.marginRow} gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col  className="gutter-row" span={12}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                        <Col span={12}>
                            <Field<string> name={'estatura'}>
                                {({input, meta}) => (
                                    <InputText name={'estatura'} label={'Estatura (cm)'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} />
                                )}
                            </Field>
                        </Col>
                        <Col span={12}>
                            <Field<string> name={'peso'}>
                                {({input, meta}) => (
                                    <InputText name={'peso'} label={'Peso (kg)'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} />
                                )}
                            </Field>
                        </Col>

                    </Row>
                </Col>
                <Col  className="gutter-row" span={12}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                        <Col  span={12}>
                            <Field<string> name={'typeDocumentId'}>
                                {({input, meta}) => (
                                    <SelectInput name={'typeDocumentId'} label={'Tipo de documento'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} listOptions={listOptionsDocTypes} />
                                )}
                            </Field>
                        </Col>
                        <Col span={12}>
                            <Field<string> name={'documentId'}>
                                {({input, meta}) => (
                                    <InputText name={'documentId'} label={'Número de documento'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} />
                                )}
                            </Field>
                        </Col>

                    </Row>
                </Col>
            </Row>

            <Row  style={styles.marginRow} gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col  className="gutter-row" span={12}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                        <Col  span={24}>
                            <Field<string> name={'dayAge'}>
                                {({input, meta}) => (
                                    <CalendarInput name={'birthday'} label={'Fecha de nacimiento'} onChange={input.onChange} value={input.value} metaError={meta.error}/>
                                )}
                            </Field>
                        </Col>
                    </Row>
                </Col>
                <Col  className="gutter-row" span={12}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }} className="inputs">
                        <Col>
                            <Field<string> name={'gender'}>
                                {({input, meta}) => (
                                    <SelectInput name={'gender'} label={'Género'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} listOptions={listOptionsDocTypes} />
                                )}
                            </Field>
                        </Col>
                        <Col>
                            <Field<string> name={'mobility'}>
                                {({input, meta}) => (
                                    <SelectInput name={'mobility'} label={'Movilidad'} classes={'input'} onChange={input.onChange} value={input.value} metaError={meta.error} listOptions={listOptionsDocTypes} />
                                )}
                            </Field>
                        </Col>

                    </Row>
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

export default BeneficiaryInfoForm;

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
