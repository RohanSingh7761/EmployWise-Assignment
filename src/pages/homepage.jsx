import React from 'react';
import { Container, Typography, AppBar, Toolbar, Box, Button, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';

const Homepage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
            {/* AppBar for the header */}
            <AppBar position="static" sx={{ mb: 4, backgroundColor: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#000000' }}>
                        EmployWise
                    </Typography>
                    <Button color="inherit" onClick={handleLogout} sx={{ fontWeight: 'bold', color: '#000000' }}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Main content */}
            <Container>
                <Paper elevation={3} sx={{ p: 4, mb: 4, backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
                    <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#000000' }}>
                        Welcome to EmployWise
                    </Typography>
                    <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#757575' }}>
                        Manage your employees efficiently with our modern interface.
                    </Typography>
                </Paper>

                {/* UserList Section */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#000000' }}>
                                Employee List
                            </Typography>
                            <UserList />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Homepage;