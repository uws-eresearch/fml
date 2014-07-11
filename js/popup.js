/**
 * 
 */
(function($) {
	$.fn.myJavascriptFunction = function(data) {

		var ul = $('<ul id="lis"></ul>');
        var index;
        for (index = 0; index < data.length; index++) {
          
        	var match = data[index];
        	$('<li></li>')
            .html($('<div></div>').html(match['name'] + ' [' + match['uri'] + '] '))
            .mousedown(function () {  })
            .mouseover(function () {  })
            .mouseout(function () {  })
            .data('autocompleteValue', match['name'])
            .data('uri', match['uri'])
            .appendTo(ul);
        }
		
        var list = $('<div>').append(ul.clone()).html();
		$.colorbox({ innerWidth:420, innerHeight:315, html:list });
	};
})(jQuery);