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


    //Scrollmagic2
    // init
    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tween = TweenMax.from("#animate", 0.5, { autoAlpha: 0, scale: 0.7 });

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: "a#top", duration: 200, triggerHook: "onLeave" })
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

    // change behaviour of controller to animate scroll instead of jump
    controller.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, { scrollTo: { y: newpos } });
    });

    //  bind scroll to anchor links
    $(document).on("click", "a[href^='#']", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            controller.scrollTo(id);

            // if supported by the browser we can even update the URL.
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });
    ////init
    //var controller = new ScrollMagic.Controller();

    ////create scene
    //var scene1 = new ScrollMagic.Scene({
    //    triggerElement: '#trigger1'
    //}).setTween('#animate1', 0.5, { backgroundColor: 'green', scale: 2.5 })
    //    .addIndicators({ name: " 1 - no duration" })
    //    .addTo(controller);


			//var controller = $.superscrollorama();
			//// individual element tween examples
			//controller.addTween('#title1', TweenMax.from( $('#title1'), .5, {css:{opacity: 0}}));
			////controller.addTween('#title2', TweenMax.from( $('#title2'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}));
			//controller.addTween('#title3', TweenMax.from( $('#title3'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
			//controller.addTween('#title2', TweenMax.fromTo( $('#title2'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
			////controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing

})(jQuery);
