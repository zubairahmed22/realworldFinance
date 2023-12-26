import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Herosection = () => {

    useEffect(() =>{
		AOS.init({duration: 2000})
		
		},[])
  return (
   
        <div className='Binance_pool' >
            <div className='Binance_Container' data-aos="fade-down">
                <div className='logoContainer'>
                <img src='assets/images/logo1.png' alt=''
                 className='section_logo'/>
                 </div>
                 <div className='textContainer'>
                 <h3>Binance Pool Launches</h3>
                 <span className='colud_mining'>Cloud<br/>Mining</span>
                 <p>The first DEFI platform to guarantee your funds with a contract of approval and insurance on your 
                    financing in order to guarantee the financiers and also guarantee
                     their rights and break the rule of fear of decentralization by traders</p>
                     </div>
            </div>
            <div className='imageBox'data-aos="fade-up" >
                <img src='assets/images/ban1.png' alt='ban image'/>
            </div>
        </div>
    
  )
}

export default Herosection