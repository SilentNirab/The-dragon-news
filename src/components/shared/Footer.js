import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
    const navItems = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages",
        },
        {
            route: "Category",
            pathname: "/category",
        },
        {
            route: "News",
            pathname: "/news",
        },
        {
            route: "About",
            pathname: "/about",
        },
        {
            route: "Contact",
            pathname: "/contact",
        },
    ]
    return (
        <Box className='bg-black py-10'>
            <Container>
                <Box className="w-full text-center" sx={{
                '& svg':{color: 'white',
              }}}>
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
                </Box>
                <Box className="w-full text-center ">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white capitalize'>{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography color='gray' variant='body2' textAlign='center'>@2023 Dragon News. Design by Programming Hero</Typography>
            </Container >
        </Box >
    );
};

export default Footer;