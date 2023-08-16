import LastBooking from "./lastBooking";
import NoBookingDisplay from "./noBookingDisplay";

function LastBookingDisplay(){
    //getting localStorage Value 
    const localStorageItem = JSON.parse(localStorage.getItem("movieDetails"));

        return (<>
        {/* checking, if no value present in localstorage then NoBookingDisplay will be shown on UI */}
                {
                   localStorageItem ? <LastBooking/> : <NoBookingDisplay/>
                }
            </>)
};

export default LastBookingDisplay;






















