import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    
    
  return (
    
		<header id="home" className="welcome-area">
        <div className="header-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        
                        <div className="logo">
                            <Link to={"/"}><img src="assets/images/Finance_logo.png" alt="Logo"/></Link> 
                        </div>
                        
                    </div>
                    <div className="col-sm-9">
                       
                        <div className="mainmenu">
                            <div className="navbar navbar-nobg">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="" data-target=".navbar-collapse" onClick={() =>{setIsOpen(!isOpen)}}>
                                        <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className={isOpen? "navbar-collapse collapse in": "navbar-collapse collapse" }>
                                    <ul className="nav navbar-nav navbar-right">
                    <li onClick={() => setIsOpen(false)}> <Link className="linkstyle" to={"/"}>Home </Link>
                    
                    
              </li>
              <li onClick={() => setIsOpen(false)}> <Link className="linkstyle" to={"/Home2"}>Home2 </Link>
                    
                    </li>
                    
              
              
               
              <li onClick={() => setIsOpen(false)}> <Link to="/presale">PreSale  </Link> 
               
                
                
               </li>
             
            <li onClick={() => setIsOpen(false)}><Link className="linkstyle" to={"/team"}> Team </Link>
                
              </li>
              
             
    
             
              <li onClick={() => setIsOpen(false)}> <Link className="linkstyle" to={"/about"}>About us</Link>
                
              </li>
              <li onClick={() => setIsOpen(false)}> <Link className="linkstyle" to={"/contact"}>Contact us</Link>
                
              </li>
             
            </ul>
            </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    
    </header>
  )
}
