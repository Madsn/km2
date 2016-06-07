Template.occupants.helpers({
  bookings() {
    return [
        {_id: 1, type: "Boarding", customer: "Thisen", details: "1 cat for 10 days", status: "2 days till checkout" },
        {_id: 2, type: "Boarding", customer: "Madsn", details: "1 dog for 30 days", status: "2 days till checkout" }
      ];
  }
});

Template.due_to_check_in.helpers({
  bookings() {
    return [
        {_id: 3, type: "Boarding", customer: "Thisen", details: "1 cat for 2 days", status: "Checking in today" },
        {_id: 4, type: "Boarding", customer: "Madsn", details: "1 dog for 3 days", status: "Checking in today" }
      ];
  }
})

FlowRouter.route('/kenneldash', {
  name: 'Kenneldash',
  action(params, queryParams) {
    BlazeLayout.render('layout', {container: 'kenneldash'});
  }
});