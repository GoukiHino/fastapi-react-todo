import {Box, Typography} from "@mui/material";

const Footer = () => (
    <Box
        component="footer"
        sx={{
            pb: 3,
            textAlign: "center"
        }}
    >
        <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} i5net
        </Typography>
    </Box>
);

export default Footer;