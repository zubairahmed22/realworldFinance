import React,{useState} from 'react'

import "./Header2.css"
const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='Header'>
     <div className='menuHeader'>
      <div className='leftDiv'>
        <div className='logoDiv'>
          <img src='assets/images/eth_logo.png'  alt='logo' className='logo1_binance'/>
        </div>
      </div>
      <div className='RightMenu'>
        <ul className={isOpen ? 'RightMenu_ul active': "RightMenu_ul inactive"}>
          <li>Home</li>
          <li>Serve</li>
          <li>Mine</li>
          <button>Connect Wallet</button>
          <button>Select Language</button>
          
        </ul>
        <i class="fa fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
      </div>
     </div>
    </div>
  )
}

export default Header2