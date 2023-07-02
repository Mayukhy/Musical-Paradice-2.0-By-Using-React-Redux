import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const variants = ['h1', 'h1', 'h1', 'h1'];

function TypographyDemo(props) {
  const { loading = false } = props;

  return (
    <div style={{marginTop:'-100px'}}>
      {variants.map((variant) => (
        <Typography sx={{marginTop:'-50px'}} component="div" key={variant} variant={variant}>
          {loading ? <Skeleton sx={{bgcolor: 'grey.900' , borderRadius:'20px', height:'200px'}} /> : variant}
        </Typography>
      ))}
    </div>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function LoaderTopplay() {
  return (
    <Grid container spacing={8} sx={{width:{md:'500px',xs:'400px'}, margin:'50px auto'}}>
      <Grid item xs>
        <TypographyDemo  loading />
      </Grid>
  
    </Grid>
  );
}
