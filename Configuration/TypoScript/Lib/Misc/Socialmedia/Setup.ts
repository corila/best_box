## Social media
lib.misc.socialmedia = COA
lib.misc.socialmedia {
	wrap = <aside class="social-media"><ul>|</ul></aside>
	
	## Facebook
	10 = TEXT
	10 {
		value = <i class="icon-social facebook"></i>
		wrap = <li>|</li>
		typolink.parameter = {$const.socialmedia.facebook.link}
		typolink.title = {$const.socialmedia.facebook.title}
		typolink.extTarget = _blank
		titleText = {$const.socialmedia.facebook.title}
		if.isTrue = {$const.socialmedia.facebook.link}
	}
	
	## Twitter
	20 = TEXT
	20 {
		value = <i class="icon-social twitter"></i>
		wrap = <li>|</li>
		typolink.parameter = {$const.socialmedia.twitter.link}
		typolink.title = {$const.socialmedia.twitter.title}
		typolink.extTarget = _blank
		titleText = {$const.socialmedia.twitter.title}
		if.isTrue = {$const.socialmedia.twitter.link}
	}
	
	## Linkedin
	30 = TEXT
	30 {
		value = <i class="icon-social linkedin"></i>
		wrap = <li>|</li>
		typolink.parameter = {$const.socialmedia.linkedin.link}
		typolink.title = {$const.socialmedia.linkedin.title}
		typolink.extTarget = _blank
		titleText = {$const.socialmedia.linkedin.title}
		if.isTrue = {$const.socialmedia.linkedin.link}
	}
}
