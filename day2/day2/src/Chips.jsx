import React from "react";
import { Chip, Box, Button, Typography } from "@mui/material";

const projects = [
  {
    title: "Project One",
    description: "This is the first project about MERN stack.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "Second project using Power BI and Excel.",
    tech: ["Power BI", "Excel"],
    link: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description: "An ML model to predict car resale value.",
    tech: ["Python", "scikit-learn", "Pandas"],
    link: "https://example.com/project-three",
  },
];

const Chips = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ m: 2 }}>
        My Projects  in Chips Style 
      </Typography>

      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            m: 2,
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography variant="h6">{project.title}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {project.description}
          </Typography>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                {project.tech.map((item, i) => (
                <Chip key={i} label={item} variant="outlined" size="small" />
                ))}
            </Box>

          <Button
            size="small"
            variant="contained"
            color="primary"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </Button>
        </Box>
      ))}
    </div>
  );
};

export default Chips;
