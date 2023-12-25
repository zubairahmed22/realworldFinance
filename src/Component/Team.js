import React from 'react'










import { Image, Box, Link,chakra,Flex,SimpleGrid,Text,HStack } from '@chakra-ui/react'
export const Team = () => {
  return (
	<>
    <section className="inner-intro  padding bg-img1 overlay-dark light-color">
				<div className="container">
					<div className="row title">
						<h1>Team</h1>
						<div className="page-breadcrumb">
							
						</div>
					</div>
				</div>
			</section>

			<div class=" padding ptb-xs-60">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							
							<section id="team" class="team-section">

								<div class="container">
									<div class="row text-center pb-30">
										<div class="col-sm-12">
											<div class="heading-box ">
												<h2><span className='OutTeamtag'>Our</span> Team</h2>
												<span class="b-line"></span>
											</div>
										</div>
									</div>
									<SimpleGrid columns={4}  py={6} 
									minChildWidth="250px"
            
                                    spacing={10}
                                    flexWrap="wrap"
>
  <Flex
    shadow="lg"
    rounded="lg"
    bg="#edf3f8"
	maxHeight={400}
    _dark={{
      bg: "gray.800",
    }}
    mb={8}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      height="100%"
      width="100%"
      borderRadius="lg"
      p={8}
      display="flex"
      alignItems="left"
    >
      <Image
        src="assets/images/team/person.png"
        alt="Profile Picture"
        borderRadius="full"
        boxSize="150px"
        shadow="lg"
        border="5px solid"
        mb={-20}
        borderColor="#d86b34"
        _dark={{
          borderColor: "gray.200",
        }}
      />
    </Box>
    <Box
      gridColumn="span 8"
      p={8}
      width="full"
      height="full"
      borderRadius="lg"
      textAlign="left"
      mt={10}
    >
     <Text
        fontSize="4xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Nomain Haq
      </Text>
      <HStack
        spacing={3}
        color="gray.800"
        _dark={{
          color: "gray.200",
        }}
      >
    
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "gray.200",
          }}
        >
          BlockChain Developer
        </Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
        <Text fontSize="lg">Bahrain</Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
        <Text fontSize="lg">I'm a dedicated and passionate blockchain developer, 
		driven by the potential of this transformative technology to reshape industries and empower individuals. 
		With 10 years of experience in the field.</Text>
      </HStack>
    </Box>
  </Flex>

  <Flex
    shadow="lg"
    rounded="lg"
    bg="#edf3f8"
	maxHeight={400}
    _dark={{
      bg: "gray.800",
    }}
    mb={8}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      height="100%"
      width="100%"
      borderRadius="lg"
      p={8}
      display="flex"
      alignItems="left"
    >
      <Image
        src="assets/images/team/person.png"
        alt="Profile Picture"
        borderRadius="full"
        boxSize="150px"
        shadow="lg"
        border="5px solid"
        mb={-20}
        borderColor="#d86b34"
        _dark={{
          borderColor: "gray.200",
        }}
      />
    </Box>
    <Box
      gridColumn="span 8"
      p={8}
      width="full"
      height="full"
      borderRadius="lg"
      textAlign="left"
      mt={10}
    >
     <Text
        fontSize="4xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
       Travis Daniel
      </Text>
      <HStack
        spacing={3}
        color="gray.800"
        _dark={{
          color: "gray.200",
        }}
      >
    
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "gray.200",
          }}
        >
          Frontend developer 
        </Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
        <Text fontSize="lg">London</Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
        <Text fontSize="lg">I'm a dedicated and passionate Frontend developer, 
		driven by the potential of this transformative technology to reshape industries and empower individuals. 
		With 10 years of experience in the field. </Text>
      </HStack>
    </Box>
  </Flex>

  {/* <Flex
    shadow="lg"
    rounded="lg"
    bg="#edf3f8"
	maxHeight={400}
    _dark={{
      bg: "gray.800",
    }}
    mb={8}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Box
     bg="#edf3f8"
     _dark={{
       bg: "#3e3e3e",
     }}
     style={{
       backgroundImage:
         "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
       backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
     }}
     height="100%"
     width="100%"
     borderRadius="lg"
     p={8}
     display="flex"
     alignItems="left"
    >
      <Image
        src="assets/images/team/person.png"
        alt="Profile Picture"
        borderRadius="full"
        boxSize="150px"
        shadow="lg"
        border="5px solid"
        mb={-20}
        borderColor="#d86b34"
        _dark={{
          borderColor: "gray.200",
        }}
      />
    </Box>
    <Box
      gridColumn="span 8"
      p={8}
      width="full"
      height="full"
      borderRadius="lg"
      textAlign="left"
      mt={10}
    >
     <Text
        fontSize="4xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Travis Daniel
      </Text>
      <HStack
        spacing={3}
        color="gray.800"
        _dark={{
          color: "gray.200",
        }}
      >
    
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "gray.200",
          }}
        >
         frontend developer 
        </Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
        <Text fontSize="lg">London</Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
        <Text fontSize="lg"> is a programmer who specializes in the creation and maintenance of the user interface and user experience (UI/UX) of a website or web application. </Text>
      </HStack>
    </Box>
  </Flex> */}


  <Flex
    shadow="lg"
    rounded="lg"
	maxHeight={400}
    bg="#edf3f8"
    _dark={{
      bg: "gray.800",
    }}
    mb={8}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      height="100%"
      width="100%"
      borderRadius="lg"
      p={8}
      display="flex"
      alignItems="left"
    >
      <Image
        src="assets/images/team/person.png"
        alt="Profile Picture"
        borderRadius="full"
        boxSize="150px"
        shadow="lg"
        border="5px solid"
        mb={-20}
        borderColor="#d86b34"
        _dark={{
          borderColor: "gray.200",
        }}
      />
    </Box>
    <Box
      gridColumn="span 8"
      p={8}
      width="full"
      height="full"
      borderRadius="lg"
      textAlign="left"
      mt={10}
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
    David Lawrence
      </Text>
      <HStack
        spacing={3}
        color="gray.800"
        _dark={{
          color: "gray.200",
        }}
      >
     
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "gray.200",
          }}
        >
         FullStack developer
        </Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
        <Text fontSize="lg">London</Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
      
        <Text fontSize="lg">I'm a dedicated and passionate blockchain developer, 
		driven by the potential of this transformative technology to reshape industries and empower individuals. 
		With 10 years of experience in the field.</Text>
      </HStack>
    </Box>
  </Flex>


  <Flex
    shadow="lg"
    rounded="lg"
    bg="#edf3f8"
	maxHeight={400}
    _dark={{
      bg: "gray.800",
    }}
    mb={8}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      height="100%"
      width="100%"
      borderRadius="lg"
      p={8}
      display="flex"
      alignItems="left"
    >
      <Image
        src="assets/images/team/person.png"
        alt="Profile Picture"
        borderRadius="full"
        boxSize="150px"
        shadow="lg"
        border="5px solid"
        mb={-20}
        borderColor="#d86b34"
        _dark={{
          borderColor: "gray.200",
        }}
      />
    </Box>
    <Box
      gridColumn="span 8"
      p={8}
      width="full"
      height="full"
      borderRadius="lg"
      textAlign="left"
      mt={10}
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Christian Buehner
      </Text>
      <HStack
        spacing={3}
        color="gray.800"
        _dark={{
          color: "gray.200",
        }}
      >
    
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "gray.200",
          }}
        >
          developer
        </Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
        <Text fontSize="lg">Germany</Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
        <Text fontSize="lg">I'm a versatile and innovative developer with a unique blend of skills bridging the gap between traditional web development and the cutting-edge world of blockchain technology</Text>
      </HStack>
    </Box>
  </Flex>
</SimpleGrid>
									
									

									

								</div>

							</section>
							
						</div>
					</div>
				</div>
			</div>

	</>		
  )
}
