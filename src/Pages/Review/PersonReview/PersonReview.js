import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import "./PersonReview";
import useAuth from "../../../hooks/useAuth";

const PersonReview = (props) => {
  console.log(props);
  const { user } = useAuth();
  const { name, rating, Comments, img } = props.review;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, p: 3, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{
            width: "auto",
            height: "80px",
            margin: "0 auto",
            borderRadius: "50%",
          }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" color="tomato" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Comments}
          </Typography>
          <span className="style">
            <Rating initialRating={rating} readonly />
          </span>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PersonReview;
