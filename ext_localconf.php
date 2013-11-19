<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

# Include static TypoScript files from extensions using a hook.
# @see http://blog.causal.ch/2012/05/automatically-including-static-ts-from.html
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tstemplate.php']['includeStaticTypoScriptSources'][] =
'EXT:' . $_EXTKEY . '/Classes/Hooks/TypoScriptTemplateBox.php:TYPO3\CMS\BestBox\Hooks\TypoScriptTemplateBox->preprocessIncludeStaticTypoScriptSources';


\TYPO3\CMS\Mybox1\Hooks\TypoScriptTemplateBox::getInstance()->addStaticTemplates(array(
		'EXT:css_styled_content/static',
		'EXT:seo_basics/static',
		'EXT:news/Configuration/TypoScript',
		'EXT:form/Configuration/TypoScript',
		'EXT:fluidpages/Configuration/TypoScript',
		'EXT:fluidcontent/Configuration/TypoScript',
		'EXT:fluidcontent_bootstrap/Configuration/TypoScript',
		'EXT:best_box/Configuration/TypoScript', // keep loading last
));

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'BESTBOX.' . $_EXTKEY,
	'Bestbox',
	array(
		'Base' => 'list',
		
	),
	// non-cacheable actions
	array(
		'Base' => '',
		
	)
);


?>