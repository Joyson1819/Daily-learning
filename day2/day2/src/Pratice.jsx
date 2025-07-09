import React from 'react'
import { Box, Typography, Button, Grid, Card, CardContent, CardActions } from "@mui/material";
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
   <Box sx={{ p: 4 }}>
  <Typography variant="h4" gutterBottom>
    My Projects 💼
  </Typography>

  <Grid container spacing={3}>
    {projects.map((project, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card>
          <CardContent>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">
              View Project
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

  )
}

export default Pratice
