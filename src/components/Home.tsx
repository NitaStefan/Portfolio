import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.up("sm")
  );
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 180px)",
        position: "relative",
        textAlign: "start",
        maxWidth: "1200px",
      }}
    >
      <Typography
        p="50px 0"
        fontFamily="cursive"
        variant={isSmallScreen ? "h2" : "h4"}
      >
        Hi, I'm Niță Ștefan
      </Typography>
      <Typography
        fontFamily="inherit"
        fontSize={isSmallScreen ? "20px" : "16px"}
        paddingBottom="40px"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;I've always known myself to be a resilient and
        persevering person when it comes to accomplishing something great. I was
        shown by the Universe that every effort is worth undertaking, and by
        having a healthy and mobile lifestyle, I manage to overcome the
        challenges that come my way.
      </Typography>
      <Typography
        fontFamily="inherit"
        fontSize={isSmallScreen ? "20px" : "16px"}
      >
        <SchoolIcon />
        &nbsp;Faculty of Mathematics and Computer Science, Babeș-Bolyai
        University (2021-2024)
      </Typography>
      <Typography
        paddingBottom="100px"
        paddingTop="8px"
        fontStyle="italic"
        fontSize={isSmallScreen ? "18px" : "15px"}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;The diverse mathematics topics helped me develop
        a highly logical and intuitive approach, which I can combine with the
        concepts studied in the computer science section. This enables me to
        efficiently handle any problem and adapt quickly.
      </Typography>
      <Typography
        position="absolute"
        bottom="20px"
        fontFamily="inherit"
        fontSize={isSmallScreen ? "20px" : "14px"}
      >
        Contact:&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="tel:+40784311008" underline="none">
          <LocalPhoneIcon sx={{ verticalAlign: "middle" }} />
          &nbsp;0784 311 008
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="mailto:stefannita62@yahoo.com" underline="none">
          <EmailIcon sx={{ verticalAlign: "middle" }} />
          &nbsp;stefannita62@yahoo.com
        </Link>
      </Typography>
    </Box>
  );
};

export default Home;
