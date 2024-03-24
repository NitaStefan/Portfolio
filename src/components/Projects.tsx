import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import javaFxPr from "../assets/JavaFX Hospital Project.mp4";
import hmStorePr from "../assets/Web Hm Store.mp4";
import React from "react";

const Projects = () => {
  // const isSmScreen = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery((theme: any) => theme.breakpoints.up("md"));

  const ProjectVideo: React.FC<{ video: string }> = ({ video }) => (
    <video
      className="video"
      width={isMdScreen ? "630" : "320"}
      height={isMdScreen ? "371.2" : "188.4"}
      controls
    >
      <source src={video} type="video/mp4" />
    </video>
  );

  const ProjectPresentation: React.FC<{
    description: string;
    title: string;
    video: string;
  }> = ({ title, video, description }) => (
    <Box margin="0 15px 20px">
      <Typography
        color="primary"
        sx={{
          fontFamily: "inherit",
          fontSize: isMdScreen ? "20px" : "16px",
          fontWeight: "600",
          padding: "5px 0",
          borderRadius: "10px 10px 0 0",
          borderLeft: "8px solid",
          borderTop: "8px solid",
          borderRight: "8px solid",
        }}
      >
        {title}
      </Typography>
      <ProjectVideo video={video} />
      <Accordion sx={{ width: isMdScreen ? "646px" : "336px" }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: isMdScreen ? "20px" : "16px",
            }}
          >
            Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontFamily: "inherit",
              fontSize: isMdScreen ? "17px" : "14px",
            }}
          >
            {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <ProjectPresentation
        description="• MERN Stack Presentation Website for showcasing different handmade products
        • User-friendly navigation with responsive design using components from Material UI library
        • All the data, including images, is stored in a MongoDB database
        • Initial waiting time is long as the database is crowded, but then the filtering based on category is very fast"
        title="Handmade Products Showcase"
        video={hmStorePr}
      />
      <ProjectPresentation
        description="• GUI program for managing appointments of different patients using JavaFX
        • Patient and Appointment information is stored in a SQLite database using JDBC
        • Layered architecture with CRUD operations on both entities (Patient and Appointment)
        • Specific reports on the data are provided with the help of Java streams"
        title="JavaFX Appointment Manager"
        video={javaFxPr}
      />
    </Box>
  );
};
export default Projects;
