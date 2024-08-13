import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import pblinsta from "./pblinsta4.jpg"
const url="www.instagram.com";

function Insta()
{
    return(
        <button className='insta'><img src={pblinsta}></img></button>
    )
}
export default Insta;