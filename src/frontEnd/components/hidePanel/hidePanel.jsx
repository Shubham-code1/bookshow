import { IoMdNotificationsOutline,IoIosArrowForward } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiLock,CiSettings } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsCreditCard,BsChatDots,BsGift,BsEmojiSmile } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";




function HidePanel({handleHide}){

  const handleChange = ()=>{
       handleHide(false)
  }

  const removeLocal = ()=>{
    localStorage.removeItem("movieDetails");
    window.location.reload();
  }
  

    return (<>
              <div className="hidden-bar"> 
                  <ul className="hidden-ul">

                    <li className="hidden-head">
                        <div>Hey!</div>
                        <button className="cross" onClick={handleChange}><RxCross2/></button>
                    </li>

                    <li className="hidden-login">
                          <div className="h-log-img">
                            {/* <img src={"../assets/rewards.jpg"} alt="n/a"/> */}
                            </div>
                          <div><h5>Unlock special offers & great benefits</h5></div>
                          <div><button>Login/Register</button></div>
                    </li>

                    <li className="notification">
                        <div className="noti-icon"><IoMdNotificationsOutline/></div>
                        <div className="notification-content">
                            <h4 className="noti-text">Notifications</h4>
                            <div><IoIosArrowForward/></div>
                        </div>
                    </li>

                    <li className="notification">
                        <div className="noti-icon"><HiOutlineShoppingBag/></div>
                        <div className="notification-content">
                            <div className="noti-details">
                                  <h4>Your Orders</h4>
                                  <p className="hp-small">view all your bookings & purchases</p>
                            </div>
                            <div><CiLock/></div>
                        </div>
                    </li>

                    <li className="notification">
                        <div className="noti-icon"><MdOutlineOndemandVideo/></div>
                        <div className="notification-content">
                            <div className="noti-details">
                                  <h4>Stream Library</h4>
                                  <p className="hp-small">Rented and Purchased Movies</p>
                            </div>
                            <div><CiLock/></div>
                        </div>
                    </li>

                    <li className="notification">
                        <div className="noti-icon"><BsCreditCard/></div>
                        <div className="notification-content">
                            <div className="noti-details">
                                  <h4>Play Credit Card</h4>
                                  <p className="hp-small">View or play credit card details and offers</p>
                            </div>
                            <div><IoIosArrowForward/></div>
                        </div>
                    </li>

                    <li className="notification">
                        <div className="noti-icon"><BsChatDots/></div>
                        <div className="notification-content">
                            <div className="noti-details">
                                  <h4>Help & Support</h4>
                                  <p className="hp-small">View commonly asked queries and chat</p>
                            </div>
                            <div><IoIosArrowForward/></div>
                        </div>
                    </li>

                    <li className="notification">
                        <div className="noti-icon"><CiSettings/></div>
                        <div className="notification-content">
                            <div className="noti-details">
                                  <h4>Accounts & Settings</h4>
                                  <p className="hp-small">Location,Payments,Permission & More </p>
                            </div>
                            <div><CiLock/></div>
                        </div>
                    </li>

                    <li className="notification">
                        <div className="noti-icon"><BsGift/></div>
                        <div className="notification-content">
                            <div className="noti-details">
                                  <h4>Rewards</h4>
                                  <p className="hp-small">View your rewards ad unlock new ones </p>
                            </div>
                            <div><IoIosArrowForward/></div>
                        </div>
                    </li>

                    <li className="notification">
                        <div className="noti-icon"><BsEmojiSmile/></div>
                        <div className="notification-content">
                            <h4 className="noti-text">BookASmile</h4>
                            <div><IoIosArrowForward/></div>
                        </div>
                    </li>

                    <button className="notification xb" onClick={removeLocal}>
                        <div className="noti-icon"><AiFillDelete/></div>
                        <div className="notification-content">
                            <h4 className="noti-text">Clear Previous Bookings</h4>
                            <div><IoIosArrowForward/></div>
                        </div>
                    </button>

                    
                  </ul>
              </div>
    </>)
}

export default HidePanel;