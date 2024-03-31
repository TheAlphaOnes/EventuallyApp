import { Outlet, useNavigate } from "react-router-dom"
import BottomBar from "../components/BottomBar"
import TopLogo from "../components/TopLogo"
import { useEffect } from "react"

function AppShell() {
    const navigate = useNavigate();
    useEffect(() => {
        if (window.location.pathname === '/') { navigate('/home') }
    }, [navigate])
    return (
        <>
            <TopLogo />
            <Outlet />
            <BottomBar />
        </>
    )
}

export default AppShell
