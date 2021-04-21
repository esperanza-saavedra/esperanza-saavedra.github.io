import React, {useState} from 'react';

import Menu from '../modules/Menu/Menu';

import Operations from '../modules/Mathematics/Operations';
import Results from '../modules/Mathematics/Results';

import { Grid } from '@material-ui/core'

import { Fraction } from 'algebra.js';

import '../App.css';

export default function Mathematics(props){

    const [numerador, setNumerador] = useState([]);
    const [denominador, setDenominador] = useState([]);
    const [flag, setFlag] = useState([]);
    const [result, setResult] = useState([]);

    const numberOperations = 8;

    const addNumerador = (num, id) =>{
        const values = numerador.slice(); //copy the array
        values[id] = num;
        setNumerador(values);
    }

    const addDenominador= (denom, id) =>{
        const values = denominador.slice(); //copy the array
        values[id] = denom;
        setDenominador(values);
    }
    
    const calculateValue = (buttonResult, id) =>{
            const values = flag.slice(); //copy the array
            values[id] = true;            
            setFlag(values);

            const a = new Fraction(numerador[id], denominador[id]);
            const b = new Fraction(numerador[id+1], denominador[id+1]);
            const answer = a.add(b);

            const results = result.slice(); //copy the array
            results[id] = answer;   

            console.log(results)
            setResult(results);
    }

    return(
        <div>
            <Menu/>
            <Grid container direction="row" justify="center">
                <Grid container justify="center">
                    <h1>Operaciones</h1>
                </Grid>
                <Grid container>
                {[...Array(numberOperations)].map((value, index) => (
                        <Operations 
                            id={index + 1} 
                            key={index} 
                            numerador={numerador}
                            changeNumerador={addNumerador}
                            denominador={denominador}
                            changeDenominador={addDenominador}
                        />
                    )
                )}
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
                <Grid container item xs={12} justify="center">
                        <h1>Resultados</h1>
                </Grid>     
                {[...Array(numberOperations/2)].map((value, index) => (
                        <Results 
                            id={index + 1} 
                            key={index} 
                            flag={flag}
                            result={result}
                            changeButton={calculateValue}
                        />
                    )
                )}
            </Grid>
        </div>
    )   
}