import { Button, Container } from "@mui/material";
import React from "react";

export interface UserReviewsProps {}

export function UserReviews(props: UserReviewsProps) {
  const [reviews, setReviews] = React.useState();

  return (
    <Container maxWidth="xl" sx={{ mx: 'auto', my: 2 }}>
      {reviews ? <></>             
      : <Button variant="contained" sx={{ mt: 2 }}>Dodaj pierwszą opinię</Button>
      }
    </Container>
  );
}

export default UserReviews;
