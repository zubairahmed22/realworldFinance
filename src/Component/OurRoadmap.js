import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Image, Box, Link,chakra,Flex,SimpleGrid, Center} from '@chakra-ui/react'

export const OurRoadmap = () => {

  useEffect(() =>{
		AOS.init({duration: 2000})
		
		},[])

  return (
    <div id="story-section" className="ptb ptb-xs-60 gray-bg">
    <div className="container">
      
      <div className="row">
        <div className='textcontainer'>
      <h2 style={{textAlign: "center"}}>Roadmap <br/> <span>Company Development Plan </span></h2>
      </div>
        <div className="col-sm-12">
          <div className="ui-timline-container">
            <div className="ui-timeline">
              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                   
                  </div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 1 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>

  <Box
  data-aos="fade-up"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "100%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        textAlign="left"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        Legal{" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
          Preparation
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
       Legal Consultation: Engage legal experts to understand all aspects of operating such a company.
       Legal Risk Analysis: Conduct a comprehensive analysis of legal and financial risks.

      </chakra.p>

      
    </Box>
  </Box>

                  </div>
                </div>
              </div>


              <div className="tl-item alt">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 2 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>

  <Box
  data-aos="fade-down"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "100%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        textAlign="left"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        Entry into the Financial
{" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
          Market
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
       ICO on Coinmarketcap: Launch Initial Coin Offering (ICO) on Coinmarketcap,
       allowing investors to purchase shares in the company's profits.
       Funds raised will be invested in platform development, projects, and marketing.


      </chakra.p>

      
    </Box>
  </Box>

                  </div>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 3 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>

  <Box
  data-aos="fade-up"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "100%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        textAlign="left"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
       Platform and Project {" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
          Development
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
     Platform Creation: Establish the foundational platform with the ability to sell shares, wallets, 
     and various tools for purchasing shares and tokens.
     Launch of the First Project: Commence the first project and sell shares associated with it.


      </chakra.p>

      
    </Box>
  </Box>

                  </div>
                </div>
              </div>
      

              <div className="tl-item alt">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 4 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>

  <Box
  data-aos="fade-down"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "100%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        textAlign="left"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        Expansion to Cryptocurrency 
{" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
         Exchanges
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
     Listing on Coinmarketcap and Coingecko: Add our company to Coinmarketcap and Coingecko platforms.
     Listing on Various Exchanges: Expand the availability of our tokens by listing them on various cryptocurrency exchanges.



      </chakra.p>

      
    </Box>
  </Box>

                  </div>
                </div>
              </div>


            
              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 5 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>

  <Box
  data-aos="fade-up"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "100%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        textAlign="left"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
      Introduction of New  {" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
          Products
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
     Platform Creation: Establish the foundational platform with the ability to sell shares, wallets, 
     and various tools for purchasing shares and tokens.
     Launch of the First Project: Commence the first project and sell shares associated with it.


      </chakra.p>

      
    </Box>
  </Box>

                  </div>
                </div>
              </div>
              


              <div className="tl-item alt">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 6 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>

  <Box
  data-aos="fade-down"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "100%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        textAlign="left"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
       Application and New Product 
{" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
         Development
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
     Listing on Coinmarketcap and Coingecko: Add our company to Coinmarketcap and Coingecko platforms.
     Listing on Various Exchanges: Expand the availability of our tokens by listing them on various cryptocurrency exchanges.



      </chakra.p>

      
    </Box>
  </Box>

                  </div>
                </div>
              </div>


              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 7 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>

  <Box
  data-aos="fade-up"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "100%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        textAlign="left"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
      Future Project   {" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
         Proposals
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
     Developing Projects: Propose the development of projects such as "watch to earn," "play to earn," 
     proprietary exchange, proprietary bank, viewing real estate data in the virtual world, advancing Web 3.0, masternodes, etc.



      </chakra.p>

      
    </Box>
  </Box>

                  </div>
                </div>
              </div>

              <div className="tl-item alt">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 8 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>

  <Box
  data-aos="fade-down"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "100%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        textAlign="left"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
       Infrastructure 
{" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
         Expansion
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
     
Websites and Wallets: Expand websites and cryptocurrency wallets.
Expand Exchanges and Liquidity on Pancake: Increase token availability on different exchanges and enhance liquidity on the Pancake platform.




      </chakra.p>

      
    </Box>
  </Box>

                  </div>
                </div>
              </div>
              
          </div>  
         </div>
          </div>
            </div>
          </div>
        </div>
    
  )
}
