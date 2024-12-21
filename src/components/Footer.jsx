import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import './Food.css';

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3,width:'1465px' }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <div className="Icons_footer">
          <InstagramIcon className="insta"/>
          <TwitterIcon className="twitter"/>
          <GitHubIcon  className="github"/>
          <YouTubeIcon className="youtube" />
          </div>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:200px)": {
              fontSize: "10px",
            },
          }}
        >
          All Rights Reserved &copy;
        </Typography>
      </Box>
    </>
  );
};

export default Footer;