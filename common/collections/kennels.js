export const Kennels = new Mongo.Collection('kennels');

var KennelSchema = new SimpleSchema({
  name: {type: String},
  admin: {type: String}
});

Kennels.attachSchema(KennelSchema);

if (Meteor.isClient) {
  window.Kennels = Kennels;
}
