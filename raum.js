
$(document).ready(function($) {
		var r = document.getElementById("r-counter");
		var a = document.getElementById("a-counter");
		var u = document.getElementById("u-counter");
		var m = document.getElementById("m-counter");
		var tagline = document.getElementById("tagline");
		var animationTimeline = new TimelineMax()
			// logo tweens
			.add([TweenMax.from(r,800,{x:-200, opacity: 0}), 
			      TweenMax.from(a,1000,{y:200, opacity: 0}),
			      TweenMax.from(u,1200,{y:-200, opacity: 0}),
			      TweenMax.from(m,1400,{x:200, opacity: 0})
			     ])
			.add(TweenMax.from(tagline, 600, {opacity: 0 }))

			// owner tweens
			.add(TweenMax.to("#owners-container", 500, {transform: "translateY(0)"}))
			.add([TweenMax.from("#text-decoration-left",500,{width:0}),
				  TweenMax.from("#text-decoration-right",500,{width:0})
				])
			.add([TweenMax.from("#text-decoration-left p",500,{opacity:0}),
				  TweenMax.from("#text-decoration-right p",500,{opacity:0})
				])
			.set("#owners-container", {css: {zIndex: 1}})

			// meet tweens
			.add(TweenMax.to("#meet-container",500, {transform: "translateY(0)"}))
			.add([TweenMax.from("#d1", 500, {marginLeft: "300"}),
				  TweenMax.from("#d3", 500, {marginLeft: "300"})
				])
			.add([TweenMax.from("#meet-line-left", 500, {width: 0}),
				  TweenMax.from("#meet-line-right", 500, {width: 0})
				])
			.add(TweenMax.from("#meet-container p", 500, {opacity: 0}))
			.set("#meet-container", {css: {zIndex: 2}})
			
			// subway tweens paired with maria
			.add([TweenMax.to("#subway",1000, {transform: "translateY(0)"}),
				  TweenMax.to("#maria-container",1000, {transform: "translateY(0)"})
				])
			.add([TweenMax.to("#subway p", 1000, {fontSize: "120px"}),
				  TweenMax.to("#subway p", 1000, {letterSpacing: "-18px"}),
				  TweenMax.to("#subway p", 1000, {lineHeight: "87px"}),
				  TweenMax.from("#tweet-one div div div div", 1,{width:300})
			])
			.add(TweenMax.to("#subway",1000, {transform: "translateY(-100%)"}))
			.set("#maria-container", {css: {zIndex: 3}})

			// maria tweens

			// tweet one tweens
			.add(TweenMax.to("#tweet-one",1000, {transform: "translateY(0)"}))
			.add(TweenMax.from("#tweet-one div.tweet-container", 500, {marginLeft: -500, ease: Back.easeOut}))
			//.add(TweenMax.from("#tweet-one div div div div", 500,{width:50, height: 50}))
			.add(TweenMax.from("#tweet-one div.tweet-container-right", 500, {marginRight: -500, ease: Back.easeOut}))
			.set("#tweet-one", {css: {zIndex: 4}})

			// cans tweens
			.add([TweenMax.to("#cans", 1000, {transform: "translateY(0)"}),
				  TweenMax.to("#kevin", 1000, {transform: "translateY(660px)"})
				])
			.add([TweenMax.to("#cans p", 1000, {fontSize: "120px"}),
				  TweenMax.to("#cans p", 1000, {letterSpacing: "-18px"}),
				  TweenMax.to("#cans p", 1000, {lineHeight: "87px"})
				])
			.set("#cans", {css: {zIndex: 5}})

			// kevin tweens
			.add(TweenMax.to("#kevin",1000, {transform: "translateY(0)"}))
			.set("#kevin", {css: {zIndex: 6}})

			//tweet two tweens
			.add(TweenMax.to("#tweet-two",1000, {transform: "translateY(0)"}))
			.add(TweenMax.from("#tweet-two div.tweet-container", 500, {marginLeft: -500, ease: Back.easeOut}))
			//.add(TweenMax.from("#tweet-one div div div div", 500,{width:50, height: 50}))
			.add(TweenMax.from("#tweet-two div.tweet-container-right", 500, {marginRight: -500, ease: Back.easeOut}));
			

		var scrollScene = new ScrollScene({
			duration: 10000,
			triggerHook: 0
		})
		.setTween(animationTimeline)
		.addTo(controller)
		.setPin("#animation", {spacerClass:".animation-pin-spacer",
			pushFollowers: true});
});