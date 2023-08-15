import { AiOutlineMenu,AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import HidePanel from "../hidePanel/hidePanel";

function Navbar(){

    const [showSearch,setSearch] = useState(true);
    const [showPanel,setPanel] = useState(false);

  const onFocusHandle = ()=>{
    setSearch(false);
  }

  const onBlurHandle =(e)=>{
      e.target.value ? setSearch(false) :  setSearch(true);
  }

  const handleHide = (val)=>{
      setPanel(val);
  }

    return (<>
            <section className="header">
                    <div className="left-header">
                        <div className="left-header-logo">

                                    <div className="logo-im"></div>
                                    {/* <img src={'./rewards.jpg'} alt="n/a"></img> */}
                        </div>
                        
                        <form className="left-header-ip">
                            <input onBlur={onBlurHandle} onFocus={onFocusHandle} type="text" placeholder=""/>{showSearch ? <span className="search-icon"><AiOutlineSearch/></span> : null}
                            <button className="btn-search">Search</button>
                        </form>
                    </div>

                    <div className="right-header">

                        <div className="sign-in">
                                    <button>Sign In</button>
                        </div>  
  
                        <div className="header-icon" onClick={()=>{setPanel(true)}}>    
                                     <AiOutlineMenu/>
                        </div>

                            {showPanel ? <HidePanel handleHide={handleHide}/> : null}
                    </div>
            </section>
    </>)
}

export default Navbar;















