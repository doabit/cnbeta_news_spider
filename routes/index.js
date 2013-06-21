var util = require('../lib/util.js');
var cheerio = require('cheerio');
exports.index = function(req, res) {
    var url = "http://www.cnbeta.com";
    util.get(url,
    function(content, status) {
        var $ = cheerio.load(content);
        var realtime_list = $('.realtime_list').html();
        var news_list = $("#allnews_all").html();
        res.render("index", {realtime_list: realtime_list, news: news_list})
    });
};