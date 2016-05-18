import {Schema} from './schema.js';
export const Kennels = new Mongo.Collection('kennels');

Schema.KennelSchema = new SimpleSchema({
  name: {type: String},
  owner: {
    type: String, // User ID
    autoform: {
      type: "select2",
      afFieldInput: {
        multiple: false
      }
    },
    label: 'Kennel owner'
  }
});

Kennels.attachSchema(Schema.KennelSchema);

if (Meteor.isClient) {
  window.Kennels = Kennels;
}

if (Meteor.isServer) {
  Meteor.publish('kennels', function kennelsPublication() {
    return Kennels.find();
  });
}