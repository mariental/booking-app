import { Button, CircularProgress, Container, List, Typography } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'apps/booking-app/firebase/firebaseApp';
import Review from '../review/review';

export interface UserReviewsProps {}

export function UserReviews(props: UserReviewsProps) {
  const [reviews, setReviews] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [user] = useAuthState(auth);

  const getUser = async (email: string) => {
    const resonse = await fetch(`/api/user/${email}`, {
      method: 'GET',
    });
    return resonse.json();
  };

  const getReviews = async (id: number) => {
    const resonse = await fetch(`/api/review/${id}`, {
      method: 'GET',
    });
    return resonse.json();
  };

  const getReservation = async (id: number) => {
    const resonse = await fetch(`/api/reservation/${id}`, {
      method: 'GET',
    });
    return resonse.json();
  };

  React.useEffect(() => {
    if (user) {
      getUser(user.email).then((userData) => {
        getReviews(userData.id).then((data) => {
          setReviews(data);
          setLoading(false);
        });
      });
    }
  }, []);

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ mx: 'auto', my: 2 }}>
        <CircularProgress></CircularProgress>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="xl" sx={{ mx: 'auto', my: 2 }}>
        {reviews ? (
          <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
              overflow: 'auto',
              maxHeight: '55vh',
              boxShadow: 1,
              paddingTop: 2,
            }}
          >
            {reviews.map((review) => <Review review={review} />)}
          </List>
        ) : (
          <Typography>Brak opinii</Typography>
        )}
      </Container>
    );
  }
}
export default UserReviews;
