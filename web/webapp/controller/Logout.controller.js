sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageToast'
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("web.controller.Logout", {
		onLogout: function (evt) {
			MessageToast.show("Logout");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Login");
		}
	});
});