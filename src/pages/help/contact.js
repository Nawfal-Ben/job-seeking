import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
    const data = useActionData()

    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <Form method="post" action="/help/contact">
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="message">Your message:</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Submit</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    );
};

export default Contact;

export const contactForm = async ({request}) => {
    const data = await request.formData()
    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    if (submission.message.length < 10) {
        return {error: "the message should be more than 10 characters"}
    }

    return redirect('/')
}