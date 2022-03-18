import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge, Icon } from '@mui/material';

export default function ButtonAppBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const carrello = useSelector(state => state.carrello.pokemon);
    console.log(carrello)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={() => {
                        navigate('/');
                    }}
                        color="inherit"
                        variant={location.pathname === '/' ? 'outlined' : 'text'}
                    >Home</Button>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pokedex
                        <Badge>
                            {carrello?.length}
                        </Badge>
                    </Typography>
                    <Button onClick={() => {
                        navigate('/pokemon/' + Math.floor(Math.random() * 898))
                    }} color="inherit">Random</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}