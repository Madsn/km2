FlowRouter.route('/dashboard', {
  name: 'Dashboard',
  action(params, queryParams) {
    BlazeLayout.render('layout', {container: 'dashboard'});
  }
});
