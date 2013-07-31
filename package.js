Package.describe({
	summary: "sendgrid NPM module packaged for Meteor."
});

Npm.depends({ 'sendgrid': '0.3.0-rc.1.1' });

Package.on_use(function (api) {
	api.add_files('sendgrid.js', 'server');
});
