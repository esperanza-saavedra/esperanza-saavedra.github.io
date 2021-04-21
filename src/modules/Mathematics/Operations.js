import React from 'react';

import {Box, Grid} from '@material-ui/core'

export default function Operations(props){

    const {id, numerador, denominador, changeNumerador, changeDenominador} = props;

    const handleNumerador = (e) => {
        let num = e.target.value;
        changeNumerador(parseInt(num), id);
    };

    const handleDenominador= (e) => {
        let denom = e.target.value;
        changeDenominador(parseInt(denom), id);
    };

    return(
        <div>    
            <Grid item>
                <Box>
                    <div className="fraction">
                        <input type="text" className="top" value={numerador[id]} onChange={handleNumerador} placeholder="Inserta Numerador"/>
                    </div>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                    <div className="fraction">
                        <span className="divisor"></span>
                        <input type="text" className="bottom" value={denominador[id]} onChange={handleDenominador} placeholder="Inserta Denominador"/>
                    </div>
                </Box>
            </Grid>
        </div>
    )

}

