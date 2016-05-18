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

Template.add_kennel_form.helpers({
  'userSearchOptions': function() {
    return {
      // Must enter at least 1 character before we search
      minimumInputLength: 1,
      // Cannot select multiple items
      multiple: false,
      // Fetch the results with a Meteor method instead of ajax
      ajax: {
        transport: function(params, success, failure) {
          Meteor.call('userSearch', params.data.q, function(err, results) {
            if (err) {
              failure(err);
              return;
            }
  
            success(results);
          });
        },
        processResults: function(data) {
          var results = [];
          _.each(data.results, function(result) {
            results.push({
              id: result._id,
              text: result.username
            });
          });
  
          return {
            results: results
          };
        }
      }
    }
  }
});

FlowRouter.route('/admin', {
  name: 'Admin',
  subscriptions: function(params) {
    this.register('kennels', Meteor.subscribe('kennels'));
    this.register('userData', Meteor.subscribe('userData'));
  },
  action(params, queryParams) {
    BlazeLayout.render('layout', {container: 'admin'});
  }
});
