var nodemailer = require('nodemailer');

function send(to, schedule, date) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pairprojectgroup5@gmail.com',
      pass: 'pairproject5!'
    }
  });
  
  var mailOptions = {
    from: 'pairprojectgroup5@gmail.com',
    to: to,
    subject: `NEW SCHEDULE ADDED📣`,
    text: `New Schedule : ${schedule}\n DATE: ${date}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = send