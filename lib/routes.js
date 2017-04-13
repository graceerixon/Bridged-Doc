import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("content", {content: "home"});
  }
});

FlowRouter.route('/testing', {
  name: "testing",
  action: function() {
    BlazeLayout.render("content", {content: "testing"});
  }
});

FlowRouter.route('/marketing', {
  name: "marketing",
  action: function() {
    BlazeLayout.render("content", {content: "marketing"});
  }
});

FlowRouter.route('/administration1', {
  name: "administration1",
  action: function() {
    BlazeLayout.render("content", {content: "administration1"});
  }
});

FlowRouter.route('/administration2', {
  name: "administration2",
  action: function() {
    BlazeLayout.render("content", {content: "administration2"});
  }
});

FlowRouter.route('/user', {
  name: "user",
  action: function() {
    BlazeLayout.render("content", {content: "user"});
  }
});

FlowRouter.route('/admin', {
  name: "admin",
  action: function() {
    BlazeLayout.render("content", {content: "admin"});
  }
});

FlowRouter.route('/contact', {
  name: "contact",
  action: function() {
    BlazeLayout.render("content", {content: "contact"});
  }
});