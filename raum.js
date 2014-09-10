
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

			// meet tweens
			.add(TweenMax.to("#meet-container",500, {transform: "translateY(0)"}))
			.add([TweenMax.from("#d1", 500, {marginLeft: "300"}),
				  TweenMax.from("#d3", 500, {marginLeft: "300"})
				])
			.add([TweenMax.from("#meet-line-left", 500, {width: 0}),
				  TweenMax.from("#meet-line-right", 500, {width: 0})
				])
			.add(TweenMax.from("#meet-container p", 500, {opacity: 0}))
			
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


			// maria tweens

			// tweet tweens
			.add(TweenMax.to("#tweet-one",1000, {transform: "translateY(0)"}))
			.add(TweenMax.from("#tweet-one div.tweet-container", 500, {marginLeft: -500, ease: Back.easeOut}))
			//.add(TweenMax.from("#tweet-one div div div div", 500,{width:50, height: 50}))
			.add(TweenMax.from("#tweet-one div.tweet-container-right", 500, {marginRight: -500, ease: Back.easeOut}))

			// cans tweens
			.add(TweenMax.to("#cans", 1000, {transform: "translateY(0)"}))
			.add([TweenMax.to("#cans p", 1000, {fontSize: "120px"}),
				  TweenMax.to("#cans p", 1000, {letterSpacing: "-18px"}),
				  TweenMax.to("#cans p", 1000, {lineHeight: "87px"})
				])

			// kevin tweens
			.add(TweenMax.to("#kevin",1000, {transform: "translateY(0)"}));


		var scrollScene = new ScrollScene({
			duration: 10000,
			triggerHook: 0
		})
		.setTween(animationTimeline)
		.addTo(controller)
		.setPin("#animation", {spacerClass:".animation-pin-spacer",
			pushFollowers: true});
});