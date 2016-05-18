export const Pets = new Mongo.Collection('pets');

var PetSchema = new SimpleSchema({
  name: {type: String},
  owner: {type: Meteor.User},
});

Pets.attachSchema(PetSchema);

if (Meteor.isClient) {
  window.Pets = Pets;
}

if (Meteor.isServer) {
  Meteor.publish('pets', function petsPublication() {
    return Pets.find();
  });
}