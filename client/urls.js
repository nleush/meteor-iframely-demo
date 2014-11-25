var urlRe = /^\s*(https?:\/\/[^ \/,"]+\/[^ ,"]+)\s*$/i;

Template.urls.helpers({
    items: function () {
        return Urls.find({}, {
            limit: 3,
            sort: {
                created_at: -1
            }
        });
    }
});

Template.urls.events({
    "keydown #url-input": function (e, t) {
        if (e.which === 13) {
            var value = String(e.target.value || "");
            if (value && value.match(urlRe)) {
                e.target.value = '';
                Urls.insert({
                    created_at: new Date(),
                    url: value
                });
            }
        }
    }
});