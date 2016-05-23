
FlowRouter.route('/kenneldash', {
  name: 'Kenneldash',
  action(params, queryParams) {
    BlazeLayout.render('layout', {container: 'kenneldash'});
  }
});