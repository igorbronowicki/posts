// Модель статьи
var PostModel = Backbone.Model.extend({
    defaults: {
        "title": "",
        "desc": ""
    }
});


// Коллекция статей
var PostCollection = Backbone.Collection.extend({
    model: PostModel,
    url: '/posts'
});







var posts = new PostCollection;

/*
posts.fetch({
    success: function(){ console.log("suc00"); },
    error: function(){ console.log("err00"); }
});
*/