import { Grid } from '@mui/material';

const Main = () => {
  return (
    <Grid container spacing={2}>
      <Grid 
        size={4} 
        sx={{ 
          border: '1px solid black', 
          backgroundColor: 'primary.light', // Uses theme colors
          p: 2 // Adds padding
        }}
      >
        <div>size=8</div>
      </Grid>
      
      <Grid 
        size={8} 
        sx={{ 
          border: '2px dashed blue', 
          backgroundColor: '#f5f5f5' // Standard hex codes work too
        }}
      >
        <div>size=4</div>
      </Grid>
    </Grid>
  );
};

export default Main;