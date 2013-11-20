## Default Configuration
config {
	## URL
	baseURL = {$const.url.live}
	absRefPrefix = /

	## Language settings
	sys_language_uid = 0
	language = en
	locale_all = en_US.UTF-8
	alternate_html_xhtml_language = en
	htmlTag_langKey = en
	sys_language_overlay = hideNonTranslated
	sys_language_mode = content_fallback
	sys_language_softMergeIfNotBlank = tt_content:image, tt_content:caption
	uniqueLinkVars = 1
	linkVars = L

	## CSS - JS Optimization
	removeDefaultJS = external
	compressCss = {$const.compressCss}
	compressJs = {$const.compressJs}
	concatenateCss = {$const.concatenateCss}
	concatenateJs = {$const.concatenateJs}
	inlineStyle2TempFile = 1
	moveJsFromHeaderToFooter = {$const.moveJsFromHeaderToFooter}

	## Doctype
	doctype = html5
	xhtml_cleaning = all
	xmlprologue = none
	doctypeSwitch = 1
	metaCharset = utf-8
	renderCharset = utf-8

	## Caching
	no_cache = 0
	sendCacheHeaders = 0
	cache_period = 604800
	cache_clearAtMidnight = 0

	## RealURL
	tx_realurl_enable = 1
	simulateStaticDocuments = 0

	## even it is enabled but the frontend indexing is still disabled, Use crawler configuration
	index_enable = 1
	index_externals = 1
	index_metatags = 1

	## Spam Protection
	spamProtectEmailAddresses = -7
	spamProtectEmailAddresses_atSubst = (at)

	## image settings
	disableImgBorderAttr = 1
	meaningfulTempFilePrefix = 100

	## Comment
	disablePrefixComment = 1
	headerComment = {$const.headerComment}
}

## Condition to change config.baseURL
[globalVar = IENV:TYPO3_REQUEST_HOST = {$const.url.local}]
	config.baseURL = {$const.url.local}/
[globalVar = IENV:TYPO3_REQUEST_HOST = {$const.url.dev}]
	config.baseURL = {$const.url.dev}/
[globalVar = IENV:TYPO3_REQUEST_HOST = {$const.url.latest}]
	config.baseURL = {$const.url.latest}/
[end]

## Condition to change language settings for khmer
[globalVar = GP:L = 1]
	config {
		sys_language_uid = 1
		language = km
		locale_all = km_KH.UTF-8
		alternate_html_xhtml_language = km
		htmlTag_langKey = km
	}
[end]