
$(document).ready(function($) {
		var r = document.getElementById("r-counter");
		var a = document.getElementById("a-counter");
		var u = document.getElementById("u-counter");
		var m = document.getElementById("m-counter");
		var tagline = document.getElementById("tagline");
		var animationTimeline = new TimelineMax()
			// logo tweens
			.add([TweenMax.from(r, .8,{x:-200, opacity: 0}), 
			      TweenMax.from(a, 1,{y:200, opacity: 0}),
			      TweenMax.from(u, 1.2,{y:-200, opacity: 0}),
			      TweenMax.from(m, 1.4,{x:200, opacity: 0})
			     ])
			.add(TweenMax.from(tagline, .6, {opacity: 0}))

			// owner tweens
			.add(TweenMax.to("#owners-container", .5, {transform: "translateY(0)", delay:1}))
			.add([TweenMax.from("#text-decoration-left", .5,{width:0}),
				  TweenMax.from("#text-decoration-right", .5,{width:0})
				])
			.add([TweenMax.from("#text-decoration-left p", .5,{opacity:0}),
				  TweenMax.from("#text-decoration-right p", .5,{opacity:0})
				])
			.set("#owners-container", {css: {zIndex: 1, delay:1}})

			// meet tweens
			.add(TweenMax.to("#meet-container", .5, {transform: "translateY(0)"}))
			.add([TweenMax.from("#d1", .5, {marginLeft: "300"}),
				  TweenMax.from("#d3", .5, {marginLeft: "300"})
				])
			.add([TweenMax.from("#meet-line-left", .5, {width: 0}),
				  TweenMax.from("#meet-line-right", .5, {width: 0})
				])
			.add(TweenMax.from("#meet-text", .5, {opacity: 0}))
			.set("#meet-container", {css: {zIndex: 2}})
			
			// subway tweens paired with maria
			.add([TweenMax.to("#subway", 1, {transform: "translateY(0)", delay:1}),
				  TweenMax.to("#maria-container", 1, {transform: "translateY(0)", delay:1})
				])
			.add([TweenMax.to("#subway p", 1, {fontSize: "120px"}),
				  TweenMax.to("#subway p", 1, {letterSpacing: "-18px"}),
				  TweenMax.to("#subway p", 1, {lineHeight: "87px"}),
				  TweenMax.from("#tweet-one div div div div", 1,{width:300})
			])
			.add(TweenMax.to("#subway", 1, {transform: "translateY(-100%)", delay:1}))
			.set("#maria-container", {css: {zIndex: 3}})

			// maria tweens

			// tweet one tweens
			.add(TweenMax.to("#tweet-one", 1, {transform: "translateY(0)", delay:1}))
			.add(TweenMax.from("#tweet-one div.tweet-container", .5, {marginLeft: -500, ease: Back.easeOut}))
			//.add(TweenMax.from("#tweet-one div div div div", .5,{width:50, height: 50}))
			.add(TweenMax.from("#tweet-one div.tweet-container-right", .5, {marginRight: -500, ease: Back.easeOut}))
			.set("#tweet-one", {css: {zIndex: 4}})

			// cans tweens
			.add([TweenMax.to("#cans", 1, {transform: "translateY(0)", delay:1}),
				  TweenMax.to("#kevin", 1, {transform: "translateY(0)", delay:1})
				])
			.add([TweenMax.to("#cans p", 1, {fontSize: "120px"}),
				  TweenMax.to("#cans p", 1, {letterSpacing: "-18px"}),
				  TweenMax.to("#cans p", 1, {lineHeight: "87px"})
				])
			.to("#cans", 1, {transform: "translateY(-100%)", delay:1})
			//.set("#cans", {css: {zIndex: 5}})

			// kevin tweens
			.set("#kevin", {css: {zIndex: 6}})
			.to("#kevin div", 1, {marginRight:"-50%", delay:.7})

			//tweet two tweens
			.add(TweenMax.to("#tweet-two", 1, {transform: "translateY(0)", delay:1}))
			.add(TweenMax.from("#tweet-two div.tweet-container", .5, {marginLeft: -500, ease: Back.easeOut}))
			//.add(TweenMax.from("#tweet-one div div div div", .5,{width:50, height: 50}))
			.add(TweenMax.from("#tweet-two div.tweet-container-right", .5, {marginRight: -500, ease: Back.easeOut}));
			

		var scrollScene = new ScrollScene({
			duration: 14000,
			triggerHook: 0
		})
		.setTween(animationTimeline)
		.addTo(controller)
		.setPin("#animation", {spacerClass:".animation-pin-spacer",
			pushFollowers: true});
});