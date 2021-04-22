import React  from 'react'

import { 
    AppBar,
    makeStyles,
    Toolbar,
    Typography,
    } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

export default function Menu(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                        <Typography className={classes.title} variant="h6">
                            <Link component={RouterLink} to="/" color="inherit">Home</Link>
                        </Typography>
                        <Typography className={classes.title} variant="h6" >
                             <Link component={RouterLink} to="/matematicas" color="inherit">Matematicas</Link>
                        </Typography>
                </Toolbar>    
            </AppBar>  
            <div className={classes.offset}></div>
        </div>
    )
}
 
const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
    },

    root: {
        flexGrow: 1,
    },
    
}));