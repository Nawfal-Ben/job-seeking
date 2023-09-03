import { Link, useRouteError } from "react-router-dom";

const CareerError = () => {
    const error = useRouteError();

    return (
        <>
            <h2>{error.message}</h2>
            <p>
                Back to the <Link to="/">Homepage</Link>
            </p>
        </>
    );
};

export default CareerError;
