/*
Template.index.onCreated(function helloOnCreated() {
  // counter starts at 0
  Session.set('counter', 0);
});

Template.index.helpers({
  counter() {
    return Session.get('counter');
  },
});

Template.index.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    Meteor.call('foo', function(err, data) {
      if (err) console.log(err);
      Session.set('counter', data);
    });
  },
});
*/

FlowRouter.route('/', {
  name: 'Index',
  reactComponent: function() { return Index; },
  action(params, queryParams) {
    BlazeLayout.render('layout', {app_data: {title: 'Index'}});
  }
});
