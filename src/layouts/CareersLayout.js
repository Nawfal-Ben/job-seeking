import { Outlet } from "react-router-dom";

const CareersLayout = () => {
    return ( 
        <div>
            <h3>Careers</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus?</p>
            <Outlet />
        </div>
     );
}
 
export default CareersLayout;