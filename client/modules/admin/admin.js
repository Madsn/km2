FlowRouter.route('/admin', {
  name: 'Admin',
  action(params, queryParams) {
    BlazeLayout.render('layout', {container: 'admin'});
  }
});
