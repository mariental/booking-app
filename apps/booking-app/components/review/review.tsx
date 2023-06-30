import {
  ListItem,
  Card,
  CardHeader,
  Avatar,
  Stack,
  Rating,
  Typography,
  CardContent,
  Divider
} from '@mui/material';
import { calculateDuration } from 'apps/booking-app/store/reservationSlice';
import { useTheme } from '@mui/material/styles';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import React from 'react';

export interface ReviewProps {
  review: any;
}

export function Review(props: ReviewProps) {

  const theme = useTheme();

  return (
    <ListItem key={`item-${props.review.id}`}>
      <Card
        sx={{
          width: '100%',
          mb: 1,
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: 1,
          paddingRight: 1,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: 48,
                height: 48,
              }}
              aria-label="person"
            >
              A
            </Avatar>
          }
          title={props.review.author.name}
          titleTypographyProps={{ fontSize: 18 }}
          subheader={`Opublikowano: ${
            props.review.publicationDate.split('T')[0]
          }`}
          subheaderTypographyProps={{ fontSize: 16 }}
          action={
            <Stack direction="row" spacing={1} alignItems="center">
              <Rating
                name="read-only"
                value={props.review.rate}
                readOnly
                precision={0.1}
              />
              <Typography variant="h6">
                {props.review.rate.toPrecision(2)}
              </Typography>
            </Stack>
          }
        />
        <CardContent>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mb: 3 }}
            flexWrap="wrap"
          >
            <Stack direction="row" spacing={1} alignItems="center" my={1}>
              <BedOutlinedIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary">
                {props.review.reservation.roomOption[0].room.name}
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack direction="row" spacing={1} alignItems="center" my={1}>
              <CalendarMonthOutlinedIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary">
                {props.review.reservation.checkOutDate.split('T')[0]}
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack direction="row" spacing={1} alignItems="center" my={1}>
              <BedtimeOutlinedIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary">
                {calculateDuration(
                  props.review.reservation.checkInDate.split('T')[0],
                  props.review.reservation.checkOutDate.split('T')[0]
                )}
                {calculateDuration(
                  props.review.reservation.checkInDate.split('T')[0],
                  props.review.reservation.checkOutDate.split('T')[0]
                ) === 1
                  ? ' dzień'
                  : ' dni'}
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack direction="row" spacing={1} alignItems="center" my={1}>
              <FamilyRestroomIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary">
                {props.review.reservation.kids + props.review.reservation.adults}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="h5" component="div" gutterBottom>
            {props.review.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.review.content}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default Review;
