import { AiOutlineMenu,AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import HidePanel from "../hidePanel/hidePanel";

function Navbar(){
//defining states
    const [showSearch,setSearch] = useState(true);
    const [showPanel,setPanel] = useState(false);

    // onfocusing the input causing search icon to be disappeared.
  const onFocusHandle = ()=>{
    setSearch(false);
  }

  //onBlur the input causing again search icon to appear.
  const onBlurHandle =(e)=>{
      e.target.value ? setSearch(false) :  setSearch(true);
  }

  //This function will be sent as props in HidePanel component.
  const handleHide = (val)=>{
      setPanel(val);
  }

    return (<>
            <section className="header">
                    <div className="left-header">
                        <div className="left-header-logo">
                                    <div className="logo-im"></div>
                        </div>
                        
                        <form className="left-header-ip">
                        {/* calling the onBlurHandle and onFocusHandle function  */}
                            <input onBlur={onBlurHandle} onFocus={onFocusHandle} type="text" placeholder=""/>

                            {/* if showSearch is false search icon will disappear */}
                            {showSearch ? <span className="search-icon"><AiOutlineSearch/></span> : null}
                            <button className="btn-search">Search</button>
                        </form>
                    </div>

                    <div className="right-header">
                        <div className="sign-in">
                                    <button>Sign In</button>
                        </div>  
            {/* here setting the setPanle value true,thus clicking on below icon will set HidePanel component to appear on screen, */}
                        <div className="header-icon" onClick={()=>{setPanel(true)}}>    
                                     <AiOutlineMenu/>
                        </div>
                        {/* if showpanel is false HidePanel will disappear */}
                            {showPanel ? <HidePanel handleHide={handleHide}/> : null}
                    </div>
            </section>
    </>)
}

export default Navbar;















