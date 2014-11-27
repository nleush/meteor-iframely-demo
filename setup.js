Meteor.startup(function() {
    IframelyOembed.setTemplate('customWidget');
    IframelyOembed.setEndpoint('http://open.iframe.ly/api/oembed');
});
