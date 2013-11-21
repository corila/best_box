## Social media
lib.misc.socialmedia = COA
lib.misc.socialmedia {

	## Facebook
	10 = TEXT
	10 {
		value = <i class="glyphicon glyphicon-user"></i>
		wrap = <li>|</li>
		typolink.parameter = {$const.socialmedia.facebook.link}
		typolink.title = {$const.socialmedia.facebook.title}
		typolink.extTarget = _blank
		titleText = {$const.socialmedia.facebook.title}
		if.isTrue = {$const.socialmedia.facebook.link}
	}

	## Twitter
	20 < .10
	20 {
		value = <i class="glyphicon glyphicon-picture"></i>
		typolink.parameter = {$const.socialmedia.twitter.link}
		typolink.title = {$const.socialmedia.twitter.title}
		titleText = {$const.socialmedia.twitter.title}
		if.isTrue = {$const.socialmedia.twitter.link}
	}

	## Linkedin
	30 < .10
	30 {
		value = <i class="glyphicon glyphicon-search"></i>
		typolink.parameter = {$const.socialmedia.linkedin.link}
		typolink.title = {$const.socialmedia.linkedin.title}
		titleText = {$const.socialmedia.linkedin.title}
		if.isTrue = {$const.socialmedia.linkedin.link}
	}
}
