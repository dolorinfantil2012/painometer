/*
 * File: app/view/OrientationInfo.js
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

Ext.define('Painometer.view.OrientationInfo', {
    extend: 'Ext.Panel',
    alias: 'widget.OrientationInfo',

    config: {
        hidden: true,
        html: 'Giri la pantalla per veure l\'escala correctament.</p><p style="margin-bottom:0;text-align:right">Gràcies</p>',
        left: '0',
        style: 'margin: 0 auto;',
        styleHtmlContent: true,
        top: '15%',
        width: 300,
        modal: true,
        showAnimation: 'popIn',
        hideAnimation: 'fadeOut',
        items: [
        	{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Atenció'
            }
		]
    }
});


/*				height: 145,
                        html: 'Per utilitzar l\'escala CAS has de ficar la pantalla en posició horitzontal.',
                        id: 'OverlayCAS',
                        left: '30%',
                        showAnimation: 'popIn',
                        style: 'background-color: gray; border: 5px solid black; border-radius: 15px;',
                        top: '30%',
                        width: 170,
                        modal: true,
                        items: [
                            {
                                xtype: 'toolbar',
                                docked: 'top',
                                style: 'border-top-left-radius: 10px; border-top-right-radius: 10px;',
                                title: 'Atenció'
                            }
                        ]
                        */