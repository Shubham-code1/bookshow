import {useState,useEffect} from 'react';


function NoBookingDisplay(){

    const [color,setColor] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
          const red = Math.floor(Math.random() * 256);
          const Green = Math.floor(Math.random() * 256);
          const Blue = Math.floor(Math.random() * 256);
      
          const style = `rgb(${red},${Green},${Blue})`;
          setColor(style);
        }, 1000);
      
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    return (<>
             <div className="last-booking no-booking" style={{border:`1px solid ${color}`}}>
                            <span className="circle"></span>
                            <h1 className="no-book-head" style={{color:color}}>
                                 No previous Booking Available
                            </h1>
                    </div>  
    </>)
}

export default NoBookingDisplay;



