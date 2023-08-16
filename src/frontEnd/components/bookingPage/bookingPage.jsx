import './bookingPage.css';
import LastBookingDisplay from './subBookingPage/lastBookingPage/lastBookDisplay';
import BookMovie from './subBookingPage/movieBookingPage/BookMoviePage';
import Slider from 'react-slick';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookingPage(){

    //below setting to be passed as props in Slider component
    var settings = {
            dots: true,  // will show dots below sliding images corresponding dots will be highlighted
            infinite: true,  // slider will run infinitely 
            speed: 500,   
            slidesToShow: 1,  // each time single slider will be displayed.
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 4000,  // after each 4 sec slider will slide.
            appendDots:dots=>(
                <ul className="dot">{dots}</ul>
            )
      };

    return (<>
            <div className="main-bookingPage">
                    <div className="booking-display">
                            <div className="slider-part">
                                <div className="slider">
                                    {/* Slider with different movies poster */}
                                    <Slider {...settings}>
                                            <div className="img-holder im-1"></div>
                                            <div className="img-holder im-2"></div>
                                            <div className="img-holder im-3"></div>
                                            <div className="img-holder im-4"></div>
                                            <div className="img-holder im-5"></div>
                                            <div className="img-holder im-6"></div>
                                    </Slider>
                                </div>
                            </div>

                            <div className="display-part">
                                        <LastBookingDisplay/>
                            </div> 
                    </div>

                    <div className="book-Movie">
                        <BookMovie/>
                    </div>
            </div>
        </>)
}
export default BookingPage;








