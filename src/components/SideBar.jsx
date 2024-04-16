import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
function DrawerExample() {
  return (
    <Box w={"450px"} h={"100vh"} bg={"gray.100"}>
      <ChakraLink display={"block"} as={ReactRouterLink} to="/urun">
        Urun
      </ChakraLink>

      <ChakraLink display={"block"} as={ReactRouterLink} to="/contact">
        Contact
      </ChakraLink>
    </Box>
  );
}
export default DrawerExample;
