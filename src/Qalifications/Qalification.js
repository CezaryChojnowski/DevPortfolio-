import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import PdfPBEnginnerDiplomaInPL from '../randomPDF_Reference.pdf';
import PdfPBEnginnerDiplomaInEN from '../randomPDF_Reference.pdf';
import PdfPBEnginnerDiplomaSupplementInPL from '../randomPDF_Reference.pdf';
import PdfPBEnginnerDiplomaSupplementInEN from '../randomPDF_Reference.pdf';
import PdfPBTechnicanDiplomaInPL from '../randomPDF_Reference.pdf';
import PdfPBTechnicanDiplomaSupplementInPL from '../randomPDF_Reference.pdf';
import PdfPBTechnicanDiplomaSupplementInEN from '../randomPDF_Reference.pdf';

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


function Qualification(props) {
    const classes = useStyles();
    const [hoverButton, setHoverButton] = useState('1px solid white');

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.whoIssuedDocument}
                </Typography>
                <Typography variant="h6" component="h2">
                    {props.documentName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.documentRange}
                </Typography>
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
                        {props.isEngineer &&
                            <>
                                <MenuItem component='a' href={PdfPBEnginnerDiplomaInEN} target="_blank">{props.diplomaInEN}</MenuItem>
                                <MenuItem component='a' href={PdfPBEnginnerDiplomaInPL} target="_blank">{props.diplomaInPL}</MenuItem>
                                <MenuItem component='a' href={PdfPBEnginnerDiplomaSupplementInEN} target="_blank">{props.suplementInEN}</MenuItem>
                                <MenuItem component='a' href={PdfPBEnginnerDiplomaSupplementInPL} target="_blank">{props.suplementInPL}</MenuItem>
                            </>
                        }
                        {props.isTechnican &&
                            <>
                                <MenuItem component='a' href={PdfPBTechnicanDiplomaInPL} target="_blank">{props.diploma}</MenuItem>
                                <MenuItem component='a' href={PdfPBTechnicanDiplomaSupplementInEN} target="_blank">{props.suplementInEN}</MenuItem>
                                <MenuItem component='a' href={PdfPBTechnicanDiplomaSupplementInPL} target="_blank">{props.suplementInPL}</MenuItem>
                            </>
                        }
                    </Menu>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default Qualification;