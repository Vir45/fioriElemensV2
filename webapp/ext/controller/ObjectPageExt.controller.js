sap.ui.define(["sap/m/MessageToast"], function (MessageToast) {
  "use strict";

  return {
    onHeaderCustomActionPress: function (oEvent) {
      MessageToast.show("Custom handler invoked.");
    },

    onCustomSectionButtonPress: function (oEvent) {
      MessageToast.show("Custom handler invoked.");
    },

    onTableButtonPress: function (oEvent) {
      MessageToast.show("Custom handler invoked.");
    },
  };
});
