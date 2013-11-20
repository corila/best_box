lib.nav.language = HMENU
lib.nav.language {

	special = language
	special.value = 0,1,2
	special.normalWhenNoLanguage = 0

	1 = TMENU
	1 {
		wrap = <ul id="lang-nav" class="nav navbar-nav navbar-right">|</ul>
		noBlur = 1

		NO = 1
		NO {
			stdWrap.cObject = TEXT
			stdWrap.cObject.value = {$const.language.label.english} || {$const.language.label.khmer} || {$const.language.label.german}
			allWrap = <li>|<i class="lang-bg"></i></li> |*| <li>|<i class="lang-bg"></i></li> |*| <li class="last">|</li>
		}

		ACT < .NO
		ACT {
			allWrap = <li class="active">|<i class="lang-bg"></i></li> |*| <li class="active">|<i class="lang-bg"></i></li> |*| <li class="last active">|</li>
		}

		USERDEF1 < .NO
		USERDEF = 1
		USERDEF1.doNotLinkIt = 1
		USERDEF1.allWrap = <li><span class="hidden"> | </span></li>
	}
}