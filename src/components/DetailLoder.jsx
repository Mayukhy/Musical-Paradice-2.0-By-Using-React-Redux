import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function DetailLoder() {
  return (
    <Box sx={{width:{md:'600px',xs:'420px'},marginTop:'-35px'}} >
      <Skeleton sx={{height:500 ,bgcolor: 'grey.800', borderRadius:'20px',}} animation="wave" />
      <Box
      sx={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        flexWrap:'wrap',
        margin:{sx:'auto',md:'-50px 10px'}
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900',m:2 , borderRadius:'20px'}}
        variant="rectangular"
        width={470}
        height={150}
        animation="wave"
        
      />
            <Skeleton
        sx={{ bgcolor: 'grey.800',m:2, borderRadius:'20px' }}
        variant="rectangular"
        width={470}
        height={150}
        animation="wave"
      />
            <Skeleton
        sx={{ bgcolor: 'grey.900',m:2, borderRadius:'20px' }}
        variant="rectangular"
        width={470}
        height={150}
        animation="wave"
      />
            <Skeleton
        sx={{ bgcolor: 'grey.800' ,m:2, borderRadius:'20px'}}
        variant="rectangular"
        width={470}
        height={150}
        animation="wave"
      />
    </Box>
    
    </Box>
  );
}
