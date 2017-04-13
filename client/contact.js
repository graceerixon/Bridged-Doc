import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';

Template.contact.events({
	'submit form': function(event){
		event.preventDefault();
		var name = ($('[name=name]').val());
		var email = $('[name=email]').val();
		var message = $('[name=message]').val();
		console.log(event);
		Meteor.call('insert contact', name, email, message);
		FlowRouter.go('home');
	}
});