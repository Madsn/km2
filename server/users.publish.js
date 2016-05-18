Meteor.publish('userData', function() {
  return Meteor.users.find({}, {fields: {teamId: 1, username: 1, cyclingDays: 1, distance: 1}});
});