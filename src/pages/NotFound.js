import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero necessitatibus hic provident suscipit dolore minima magnam consequuntur, id veniam, quos quae, facilis sunt nostrum esse autem illo maxime quod magni.</p>
            <p>Go to the <Link to="/">HomePage</Link></p>
        </>
     );
}
 
export default NotFound;