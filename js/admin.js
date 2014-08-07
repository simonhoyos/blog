var applicationsRef = new Firebase('https://glaring-fire-2299.firebaseio.com/applications');

// Firebase authentication
var auth = new FirebaseSimpleLogin(applicationsRef, function(error, user) {
  if (error) {
    // authentication failed
    console.log(error);
    window.location = '/login';
  } else if (user) {
    // user is authenticated
    console.log("User ID: " + user.uid + ", Provider: " + user.provider);
    $('.logout').show();
  }
});

// TODO: create a Backbone view to encapsulate this
$('.logout a').click(function(e) {
  e.preventDefault();
  auth.logout();
});

// Model
var Application = Backbone.Model.extend({
  defaults: {
    email: "",
    status: "created",
    status_reason: "",
    created_at: new Date().getTime()
  }
});

// Collection
var Applications = Backbone.Firebase.Collection.extend({
  model: Application,

  firebase: applicationsRef,
});

// View - the application detail modal
var ApplicationDetail = Backbone.View.extend({
  template: _.template($('#detail-template').html()),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.setElement(this.template(this.model.toJSON()));
    this.$el.modal();
  },

  events: {
    "submit": "submit"
  },

  submit: function(e) {
    e.preventDefault();
    this.model.set({
      email: this.$('#email').val(),
      first_name: this.$('#first_name').val(),
      last_name: this.$('#last_name').val(),
      birth: this.$('#birth').val(),
      mobile: this.$('#mobile').val(),
      found_us: this.$('#found-us').val(),
      status: this.$('#status').val(),
      status_reason: this.$('#status-reason').val()
    });  
  }
});

// a row of the table
var ApplicationRow = Backbone.View.extend({
  template: _.template($('#row-template').html()),

  render: function() {
    this.setElement(this.template(this.model.toJSON()));
    return this;
  },

  events: {
    "click .name": "showModal"
  },

  showModal: function() {
    new ApplicationDetail({ model: this.model });
  }
});

// the applications table
var ApplicationsTable = Backbone.View.extend({
  el: "#applications",

  initialize: function() {
    this.listenTo(this.collection, 'error', this.handleError);
    this.listenTo(this.collection, 'add', this.addOne);
  },

  addOne: function(application) {
    var view = new ApplicationRow({ model: application });
    this.$el.append(view.render().el);
  },

  handleError: function(col, errorObject) {
    console.log('The read failed: ' + errorObject.code);
    window.location = '/login';
  }
});

var applications = new Applications();
var table = new ApplicationsTable({ collection: applications });