import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import quiz from '../assets/pictures/quiz_pic.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '70%',
        margin: 'auto',
        marginTop: '2rem',
        backgroundColor: '#ececec'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function BlogPostScreen() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
        <Card className={classes.root}>
            <div className={classes.details}>

                <CardContent className={classes.content}>

                    <Typography style={{fontWeight: 700, fontSize: '30px'}}>
                        Quiz Night 17th february!
                    </Typography>
                    <Typography style={{fontSize: '20px'}}>The evening will provide some fun facts, and a bunch of interesting questions. In addition to that we will also have the amazing Klimato for a visit, and Sweden Foodtech will also provide some interesting questions for the event.



                        The winners of the quiz will get the chance to go and visit Klimato, meet the Klimato team, have lunch, see the office and get a better understanding of how FoodTech startups work. The quiz night will be held at zoom, where anyones who has an interest in FoodTech and how Foodtech companies works is welcome! Zoom link: https://kth-se.zoom.us/j/61492394897</Typography>
                </CardContent>

            </div>
            <img  style={{height: '20rem', width: '20rem'}} src={quiz}/>
        </Card>
            <Card className={classes.root}>
                <div className={classes.details}>

                    <CardContent className={classes.content}>

                        <Typography style={{fontWeight: 700, fontSize: '30px'}}>
                            Quiz Night 17th february!
                        </Typography>
                        <Typography style={{fontSize: '20px'}}>The evening will provide some fun facts, and a bunch of interesting questions. In addition to that we will also have the amazing Klimato for a visit, and Sweden Foodtech will also provide some interesting questions for the event.



                            The winners of the quiz will get the chance to go and visit Klimato, meet the Klimato team, have lunch, see the office and get a better understanding of how FoodTech startups work. The quiz night will be held at zoom, where anyones who has an interest in FoodTech and how Foodtech companies works is welcome! Zoom link: https://kth-se.zoom.us/j/61492394897</Typography>
                    </CardContent>

                </div>
                <img  style={{height: '20rem', width: '20rem'}} src={quiz}/>
            </Card>
        </div>

    );
}
