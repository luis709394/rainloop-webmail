/* RainLoop Webmail (c) RainLoop Team | Licensed under CC BY-NC-SA 3.0 */

(function (module, require) {

	'use strict';

	var
		kn = require('kn'),
		AbstractSystemDropDownViewModel = require('./AbstractSystemDropDownViewModel.js')
	;

	/**
	 * @constructor
	 * @extends AbstractSystemDropDownViewModel
	 */
	function SettingsSystemDropDownViewModel()
	{
		AbstractSystemDropDownViewModel.call(this);
		kn.constructorEnd(this);
	}

	kn.extendAsViewModel('SettingsSystemDropDownViewModel', SettingsSystemDropDownViewModel, AbstractSystemDropDownViewModel);

	module.exports = SettingsSystemDropDownViewModel;

}(module, require));