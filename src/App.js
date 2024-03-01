import { Flex, Box, Image, Text } from "@chakra-ui/react"
import bgvideo from './media/Gen-2BackgroundVideo.mp4'
import logo from './media/logotransparent.png'
import './App.css';
import { useRef, useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

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
      // Clean up
      return () => {
        videoElement.removeEventListener('loadeddata', onVideoLoad);
      };
    }
  }, []);


  return (
     <Flex overflow="hidden" bgColor="white" direction="column" justifyContent="center" alignItems="center" height="100vh" >
        {!videoLoaded && <Flex zIndex={3} width="100vw" height="100vh" bgColor="white" justifyContent="center"
            alignItems="center" direction="column"
        >  
          <ScaleLoader color="black" size={350} />
        </Flex>}
        <Flex direction="column" height="100%" alignItems="center" >
          <Image overflow="hidden" src={logo} width="80vw" opacity={videoLoaded ? 1 : 0}
            position="absolute" 
            zIndex={2}
          />
          <Text zIndex={2} position="absolute" fontSize="3rem" textAlign="center" bottom="7vh" color="white" fontWeight="extrabold"
          > Coming Soon </Text>
        </Flex>
        <Box overflow="hidden" maxWidth="1560px" width="100%" zIndex={1} >
          <video width="100%" autoPlay loop muted playsInline className="responsive-video" ref={videoRef} >
            <source src={bgvideo} type="video/mp4" />
          </video>
        </Box>
     </Flex>
  );
}