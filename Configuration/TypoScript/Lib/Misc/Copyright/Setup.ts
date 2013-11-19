## Copyright
lib.misc.copyright = TEXT
lib.misc.copyright {
	wrap = <p>|</p>
	data = {$const.locallang}:copyright_note
	
	## replace year to current and powered_by
	replacement {

		10 {
			search = ###FIX_YEAR###
			replace = {$const.copyright.fixyear}
		}

		20 {
			search = ###YEAR###
			replace.data = date:U
			replace.strftime = %Y
		}

		30 {
			search = ###POWERED_BY###
			replace.data = {$const.locallang}:powered_by
			replace.typolink.parameter.data = {$const.locallang}:powered_by_link
			replace.typolink.extTarget = _blank
		}
	}

	required = 1
}