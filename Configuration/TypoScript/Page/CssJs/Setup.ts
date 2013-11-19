page {
	includeCSS {
		bootstrap = {$const.path.css}Bootstrap/{$const.version.twitter_bootstrap}/bootstrap.min.css
		bootstrap {
			external = 0
			disableCompression = 1
			excludeFromConcatenation = 1
			media = screen
		}
		glyphicons = {$const.path.css}Bootstrap/{$const.version.twitter_bootstrap}/bootstrap-glyphicons.css
		glyphicons {
			media = screen
			disableCompression = 1
		}
	}

	includeJSFooterlibs {
		jQueryCore = {$const.path.script}JQuery/{$const.version.jQuery}/jquery.min.js
		jQueryCore {
			forceOnTop = 1
			external = 0
			disableCompression = 1
			excludeFromConcatenation = 1
		}
		bootstrap = {$const.path.script}Bootstrap/{$const.version.twitter_bootstrap}/bootstrap.min.js
		bootstrap {
			external = 0
			disableCompression = 1
			excludeFromConcatenation = 1
		}
	}
}