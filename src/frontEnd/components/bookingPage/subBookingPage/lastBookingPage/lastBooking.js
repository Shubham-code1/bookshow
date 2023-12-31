function LastBooking(){
//getting parsed value of localStorage of movieDetails
    const localStorageItem = JSON.parse(localStorage.getItem("movieDetails"));

    //extracting diiferent key values 
    const myMovie = localStorageItem.data.movie.movie;
    const mySlot  = localStorageItem.data.movie.slot;
    const mySeat = localStorageItem.data.movie.seats;

    //defining a date to get added when booking is done successfully.
    const bookingtimestamp = new Date(localStorageItem.data.movie.bookingTimestamp);
    const myBookingDate = bookingtimestamp.toString().slice(0,15);


    return (<> 

    {/* last booked movie display */}
                <div className="last-booking">
                        <h2 className="booking-heading">Last Booking Status</h2>

                        <div className="movie-slot-date">
                            <div className="msd-child">
                                <h3>Movie Booked</h3>
                                {/* printing movie name */}
                                <h4>{myMovie}</h4>  
                            </div>

                            <div className="msd-child">
                                <h3>Slot Booked</h3>
                                {/* printing booked slot */}
                                <h4>{mySlot}</h4>
                            </div>

                            <div className="msd-child">
                                <h3>Booking Date</h3>
                                {/* printing booked date */}
                                <h4>{myBookingDate}</h4>
                            </div>
                        </div>

                        <div className="seat-booked">
                            <h3 className="sb-heading">Seats booked</h3>
                            <div className="seats-status">
                                <div className="each-seat">
                                    <h3>A1</h3>
                                    {/* if seat input have some value expect 0 mySeat className will be added and if user does not feed any seat count then by default 0 will be shown in last booking status */}
                                    <h5 className={`${mySeat?.A1 ? "mySeat" : ""}`}>{mySeat.A1 ? mySeat.A1 : 0}</h5>
                                </div>   

                                <div className="each-seat">
                                    <h3>A2</h3>
                                    <h5 className={`${mySeat.A2 ? "mySeat" : ""}`}>{mySeat.A2 ? mySeat.A2 : 0}</h5>
                                </div>  

                                <div className="each-seat">
                                    <h3>A3</h3>
                                    <h5 className={`${mySeat.A3 ? "mySeat" : ""}`}>{mySeat.A3 ? mySeat.A3 :0}</h5>
                                </div>  

                                <div className="each-seat">
                                    <h3>A4</h3>
                                    <h5 className={`${mySeat.A4 ? "mySeat" : ""}`}>{mySeat.A4 ? mySeat.A4 : 0}</h5>
                                </div>  

                                <div className="each-seat">
                                    <h3>D1</h3>
                                    <h5 className={`${mySeat.D1 ? "mySeat" : ""}`}>{mySeat.D1 ? mySeat.D1 : 0}</h5>
                                </div>  

                                <div className="each-seat">
                                    <h3>D2</h3>
                                    <h5 className={`${mySeat.D2 ? "mySeat" : ""}`}>{mySeat.D2 ? mySeat.D2 : 0}</h5>
                                </div>  
                            </div>
                            </div>
                </div>
    
    </>)
};


export default LastBooking;







