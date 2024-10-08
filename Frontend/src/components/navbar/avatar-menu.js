import {
  Box,
  Text,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const AvatarMenu = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const fullname =
    localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
  const email = localStorage.getItem("email");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .get("http://127.0.0.1:8000/api/logout")
      .then((response) => {
        localStorage.clear();
        //setIsLoggedIn(false);
        navigate("/login");
      })
      .catch((e) => {
        // ...
      });
  };

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  ""
                }
              />
            </MenuButton>
            <MenuList>
              <Box mt={4} textAlign="center">
                <Text fontWeight="bold" color={"black"}>{fullname}</Text>
                <Text fontSize="sm" color={"gray"}>
                  {email}
                </Text>
              </Box>
              <MenuDivider />
              <MenuItem onClick={() => navigate("/")} color={"grey"}>
                {t("menuList.home")}
              </MenuItem>
              <MenuItem
                onClick={() => changeLanguage("en")} color={"grey"}
                style={{ display: currentLanguage === "en" ? "none" : "block" }}
              >
                {t("menuList.english")}
              </MenuItem>
              <MenuItem
                onClick={() => changeLanguage("fr")} color={"grey"}
                style={{ display: currentLanguage === "fr" ? "none" : "block" }}
              >
                {t("menuList.french")}
              </MenuItem>
              <MenuItem onClick={() => navigate("/profile")} color={"grey"}>
                {t("menuList.profile")}
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogout} color={"grey"}>{t("menuList.logout")}</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AvatarMenu;
