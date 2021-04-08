import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import data from '../data/posts'
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function BlogPostScreen() {
    const classes = useStyles();
    const theme = useTheme();
    const [isModalOpen, setIsModalOpen]= React.useState(false);
    const [currentTitle, setCurrentTitle] = React.useState('')
    const [currentContent, setCurrentContent] = React.useState('')
    const [currentImagePath, setCurrentImagePath] = React.useState('')


    const handleClose=()=> {
        setIsModalOpen(false)
    }

    const handleClickOpen=(title, content, imagePath)=>{
        setCurrentContent(content)
        setCurrentTitle(title)
        setCurrentImagePath(imagePath)
        setIsModalOpen(true)
    }

    return (
        <div>
            {data.map(post=>{
                return(
                    <Card  className={classes.root}>
                        <div className={classes.details}>

                            <CardContent className={classes.content}  onClick={()=>handleClickOpen(post.title, post.content, post.relativeImagePath)}>

                                <Typography style={{fontWeight: 700, fontSize: '30px'}}>
                                    {post.title}
                                </Typography>
                                <Typography style={{fontSize: '20px'}}>{post.content}</Typography>
                            </CardContent>

                        </div>
                        <img  style={{height: '20rem', width: '20rem'}} src={post.relativeImagePath}/>

                    </Card>

                )
            })}
            <Dialog fullScreen open={isModalOpen} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {currentTitle}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{margin: '5rem'}}>
                    <img  style={{height: '25rem', width: '25rem', margin: 'auto'}} src={currentImagePath}/>
                    <p style={{ fontSize: '1.5rem'}}>{currentContent}</p>
                </div>

            </Dialog>
        </div>

    );
}
