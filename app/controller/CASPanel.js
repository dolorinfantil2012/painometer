/*
 * File: app/controller/CASPanel.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Designer does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Painometer.controller.CASPanel', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Config'
        ],
        views: [
            'CASPanel'
        ],
        refs: {
            CASSlider: '#CASSlider'
        },

        control: {
            "CASPanel": {
                activate: 'onCASPanelActivate'
            },
            "CASSlider": {
                change: 'onCASSliderChange'
            }
        }
    },

    onCASPanelActivate: function(container, newActiveItem, oldActiveItem, options) {
        var configController = this.getApplication().getController("Painometer.controller.ConfigController");
        var value = configController.getValue();
        var slider = this.getCASSlider();

        slider.setValue(value);
    },

    onCASSliderChange: function(slider, thumb, newValue, oldValue, options) {
        var configController = this.getApplication().getController("Painometer.controller.ConfigController");
        configController.setValue(newValue);
    }

});