const mail_config = require('./config').mail_server;
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: mail_config.host,
    port: mail_config.port,
    secure: mail_config.secure, // true for 465, false for other ports
    auth: {
      user: mail_config.auth.acct1.user, // generated ethereal user
      pass: mail_config.auth.acct1.pass // generated ethereal password
    }
  });

  module.exports = transporter