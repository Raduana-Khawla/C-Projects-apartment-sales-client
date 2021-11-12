import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import PersonReview from "../PersonReview/PersonReview";
import "./ReviewShows.css";

const ReviewShows = () => {
  const [reviews, setReviews] = useState([]);
  //loading data
  useEffect(() => {
    fetch(`http://localhost:5000/addReview`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "error.main", py: 5 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: "white" }}
          variant="h3"
          component="div"
        >
          We have won numerous awards over the years, but to us it's your
          opinion that really matters
        </Typography>
        <Typography
          sx={{ fontWeight: 600, m: 5 }}
          variant="h4"
          color="Black"
          component="div"
        >
          REVIEWS
        </Typography>
        <Typography
          sx={{ fontWeight: 70, m: 2, color: "white" }}
          variant="h6"
          component="div"
        >
          Here are our latest reviews from{" "}
          <span className="text-white">allAgents</span>
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {reviews.map((review) => (
            <PersonReview key={review.name} review={review}></PersonReview>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReviewShows;
