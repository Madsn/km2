Template.layout.helpers({
  hasReactComponent: function() {
    return !_.isUndefined(FlowRouter.current().route.options.reactComponent);
  },
  reactComponent: function() {
    if (!_.isUndefined(FlowRouter.current().route.options.reactComponent)) {
        return FlowRouter.current().route.options.reactComponent();
    } else {
        return '';
    }
  }
});