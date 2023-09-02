import { Outlet, NavLink } from "react-router-dom";

const Help = () => {
    return (
        <div className="help">
            <h3>Website Help</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate, vero?
            </p>
            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default Help;
