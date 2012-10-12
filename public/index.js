// Модель статьи
var PostModel = Backbone.Model.extend({
    defaults: {
        "title": "",
        "desc": ""
    },
    url: "/posts/add"
});


// Коллекция статей
var PostCollection = Backbone.Collection.extend({
    model: PostModel,
    url: '/posts/list'
});







var posts = new PostCollection;

/*
var a = new PostModel({"title":"ololo", "desc":"trololo"});
a.save();

posts.fetch({
    success: function(){ console.log("suc00"); },
    error: function(){ console.log("err00"); }
});
*/