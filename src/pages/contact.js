const Contact = () => {
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <form>
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" />
                <label htmlFor="message">Your message:</label>
                <textarea id="message"></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
