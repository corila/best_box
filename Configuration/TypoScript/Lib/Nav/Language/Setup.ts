lib.nav.language = HMENU
lib.nav.language {
	wrap = <nav class="pull-right" id="lang-nav">|</nav>

	special = language
	special.value = 0,1
	special.normalWhenNoLanguage = 0

	1 = TMENU
	1 {
		wrap = <ul class="nav">|</ul>
		noBlur = 1

		NO = 1
		NO {
			stdWrap.cObject = TEXT
			stdWrap.cObject.value = {$const.language.label.english} || {$const.language.label.khmer}
			allWrap = <li>|<i class="lang-bg"></i></li> |*| <li>|<i class="lang-bg"></i></li> |*| <li class="last">|</li>
		}

		ACT < .NO
		ACT {
			allWrap = <li class="active">|<i class="lang-bg"></i></li> |*| <li class="active">|<i class="lang-bg"></i></li> |*| <li class="last active">|</li>
		}

		USERDEF1 < .NO
		USERDEF = 1
		USERDEF1.doNotLinkIt = 1
	}
}
