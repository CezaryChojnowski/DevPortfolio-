import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './projects.css';



const useStyles = makeStyles(() => ({
    root: {
        marginLeft: 0,
        height: 400,
        marginBottom: 60,
        maxHeight: 700,
        backgroundColor: '#111845a6',
        border: '2px solid #2a3cad',
        boxShadow: '0 20px 50px rgb(23, 32, 90)',
        color: 'white'
    },
    subheader: {
        borderTop: '2px solid white',
        color: 'white',
        fontSize: 15
    },
    iconButtonGithub: {
        color: '#fafafa',
    },
    iconButtonYoutube: {
        color: 'red',
    },
    buttons: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    cardHeader: {
        marginBottom:10,
        fontSize: 25
    }
}));

function Project(props) {
    const classes = useStyles();
    const [hoverButtonGithub, setHoverButtonGithub] = useState('none');
    const [hoverButtonYoutube, setHoverButtonYoutube] = useState('none');


    return (
        <div>
            <Card className={classes.root} style={{ position: 'relative' }}>
                <CardHeader
                    title={<Typography className={classes.cardHeader}>{props.title}</Typography>}
                    subheader={<Typography className={classes.subheader}>{props.techstack}</Typography>}
                />
                <CardContent>
                    <Typography >
                        {props.content}
                    </Typography>
                </CardContent>
                <CardActions className={classes.buttons}>
                    {props.github != undefined && Boolean(props.github) &&
                        <IconButton
                            onMouseEnter={() => setHoverButtonGithub('2px solid white')}
                            onMouseLeave={() => setHoverButtonGithub('none')}
                            title="Add"
                            className={classes.iconButtonGithub}
                            style={{
                                border: hoverButtonGithub
                            }}
                        >
                            <GitHubIcon
                                onClick={() => window.open(props.github)}
                                style={{ fontSize: 30 }}
                            />
                        </IconButton>
                    }
                    {props.youtube != undefined && Boolean(props.youtube) &&
                        <IconButton
                            onMouseEnter={() => setHoverButtonYoutube('2px solid red')}
                            onMouseLeave={() => setHoverButtonYoutube('none')}
                            title="Add"
                            className={classes.iconButtonYoutube}
                            style={{
                                border: hoverButtonYoutube
                            }}
                        >
                            <YouTubeIcon
                                onClick={() => window.open(props.youtube)}
                                style={{ fontSize: 30 }}
                            />
                        </IconButton>
                    }
                </CardActions>
            </Card>
        </div>
    );
}

export default Project;