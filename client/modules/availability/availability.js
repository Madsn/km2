
FlowRouter.route('/availability', {
  name: 'Availability',
  action(params, queryParams) {
    BlazeLayout.render('layout', {container: 'availability'});
  }
});