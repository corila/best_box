lib.nav.footer= HMENU
lib.nav.footer {
	special = directory
	special.value = {$const.page.footer}
	1 = TMENU
	1 {
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