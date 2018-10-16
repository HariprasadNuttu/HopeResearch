var nodemailer = require('nodemailer');
module.exports = function () {
	var mailTransport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: "hariprasadnuttu@gmail.com",
			pass: "harshadh8",
		}
	});
	var from = 'hariprasadnuttu@gmail.com';
	var errorRecipient = 'hariprasadnuttu@gmail.com"';
	return {
		send: function (to, subj, body) {
			mailTransport.sendMail({
				from: from,
				to: to,
				subject: subj,
				text: body,
			}, function (err) {
				if (err) console.error('Unable to send email: ' + err);
			});
		},
		emailError: function (message, filename, exception) {
			var body = '<h1>Meadowlark Travel Site Error</h1>' +
				'message:<br><pre>' + message + '</pre><br>';
			if (exception) body += 'exception:<br><pre>' + exception +
				'</pre><br>';
			if (filename) body += 'filename:<br><pre>' + filename +
				'</pre><br>';
			mailTransport.sendMail({
				from: from,
				to: errorRecipient,
				subject: 'Meadowlark Travel Site Error',
				html: body,
				generateTextFromHtml: true
			}, function (err) {
				if (err) console.error('Unable to send email: ' + err);
			});
		}
	}
}
