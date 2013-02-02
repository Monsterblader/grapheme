if (Meteor.isServer) {
	Meteor.methods({
	    longmanAPICall: function () {
	        this.unblock();
	        return Meteor.http.call("GET", "https://api.pearson.com/longman/dictionary/entry.json?q=after&apikey=2884334e050d5be2e5f001d00b4f1d28");
	    }
	});
}

// if (Meteor.isServer) { // rev note: without this if, throws following error even though code is within the server folder: "Error {} Error: Can't make a blocking HTTP call from the client; callback required.""
// 	Meteor.methods({
// 	    longmanAPICall: function (word) {
// 	        this.unblock();
// 	        var url = "https://api.pearson.com/longman/dictionary/entry.json?q=" + word + "&apikey=2884334e050d5be2e5f001d00b4f1d28";
// 	        return Meteor.http.call("GET", url);
// 	    }
// 	});
// }