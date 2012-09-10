var app = {
	initialize : function() {
		this.bind();
	},
	bind : function() {
		document.addEventListener('deviceready', this.deviceready, false);
	},
	deviceready : function() {
		// note that this is an event handler so the scope is that of the event
		// so we need to call app.report(), and not this.report()
		$(window).bind("orientationchange resize pageshow", app.fixgeometry);
		app.fixgeometry();
	},
	fixgeometry : function() {
		/* Some orientation changes leave the scroll position at something
		 * that isn't 0,0. This is annoying for user experience. */
		scroll(0, 0);

		/* Calculate the geometry that our content area should take */
		var header = $("#header");
		var content = $("#content");
		var viewport_height = $(window).height();
		var header_outerHeight = header.outerHeight(true);
		//
		var content_height = viewport_height - header_outerHeight;

		/* Trim margin/border/padding height */
		content_height -= (content.outerHeight(true) - content.height());
		content.height(content_height);
	}
};


