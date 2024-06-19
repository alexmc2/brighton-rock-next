'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <AppBar position="fixed" color="primary" elevation={0}>
      <Container
        maxWidth={false}
        className="max-w-7xl px-4 sm:px-6 lg:px-8 py-2"
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            BRIGHTON ROCK HOUSING CO-OP
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button href="/" color="inherit" sx={{ mx: 1, fontSize: '1.2rem' }}>
              Home
            </Button>
            <Button
              href="/meetings"
              color="inherit"
              sx={{ mx: 1, fontSize: '1.2rem' }}
            >
              Meetings
            </Button>
            <Button
              href="/contact"
              color="inherit"
              sx={{ mx: 1, fontSize: '1.2rem' }}
            >
              Contact
            </Button>
            <Button
              href="/vacancies"
              color="inherit"
              sx={{ mx: 1, fontSize: '1.2rem' }}
            >
              Vacancies
            </Button>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
