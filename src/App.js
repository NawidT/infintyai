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
        <Flex direction="column" overflow="hidden" zIndex={2} height={videoLoaded ? "80vh": "0"} width="90%" alignItems="center" justifyContent="center"
          border="14px solid black" opacity={videoLoaded ? 1 : 0}>

          <Flex direction="column" color="white" fontWeight={1000} fontSize="3rem" fontFamily="monospace" alignItems="center" justifyContent="center" >
            <Flex direction="row" justifyContent="center" alignItems="center" mt="5vh" >
              <Image src={transparentlogo} sx={{filter: 'saturate(0%) grayscale(100%) brightness(1000%)'}} width="100px" height="100px" opacity={videoLoaded ? 1 : 0}/>
              <Text color="white" position="relative" right="2vw" bottom="2vh" fontWeight={1200} > LOBAL </Text>
            </Flex>
            <Text textAlign="center" bgColor="black" > 1INFINITY </Text>
            <Text textAlign="center" bgColor="black" > FUND </Text>

          </Flex>

          <Text textAlign="center" color="white" fontWeight="light" fontStyle="italic" fontSize="3.5rem" > - early stage ai growth fund - </Text>
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