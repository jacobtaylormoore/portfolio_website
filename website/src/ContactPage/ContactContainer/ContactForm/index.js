import EmailEntry from './EmailEntry';
import MessageEntry from './MessageEntry';
import NameEntry from './NameEntry';
import SubmitButtonContainer from './SubmitButtonContainer';
import './index.css';

function ContactForm() {

    // Set all fields necessary for twilio api
    const [sender, setSender] = React.useState('');
    const [recipient, setRecipient] = React.useState('jacobtaylormoore@gmail.com');
    const [message, setMessage] = React.useState('');
    const [senderName, setSenderName] = React.useState('');
    const [subject, setSubject] = React.useState('Email from my website');
    const [recipientName, setRecipientName] = React.useState('Jake');

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { sender, recipient, message, senderName, subject, recipientName };

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(contact);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        console.log(requestOptions);
        console.log('Hello');

        // fetch("http://localhost:8090/api/contact/email/send_email", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

    }

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