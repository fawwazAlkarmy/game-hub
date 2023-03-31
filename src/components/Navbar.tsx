import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Game Hub" boxSize={"50px"} />
    </HStack>
  );
};
export default Navbar;
