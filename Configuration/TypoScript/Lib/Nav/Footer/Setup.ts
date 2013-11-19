lib.nav.footer= HMENU
lib.nav.footer {
	wrap = <nav id="footer-nav">|</nav>

	special = directory
	special.value = {$const.page.pid.footer}

	1 = TMENU
	1 {
		wrap = <ul>|</ul>
		noBlur = 1
		expAll = 1

		NO = 1
		NO {
			ATagTitle.field = title // nav_title
			stdWrap.htmlSpecialChars = 1
			wrapItemAndSub = <li>|</li>
			accessKey = 1
		}
	}
}