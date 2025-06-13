import type {ReactNode} from "react";
import {Box, Container} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <Box>
            <Header/>
            <Container maxWidth="sm" sx={{py: 3}}>
                {children}
            </Container>
            <Footer/>
        </Box>
    );
};

export default Layout;