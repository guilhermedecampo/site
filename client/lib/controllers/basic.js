BasicController = FastRender.RouteController.extend({
  waitOn: function () {
    return [
      Meteor.subscribe('Users')
    ];
  }
});

