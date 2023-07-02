import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonColor() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap:'wrap',
        margin:{sx:'auto',md:'50px 5px'}
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900',m:1,borderRadius:'10px' }}
        variant="rectangular"
        width={310}
        height={318}
        animation="wave"
        
      />
            <Skeleton
        sx={{ bgcolor: 'grey.900',m:1,borderRadius:'10px' }}
        variant="rectangular"
        width={310}
        height={318}
        animation="wave"
      />
            <Skeleton
        sx={{ bgcolor: 'grey.900',m:1,borderRadius:'10px' }}
        variant="rectangular"
        width={310}
        height={318}
        animation="wave"
      />
            <Skeleton
        sx={{ bgcolor: 'grey.900' ,m:1,borderRadius:'10px'}}
        variant="rectangular"
        width={310}
        height={318}
        animation="wave"
      />
    </Box>
  );
}
