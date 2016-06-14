// Implements the jquery.tablesorter plugin which allows you 
// to sort your own table data. 
// Documentation : http://tablesorter.com/docs/example-parsers.html

$(document).ready(function(){

// This parser allows us to correctly sort the distances of the planet based
// on its numeric value rather than the text value. 
	$.tablesorter.addParser({
		id : 'getDistanceAttr',
		is : function(sort){ 
			// return false to this parser is not auto detected
			return false 
		},
		format: function(sort, table, cell, cellIndex){
			return $(cell).attr('data-distance');
		},
		// this value can be either 'text' or 'numeric'
		type: 'numeric'
	});

	$('table#lightTable').tablesorter({

		// sorts table alphabetically by default.
		sortList : [[0,0]], 
		cssAsc : 'sorted asc',
		cssDesc : 'sorted desc', 
		headers : { 2 : { sorter : 'getDistanceAttr'} }
	}); 

});








