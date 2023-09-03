import { useLoaderData } from "react-router-dom";

const CareerDetails = () => {
    const career = useLoaderData()

    return (
        <div className="career-details">
            <h3>Career Details for {career.title}</h3>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dicta, similique aperiam reprehenderit, voluptas vitae odio tempora assumenda nam totam aspernatur, mollitia dolorem nemo beatae rem fugiat quae iure quod?
            </p>
        </div>
    );
};

export default CareerDetails;

export const careerDetailsLoader = async ({params}) => {
    const {id} = params
    const res = await fetch("http://localhost:4000/careers/" + id)

    if(!res.ok) {
        throw Error('Details for this career are not found')
    }

    return res.json()
}