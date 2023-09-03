import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
    const careers = useLoaderData()

    return ( 
        <div className="careers">
            {
                careers.map(career => (
                    <Link to={career.id.toString()} key={career.id}>
                        <p>{career.title}</p>
                        <span>{career.location}</span>
                    </Link>
                ))
            }
        </div>
     );
}
 
export default Careers;

export const careersLoader = async () => {
    const res = await fetch("http://localhost:4000/careers")
    if (!res.ok) {
        throw Error('Careers are not found')
    }
    return res.json()
}