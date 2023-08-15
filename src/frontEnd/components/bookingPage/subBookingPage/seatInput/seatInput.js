import { useState } from 'react';
import {seats} from '../../../Data/data'

function SeatInput(props){

    const [seatLabelColor,setSeatlabelColor] = useState('');

    const handleChange = (event)=>{
        if(event.target.value === "" || event.target.value === "0"){
            setSeatlabelColor('')
        }else{
            setSeatlabelColor('change-Color')
        }
        
    }

    return (<>
        <div className="each-seats">
            <label htmlFor={props.htmlFor} className={seatLabelColor}>{seats[props.index]}</label>
            <input type="number" name={props.name} id={props.id} onChange={handleChange}></input>
        </div>
    </>)
}

export default SeatInput;

