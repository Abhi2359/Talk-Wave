import { Box, Button, Menu, MenuButton, MenuItem, MenuList, MenuProvider, Text, Tooltip } from "@chakra-ui/react";
import React,{useState} from "react";
import { BiSearch } from 'react-icons/bi';
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false)
  const [loadingChat, setLoadingChat] = useState(false)
  
  return (
   <Box  display="flex"
   justifyContent="space-between"
   alignItems="center"
   bg="white"
   w="100%"
   p="5px 10px 5px 10px"
   borderWidth="5px">
    <Tooltip label="Search User to Chat" hasArrow placement="bottom-end">
      <Button variant="ghost">
      <BiSearch/>
      <Text display={{base:"none",md:"flex"}} px='4'>Search User</Text>
      </Button>
    </Tooltip>
    <Text fontSize="2xl" fontFamily="Work sans">
          TalkWave
        </Text>
        <div>
      

         
        
        </div>
   </Box>
  );
};

export default SideDrawer;
