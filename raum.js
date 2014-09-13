$(document).ready(function($) {
	// init controller
	controller.scrollTo(function (pos) {
		TweenMax.to(window, 2, {scrollTo: {y: pos}});
	});
	
	var navHome   = $("#nav-home"),
		navMeet   = $("#nav-meet"),
	    navSubway = $("#nav-subway"),
	    navTweet1 = $("#nav-tweet-one"),
	    navCraft  = $("#nav-craft"),
	    navTweet2 = $("#nav-tweet-two");

	var navHomeSpan   = $("#nav-home span"),
		navMeetSpan   = $("#nav-meet span"),
	    navSubwaySpan = $("#nav-subway span")
	    navTweet1Span = $("#nav-tweet-one span"),
	    navCraftSpan  = $("#nav-craft span"),
	    navTweet2Span = $("#nav-tweet-two span");

	// navigation tweens
	var tweenSpanHome   = TweenMax.to(navHomeSpan, .25,{display:"block", opacity:1, paused:true}),
		tweenSpanMeet   = TweenMax.to(navMeetSpan, .25,{display:"block", opacity:1, paused:true}),
	    tweenSpanSubway = TweenMax.to(navSubwaySpan, .25,{display:"block", opacity:1, paused:true}),
	    tweenSpanTweet1 = TweenMax.to(navTweet1Span, .25,{display:"block", opacity:1, paused:true}),
	    tweenSpanCraft  = TweenMax.to(navCraftSpan, .25,{display:"block", opacity:1, paused:true}),
	    tweenSpanTweet2 = TweenMax.to(navTweet2Span, .25,{display:"block", opacity:1, paused:true});

    // home nav
	$(navHome).hover(function() {
		tweenSpanHome.play();
	},
	function() {
		tweenSpanHome.reverse();
	});
	$(navHome).click(function() {
		controller.scrollTo(0);
	});

	// meet nav
	$(navMeet).hover(function() {
		tweenSpanMeet.play();
	},
	function() {
		tweenSpanMeet.reverse();
	});
	$(navMeet).click(function() {
		controller.scrollTo(925);
	});

	// subway nav
	$(navSubway).hover(function() {
		tweenSpanSubway.play();
	},
	function() {
		tweenSpanSubway.reverse();
	});
	$(navSubway).click(function() {
		controller.scrollTo(1390);
	});

	// tweet one nav
	$(navTweet1).hover(function() {
		tweenSpanTweet1.play();
	},
	function() {
		tweenSpanTweet1.reverse();
	});
	$(navTweet1).click(function() {
		controller.scrollTo(2450);
	});

	// craft nav
	$(navCraft).hover(function() {
		tweenSpanCraft.play();
	},
	function() {
		tweenSpanCraft.reverse();
	});
	$(navCraft).click(function() {
		controller.scrollTo(2711);
	});

	// tweet two nav
	$(navTweet2).hover(function() {
		tweenSpanTweet2.play();
	},
	function() {
		tweenSpanTweet2.reverse();
	});
	$(navTweet2).click(function() {
		controller.scrollTo(4000);
	});


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
		.from(tagline, .6, {opacity: 0})

		// owner tweens
		.to("#owners-container", 1, {transform: "translateY(0)", delay:1})
		.add([TweenMax.from("#text-decoration-left", .5,{width:0}),
			  TweenMax.from("#text-decoration-right", .5,{width:0})
			])
		.add([TweenMax.from("#text-decoration-left p", .5,{opacity:0}),
			  TweenMax.from("#text-decoration-right p", .5,{opacity:0})
			])
		.set("#owners-container", {css: {zIndex: 1}, delay: 1})

		// meet tweens
		.to("#meet-container", 1, {transform: "translateY(0)"})
		.add([TweenMax.from("#d1", .5, {marginLeft: "300"}),
			  TweenMax.from("#d3", .5, {marginLeft: "300"})
			])
		.add([TweenMax.from("#meet-line-left", .5, {width: 0}),
			  TweenMax.from("#meet-line-right", .5, {width: 0})
			])
		.from("#meet-text", .5, {opacity: 0})
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
		.to("#subway", 1, {transform: "translateY(-800px)", delay:1})
		.set("#maria-container", {css: {zIndex: 3}})

		// maria tweens

		// tweet one tweens
		.to("#tweet-one", 1, {transform: "translateY(0)", delay:1})
		.from("#tweet-one div.tweet-container", .5, {marginLeft: -500, ease: Back.easeOut})
		.add(TweenMax.fromTo("#tweet-one div div div.outer-tweet", .5,
			    {width:50, height: 50},
			    {width:300, height: 255}
			 ))
		.from("#tweet-one div div div.outer-tweet div.inner-tweet", .5, {opacity:0})
		.from("#tweet-one div.tweet-container-right", .5, {marginRight: -500, ease: Back.easeOut})
		.add(TweenMax.fromTo("#tweet-one div div div.outer-tweet-right", .5,
			    {width:50, height: 50},
			    {width:300, height: 287}
			 ))
		.from("#tweet-one div div div.outer-tweet-right div.inner-tweet-right", .5, {opacity:0})
		.set("#tweet-one", {css: {zIndex: 4}})

		// cans tweens
		.add([TweenMax.to("#cans", 1, {transform: "translateY(0)", delay:1}),
			  TweenMax.to("#kevin", 1, {transform: "translateY(0)", delay:1})
			])
		.add([TweenMax.to("#cans p", 1, {fontSize: "120px"}),
			  TweenMax.to("#cans p", 1, {letterSpacing: "-18px"}),
			  TweenMax.to("#cans p", 1, {lineHeight: "87px"})
			])
		.to("#cans", 1, {transform: "translateY(-800px)", delay:1})


		// kevin tweens
		.set("#kevin", {css: {zIndex: 6}})
		.to("#kevin div", 1, {marginRight:"-50%", delay:.7})

		//tweet two tweens
		.to("#tweet-two", 1, {transform: "translateY(0)", delay:1})
		.from("#tweet-two div.tweet-container", .5, {marginLeft: -500, ease: Back.easeOut})
		.add(TweenMax.fromTo("#tweet-two div div div.outer-tweet", .5,
			    {width:50, height: 50},
			    {width:300, height: 255}
			 ))
		.from("#tweet-two div div div.outer-tweet div.inner-tweet", .5, {opacity:0})
		.from("#tweet-two div.tweet-container-right", .5, {marginRight: -500, ease: Back.easeOut})
		.add(TweenMax.fromTo("#tweet-two div div div.outer-tweet-right", .5,
			    {width:50, height: 50},
			    {width:300, height: 287}
			 ))
		.from("#tweet-two div div div.outer-tweet-right div.inner-tweet-right", .5, {opacity:0});
		

	var scrollScene = new ScrollScene({
		duration: 4000,
		triggerHook: 0
	})
	.setTween(animationTimeline)
	.addTo(controller)
	.setPin("#animation", {spacerClass:".animation-pin-spacer",
		pushFollowers: true});
});