FT.manifest({
	"filename": "index.html",
	"width": 300,
	"height": 250,
	"clickTagCount": 1,
	"instantAds": [
        {"name":"segmentId", "type":"text", "default":"false"},
		{"name":"feedEndpoint", "type":"text", "default":"[%PROTOCOL%]fdz.flashtalking.com/services/chase/FBI936/flights.php?info=[%PRODUCT_ID%]"},
        {"name":"defaultFeedEndpoint", "type":"text", "default":"https://fdz.flashtalking.com/services/chase/FBI936/flights.php?info=JFK_LON_20160922_20160925"},
        {
            "name": "errorMessage1",
            "type": "text",
            "default": "Planning a trip?"
        },{
            "name": "errorMessage2",
            "type": "text",
            "default": "Earn <span class='dyn-text'>2x</span> points<br>when you book with<br>Chase Sapphire Preferred.<sup>&reg;</sup>"
        },{
            "name": "errorMessage3",
            "type": "text",
            "default": "Use them<br>wherever you go next."
        }
	]
});