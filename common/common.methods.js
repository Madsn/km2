import {Kennels} from './collections/kennels.js';

Meteor.methods({
  'foo'() {
    console.log('foo');
    return 2;
  },
  'add_new_kennel'(kennel) {
    Kennels.insert(kennel);
  }
});
