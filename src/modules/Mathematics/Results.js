import React from 'react';

import {Box, Grid, Button, Typography} from '@material-ui/core'

export default function Results(props){

    const{id, flag, result, operator, changeButton} = props;

    const showResult = (e) => {
        changeButton(operator, id);
    }

    return(
        <div>
            <Grid item xl={4}>
                <Button variant="outlined" onClick={showResult} color="primary">
                 Obtener Resultado
                </Button>
                <Box justifyContent="center" flexDirection="row">
                    <Typography variant="h4">
                        {
                            flag[id] ? `${result[id].numer}/${result[id].denom}` : 0
                        }
                    </Typography>
                </Box>
            </Grid>
        </div>
    )
}

