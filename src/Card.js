import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";







const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const [heart, setHeart] = React.useState(false);

  function changeColor(){
    setHeart(!heart);
  }

  const [copied, setCopied] = React.useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);

    return(
      alert("URL copied to clipboard")
    )
  }



  return (
            

      <Grid container direction="column" alignItems="center">
    <Card sx={{ maxWidth: 345 }} style={{height: "auto", width: "400px", background:"#6998AB", marginBottom:"10px", marginTop:"10px"}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#1A374D", height: "70px", width: "70px" }} aria-label="recipe">
            {props.meat}
          </Avatar>
        }
        title={props.name}
        subheader={props.time}
      />
      <CardMedia
        component="img"
        height="300"
        image={props.imgURL}
        alt={props.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={{color: heart ? "red" :"grey"}} onClick={changeColor} >
          <FavoriteIcon
          />
        </IconButton>
        <IconButton aria-label="share" onClick={copy} style={{color: copied ? "green" : "grey"}}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        Show Recipe
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Recipe:</Typography>
          <Typography paragraph>
            {props.instructions}
          </Typography>
          <Typography paragraph> 
            Ingredients:
          </Typography>
          <Typography paragraph>
            {props.ingredients}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );
}


