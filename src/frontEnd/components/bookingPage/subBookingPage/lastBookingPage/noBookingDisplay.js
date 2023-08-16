import {useState,useEffect} from 'react';


function NoBookingDisplay(){

    const [color,setColor] = useState('');

    //here setting the random color to style variable, and after setting the current color it is being cleared using clearInterval.
    // useEffect is used in order to run the code only once irrespect of any dependecies change.

    useEffect(() => {
        const intervalId = setInterval(() => {
          const red = Math.floor(Math.random() * 256);
          const Green = Math.floor(Math.random() * 256);
          const Blue = Math.floor(Math.random() * 256);
      //storing color to style variable
          const style = `rgb(${red},${Green},${Blue})`;
          setColor(style);
        }, 1000);
      
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    return (<>
    {/* This component will appear on UI when no data is available in localStorage i.e no previous booking is available in localstorage.  */}
             <div className="last-booking no-booking" style={{border:`1px solid ${color}`}}>
                            <span className="circle"></span>
                            <h1 className="no-book-head" style={{color:color}}>
                                 No previous Booking Available
                            </h1>
                    </div>  
    </>)
}

export default NoBookingDisplay;



