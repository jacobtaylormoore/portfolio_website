import ContactForm from './ContactForm';
import ContactTitleContainer from './ContactTitleContainer';
import './index.css';

function ContactContainer() {
    return (
        <div id="ContactContainer">
            <ContactTitleContainer />
            <ContactForm />
        </div>
    );
}

export default ContactContainer;