import { useState } from 'react';
import {seats} from '../../../Data/data'

function SeatInput(props){

    const [seatLabelColor,setSeatlabelColor] = useState('');
//onchanging the value of seats input change-Color className will add to respective components. if value is empty or 0 no className will be added and thus color will not change of given input label.
    const handleChange = (event)=>{
        if(event.target.value === "" || event.target.value === "0"){
            setSeatlabelColor('')   //setting no any className here 
        }else{
            setSeatlabelColor('change-Color') // setting the className
        }
        
    }

    return (<>
    {/* each seat input component */}
        <div className="each-seats">
            <label htmlFor={props.htmlFor} className={seatLabelColor}>{seats[props.index]}</label>
            <input type="number" name={props.name} id={props.id} onChange={handleChange}></input>
        </div>
    </>)
}

export default SeatInput;

