Template.availability.helpers({
  getOptions() {
    return {
      year: 2016,
      month: 5
    }
  },
  getRows() {
    return [
      [
        {day: 25, contents: ["hello"]},
        {day: 26, contents: ["123", "456"]},
        {day: 27, contents: ""},
        {day: 28, contents: ""},
        {day: 29, contents: ""},
        {day: 30, contents: ""},
        {day: 1, contents: ""},
      ],
      [
        {day: 2, contents: ""},
        {day: 3, contents: ""},
        {day: 4, contents: ""},
        {day: 5, contents: ""},
        {day: 6, contents: ""},
        {day: 7, contents: ""},
        {day: 8, contents: ""},
      ],
      [
        {day: 9, contents: ""},
        {day: 10, contents: ""},
        {day: 11, contents: ""},
        {day: 12, contents: ""},
        {day: 13, contents: ""},
        {day: 14, contents: ""},
        {day: 15, contents: ""},
      ],
      [
        {day: 16, contents: ""},
        {day: 17, contents: ""},
        {day: 18, contents: ""},
        {day: 19, contents: ""},
        {day: 20, contents: ""},
        {day: 21, contents: ""},
        {day: 22, contents: ""},
      ],
      [
        {day: 23, contents: ""},
        {day: 24, contents: ""},
        {day: 25, contents: ""},
        {day: 26, contents: ""},
        {day: 27, contents: ""},
        {day: 28, contents: ""},
        {day: 29, contents: ""},
      ],
      [
        {day: 30, contents: ""},
        {day: 31, contents: ""},
        {day: 1, contents: ""},
        {day: 2, contents: ""},
        {day: 3, contents: ""},
        {day: 4, contents: ""},
        {day: 5, contents: ""},
      ]
    ];
  },
  getBookings() {
    return [
      {
        id: 1,
        name: "Lars"
      }
    ];
  }
})


FlowRouter.route('/availability', {
  name: 'Availability',
  action(params, queryParams) {
    BlazeLayout.render('layout', {container: 'availability'});
  }
});