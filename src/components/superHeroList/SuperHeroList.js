import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import SuperHeroCard from './SuperHeroCard';
import {useStyles} from './SuperHeroList.styles';

const SuperHeroList = ({...props}) => {

    const classes = useStyles(props) 
    return (
        props.data ? (
            <Grid container className={classes.root} spacing={3}>
          {   props.data.map(hero =>
                 <Grid key = {hero.id} item={true} xs={12} sm={6} md={3} className={classes.control} >
                   <SuperHeroCard id = {hero.id}  name = {hero.name} imageUrl  = {hero.images.lg} />
                 </Grid> 
                 )}
                 </Grid>
         ) : (
            <div className={classes.circular}>
            <CircularProgress />
            <CircularProgress color="primary" />
          </div>
         
    )
    
    )}

    export default SuperHeroList;