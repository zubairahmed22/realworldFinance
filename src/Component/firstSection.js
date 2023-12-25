import React,{useEffect} from 'react'
import { Image, Box, Link,chakra,Flex,SimpleGrid} from '@chakra-ui/react'

import "jquery-ui-dist/jquery-ui"
import $ from "jquery"
import AOS from 'aos';
import 'aos/dist/aos.css';


const FirstSection = () => {



	useEffect(() =>{
		AOS.init({duration: 1000})
		
		},[])
  return (
    <section className="services-section__block pt-90 pb-70 ptb-xs-60">
		      <div className="container">
			  
						{/* <div className="col-sm-4">
							<div className="about-block img-scale  mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/value_proposition.png" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>Unique Value Proposition</h3>
									</div>
									<div className="text-content">
										<p>
										Our investments are based solely on real assets such as gold, silver, real estate, and thriving businesses. By utilizing cryptocurrency and blockchain technology, we enable anyone, even those with modest means,
										 to participate in investments, contributing to greater democratization of the investment world.
										</p>
									
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="about-block img-scale mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/new_goal_pic.png" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>Company Goal</h3>
									</div>
									<div className="text-content">
										<p>
											
Our goal is to facilitate investment in secure assets that might be otherwise inaccessible to many.
 We want everyone, regardless of location or the amount of available funds, to participate in investments that generate stable profits.

										</p>
										
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="about-block img-scale mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/goldpng.png" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>Concept of Gold-Backed Cryptocurrency</h3>
									</div>
									<div className="text-content">
										<p>
										One of our long-term goals is to create a gold-backed currency, providing a stable solution for countries facing inflationary issues. We aim to base the currency's value on real assets,
										 eliminating the need to rely on the arbitrary value of paper money.
										</p>
										
									</div>
								</div>
							</div>
						</div>


						<div className="col-sm-4" data-aos="">
							<div className="about-block img-scale mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/newapproch.jpg" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>New Approach to Investments</h3>
									</div>
									<div className="text-content">
										<p>
										Real World Invest Company seeks to transform how people invest by eliminating speculation in favor of secured,
										 real assets. We reject investments in cryptocurrencies based solely on code, 
										focusing instead on investments with real value and the potential for profits.
										</p>
										
									</div>
								</div>
							</div>
						</div> */}
						<SimpleGrid columns={3}  py={6} 
            minChildWidth="250px"
            spacing={20}
            
            flexWrap="wrap"

            
            
  
>
  <Box
    mx="auto"
	  flexBasis="33.333333%"
    rounded="lg"
    shadow="md"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    maxW="3xl"
  >
    
    <Image
      roundedTop="lg"
      w="full"
      h={64}
      fit="cover"
      src="assets/images/services/value_proposition.png" 
      alt="Article"
    />
    <Box p={6}>
      <Box>
        
        <Link
          display="block"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontSize="2xl"
          mt={2}
          _hover={{
            color: "gray.600",
            textDecor: "underline",
          }}
        >
         Unique Value Proposition
        </Link>
        <chakra.p
          mt={2}
          fontSize="16"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
       Our investments are based solely on real assets such as gold, silver, real estate, and thriving businesses.
        By utilizing cryptocurrency and blockchain technology, we enable anyone, even those with modest means,
			 to participate in investments, contributing to greater democratization of the investment world.
        </chakra.p>
      </Box>

      <Box mt={4}>
        <Flex alignItems="center">
          <Flex alignItems="center">
           
            
          </Flex>
          
        </Flex>
      </Box>
    </Box>
  </Box>


  <Box
    mx="auto"
	  flexBasis="33.333333%"
    rounded="lg"
    shadow="md"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    maxW="2xl"
  >
    <Image
      roundedTop="lg"
      w="full"
      h={64}
      fit="cover"
      src="assets/images/services/goldpng.png"
    />

    <Box p={6}>
      <Box>
        
        <Link
          display="block"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontSize="2xl"
          mt={2}
          _hover={{
            color: "gray.600",
            textDecor: "underline",
          }}
        >
       Concept of Gold-Backed Cryptocurrency
        </Link>
        <chakra.p
          mt={2}
          fontSize="medium"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
          One of our long-term goals is to create a gold-backed currency, providing a stable solution for countries facing inflationary issues.
           We aim to base the currency's value on real assets,
					eliminating the need to rely on the arbitrary value of paper money.
        </chakra.p>
      </Box>

      <Box mt={4}>
        <Flex alignItems="center">
          
          
        </Flex>
      </Box>
    </Box>
  </Box>
  <Box
    mx="auto"
	  flexBasis="33.333333%"
    rounded="lg"
    shadow="md"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    maxW="2xl"
  >
    <Image
      roundedTop="lg"
      w="full"
      h={64}
      fit="cover"
      src="assets/images/services/new_goal_pic.png"
      alt="Article"
    />

    <Box p={6}>
      <Box>
        
        <Link
          display="block"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontSize="2xl"
          mt={2}
          _hover={{
            color: "gray.600",
            textDecor: "underline",
          }}
        >
         Company Goal
        </Link>
        <chakra.p
          mt={2}
          fontSize="medium"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
       Our goal is to facilitate investment in secure assets that might be otherwise inaccessible to many.
 We want everyone, regardless of location or the amount of available funds, to participate in investments that generate stable profits.

        </chakra.p>
      </Box>

      <Box mt={4}>
        <Flex alignItems="center">
          <Flex alignItems="center">
           
          </Flex>
         
        </Flex>
      </Box>
    </Box>
  </Box>
 

  <Box
    mx="auto"
   
    position="relative"
	
    rounded="lg"
    shadow="md"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    maxW="2xl"
  >
    
    <Image
      roundedTop="lg"
      w="full"
      h={64}
      fit="cover"
      src="assets/images/services/newapproch.jpg"
      alt="Article"
    />
    <Box p={6}>
      <Box>
        
        <Link
          display="block"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontSize="2xl"
          mt={2}
          _hover={{
            color: "gray.600",
            textDecor: "underline",
          }}
        >
         New Approach to Investments
        </Link>
        <chakra.p
          mt={2}
          fontSize="medium"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
         Real World Invest Company seeks to transform how people invest by eliminating speculation in favor of secured,
										 real assets. We reject investments in cryptocurrencies based solely on code, 
										focusing instead on investments with real value and the potential for profits.
        </chakra.p>
      </Box>

      <Box mt={4}>
        <Flex alignItems="center">
          <Flex alignItems="center">
           
            
          </Flex>
          
        </Flex>
      </Box>
    </Box>
  </Box>

  
 
  <Box
    mx="auto"
   
    position="relative"
	
    rounded="lg"
    shadow="md"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    maxW="2xl"
  >
    
    <Image
      roundedTop="lg"
      w="full"
      h={64}
      fit="cover"
      src="assets/images/services/summery1.png"
      alt="Article"
    />
    <Box p={6}>
      <Box>
        
        <Link
          display="block"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontSize="2xl"
          mt={2}
          _hover={{
            color: "gray.600",
            textDecor: "underline",
          }}
        >
         
        Summary

        </Link>
        <chakra.p
          mt={2}
          fontSize="medium"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
         Our company aspires to create a world of investments that is accessible to everyone, transparent,
         and based on real assets. We aim to provide investors and ordinary individuals with an opportunity to benefit from secure investments that yield real profits while eliminating the risk of fund loss. Our vision is a future of investments that is more sustainable,
         democratic, and grounded in the values of real assets. 
        </chakra.p>
      </Box>

      <Box mt={4}>
        <Flex alignItems="center">
          <Flex alignItems="center">
           
            
          </Flex>
          
        </Flex>
      </Box>
    </Box>
  </Box>

  <Box
    mx="auto"
   
    position="relative"
	
    rounded="lg"
    shadow="md"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    maxW="2xl"
  >
    
    <Image
      roundedTop="lg"
      w="full"
      h={64}
      fit="cover"
      src="assets/images/services/built-in-finance.jpeg"
      alt="Article"
    />
    <Box p={6}>
      <Box>
        
        <Link
          display="block"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontSize="2xl"
          mt={2}
          _hover={{
            color: "gray.600",
            textDecor: "underline",
          }}
        >
         
         Finance Explained
        </Link>
        <chakra.p
          mt={2}
          fontSize="medium"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
       Real World Invest believes in the power of Web3 to transform online
        interactions and empower users by giving them more ownership and value.

       The platform is paving the way for a new era where billions of people can enjoy a
       greater share of the value they help to create.
 
        </chakra.p>
      </Box>

      <Box mt={4}>
        <Flex alignItems="center">
          <Flex alignItems="center">
           
            
          </Flex>
          
        </Flex>
      </Box>
    </Box>
  </Box>

 

</SimpleGrid>;

					
		</div>
		</section>
  )
}

export default FirstSection