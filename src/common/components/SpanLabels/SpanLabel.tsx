import React from 'react';
import './SpanLabel.css';

 const SpanLabel = (props:any) => {
    return (
        <div className={`box-message ${props.error?'error-message':'success-message'} ${props.align}`}>
            <span>
                {props.message}
            </span>
        </div>
    )
};

export default SpanLabel;
