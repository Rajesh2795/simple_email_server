/*
* This class is a generic email service class contains methods send() and constructEmail().
* Other classes can extend this class and can override the methods to implement logic based on the email service provider.
* send() was used to send the email.
* constructEmail() method is used to construct the message object based on the email service provider format.
* Method block were empty to mimic the abstract class behaviour.
* */
class EmailService {
    constructor(to, from, subject, bodyText, bodyHtml) {
        this.to = to;
        this.from = from;
        this.subject = subject;
        this.bodyText = bodyText;
        this.bodyHtml = bodyHtml;
    }

    // This method contains the implementation logic for sending the email.
    send() {

    }

    // This method is use to construct message based on the provider specification.
    constructEmail() {

    }
}

module.exports = EmailService;