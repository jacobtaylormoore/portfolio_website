import EmailEntry from './EmailEntry';
import MessageEntry from './MessageEntry';
import NameEntry from './NameEntry';
import SubmitButtonContainer from './SubmitButtonContainer';
import './index.css';

function ContactForm() {
    return (
        <div id="ContactForm">
            <NameEntry />
            <EmailEntry />
            <MessageEntry />
            <SubmitButtonContainer />
        </div>
    );
}

export default ContactForm;