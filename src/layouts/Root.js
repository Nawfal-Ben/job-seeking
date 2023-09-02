import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <header>
                <nav>
                    <h1>JobRouter</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;