Template.embed.rendered = function() {

    var data = this.data;

    Deps.autorun(function() {

        var url = data.url;

        Meteor.call('getOembed', url, function(error, data) {

            if (error) {
                Session.set('url:' + url, {error: error});
                return;
            }

            Session.set('url:' + url, data);
        });
    });
};

Template.embed.helpers({

    'html': function() {

        var oembed = Session.get('url:' + this.url);

        if (!oembed) {
            return 'loading...';
        }

        if (oembed.error) {
            console.error(oembed.error);
            return '- oembed error -';
        }

        if (oembed.html) {
            return oembed.html;
        }

        if (oembed.type === 'photo' && oembed.url) {
            return '<img src="' + oembed.url + '" title="' + (oembed.title || oembed.url) + '" alt="' + (oembed.title || oembed.url) + '" />'
        }

        return '- no oembed -';
    }
});