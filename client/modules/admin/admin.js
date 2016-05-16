import {Kennels} from '../../../common/collections/kennels.js';

Template.add_new_kennel.events({
  'click button'(event, instance) {
    Meteor.call('add_new_kennel', {
      name: 'testing',
      admin: 'admin'
    });
  }
});

Template.list_existing_kennels.helpers({
  'kennels': function() {
    return Kennels.find();
  }
});


FlowRouter.route('/admin', {
  name: 'Admin',
  subscriptions: function(params) {
    this.register('kennels', Meteor.subscribe('kennels'));
  },
  action(params, queryParams) {
    BlazeLayout.render('layout', {container: 'admin'});
  }
});
