import React,{useEffect} from 'react'
import "jquery-ui-dist/jquery-ui"
import $ from "jquery"
import AOS from 'aos';
import 'aos/dist/aos.css';


const MainBanner = () => {
    

/********************************************

*********************************************/
useEffect(() =>{
    AOS.init({duration: 2000})
    },[])

  
  
    //////////////////////////
    //	REMOVE THE CAPTIONS //
    /////////////////////////
  


  return (
    
    <section className="banner" id="home" style={{ backgroundImage: "url(assets/images/banner/bg.png)" }}>
        <div className="container">
            <div className="banner__wrapper">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="banner__content" data-aos="fade-down" data-aos-duration="1000">
                            <h1 className="text-uppercase">Real World Invest Company  </h1>

                          
                            <p className='HeroPtage'>
                                Created with the idea of bridging the real world with the virtual world
                                enabling both investors and ordinary people to invest in secure assets. Our mission is to create a better, more just world of investments without limits, providing an easy, transparent, and secure way of investing.
</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner__thumb" data-aos="fade-up" data-aos-duration="1000">
                            <img src="assets/images/finance_pic.png" alt="banner Image" className='Finace_Digital_image'/>
                          
                            
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  


  )
            }

export default MainBanner