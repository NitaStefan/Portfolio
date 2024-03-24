import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";

const Skills = () => {
  const skills = {
    hard: [
      "Java",
      "C++",
      "Python",
      "SQL",
      "Databases",
      "JDBC",
      "OOP",
      "Data Structures and Algorithms",
      "Design Patterns",
      "MERN Stack",
    ],
    soft: [
      "Problem-solving",
      "Critical thinking",
      "Adaptability",
      "Time management",
      "Communication",
      "Teamwork",
    ],
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.up("sm")
  );
  return (
    <Box sx={{ mt: "30px", textAlign: "start", maxWidth: "1200px" }}>
      <Typography
        fontFamily="inherit"
        fontSize={isSmallScreen ? "20px" : "16px"}
        paddingBottom="10px"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;During my faculty years, besides fundamental
        mathematical aptitudes, I acquired important computer science skills
        such as:
      </Typography>
      <List
        sx={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          paddingBottom: "30px",
          margin: isSmallScreen ? "0 48px" : "0",
        }}
      >
        {skills.hard.map((skill, idx) => (
          <ListItem
            key={idx}
            sx={{
              borderRadius: "10px",
              border: "2px solid black",
              width: "fit-content",
              p: isSmallScreen ? "8px 30px" : "0 6px",
            }}
          >
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
      <Typography
        fontFamily="inherit"
        fontSize={isSmallScreen ? "20px" : "16px"}
        paddingBottom="20px"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;As part of my extracurricular learning journey,
        I completed The{" "}
        <Link
          style={{ color: theme.palette.primary.main }}
          to="https://www.udemy.com/certificate/UC-a6321d78-6c82-4b35-8489-c77aab05f4d3/"
          target="_blank"
        >
          Web Developer Bootcamp 2023
        </Link>{" "}
        on Udemy. This decision propelled me to keep learning and start building
        my own projects.
      </Typography>
      <Typography
        fontFamily="inherit"
        fontSize={isSmallScreen ? "20px" : "16px"}
        paddingBottom="20px"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;Also, the situations and challenges I've
        ecountered along the way helped me develop several soft skills,
        including:
      </Typography>
      <List
        sx={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          margin: isSmallScreen ? "0 48px" : "0",
        }}
      >
        {skills.soft.map((skill, idx) => (
          <ListItem
            key={idx}
            sx={{
              borderRadius: "10px",
              border: "2px solid black",
              width: "fit-content",
              p: isSmallScreen ? "8px 30px" : "0 6px",
            }}
          >
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Skills;
