import React, { useContext, useState } from "react";
import './experience.css';
import { message } from '../messages/experienceMessage.js'
import { exadelReferenceMessages } from '../messages/exadelReference.js'
import { LanguageContext } from '../Contexts/LanguageContext'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography'
import PdfCV from '../randomPDF_Reference.pdf';


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
  },
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

function Experience() {
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
    <div classname="experienceContent">
      <div className="experience">
        <div className="companyInfo">
          <div className="companyLogo">
            <img src="/exadel.png" alt="Home" width="100" height="100" />
          </div>
          <div className="company">
            <span id="company">{message.staticExadel.companyName}</span>
          </div>
          <div className="location">
            <span id="location">{message.staticExadel.companyLocation}, {message[language].countryPoland}</span>
          </div>
        </div>
        <div className="title">
          <span id="title">{message.staticExadel.titleExadel}</span>
        </div>
        <div className="dates">
          <span id="dates">{message.staticExadel.workRangeDate}</span><br></br>
          <span id="dates">{message[language].jobTimeExadel}</span>
        </div>
        <div className="responsibilities">
          <span id="responsibilities">{message[language].responsibilitiesExadel}</span>
        </div>
        <div className="stack">
          <span id="stack">{message.staticExadel.technologyStack}</span>
        </div>
        <div className="reference">
          <span id="referenceButton">
            <Button
              onMouseEnter={() => setHoverButton('2px solid #2a3cad')}
              onMouseLeave={() => setHoverButton('1px solid white')}
              onClick={handleClick} style={{ backgroundColor: '#111845a6', color: 'white', border: hoverButton }}>
              {exadelReferenceMessages[language].reference}
            </Button></span>
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
        </div>
      </div>


      <div className="experience">
        <div className="companyInfo">
          <div className="companyLogo">
            <img src="/nordcom.jpg" alt="Home" width="85" height="85" />
          </div>
          <div className="company">
            <span id="company">{message.staticNordCom.companyName}</span>
          </div>
          <div className="location">
            <span id="location">{message.staticNordCom.companyLocation}, {message[language].countryPoland}</span>
          </div>
        </div>
        <div className="title">
          <span id="title">{message[language].titleNordCom}</span>
        </div>
        <div className="dates">
          <span id="dates">{message.staticNordCom.workRangeDate}</span><br></br>
          <span id="dates">{message[language].jobTimeNordCom}</span>
        </div>
        <div className="responsibilities">
          <span id="responsibilities">{message[language].responsibilitiesNordcom}</span>
        </div>
        {/* <div className="stack">
          <span id="stack"></span>
        </div>
        <div className="reference">
        <p></p>
        </div> */}
      </div>

    </div>
  );
}

export default Experience;