import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { User } from "../../Models/user";

interface MediaProps {
  user: User | undefined;
}
const MediaCard: React.FC<MediaProps> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.user?.avatar}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.user?.first_name} {props.user?.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.user?.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
