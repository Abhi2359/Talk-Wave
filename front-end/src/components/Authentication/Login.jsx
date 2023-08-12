import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [showPassword, setshowPassword] = useState(false);

  const handleClick = () => {
    setshowPassword(!showPassword);
  };

  const handleSubmit = () => {};
  return (
    <VStack spacing="5px">
      <FormControl className="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          focusBorderColor="blue.400"
        />
      </FormControl>
      <FormControl className="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            focusBorderColor="blue.400"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button colorScheme="blue" width="100%" onClick={handleSubmit}>
        Login
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        varinat="solid"
        onClick={() => {
          setEmail("guest@user.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
