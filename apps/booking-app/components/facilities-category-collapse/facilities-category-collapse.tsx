import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

interface facility {
  name: string;
  details?: string;
  facilities?: string[];
  icon: React.ReactElement;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

export interface FacilitiesCategoryCollapseProps {
  facility: facility;
}

export function FacilitiesCategoryCollapse(props: FacilitiesCategoryCollapseProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="family" sx={{ bgcolor: blue[600] }}>
              {props.facility.icon}
            </Avatar>
          }
          title={props.facility.name}
          titleTypographyProps={{ variant: 'h6' }}
          sx={{ fontSize: 35 }}
        />
        <Divider variant="middle" />
        <CardActions disableSpacing>
          <Typography variant="body2" color="text.secondary">
            Rozwiń aby zobaczyć szczegóły
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List component="div" disablePadding>
              {props.facility.facilities.map(item =>
                <ListItemButton sx={{ pl: 4, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <CircleOutlinedIcon fontSize='inherit' />
                  </ListItemIcon>
                  <ListItemText secondary={item} />
                </ListItemButton>
              )}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default FacilitiesCategoryCollapse;
