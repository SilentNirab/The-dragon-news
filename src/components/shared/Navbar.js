import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { IconButton, Stack } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import Header from './Header';


const navItems = [
  {
    route: "Home",
    pathname: '/'
  },
  {
    route: "Pages",
    pathname: '/pages'
  },
  {
    route: "Category",
    pathname: '/category'
  },
  {
    route: "News",
    pathname: '/news'
  },
  {
    route: "Post",
    pathname: '/post'
  },
  {
    route: "Contact",
    pathname: '/contact'
  },

];

function Navbar() {

  return (
    <>
      <Header></Header>
      <AppBar position="static" className='bg-black'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt='logo' />
            <Box className="w-full text-center ">
              {navItems.map((item) => (
                <Link key={item} href={item.pathname}>
                  <Button className='text-white capitalize'>{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack direction='row' sx={{
                '& svg': {
                  color: 'white',
                },
              }}>
                <IconButton>
                  <Facebook></Facebook>
                </IconButton>
                <IconButton>
                  <Twitter></Twitter>
                </IconButton>
                <IconButton>
                  <YouTube></YouTube>
                </IconButton>
                <IconButton>
                  <LinkedIn></LinkedIn>
                </IconButton>
                <IconButton>
                  <Instagram></Instagram>
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
