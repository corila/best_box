page = PAGE
page.typeNum = 0
page {
	## 5 is reserved for fluidpages extension
	5 = USER
	5 {
		userFunc = tx_extbase_core_bootstrap->run
		extensionName = Fluidpages
		pluginName = Page
		10 >
	}
}

## Meta data configuration
page.meta {
	description.data = levelfield :-1, description, slide // levelfield :-1, subtitle, slide // leveltitle :-1, slide
	keywords.data = levelfield :-1, keywords, slide // levelfield :-1, subtitle, slide // leveltitle :-1, slide
	description.ifEmpty = {$const.meta.description}
	keywords.ifEmpty = {$const.meta.keywords}
	last-modified.data = page : SYS_LASTCHANGED
	last-modified.date = Y-m-dT H:i:s P

	## add some static fields
	#robots = index, follow
	#robots.stdWrap.override.stdWrap.if.isTrue.field = no_search
	#robots.stdWrap.override = noindex, follow

	## Portable view
	viewport = width=device-width, initial-scale=1.0
	viewport.override.field = viewport

	X-UA-Compatible = IE=edge
	X-UA-Compatible.httpEquivalent = 1
}

## Including Default Configuration
<INCLUDE_TYPOSCRIPT: source="FILE: EXT:best_box/Configuration/TypoScript/Config/Setup.ts">

## Including CSS / JS
<INCLUDE_TYPOSCRIPT: source="FILE: EXT:best_box/Configuration/TypoScript/Page/CssJs/Setup.ts">