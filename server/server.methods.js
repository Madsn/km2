Meteor.methods({
  userSearch: function(partialName) {
    check(partialName, String);

    var results = Meteor.users.find({
      username: {
        '$regex': '^' + partialName,
        '$options': 'i'
      }
    }, {
      limit: 10,
      fields: {
        _id: 1,
        username: 1
      }
    }).fetch();

    return {
      results: results
    };
  }
});