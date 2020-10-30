import React, {FC} from 'react';
import {Input, Row} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import SpanLabel from "../../SpanLabels/SpanLabel";

interface Props {
    name: string;
    label: string;
    classes: string;
    type?: string;
    onChange: any;
    value: string;
    metaError: string;
    touched?: boolean;
}

const InputPassword:FC<Props>  = (
    {
        type='text',
        label,
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
            <Input.Password
                onChange={onChange}
                value={value}
                placeholder= {label}
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                bordered={false}
            />
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

export default InputPassword;
