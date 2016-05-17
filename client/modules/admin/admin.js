import {Kennels} from '../../../common/collections/kennels.js';

Template.list_existing_kennels.helpers({
  'kennels': function() {
    return Kennels.find();
  }
});

Template.list_existing_kennels.events({
  'click #delete-kennel-btn'() {
    if (confirm('Really delete "' + this.name + '"?')) {
      Meteor.call('deleteKennel', this._id);
    }
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
