import LastBooking from "./lastBooking";
import NoBookingDisplay from "./noBookingDisplay";

function LastBookingDisplay(){

    const localStorageItem = localStorage.getItem("movieDetails");

        return (<>
                {
                   localStorageItem ? <LastBooking/> : <NoBookingDisplay/>
                }
            </>)
};

export default LastBookingDisplay;






















