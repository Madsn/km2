export const Kennels = new Mongo.Collection('kennels');

var KennelSchema = new SimpleSchema({
  name: {type: String},
  admin: {type: Meteor.User}
});

Kennels.attachSchema(KennelSchema);

if (Meteor.isClient) {
  window.Kennels = Kennels;
}

if (Meteor.isServer) {
  Meteor.publish('kennels', function kennelsPublication() {
    return Kennels.find();
  });
}