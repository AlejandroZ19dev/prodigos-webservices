import React, {FC} from 'react';
import {Input, Row, Select} from 'antd';

const Option = Select.Option;
interface Props {
    name: string;
    label: string;
    classes?: string;
    type?: string;
    onChange: any;
    value: string;
    metaError: string;
    touched?: boolean;
    listOptions: any;
}

const SelectInput:FC<Props> = (
    {
        type='text',
        label,
        classes,
        touched,
        onChange,
        value,
        metaError,
        name,
        listOptions
    }) => {

    return(
        <div>
            <Row style={{ boxShadow: '0.2em 0 0.1em rgba(0, 0, 0, 0.08), -0.2em 0 0.4em rgba(0, 0, 0, 0.08)', borderRadius:10, padding:5}}>
                <label className={'labelText'}>{label}</label>
                <Select
                    className={classes}
                    optionFilterProp="children"
                    defaultActiveFirstOption={true}
                    style={{ width: '100%' }}
                    onChange={onChange}
                    value={value}
                    bordered={false}
                >
                    <Option value={-1} disabled>{label}</Option>
                    {listOptions}
                </Select>
            </Row>
        </div>

    )
};

export default SelectInput;
