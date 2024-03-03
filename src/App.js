import { Flex, Box, Image, Text } from "@chakra-ui/react"
import longbgvideo from './media/LongWatermarkLess.mp4'
import { useRef, useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import transparentlogo from '../src/media/1infinitylogo.png'
import './App.css';

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

          <div className="textcontent">
            <Text fontWeight="bold" mr="2vw" >1INFINITY</Text>
            <Text fontWeight="bold" >VENTURES</Text>
            <Flex direction="row" justifyContent="center" alignItems="center">
              <Image src={transparentlogo} sx={{ filter: 'saturate(30%) grayscale(0%) brightness(100%)'}} width="100px" height="100px" 
                  position="relative" top="2vh" left="2vw" opacity={videoLoaded ? 1 : 0}/>
              <Text fontWeight="bold" mr="2vw" > LOBAL</Text>
            </Flex>
            <Text fontWeight="bold" >FUND</Text>
          </div>
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