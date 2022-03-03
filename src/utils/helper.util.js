const BouncedEmail = require("./../models/bouncedEmail");

/*
* This is a helper function to check if the to email and from email are already
* present in the database or not.
* If either of them are present in the db, then returns true, Otherwise false.
* */
const isEmailsBounced = async (emailId1, emailId2) => {
    return await BouncedEmail.findEmails(emailId1, emailId2);
}

module.exports = {
    isEmailsBounced,
}