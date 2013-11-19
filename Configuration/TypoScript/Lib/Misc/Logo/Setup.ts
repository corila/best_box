## Logo configuration
lib.misc.logo = IMAGE
lib.misc.logo {
	file = {$const.logo.file}
	file.height = {$const.logo.height}
	altText = {$const.logo.altText}
	imageLinkWrap = 1
	imageLinkWrap {
		enable = 1
		typolink.parameter = {$const.page.root}
		typolink.ATagParams = class = "navbar-brand"
	}
	titleText = {$const.logo.title}
}