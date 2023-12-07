import headerlogo from '@/assets/header-logo.png'
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { getCurrentDate } from "@/Utils/getCurrentDate";


const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box className = 'w-full py-2'>
            <Container>
                <Image className='mx-auto' src={headerlogo} width={500} height={500} alt='logo'></Image>
                <Typography variant='body2' color='gray' textAlign='center'>Journalism Without Fear or Favour</Typography>
                <Typography textAlign="center">{currentDate}</Typography>
            </Container>
        </Box>
    );
};

export default Header;