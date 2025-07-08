import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Grid,
} from "@mui/material";
const projectsData = [
  {
    title: "Qualcomm Tracker App",
    description: "Real-time tracking dashboard using React.js, Google Maps, and Node.js.",
  },
  {
    title: "Vehicle Resale Value ML",
    description: "Predicted resale value using Python, sklearn, and regression techniques.",
  },
  {
    title: "Restaurant Data Analysis",
    description: "Strategic restaurant insights using Power BI, Excel, and Alteryx workflows.",
  },
];

const Projects = () => {
    
  return (
    <Box sx={{ p: 4, backgroundColor: "#e9ecef" }}>
      <Typography variant="h4" gutterBottom>
        My Projects 💼
      </Typography>
      <Grid container spacing={3}>
  {projectsData.map((project, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card>
        <CardContent>
          <Typography variant="h6">{project.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

    </Box>
  );
};

export default Projects;
