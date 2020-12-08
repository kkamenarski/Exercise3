/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"home/kpmg/Exercise3/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});