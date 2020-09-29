import React from 'react';
import './Validation.css';

const Validation = (props) =>{

    let validationMessage = 'Text long enough';

    if(props.inputLength<=5){
        validationMessage = 'Text too short';
    }

    return(
        <>
        {/* {
            props.inputLength > 5 ?
            <p>Text long enough</p>:
            <p>Text too short</p> 
        } */}
            <p>{validationMessage}</p>
        </>
    )
}
export default Validation;
