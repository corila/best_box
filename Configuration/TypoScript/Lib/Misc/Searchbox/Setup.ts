## Searchbox configuration
lib.misc.searchbox = COA
lib.misc.searchbox {
	stdWrap.prefixComment = 2|lib.misc.searchbox
	10 = TEXT
	10.typolink.parameter = {$const.page.search}
	10.typolink.returnLast = url
	10.wrap = <form action="|" method="post" class="navbar-form  navbar-right">

	20 = COA
	20 {
		10 = LOAD_REGISTER
		10.searchlabel.data = {$const.path.locallang}:search

		20 = TEXT
		20.data = GP:tx_indexedsearch|sword
		20.htmlSpecialChars = 1
		20.dataWrap = <input name="tx_indexedsearch[sword]"  id="search_field" type="search" placeholder="{register: searchlabel}" />
		30 = COA
		30 {
			10 = TEXT
			10.value = <input type="hidden" name="tx_indexedsearch[sections]" value="0" />

			20 = TEXT
			20.value = <input class="btn btn-primary" type="submit" id="search_button" name="btn_search" placeholder="Password" value="Search" /><label for="search_button" class="glyphicon glyphicon-search" />
		}
	}
	wrap = |</div></form></div>
}

[globalVar = TSFE:id = {$const.page.search}]
	lib.misc.searchbox.20 = COA_INT
	lib.misc.searchbox.20.20.data >
[end]