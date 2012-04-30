define([
  "namespace",

  // Libs
  "use!backbone",

  // Modules
  "modules/subrouter"

  // Plugins
],

function(namespace, Backbone) {

  // Create a new module
  var Example = namespace.module();

  // Example extendings
  Example.Model = Backbone.Model.extend({ /* ... */ });
  Example.Collection = Backbone.Collection.extend({ /* ... */ });
  Example.Router = Backbone.SubRouter.extend({
  	routes: {
      "": "index"
    },

    index: function(hash) {
      var route = this;
      var base = new Example.Views.Base();

      // Attach the tutorial to the DOM
      base.render(function(el) {
        $("#main").html(el);
      });
    }
  });

  // This will fetch the tutorial template and render it.
  Example.Views.Base = Backbone.View.extend({
    template: "/app/modules/example/templates/example.html",

    render: function(done) {
      var view = this;

      // Fetch the template, render it to the View element and call done.
      namespace.fetchTemplate(this.template, function(tmpl) {
        view.el.innerHTML = tmpl();

        // If a done function is passed, call it with the element
        if (_.isFunction(done)) {
          done(view.el);
        }
      });
    }
  });

  // Required, return the module for AMD compliance
  return Example;

});
