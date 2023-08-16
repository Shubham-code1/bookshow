

function Spinner(){
    return (<>
           {/* Spinner with waiting messages will appear on screen beside reset button while user clicks to book the movie. it will be present till movieData is successfully saved to database and response data is set to localstorage.*/}
           <div className="wait-main">
                                    <div className="wait-msg">
                                            <div className="spinner"></div>
                                            <div className="wm">
                                                    <h3>Please Wait ! Saving to Database...</h3>
                                                    <h4>This may take few seconds !</h4>
                                            </div>
                                    </div>

                                </div>
            
    </>)
}

export default Spinner;