sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageToast'
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("web.controller.Login", {
		onLogin: function (evt) {
			MessageToast.show("Login");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Logout");
		}
	});
});