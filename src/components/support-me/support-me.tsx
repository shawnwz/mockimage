import React from "react";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import {styled} from "@mui/material/styles";
import Button, {ButtonProps} from "@mui/material/Button";
import {purple} from "@mui/material/colors";

const SupportMe: React.FC = () => {
    return(
        <Container>
            <Box sx={{ flexGrow: 0 }}>
                <ColorButton variant="contained" onClick={GoSupport}>Support Me!</ColorButton>
            </Box>
        </Container>
    );
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

function GoSupport() {
    const url = 'https://paypal.me/sean6881';
    window.open(url, '_blank');
}

export default SupportMe;