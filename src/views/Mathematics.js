import React  from 'react';

import Menu from '../modules/Menu/Menu';

import {Box, Grid} from '@material-ui/core'

import '../App.css';

export default function Mathematics(props){

    return(
        <div>
            <Menu></Menu>
            <Grid container>
                <Grid item xs={12}>
                    <Box border={2}>
                        Todos los espacios
                    </Box>
                </Grid>
            </Grid>
        </div>
    )   
}