import React, {FC} from 'react';
import {Input, Row} from "antd";
import {UserOutlined } from "@ant-design/icons";
import SpanLabel from "../../SpanLabels/SpanLabel";
import './InputText.css';

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

const InputText:FC<Props> = (
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
               <Input
                   className={classes}
                   onChange={onChange}
                   value={value}
                   bordered={false}
                   name={name}
                   color={'#28327F'}
                   type={type === 'text'? 'text':type}
                   placeholder={label} />
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

export default InputText;
