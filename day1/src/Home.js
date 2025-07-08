// Home.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        p: 4,
        backgroundColor: "#f5f5f5",
        minHeight: "80vh",
      }}
    >
      <Box sx={{ pl: { xs: 0, md: 4 } }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Joyson website
        </Typography>
        <Typography variant="h6" gutterBottom>
          I’m a passionate Full Stack Developer on a mission to crack an MNC by
          2027 💼🚀
        </Typography>
        <Typography variant="h6" sx={{ color: "gray" }} gutterBottom>
          I am building my full stack career with MERN, AI, Docker, and more!
        </Typography>

        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Download Resume
        </Button>
        <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
          View My Projects
        </Button>
      </Box>
      <Box
        component="img"
       src="/571-300x300.jpg"
        alt="Profile"
        sx={{
          borderRadius: "50%",
          width: 300,
          height: 300,
          mt: { xs: 4, md: 0 },
        }}
      />
    </Box>
  );
};

export default Home;
