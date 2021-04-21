import React from 'react';

import {Box, Grid} from '@material-ui/core'

export default function Results(props){

    const{id, flag, result, changeButton} = props;

    const showResult = (e) => {
        let buttonResult = e.target.value;
        changeButton(buttonResult, id);
    }

    return(
        <div>
            <Grid item xs={3}>
                <Box justifyContent="center" border={1} flexDirection="row">
                    <div className="fractions">
                        <button onClick={showResult}>Obtener Resultado</button>
                    </div>
                    <div>
                        {
                            flag[id] ? `${result[id].numer}/${result[id].denom}` : 0
                        }
                    </div>
                </Box>
            </Grid>
        </div>
    )
}

