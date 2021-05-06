import React, { useContext, useState } from "react";
import './experience.css';
import { makeStyles } from '@material-ui/core/styles';
import { LanguageContext } from '../Contexts/LanguageContext'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import PdfCV from '../randomPDF_Reference.pdf';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import Menu from '@material-ui/core/Menu';
import { exadelReferenceMessages } from '../messages/exadelReference.js'


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

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function Experience(props) {
    const classes = useStyles();
    const { language, setLanguage } = useContext(LanguageContext)
    const [hoverButton, setHoverButton] = useState('1px solid white');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.companyNameAndLocation}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.workRangeDate} | {props.jobTime}
                </Typography>
                <Typography className={classes.responsibilities} variant="body1" component="p">
                    {props.responsibilities}
                </Typography>
                <Typography className={classes.techStack} variant="body2" component="p">
                    {props.technologyStack}
                </Typography>
            </CardContent>
            <CardActions className={classes.button}>
                {props.thereAreReference &&
                    <Button
                        onMouseEnter={() => setHoverButton('2px solid #2a3cad')}
                        onMouseLeave={() => setHoverButton('1px solid white')}
                        onClick={handleClick} style={{ backgroundColor: '#111845a6', color: 'white', border: hoverButton }}>
                        {exadelReferenceMessages[language].reference}

                    </Button>
                }
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClickOpen}>{exadelReferenceMessages[language].digitalVersion}</MenuItem>
                    <Dialog onClose={() => { handleCloseDialog(); handleClose() }} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={() => { handleCloseDialog(); handleClose() }}>
                            {exadelReferenceMessages[language].person} - {exadelReferenceMessages[language].titlePerson}

                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                {exadelReferenceMessages[language].referenceContent} {exadelReferenceMessages[language].referenceContent} {exadelReferenceMessages[language].referenceContent}
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={() => language == "PL" ? setLanguage("EN") : setLanguage("PL")} color="primary">
                                {language == "EN" ? <img src="/PL.png" alt="Home" width="30" height="20" /> : <img src="/EN.png" alt="Home" width="30" height="20" />}
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <MenuItem component='a' href={PdfCV} target="_blank">{exadelReferenceMessages[language].originalDocument}</MenuItem>

                </Menu>
            </CardActions>
        </Card>
    );
}

export default Experience;