/* RainLoop Webmail (c) RainLoop Team | Licensed under CC BY-NC-SA 3.0 */

(function (module, require) {

	'use strict';

	var
		_ = require('_'),
		AbstractSettings = require('./AbstractSettings.js')
	;

	/**
	 * @constructor
	 * @extends AbstractSettings
	 */
	function AdminSettingsScreen()
	{
		var
			AdminMenuViewModel = require('../ViewModels/AdminMenuViewModel.js'),
			AdminPaneViewModel = require('../ViewModels/AdminPaneViewModel.js')
		;

		AbstractSettings.call(this, [
			AdminMenuViewModel,
			AdminPaneViewModel
		]);
	}

	_.extend(AdminSettingsScreen.prototype, AbstractSettings.prototype);

	AdminSettingsScreen.prototype.onShow = function ()
	{
		var RL = require('../Boots/AdminApp.js');
		RL.setTitle('');
	};

	module.exports = AdminSettingsScreen;

}(module, require));