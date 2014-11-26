Urls = new Mongo.Collection("urls");

Meteor.startup(function() {

    Urls.find().observe({

        added: function () {

            var last = Urls.findOne({}, {
                sort: {
                    created_at: -1
                },
                skip: 2,
                limit: 1
            });

            if (last) {

                Urls.remove({
                    created_at: {
                        $lt: last.created_at
                    }
                });
            }
        }
    });
});
