// (function() {
//     alert("Hello?");

// var scrollorama = $.scrollorama({ blocks:'.scrollblock' });

// scrollorama.animate('#title1',{ duration: 300, property:'zoom', end: 8 });
// scrollorama.animate('#title2',{ duration: 600, property:'rotate', start:90,end:270 });
// scrollorama.animate('#title3',{ duration: 600, property:'left', start:-800,end: 0 });

// })(jQuery);

// $(document).ready(function() {
// var scrollorama = $.scrollorama({ blocks:'.scrollblock' });

// scrollorama.animate('#title1',{ duration: 300, property:'zoom', end: 8 });
// scrollorama.animate('#title2',{ duration: 600, property:'rotate', start:90,end:270 });
// scrollorama.animate('#title3',{ duration: 600, property:'left', start:-800,end: 0 });

// });

(function() {

			var controller = $.superscrollorama();
			// individual element tween examples
			controller.addTween('#title1', TweenMax.from( $('#title1'), .5, {css:{opacity: 0}}));
			//controller.addTween('#title2', TweenMax.from( $('#title2'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}));
			controller.addTween('#title3', TweenMax.from( $('#title3'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
			controller.addTween('#title2', TweenMax.fromTo( $('#title2'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
			//controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
		})(jQuery);
