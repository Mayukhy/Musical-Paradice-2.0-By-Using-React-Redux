import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function ArtistLoader() {
  return (
    <div>
      <Box
      sx={{
        display: 'flex',
        flexWrap:'wrap',
        margin:{sx:'auto',md:'10px 10px'}
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900',m:1 , borderRadius:'50%'}}
        variant="rectangular"
        width={140}
        height={140}
        animation="wave"
        
      />
            <Skeleton
        sx={{ bgcolor: 'grey.800',m:1, borderRadius:'50%' }}
        variant="rectangular"
        width={140}
        height={140}
        animation="wave"
      />
            <Skeleton
        sx={{ bgcolor: 'grey.900',m:1, borderRadius:'50%' }}
        variant="rectangular"
        width={140}
        height={140}
        animation="wave"
      />
            <Skeleton
        sx={{ bgcolor: 'grey.800' ,m:1, borderRadius:'50%'}}
        variant="rectangular"
        width={140}
        height={140}
        animation="wave"
      />
    </Box>

    <Box
      sx={{
        display: 'flex',
        flexWrap:'wrap',
        margin:{sx:'auto',md:'10px 10px'}
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900',m:1 , borderRadius:'50%'}}
        variant="rectangular"
        width={140}
        height={140}
        animation="wave"
        
      />
            <Skeleton
        sx={{ bgcolor: 'grey.800',m:1, borderRadius:'50%' }}
        variant="rectangular"
        width={140}
        height={140}
        animation="wave"
      />
            <Skeleton
        sx={{ bgcolor: 'grey.900',m:1, borderRadius:'50%' }}
        variant="rectangular"
        width={140}
        height={140}
        animation="wave"
      />
            <Skeleton
        sx={{ bgcolor: 'grey.800' ,m:1, borderRadius:'50%'}}
        variant="rectangular"
        width={140}
        height={140}
        animation="wave"
      />
    </Box>
    </div>

  );
}
