import React from 'react';
import './Char.css';

const Char = (props) =>{
    const style = {
        display:'inline-block',
        textAlign:'center',
        border:'1px solid black',
        padding:'16px',
        cursor:'pointer',
        margin:'16px',
        color:'#acacac',
      };

    return(
    <p style={style} onClick={props.clicked}> {props.character}</p>
    )
}
export default Char;
