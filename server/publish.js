import {Kennels} from '../common/collections/kennels.js';

Meteor.publish('kennels', function kennelsPublication() {
  return Kennels.find();
});
