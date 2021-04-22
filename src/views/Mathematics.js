import React, {useState} from 'react';

import Menu from '../modules/Menu/Menu';

import Players from './Players';

import { Fraction } from 'algebra.js';

import Operations from '../modules/Mathematics/Operations';
import Results from '../modules/Mathematics/Results';

import {
     Container,
     makeStyles,
     Paper,
     Grid, 
     Table, 
     TableCell, 
     TableBody,
     TableContainer,
     TableHead, 
     TableRow } from '@material-ui/core'
     
import Image from '../images/mathematics-wallpaper.png'; // Import using relative path

import '../App.css';

export default function Mathematics(props){

    //Classes to Material Compoenent Table
    const classes = makeStyles({
        table: {
            minWidth: 650,
        },
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          },
    });

    //Array object for title Table.
    const titleTable = [
        {id: 0, title: 'NUMERO ALEATORIO' },
        {id: 1, title: 'SUMA'},
        {id: 2, title: 'RESTA'},
        {id: 3, title: 'MULTIPLICACION'},
        {id: 4, title: 'DIVISION'}
    ];

    //Array object for title Table.
    const resultsTable = [   
        {id: 0, operator: '+'},
        {id: 1, operator: '-'},
        {id: 2, operator: '*'},
        {id: 3, operator: '/'} 
    ];

    const [numerador, setNumerador] = useState([]);
    const [denominador, setDenominador] = useState([]);
    const [flag, setFlag] = useState([]);
    const [result, setResult] = useState([]);

    const addNumerador = (num, id) =>{
        if(Number.isInteger(num)){
            const values = numerador.slice(); //copy the array
            values[id] = num;
            setNumerador(values);
        }
    }

    const addDenominador= (denom, id) =>{
        if(Number.isInteger(denom)){
            const values = denominador.slice(); //copy the array
            values[id] = denom;
            setDenominador(values);
        }
    }
    
    const calculateValue = (operator, id) =>{
        const values = flag.slice(); //copy the array
        values[id] = true;            
        setFlag(values);

        const a = new Fraction(numerador[id+1], denominador[id+1]);
        const b = new Fraction(numerador[1], denominador[1]);

        let answer = 0;

        switch(operator){
            case'+':
                answer = a.add(b);
                break;
            case'-':
                answer = b.subtract(a);
                break;
            case'*':
                answer = a.multiply(b);
                break;
            case'/':
                answer = b.divide(a);
                break;
            default:
                break;
        }
        
        const results = result.slice(); //copy the array
        results[id] = answer;   

        setResult(results);
    }

    return(
        <div style={{ 
            height:'full',
            backgroundImage: `url(${Image})`,
            overflow: 'hidden',
            }}>
            <Menu/>
            <Grid container direction="row" justify="center" >
                <Grid container justify="center" lg={6} component={Paper}>
                    <h1>BASTA NUMÉRICO</h1>
                </Grid>
             </Grid>
            <Container maxWidth="lg">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        {titleTable.map((t) => 
                            <TableCell align="center" key={t.id}>
                                {t.title}               
                                    <Operations 
                                        id={t.id + 1} 
                                        numerador={numerador}
                                        changeNumerador={addNumerador}
                                        denominador={denominador}
                                        changeDenominador={addDenominador}
                                    />
                            </TableCell>
                        )}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableCell align="center"><h2>RESULTADOS</h2></TableCell>
                        {resultsTable.map((t) => 
                            <TableCell  align="center" key={t.id}>
                                <Results 
                                    id={t.id + 1} 
                                    flag={flag}
                                    result={result}
                                    operator={t.operator}
                                    changeButton={calculateValue}
                                />
                            </TableCell>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>

            <Players></Players>

        </div>
    )   
}
  