import React from 'react'
import { Box, Typography, Button } from "@mui/material";
const projects = [
  {
    title: "Project One",
    description: "This is the first project about MERN stack.",
  },
  {
    title: "Project Two",
    description: "Second project using Power BI and Excel.",
  },
  {
    title: "Project Three",
    description: "An ML model to predict car resale value.",
  },
];

const Pratice = () => {
  return (
    <div>
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
            My Projects 💼
            </Typography>
         {projects.map((project, index) => (
            <Box key={index} sx={{ mb: 2, p: 2}}>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                {project.description}
                </Typography>
                <Button size="small" variant="outlined" sx={{ mt: 1 }}>
                View Project
                </Button>
            </Box>
            ))}
        </Box>
    </div>
  )
}

export default Pratice
