import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
const useStyles = makeStyles(() => ({
    root: {
        marginLeft: 0,
        marginBottom: 40,
        backgroundColor: '#111845a6',
        border: '2px solid #2a3cad',
        boxShadow: '0 20px 50px rgb(23, 32, 90)',
        color: 'white'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        color: 'white'
    },
    pos: {
        marginBottom: 12,
        color: 'white'
    },
    techStack: {
        marginTop: 35,
    }
}));


function PlaceOfStudy(props) {
    const classes = useStyles();
    const [hoverButton, setHoverButton] = useState('1px solid white');
    const [certificatesButton, setCertificatesButton] = useState('none')
    const [btiButton, setBtiButton] = useState('none')
    const [speakerButton, setSpeakerButton] = useState('none')
    const [certificateButton, setCertificateButton] = useState('none')



    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(certificatesButton)

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.graduated}
                    {props.dyscypline}
                    {props.profile}
                </Typography>
                <Typography variant="h6" component="h2">
                    {props.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.dateRange}
                </Typography>
                {props.secondCycleProgramme &&
                    <Typography className={classes.pos} color="textSecondary">
                        <ul>
                            <li><span style={{ border: certificateButton }}>{props.scienceClub}</span></li>
                            <li><span>{props.schoolarship}</span></li>
                        </ul>
                    </Typography>
                }
                {props.firstCycleProgramme &&
                    <Typography className={classes.pos} color="textSecondary">
                        <ul>
                            <li><span style={{ border: certificatesButton }}>{props.scienceClub}</span></li>
                            <li><span>{props.schoolarship}</span></li>
                            <li><span style={{ border: speakerButton }}>{props.speaker}</span></li>
                            <li><span style={{ border: btiButton }}>{props.bti}</span></li>
                        </ul>
                    </Typography>
                }
                {!props.technicalSchool &&
                    <CardActions className={classes.button}>
                        <Button
                            onMouseEnter={() => setHoverButton('2px solid #2a3cad')}
                            onMouseLeave={() => setHoverButton('1px solid white')}
                            onClick={handleClick} style={{ backgroundColor: '#111845a6', color: 'white', border: hoverButton }}>
                            {props.documents}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {props.secondCycleProgramme &&
                                <>
                                    <MenuItem
                                        onMouseEnter={() => setCertificateButton('2px dashed #64ffda')}
                                        onMouseLeave={() => setCertificateButton('none')}
                                        component='a' href="#" target="_blank">{props.certificates}</MenuItem>
                                </>
                            }
                            {props.firstCycleProgramme &&
                                <>
                                    <MenuItem
                                        onMouseEnter={() => setCertificatesButton('2px dashed #64ffda')}
                                        onMouseLeave={() => setCertificatesButton('none')}
                                        component='a' href="#" target="_blank">{props.scienceClub}
                                    </MenuItem>
                                    <MenuItem
                                        onMouseEnter={() => setBtiButton('2px dashed #64ffda')}
                                        onMouseLeave={() => setBtiButton('none')}
                                        component='a' href="#" target="_blank">{props.btiCertificate}
                                    </MenuItem>
                                    <MenuItem
                                        onMouseEnter={() => setSpeakerButton('2px dashed #64ffda')}
                                        onMouseLeave={() => setSpeakerButton('none')}
                                        component='a' href="#" target="_blank">{props.speakerCertificate}
                                    </MenuItem>
                                </>
                            }
                        </Menu>
                    </CardActions>
                }
            </CardContent>
        </Card>
    );
}

export default PlaceOfStudy;