// Модель статьи
var PostModel = Backbone.Model.extend({
    defaults: {
        "title": "",
        "desc": "",
        "time": "20 July 2012"
    },
    url: "/posts/add",
    initialize: function(){
        //console.log("Instance of PostModel was created.");
        //console.log(this);
    },
    validate: function(attributes){
        //console.log("Try to validate.");
        //console.log(attributes);
    }
});


// Коллекция статей
var PostCollection = Backbone.Collection.extend({
    model: PostModel,
    url: '/posts/list'
});


$(function(){
    // View для статей
    var PostsView = Backbone.View.extend({
        el: $('#posts'),
        render: function(){
            var template = $('#PostTemplate').html();
            var context = this.model.toJSON();
            //this.el.html(Mustache.render(template, context));

            var templateArray = $('#PostArrayTemplate').html();
            var contextArray = {list: this.collection.toJSON()};
            this.el.html(Mustache.render(templateArray, contextArray));

            console.log("PostsView was rendered one more time.");
            return this; //recommended as this enables calls to be chained.
        },
        initialize: function () { // Подписка на событие обновления коллекции
            //TODO: this.model.bind('change', this.render, this);
            //TODO: this.collection.bind('change', this.render, this);
        },
    });

    window.posts = new PostCollection;
    posts.fetch({
        success: function(){
            var postsView = new PostsView({model: posts.getByCid("c4"), collection: posts});
            postsView.render();
        },
        error: function(){ console.log("Some shit happens."); }
    });
});







/*
var a = new PostModel({"title":"ololo", "desc":"trololo"});
a.save();
*/