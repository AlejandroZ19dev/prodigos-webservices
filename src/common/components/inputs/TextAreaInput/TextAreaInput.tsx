import React, {FC} from 'react';
import {Input, Row} from "antd";
import {UserOutlined } from "@ant-design/icons";
import SpanLabel from "../../SpanLabels/SpanLabel";
import './TextAreaInput.css'

const { TextArea } = Input;

interface Props {
    name: string;
    label: string;
    placeHolder?: string
    classes?: string;
    type?: string;
    onChange: any;
    value: string;
    metaError: string;
    touched?: boolean;
}

const TextAreaInput:FC<Props> = (
    {
        type='text',
        label,
        placeHolder,
        classes,
        touched,
        onChange,
        value,
        metaError,
        name,
    }) => {

    return(
        <div>
            <Row style={{ boxShadow: '0.2em 0 0.1em rgba(0, 0, 0, 0.08), -0.2em 0 0.4em rgba(0, 0, 0, 0.08)', borderRadius:10, padding:5}}>
                <label className={'labelText'}>{label}</label>
                <TextArea
                    placeholder={placeHolder} allowClear
                    onChange={onChange}
                    value={value}
                    bordered={false}
                    name={name} />
            </Row>

            {touched && (metaError &&
                <SpanLabel
                    error={true}
                    message={metaError}
                    align="align-left-msg"
                />
            )}
        </div>

    )
};

export default TextAreaInput;
