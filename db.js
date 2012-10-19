exports.getPosts = function() {
    console.log();
    if (Math.floor(Math.random()*11)%2) {
        return [
            {id: 1, title: "Title One", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 9, title: "Title Nine", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 3, title: "Title Three", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 7, title: "Title Seven", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 4, title: "Title Four", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 5, title: "Title Five", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 6, title: "Title Six", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 2, title: "Title Two", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 8, title: "Title Eight", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 10, title: "Title Ten", "desc": "xxxxxxxxxxxxxxxxx"}
        ];
    } else {
        return [
            {id: 1, title: "Title 1", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 9, title: "Title 9", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 3, title: "Title 3", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 7, title: "Title 7", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 4, title: "Title 4", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 5, title: "Title 5", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 6, title: "Title 6", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 2, title: "Title 2", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 8, title: "Title 8", "desc": "xxxxxxxxxxxxxxxxx"},
            {id: 10, title: "Title 10", "desc": "xxxxxxxxxxxxxxxxx"}
        ];
    }
}


exports.savePost = function() {
    console.log("new post was saved in DB");
}