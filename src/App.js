import { Flex, Box, Image } from "@chakra-ui/react"
import bgvideo from './media/Gen-2BackgroundVideo.mp4'
import logo from './media/logotransparent.png'
import './App.css';

export default function App() {
  return (
     <Flex overflow="hidden" bgColor="black" direction="column" 
      alignItems="center" >
        <Box overflow="hidden" maxWidth="1560px" width="100%" zIndex={1} >
          <video width="100%" autoPlay loop muted className="responsive-video" >
            <source src={bgvideo} type="video/mp4" />
          </video>
        </Box>
        <Image overflow="hidden" src={logo} width="70vw"
          position="static" 
          zIndex="2"
        />
     </Flex>
  );
}