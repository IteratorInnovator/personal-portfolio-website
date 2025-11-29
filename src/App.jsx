import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import {
    Outlet,
    ScrollRestoration,
} from "react-router-dom";

function RootLayout() {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    );
}

export default RootLayout;
