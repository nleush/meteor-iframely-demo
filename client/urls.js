Urls = new Mongo.Collection("urls");

var urlRe = /^https?:\/\/[^ \/,"]+\/[^ ,"]+$/i;

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

                // Test replace.
/*
                var last = Urls.findOne({}, {
                    sort: {
                        created_at: -1,
                        limit: 1
                    }
                });

                if (last) {
                    Urls.update(last._id, {
                        $set: {
                            url: value
                        }
                    })
                } else {
                    Urls.insert({
                        created_at: new Date(),
                        url: value
                    });
                }
                */

            }
        }
    }
});