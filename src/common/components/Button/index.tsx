import React, {FC} from 'react';
import {Button} from "antd";
import './Button.css';

interface Props {
     text: string;
     background?: string;
    color?: string;
    textColor?: string;
    outline?: boolean;
    fillWidth?: boolean;
    rounded?: boolean;
    disabled?: boolean;
}
const CustomButton: FC<Props> = (
    {text,
        background,
        color,
        outline,
        disabled,
        rounded,
        fillWidth
    }) => {

    return(
           <Button
            onClick={() => console.log('')}
            style={styles.button}
            type="primary"
            size={`large`}
           >
               {text}
            </Button>

    )
};

export default CustomButton;
const styles = {
    button:{
        color:'#FFF',
        backgroundColor: '#28327F',
        borderWidth:0,
        borderRadius:15,
        margin:10,
        alignSelf: 'center',
        paddingHorizontal: 100,
        paddingRight:25,
        paddingLeft:25
    }
};
