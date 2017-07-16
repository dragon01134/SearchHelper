browser.contextMenus.create({
    id: "search-in-imdb",
    title: "Search in Imdb",
    contexts: ["selection"],
});
browser.contextMenus.create({
    id: "search-imdb",
    title: "Search  Imdb",
    contexts: ["selection"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
		 if (info.menuItemId === "search-in-imdb") {
		 	console.log(info.selectionText);
		 	imdb_search_url = "http://www.imdb.com/find?ref_=nv_sr_fn&s=all&q="
		 	search_url=imdb_search_url+convertTextToSearchText(info.selectionText);
			var creating = browser.tabs.create({
    			url:search_url
  			});
  			creating.then(onCreated, onError);
		 	console.log("already executed")
   }
});

function convertTextToSearchText(text) {
	var convertedText;
	//convertedText = text.replace(" ","+");
	convertedText = text.replace(/ /g,"+");
	//console.log("text is "+convertedText);
	

	return convertedText;

}