'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Button,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
        <List
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ListItem button component="a" href="/">
            <ListItemText
              primary="HOME"
              primaryTypographyProps={{ variant: 'h6', align: 'center' }}
              sx={{ color: 'white' }}
            />
          </ListItem>
          <ListItem button component="a" href="/meetings">
            <ListItemText
              primary="MEETINGS"
              primaryTypographyProps={{ variant: 'h6', align: 'center' }}
              sx={{ color: 'white' }}
            />
          </ListItem>
          <ListItem button component="a" href="/contact">
            <ListItemText
              primary="CONTACT"
              primaryTypographyProps={{ variant: 'h6', align: 'center' }}
              sx={{ color: 'white' }}
            />
          </ListItem>
          <ListItem button component="a" href="/vacancies">
            <ListItemText
              primary="VACANCIES"
              primaryTypographyProps={{ variant: 'h6', align: 'center' }}
              sx={{ color: 'white' }}
            />
          </ListItem>
        </List>
      </Collapse>
    </AppBar>
  );
}
