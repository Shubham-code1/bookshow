import {movies, slots } from '../../../Data/data';
import SeatInput from '../seatInput/seatInput';
import Spinner from '../loadingSpinner/spinner';
import { useState } from 'react';

function BookMovie(){
//initially blinker will be false.
        const [blinker,setBlinker] = useState(false);

        const handleBookMovie = async()=>{
                //getting the form value 
            const form = document.getElementsByClassName('form-container')[0];
 
            const formSubmitHandler = async (event)=>{
                //initially preventing form to get submitted in order to perform async operation.
                        event.preventDefault(); 

                        //Passing form value into Javascript FormData constructor. 
                         const formData = new FormData(form);
                         const formDataObject = {};
                        // creating a object literal formDataObject by adding key with associated value of form.
                        for(const [key,value] of formData){
                                formDataObject[key] = value;
                            }
                        // creating a final object to be sent to database as per the schema of mongoose.
                         const resultObject = {
                            movie : formDataObject.movie,
                            slot : formDataObject.slot,
                            seats:{}
                         }

                         for(let key in formDataObject){
                            if(key.length === 2){
                                resultObject.seats[key] = formDataObject[key];
                            }
                         }
                            // here, validating the selection of movies,slots and seats if any of one input are not selected an error in alert will pop up
                                if(resultObject){
                                    if(!resultObject.movie){
                                        event.preventDefault();
                                        window.location.reload();
                                        alert("Please select Movie");
                                        return;
                                    }else if(!resultObject.slot){
                                        event.preventDefault();
                                        window.location.reload();
                                        alert("Please Select Time SLot");
                                        return;
                                    }else if(resultObject.seats){
                                        //defining an array and adding the selected seats value to that array by looping over the seats.
                                        let arr = [];
                                        for(let x in resultObject.seats){
                                            if(resultObject.seats[x] !== ""){
                                                arr.push(resultObject.seats[x]);
                                            }
                                        }
                                        //if array does not consists any value means not any seats contains seat counts, will result an alert message to select at least one seat. 
                                        if(arr.length === 0){
                                            window.location.reload();
                                            alert("Please select at least one seat");
                                            return;
                                        }
                                    }
                                }
//here, setting the blinker value to true. so that, spinner will appear till post request successfully made and the recieved response is set to localStorage. 
                    setBlinker(true);

                    // sending POST request using fetch api of Javascript. 
                            try{
                                    const option = {
                                        method:'POST',
                                        headers:{
                                                    'Content-Type': 'application/json', 
                                                    //setting content-type of header
                                                },
                                        body:JSON.stringify(resultObject) // passing stringified form data 
                                    }
                                    //getting response object
                                const response = await fetch("https://bookmyshowbackend-9p5q.onrender.com/api/booking",option);
                                
                                    // getting response.json() , returns promise 
                                const responseData = await response.json();
                                        //setting recieved data to localStorage
                                localStorage.setItem('movieDetails',JSON.stringify(responseData));

                                  //setting blinker to false, causing Spinner to disappear. 
                                setBlinker(false);

                                //submitting the form 
                                form.submit();
                            }
                            catch(error)
                            {
                                //error message will occur in alert . 
                                alert("error Message",error.message);  
                                window.location.reload(); 
                            }
                }

                //adding submit event to form , after submitting the form formSubmitHandler function will run .
                     form.addEventListener('submit',formSubmitHandler);
        }


    return (<>
                   
            <form className="form-container">
                            <div className="movie-details">


{/* movie selection input starts from here  */}
                                    <div className="movie-name">
                                        <div className="movie-name-head">
                                            <h3>Select Movies</h3>
                                            
                                        </div>
                                        <div className="movie-name-list">
                                            <input type="radio" id="movie1" className="radio-inpt" name="movie" value={movies[0]}></input>
                                            <label htmlFor='movie1'>{movies[0]}</label>
                                            <input type="radio" className="radio-inpt" name="movie" id="movie2" value={movies[1]}></input>
                                            <label htmlFor='movie2'>{movies[1]}</label>
                                            <input type="radio" className="radio-inpt" name="movie" id="movie3" value={movies[2]}></input>
                                            <label htmlFor='movie3'>{movies[2]}</label>
                                            <input type="radio" className="radio-inpt" name="movie" id="movie4" value={movies[3]}></input>
                                            <label htmlFor='movie4'>{movies[3]}</label>
                                            <input type="radio" className="radio-inpt" name="movie" id="movie5" value={movies[4]}></input>
                                            <label htmlFor='movie5'>{movies[4]}</label>
                                            <input type="radio" className="radio-inpt" name="movie" id="movie6" value={movies[5]}></input>
                                            <label htmlFor='movie6'>{movies[5]}</label>
                                        </div>
                                    </div>
 {/* movie selection input ends here  */}


 {/* movie slot selection starts from here  */}

                                    <div className="movie-slots">
                                        <div className="movie-name-head">
                                            <h3>Select Slots</h3>
                                        </div>

                                        <div className="movie-name-list">
                                            <input type="radio" id="slot1" className="slot-list" name="slot" value={slots[0]}></input>
                                            <label htmlFor='slot1'>{slots[0]}</label>
                                            <input type="radio" name="slot" className="slot-list" id="slot2" value={slots[1]}></input>
                                            <label htmlFor='slot2'>{slots[1]}</label>
                                            <input type="radio" name="slot" className="slot-list" id="slot3" value={slots[2]}></input>
                                            <label htmlFor='slot3'>{slots[2]}</label>
                                            <input type="radio" name="slot" className="slot-list" id="slot4" value={slots[3]}></input>
                                            <label htmlFor='slot4'>{slots[3]}</label>
                                        </div>
                                    </div>

        {/* movie slot selection ends here */}

        {/* movie seat selection starts from here  */}

                                    <div className="movie-seats">
                                        <div className="movie-name-head ms">
                                            <h3>Select Seats</h3>
                                        </div>   

                                        <div className="movie-seat ms-h">
                                                <div className="left-section">
                                                     {/* passing values as props in SeatInput component */}
                                                        <SeatInput index="0" name="A1" htmlFor="A1" id="A1"/>
                                                        <SeatInput index="1" name="A2" htmlFor="A2" id="A2"/>
                                                        <SeatInput index="2" name="A3" htmlFor="A3" id="A3"/>
                                                </div>

                                                <div className="right-section">
                                                    {/* passing values as props in SeatInput component */}
                                                            <SeatInput index="3" name="A4" htmlFor="A4" id="A4"/>
                                                            <SeatInput index="4" name="D1" htmlFor="D2" id="D2"/>
                                                            <SeatInput index="5" name="D2" htmlFor="D2" id="D2"/>
                                                </div>
                                        </div>
                                    </div>
                            </div>
                             {/* movie seats selection ends here */}


                             {/* movie booking buttons section starts here */}

                            <div className="main-mb">

                                <div className="movie-book">
                                    <button type="submit" className="btn-mb" onClick={handleBookMovie}>BOOK</button>
                                    <button type="reset" className="btn-mb" onClick={()=>{
                                        window.location.reload();
                                    }}>RESET</button>
                                </div>
                                        {/* if blinker is true spinner will appear */}
                                    {
                                        blinker ? <Spinner/> : null
                                    }

                            </div>

                            {/* movie booking buttons section ends here */}
            </form>
    </>)
}

export default BookMovie;