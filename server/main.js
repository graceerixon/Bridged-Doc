import { Meteor } from 'meteor/meteor';

import { admin } from '../lib/admin.js';
import { contact } from '../lib/contact.js';

Meteor.startup(() => {
	
	if (Meteor.isServer) {
		Meteor.publish('admin', function publication() {
			return admin.find();
		});
	}
	
	if (Meteor.isServer) {
		Meteor.publish('contact', function publication() {
			return contact.find();
		});
	}

	Meteor.methods({
		'insert admin': function(email, password) {
			admin.insert({
				userId: Meteor.userId(),
				email: email,
				password: password
			});
		}
	});

	Meteor.methods({
		'insert contact': function(name, email, message) {
			contact.insert({
				userId: Meteor.userId(),
				name: name,
				email: email,
				message: message
			});
		}
	});
});