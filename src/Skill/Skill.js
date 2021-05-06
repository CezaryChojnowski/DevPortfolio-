import React from "react";
import './skills.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import './skills.css';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#111845a6',
        border: '2px solid #2a3cad',
        boxShadow: '0 20px 50px rgb(23, 32, 90)',
        color: 'white',
        marginBottom: 40
    },
    cardHeader: {
        fontSize: 20,
        marginLeft: 10
    },
    pos: {
        marginBottom: 12,
    },
    grid: {
        marginLeft: 20,
        marginRight: 15,
        textAlign: 'center'
    }
});

function Skill(props) {
    const classes = useStyles();
    var firstTechnologyImg = "/" + props.firstTechnology + ".png"
    var secondTechnologyImg = "/" + props.secondTechnology + ".png"
    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    title={<Typography className={classes.cardHeader}>{props.skillsType}</Typography>}
                />
                <CardContent>
                    <Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={2} className={classes.grid} >
                                <img className="image" src={firstTechnologyImg} alt="Home" width="75" height="75" />
                                <div className="technology">{props.firstTechnology}</div>
                            </Grid>
                            {props.secondTechnology != undefined && Boolean(props.secondTechnology) &&
                                <Grid item xs={2} className={classes.grid}>
                                    <img src={secondTechnologyImg} alt="Home" width="75" height="75" />
                                    <div className="technology">{props.secondTechnology}</div>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default Skill;