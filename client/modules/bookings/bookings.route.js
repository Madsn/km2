FlowRouter.route('/bookings/', {
  reactComponent: function() { return Bookings; },
  action: function(params) {
    BlazeLayout.render('layout', {app_data: { title: 'Hello World'} });
  }
});