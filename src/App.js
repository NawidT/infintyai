import { Flex, Box, Image, Text } from "@chakra-ui/react"
import longbgvideo from './media/LongGen2Both.mp4'
import { useRef, useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import transparentlogo from '../src/media/1infinitylogo.png'

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef(null);
   // Event handler for video loaded
   const onVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener('loadeddata', onVideoLoad);

      return () => {
        videoElement.removeEventListener('loadeddata', onVideoLoad);
      };
    }
  }, []);


  return (
     <Flex overflow="hidden" bgColor="black" direction="column" justifyContent="center" alignItems="center" height="100vh" >
        {!videoLoaded && <Flex zIndex={3} width="100vw" height="100%" bgColor="white" justifyContent="center"
            alignItems="center" direction="column" 
        >  
          <ScaleLoader color="black" height="300px" width="3vw" />
        </Flex>}

        <Flex direction="column" overflow="hidden" zIndex={2} height={videoLoaded ? "100vh": "0"} width="90%" alignItems="center" justifyContent="flex-end"
           opacity={videoLoaded ? 1 : 0}>

          <Flex direction="row" color="black" fontSize="4rem" justifyContent="center" alignItems="flex-end" fontFamily="monospace" textShadow="4px 4px 7px white" >
            <Text fontWeight="bold" >1INFINITY VENTURES</Text>
            <Flex direction="row" justifyContent="center" alignItems="center">
              <Image src={transparentlogo} sx={{ filter: 'saturate(0%) grayscale(100%) brightness(0%)'}} width="100px" height="100px" 
                  position="relative" top="2vh" left="2vw" opacity={videoLoaded ? 1 : 0}/>
              <Text fontWeight="bold" > LOBAL FUND</Text>
            </Flex>
          </Flex>

          {/* <Text textAlign="center" color="pink" fontWeight="bold" fontStyle="italic" fontSize="3.5rem"
          textShadow="1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" > - coming soon - </Text> */}
        </Flex>

        <Box overflow="hidden" maxWidth="1560px" width="100vw" zIndex={1} >
          <video style={{"object-fit": "cover", "width": "100vw", "height": "100vh", "position": "fixed", "top": "0", "left": "0"}} 
            width="100%" autoPlay loop muted playsInline ref={videoRef} >
            <source src={longbgvideo} type="video/mp4" />
          </video>
        </Box>
     </Flex>
  );
}