import { Grid } from '@mui/material';

const Main = () => {
  return (
    <Grid container spacing={2}>
      <Grid 
        size={2} 
        sx={{ 
          
          //backgroundColor: 'white', // Uses theme colors
          bgcolor: 'rgba(25, 118, 210, 0.5)',
          p: 2, // Adds padding
          
        }}
      >
        <div className="solgridtext">Sol grid kullanıcılar logo vs.</div>
        <p className="dashboard-css">Dashboard</p>
      </Grid>
      
      <Grid 
        size={10} 
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