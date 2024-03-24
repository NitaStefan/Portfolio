import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [buttons, setButtons] = useState([true, false, false]);
  const location = useLocation();
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.up("sm")
  );
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setButtons([true, false, false]);
        break;
      case "/skills":
        setButtons([false, true, false]);
        break;
      case "/projects":
        setButtons([false, false, true]);
        break;
      default:
        setButtons([false, false, false]);
        break;
    }
  }, [location.pathname]);

  const toggleDrawer = (openStatus: boolean) => () => {
    setOpen(openStatus);
  };

  isSmallScreen && open && setOpen(false);

  const goToLink = (link: string) => {
    window.open(link, "_blank");
  };

  const handleClick = () => {
    setOpen(false);
  };

  const MyIconButton: React.FC<{
    link: string;
    icon: React.ComponentType<any>;
  }> = ({ link, icon: Icon }) => {
    return (
      <IconButton
        sx={{
          margin: "0 3px",
          color: "secondary.main",
          "&:hover": {
            color: "white",
            transition: "color 0.5s",
          },
          width: "fit-content",
          alignSelf: "center",
        }}
        onClick={() => goToLink(link)}
      >
        <Icon
          sx={{
            fontSize: 30,
          }}
        />
      </IconButton>
    );
  };

  const HeaderButton: React.FC<{ buttonNr: number; text: string }> = ({
    buttonNr,
    text,
  }) => {
    return (
      <Link to={"/" + (text != "Home" ? text.toLowerCase() : "")}>
        <Button
          sx={{
            fontSize: "18px",
            textTransform: "none",
            margin: "0 14px",
          }}
          color="secondary"
          variant={buttons[buttonNr] ? "outlined" : "text"}
          onClick={() => handleClick()}
        >
          {text}
        </Button>
      </Link>
    );
  };
  const SetOfButtons = () => {
    return (
      <>
        <HeaderButton buttonNr={0} text="Home" />
        <HeaderButton buttonNr={1} text="Skills" />
        <HeaderButton buttonNr={2} text="Projects" />
        <MyIconButton
          link="https://www.linkedin.com/in/stefan-nita-12a656267/"
          icon={LinkedInIcon}
        />
        <MyIconButton
          link="https://github.com/NitaStefan?tab=repositories"
          icon={GitHubIcon}
        />
      </>
    );
  };

  return (
    <AppBar
      sx={{
        padding: "0 25px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "120px",
        backgroundColor: "primary.main",
      }}
    >
      <Avatar
        sx={{ width: 100, height: 100 }}
        alt="Profile picture"
        src={profilePic}
      />
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <SetOfButtons />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Button color={"secondary"} onClick={toggleDrawer(true)}>
          <MenuOpenIcon sx={{ fontSize: 40 }} />
        </Button>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "primary.main",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "450px",
              padding: "0 20px",
              borderRadius: "0 0 0 50px",
            },
          }}
        >
          <SetOfButtons />
        </Drawer>
      </Box>
    </AppBar>
  );
};

export default Header;
