/*
GPL 2011 algos Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain
*/
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe és el model d'emmagatzematge de les dades de configuració.</p>
 * 
 */

Ext.define('Painometer.model.Config', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'scale',
                type: 'int',
                defaultValue: 0
            },
            {
                name: 'language',
                type: 'int',
                defaultValue: 0
            },
            {
                name: 'value',
                type: 'int',
                defaultValue: 0
            },
            {
            	name: 'reset',
            	type: 'boolean',
            	defaultValue: false
            },
            {
            	name: 'viewIndex',  // the index of the view in the mainContainer
            	type: 'int',
            	defaultValue: 0	
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'painometerProxy'
        }
    }
});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe és el model d'emmagatzematge dels tipus d'escala de l'aplicació.</p>
 * 
 */

Ext.define('Painometer.model.ScaleType', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                allowNull: false,
                name: 'idScale',
                type: 'int'
            },
            {
                name: 'label',
                type: 'string'
            },
            {
                name: 'ratio',
                type: 'float'
            }
        ]
    }
});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe és el model d'emmagatzematge del llenguatge de configuració.</p>
 * 
 */

Ext.define('Painometer.model.LanguageType', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                allowNull: false,
                name: 'idLang',
                type: 'int'
            },
            {
                name: 'label',
                type: 'string'
            }
        ]
    }
});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe mostrà la pantalla de configuració amb totes les seves opcions.</p>
 * 
 */

Ext.define('Painometer.view.ConfigPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.configpanel',

    config: {
        id: 'configPanel',
        layout: {
            align: 'center',
            type: 'vbox'
        },
        scrollable: {
            direction: 'vertical'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Painometer',
                items: [
                    {
                        xtype: 'button',
                        id: 'okConfig',
                        ui: 'confirm',
                        text: 'OK'
                    },
                    {
                        xtype: 'button',
                        id: 'creditsbtn',
                        ui: 'forward',
                        iconAlign: 'right',
                        text: 'Crèdits',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'container',
                data: {
                    value: 10
                },
                height: 210,
                id: 'ValueCont',
                style: 'text-align: center; font-size: 135px; margin: 15px; border: 15px; border-style: groove; padding: 0px; padding-top: 5px;',
                tpl: ['{value}'],
                width: 260
            },
            {
                xtype: 'fieldset',
                width: '100%',
                items: [
                    {
                        xtype: 'selectfield',
                        id: 'scaleField',
                        label: 'Escala',
                        //labelAlign: 'bottom',
                        labelWidth: 150,
                        name: 'scale',
                        displayField: 'label',
                        store: 'scaleTypesStoreId',
                        valueField: 'idScale'
                    },
                    {
                        xtype: 'togglefield',
                        id: 'resetField',
                        label: 'Reset',
                        name: 'reset',
                        labelWidth: 150
                    },
                    {
                        xtype: 'selectfield',
                        height: '',
                        hidden: true,
                        width: '',
                        label: 'Idioma',
                        labelAlign: 'bottom',
                        labelWidth: '40%',
                        name: 'language',
                        displayField: 'label',
                        store: 'languageStoreId',
                        valueField: 'idLang\n'
                    }
                ]
            }
        ]
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe crea un botó per ser usat en diferents pantalles.</p>
 * 
 */

Ext.define('Painometer.view.InfoContainer', {
    extend: 'Ext.Container',
    alias: 'widget.InfoContainer',

    config: {
        bottom: '0px',
        docked: 'right',
        height: '35px',
        id: 'infoContainerID',
        right: '0px',
        style: '',
        width: '35px',
        zIndex : 4,
        items: [
            {
                xtype: 'button',
                height: '30px',
                id: 'infoBtn',
                style: 'border:0;',
                ui: 'info_btn-small',
                width: '30px',
                iconCls: 'info',
                iconMask: true
            }
        ]
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe mostrà la pantalla de crèdits de l'aplicació.</p>
 * 
 */

Ext.define('Painometer.view.CreditsContainer', {
    extend: 'Ext.Container',
    alias: 'widget.creditscontainer',

    config: {
        id: 'CreditsContainer',
        style: 'background-color:white;',
        layout: 'vbox',
        scrollable: {
            direction: 'vertical'
        },
        items: [
            {
                xtype: 'titlebar',
                dock : 'top',
                title: 'Crèdits',
                items: [
                    {
                        xtype: 'button',
                        id: 'config',
                        ui: 'back',
                        text: 'Painometer'
                    }
                ]
            },
            {
            	html: '<center><u><b>Director</b></u><br>Dr. Jordi Miró<br><br><u><b>Investigadoras</b></u><br>Rocío de la Vega<br>Elena Castarlenas<br>Elisabet Sánchez-Rodríguez<br><br><u><b>Desenvolupadors</b></u><br>Roman Roset<br>Gerard Gutiérrez<br>Pere Llorens<br><br></center>',
                style: 'padding-top: 5px;text-shadow: 3px 3px 5px #999999;'
            },
            {
            	xtype: 'image',
                height: 90,
                style: 'background-position: 50% 0%; ',
                src: 'resources/images/algos/logo_algos.png'
            },
            {
            	html:'<center><u><b>Llicència:</b></u><br></center>'
            	+ '<p style="font-size:12px; padding: 10px">Està completament prohibida la comercialització del programa. Per a qualsevol ús '
            	+ 's´ha de consultar a <a href="mailto:jordi.miro@urv.cat">jordi.miro@urv.cat</a>.'
            	+ '<br>'
            	+ 'Aquesta aplicació es distribueix sota <a href="http://www.gnu.org/copyleft/gpl.html">llicència GPL</a>.'
                + 'Esta aplicación se distribuye bajo <a href="http://www.gnu.org/copyleft/gpl.html">licencia GPL</a>.'
                + '<br>'
                + 'This program is free software: you can redistribute it and/or modify'
                + 'it under the terms of the GNU General Public License as published by'
                + 'the Free Software Foundation, either version 3 of the License, or' 
                + '(at your option) any later version.'
				+ '<br>'
    			+ 'This program is distributed in the hope that it will be useful,'
    			+ 'but WITHOUT ANY WARRANTY; without even the implied warranty of'
    			+ 'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the'
    			+ 'GNU General Public License for more details.'
				+ '<br>'
    			+ '<a href="http://www.gnu.org/copyleft/gpl.html">GPL license</a>.'
            }
        ]
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe mostra la pantalla de l'escala del dolor VAS.</p>
 * 
 */

Ext.define('Painometer.view.VASPanel', {
    extend: 'Ext.Container',
    alias: 'widget.VASPanel',
    requires: [
        'Painometer.view.InfoContainer'
    ],
	zIndex : 0,
    config: {
        id: 'VASPanel',
        style: 'background-color:white;',
        layout: {
            type: 'fit'
        },
        zIndex : 0,
        items: [
            {
                xtype: 'container',
                id: 'VASSliderCont',
                style: 'background-color:white;',
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'sliderfield',
                        centered: true,
                        cls: 'sencha-vas-slider',
                        id: 'VASSlider'
                    }
                ]
            },
            {
                xtype: 'InfoContainer',
                id: 'VASInfoCont'
            }
        ]
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe conté les pantalles de configuració i de crèdits.</p>
 * 
 */

Ext.define('Painometer.view.ConfigCard', {
    extend: 'Ext.Container',
    alias: 'widget.configCard',
    requires: [
        'Painometer.view.ConfigPanel',
        'Painometer.view.CreditsContainer'
    ],

    config: {
    	id: "configCard",
        layout: {
            animation: 'slide',
            type: 'card'
        },
        items: [
            {
                xtype: 'configpanel',
                id: 'configPanel'
            },
            {
                xtype: 'creditscontainer',
                id: 'Creditscontainer'
            }
        ]
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe crea un finestra amb un missatge d'alerta que serà mostrat quan correspongui.</p>
 * 
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
 /*
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe s'encarrega de controlar els events i accions que succeeixen a la pantalla 
 * de configuració, com mostrar el valor del dolor i elegir el tipus d'escala a utilitzar.</p>
 * 
 */

Ext.define('Painometer.controller.ConfigController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [ 'Config'],
        views : ['ConfigPanel'],
        refs  : {
            okConfig      : '#okConfig',
            valueCont     : '#ValueCont',
            mainContainer : '#MainContainer',
            infoBtn       : '#infoBtn',
            creditsbtn    : '#creditsbtn',
            view          : '#configPanel',
            field         : "#configPanel field",
            configCard    : "#ConfigCard"
        },
        control: {
            creditsbtn : { tap: 'creditsbtnTap' },
           	infoBtn    : { tap: 'oninfoButtonTap'},
           	okConfig   : { tap: 'onOKTap'},
            // form
            field      : { change : 'onChange'},
        } ,
        // user variables
        scaleTypes     : null  // instance to the scale stores
    }, 
    
    init: function() {
    	var store = Ext.data.StoreManager.lookup('scaleTypesStoreId');
        this.setScaleTypes(store);
    },

	// function that listen the ok tap to go back to show the scale
    onOKTap: function() {
        if (this.getApplication().isReset()) {
            this.getApplication().setValue(0);
        };
        this.getApplication().setViewIndex(this.getApplication().getScale());
      	this.getApplication().showView();
    },
 
    oninfoButtonTap: function(button, e, options) {
    	var data     = this.getApplication().getPainometerData();
    	var newValue = data.get('value');
        var record   = this.getScaleTypes().findRecord("idScale", this.getApplication().getScale());
        var factor   = record.get('ratio');
    	var view     = this.getView();
    	
    	view.setRecord(data);
        this.getValueCont().setData({'value' : newValue * factor});
        
        this.getApplication().setViewIndex(4);
        this.getMainContainer().setActiveItem(4);
    },

    creditsbtnTap: function(button, e, options) {
        var card   = this.getConfigCard();
        var layout = card.getLayout();
        var inn = layout.getAnimation().getInAnimation();
        var out = layout.getAnimation().getOutAnimation();

        inn.setDirection("left");
        out.setDirection("left");
        card.setActiveItem(1);
    },

    
    /*********************************************************/
    /* listeners of the form                                 */
    /*********************************************************/
  
    onChange: function(field, newValue, oldValue) {
    	var oldScale = this.getApplication().getScale();
    	
    	if (field.getName() === "scale") {
    		var newScale = field.getRecord().get("idScale");
    		if (newScale != oldScale) {
 	   			this.getApplication().setScale(newScale);
 	   			this.getApplication().setValue(0);
 	   		}
    	} else if (field.getName() === "reset") {
    		this.getApplication().setReset(oldValue);
    	}
    }
    
});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe s'encarrega de controlar els events i accions que succeeixen a la pantalla 
 * de l'escala FPSR, com mostrar i capturar el valor del dolor.</p>
 * 
 */

Ext.define('Painometer.controller.FPSRPanel', {
    extend: 'Ext.app.Controller',

    config: {
        models: ['Config'],
        views: ['FPSRPanel'],
        refs: {
            faceContainer : '#FPSCarousel image',
            fpsNav        : '#FPSNavContainer',
            FPSCarousel   : '#FPSCarousel'
        },
        control: {
            "faceContainer": { activate: 'faceActivate'},
            "fpsrpanel"    : {activate: 'onFPSRPanelActivate'}
        },
    },
    
    faceActivate: function(container, newActiveItem, oldActiveItem, options) {
        if (!Ext.isEmpty(container)) {
            var newIndex = container.config.value / 20;
            var newFace    = this.getFpsNav().items.getAt(newIndex);

            newFace.addCls("face-selected");
        }

        if (!Ext.isEmpty(oldActiveItem)) {
            var oldIndex = oldActiveItem.config.value / 20;
            var oldFace = this.getFpsNav().items.getAt(oldIndex);
            
            oldFace.removeCls("face-selected");
            this.getApplication().setValue(container.config.value);
        }
    },

    onFPSRPanelActivate: function(container, newActiveItem, oldActiveItem, options) {
    	var value = this.getApplication().getValue(),
    		pan   = this.getFPSCarousel(),
    		index = Math.floor(value / 20);
       
       	pan.setActiveItem(index);
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe s'encarrega de controlar els events i accions que succeeixen a la pantalla 
 * de l'escala NRS11, com mostrar i capturar el valor del dolor.</p>
 * 
 */

Ext.define('Painometer.controller.NRS11Panel', {
    extend: 'Ext.app.Controller',

    config: {
        views: ['NRS11Panel'],
        refs: {
            numContainer: '#NRSCarousel container',
            nrsNav: '#NRSNavContainer',
            NRS11Panel: '#Nrs11Panel',
            NRSCarousel: '#NRSCarousel'
        },
        control: {
            "numContainer" : { activate: 'numActivate' },
            "NRS11Panel"   : { activate: 'onNRS11PanelActivate'}
        }
    },
    
    numActivate: function(container, newActiveItem, oldActiveItem, options) {
    	if (!Ext.isEmpty(container)) {
            var newIndex = container.config.value / 10;
            var newFace    = this.getNrsNav().items.getAt(newIndex);

            newFace.addCls("face-selected");
        }

        if (!Ext.isEmpty(oldActiveItem)) {
            var oldIndex = oldActiveItem.config.value / 10;
            var oldFace = this.getNrsNav().items.getAt(oldIndex);

            oldFace.removeCls("face-selected");
            this.getApplication().setValue(container.config.value);
        }
    },

    onNRS11PanelActivate: function(container, newActiveItem, oldActiveItem, options) {
        var value = this.getApplication().getValue();
        var pan = this.getNRSCarousel();
        var index = Math.floor(value / 10);

        pan.setActiveItem(index);
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe s'encarrega de controlar les accions que succeeixen a la pantalla 
 * de crèdits de l'aplicació, com desplaçar-se a la pantalla de configuració.</p>
 * 
 */

Ext.define('Painometer.controller.CreditsContainer', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            config: '#config',
            configCard: '#ConfigCard'
        },

        control: {
            "config": {
                tap: 'configTap'
            }
        }
    },

    configTap: function(button, e, options) {
        var me = this;
        var card = me.getConfigCard();
        var layout = card.getLayout();
        var inn = layout.getAnimation().getInAnimation();
        var out = layout.getAnimation().getOutAnimation();

        inn.setDirection("right");
        out.setDirection("right");
        card.setActiveItem(0);
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe s'encarrega de controlar els events i accions que succeeixen a la pantalla 
 * de l'escala CAS, com mostrar i capturar el valor del dolor.</p>
 * 
 */

Ext.define('Painometer.controller.CASPanelController', {
    extend: 'Ext.app.Controller',

    config: {
        models: ['Config'],
        views : ['CASPanel'],
        refs  : {
            CASSlider: '#CASSlider',
            OverlayCAS: '#OverlayCAS'
        },
        control: {
            "CASPanel" : { activate: 'onCASPanelActivate'},
            "CASSlider": { change: 'onCASSliderChange'}
        },
    },
    
    onCASPanelActivate: function(container, newActiveItem, oldActiveItem, options) {
        this.getCASSlider().setValue(this.getApplication().getValue());
    },

    onCASSliderChange: function(slider, thumb, newValue, oldValue, options) {
        this.getApplication().setValue(newValue);
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe s'encarrega de controlar els events i accions que succeeixen a la pantalla 
 * de l'escala VAS, com mostrar i capturar el valor del dolor.</p>
 * 
 */

Ext.define('Painometer.controller.VASPanel', {
    extend: 'Ext.app.Controller',

    config: {
        models: ['Config'],
        views: ['VASPanel'],
        refs: {
            VASSlider: '#VASSlider',
            OverlayVAS: '#OverlayVAS'
        },

        control: {
        	"VASSlider": {change: 'onVASSliderChange'},
            "VASPanel" : {activate: 'onVASPanelActivate'}
        }
    },
    
    onVASSliderChange: function(slider, thumb, newValue, oldValue, options) {
        this.getApplication().setValue(newValue);
    },

    onVASPanelActivate: function(container, newActiveItem, oldActiveItem, options) {
        var value  = this.getApplication().getValue();
        var slider = this.getVASSlider();
        slider.setValue(value);
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe s'encarrega de controlar els events i accions que succeeixen a les pantalles
 * de escales, captura la posició de la pantalla per mostrar missatges d'alerta si s'escau.</p>
 * 
 */

Ext.define('Painometer.controller.OrientationController', {
    extend: 'Ext.app.Controller',

    config: {
        orientation      : true,
        refs: {
            MainContainer : '#MainContainer'
        },  
        control: {
            "fpsrpanel"   : {activate: 'onLandscapShowActivate'},
            "CASPanel"    : {activate: 'onPortraitShowActivate'},
            "VASPanel"    : {activate: 'onPortraitShowActivate'},
        },
    },

    init: function() {
        this.orientationWarning = Ext.Viewport.add({
            xtype: 'OrientationInfo'
        });

        Ext.Viewport.on({
            scope: this,
            orientationchange: function(viewport, newOrientation) {
            	var view  = this.getApplication().getViewIndex();
               	if (view == 4)
               		return;
               		
               	var scale = this.getApplication().getScale();
               	if (newOrientation == "portrait") {
               		if (scale == 0) {
               			this.hideOrientationInfo();	
               		} else if (scale == 2 || scale == 3) {
               			this.showOrientationInfo();
               		}
                } else {
                	this.setOrientation(true);
                	if (scale == 0) {
                		this.showOrientationInfo();
                	} else if (scale == 2 || scale == 3) {
                		this.hideOrientationInfo();
                	}
                }
            }
        });
    },
    
    onLandscapShowActivate: function(container, newActiveItem, oldActiveItem, options) {
    	if (this.isLandscape()) {
            this.showOrientationInfo(); 
        } else {
        	this.hideOrientationInfo();        	
        }
    },
    
    onPortraitShowActivate: function(container, newActiveItem, oldActiveItem, options) {
        if (this.isLandscape()) {
            this.hideOrientationInfo(); 
        } else {
        	this.showOrientationInfo();        	
        }
    },
    
    showOrientationInfo: function() {
    	var screenWidth = Ext.Viewport.getSize().width;
    	var left        = (screenWidth - this.orientationWarning.getWidth()) / 2;
    	
    	this.orientationWarning.setLeft(left);
    	this.orientationWarning.show();
    },
    
	hideOrientationInfo: function() {
    	this.orientationWarning.hide();
    },

    isLandscape: function() {
        return Ext.Viewport.getOrientation() == "landscape"

    },

    isPortrait: function() {
        return Ext.Viewport.getOrientation() == "portrait"
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe és el store d'emmagatzematge dels tipus d'escala que té l'aplicació.</p>
 * 
 */

Ext.define('Painometer.store.ScaleTypes', {
    extend: 'Ext.data.Store',
    requires: [
        'Painometer.model.ScaleType'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                idScale: 0,
                label: 'FPS-R',
                ratio: 0.1
            },
            {
                idScale: 1,
                label: 'NRS-11',
                ratio: 0.1
            },
            {
                idScale: 2,
                label: 'CAS',
                ratio: 1
            },
            {
                idScale: 3,
                label: 'VAS',
                ratio: 1
            }
        ],
        model: 'Painometer.model.ScaleType',
        storeId: 'scaleTypesStoreId'
    }
});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe és el store d'emmagatzematge dels llenguatges que té l'aplicació.</p>
 * 
 */

Ext.define('Painometer.store.LanguageTypes', {
    extend: 'Ext.data.Store',
    requires: [
        'Painometer.model.LanguageType'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                idLang: 0,
                label: 'Català'
            },
            {
                idLang: 1,
                label: 'Español'
            }
        ],
        model: 'Painometer.model.LanguageType',
        storeId: 'languageStoreId'
    }
});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe mostra la pantalla de l'escala del dolor NRS11.</p>
 * 
 */

Ext.define('Painometer.view.NRS11Panel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.nrs11panel',
    requires: [
        'Painometer.view.InfoContainer'
    ],

    config: {
        html: '',
        id: 'NRS11Panel',
        style: 'background-color:white;',
        layout: {
            type: 'fit'
        },
        scrollable: false,
        items: [
            {
                xtype: 'container',
                docked: 'top',
                id: 'NRSNavContainer',
                style: 'padding-bottom: 5px;',
                defaults: {
                    width: 29,
                    height: 25,
                    style: 'padding-bottom: 4px; margin-top: 15px; text-align: center; background-position: center center; '
                },
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        html: 0,
                        id: 'smallNRS0'
                    },
                    {
                        xtype: 'container',
                        html: 1,
                        id: 'smallNRS1'
                    },
                    {
                        xtype: 'container',
                        html: 2,
                        id: 'smallNRS2'
                    },
                    {
                        xtype: 'container',
                        html: 3,
                        id: 'smallNRS3'
                    },
                    {
                        xtype: 'container',
                        html: 4,
                        id: 'smallNRS4'
                    },
                    {
                        xtype: 'container',
                        html: 5,
                        id: 'smallNRS5'
                    },
                    {
                        xtype: 'container',
                        html: 6,
                        id: 'smallNRS6'
                    },
                    {
                        xtype: 'container',
                        html: 7,
                        id: 'smallNRS7'
                    },
                    {
                        xtype: 'container',
                        html: 8,
                        id: 'smallNRS8'
                    },
                    {
                        xtype: 'container',
                        html: 9,
                        id: 'smallNRS9'
                    },
                    {
                        xtype: 'container',
                        html: 10,
                        id: 'smallNRS10'
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'InfoCaroCont2',
                style: 'background-color:white;',
                ui: '',
                defaults: {
                    style: 'background-color:white',
                    
                },
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'carousel',
                        id: 'NRSCarousel',
                        style: 'background-color:white;',
                        defaults: {
                            style: 'width: 100%;height: 200px; position: absolute; top: 50%; margin-top: -140px; font-size: 240px; text-align: center; text-shadow:3px 3px 6px #707070;'
                        },
                        items: [
                            {
                                xtype: 'container',
                                html: 0,
                                id: 'NRS0',
                                value: 0
                            },
                            {
                                xtype: 'container',
                                html: 1,
                                id: 'NRS1',
                                value: 10
                            },
                            {
                                xtype: 'container',
                                html: 2,
                                id: 'NRS2',
                                value: 20
                            },
                            {
                                xtype: 'container',
                                html: 3,
                                id: 'NRS3',
                                value: 30
                            },
                            {
                                xtype: 'container',
                                html: 4,
                                id: 'NRS4',
                                value: 40
                            },
                            {
                                xtype: 'container',
                                html: 5,
                                id: 'NRS5',
                                value: 50
                            },
                            {
                                xtype: 'container',
                                html: 6,
                                id: 'NRS6',
                                value: 60
                            },
                            {
                                xtype: 'container',
                                html: 7,
                                id: 'NRS7',
                                value: 70
                            },
                            {
                                xtype: 'container',
                                html: 8,
                                id: 'NRS8',
                                value: 80
                            },
                            {
                                xtype: 'container',
                                html: 9,
                                id: 'NRS9',
                                value: 90
                            },
                            {
                                xtype: 'container',
                                html: 10,
                                id: 'NRS10',
                                style: 'width: 100%; height: 200px; position: absolute; top: 50%; margin-top: -135px; text-shadow: 10px 10px 7px lightgrey; padding-left: 50px; font-size: 220px; padding-top: 10px;',
                                value: 100
                            }
                        ]
                    },
                    {
                        xtype: 'InfoContainer',
                        id: 'NRSInfoCont'
                    }
                ]
            }
        ]
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe mostra la pantalla de l'escala del dolor CAS.</p>
 * 
 */

Ext.define('Painometer.view.CASPanel', {
    extend: 'Ext.Container',
    alias: 'widget.CASPanel',
    requires: [
        'Painometer.view.InfoContainer'
    ],

    config: {
        id: 'CASPanel',
        style: 'background-color:white;',
        layout: {
            type: 'fit'
        },
        zIndex : 0,
        items: [
            {
                xtype: 'container',
                id: 'CASSliderCont',
                style: 'background-color:white;',
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'sliderfield',
                        centered: true,
                        cls: 'sencha-cas-slider',
                        id: 'CASSlider'
                    }
                ]
            },
            {
                xtype: 'InfoContainer',
                id: 'CASInfoCont'
            }
        ]
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe mostra la pantalla de l'escala del dolor FPSR.</p>
 * 
 */

Ext.define('Painometer.view.FPSRPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.fpsrpanel',
    requires: [
        'Painometer.view.InfoContainer'
    ],

    config: {
        id: 'FPSRPanel',
        style: 'background-color:white;',
        zIndex : 0,
        layout: {
            type: 'fit'
        },
        scrollable: false,
        items: [
            {
                xtype: 'container',
                docked: 'top',
                id: 'FPSNavContainer',
                padding: 10,
                defaults: {
                    width: 50,
                    height: 68,
                    style: 'background-position: center center; background-size: 52px;'
                },
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'image',
                        id: 'smallFace1',
                        src: 'resources/images/fpsr/cara1.png'
                    },
                    {
                        xtype: 'image',
                        id: 'smallFace2',
                        src: 'resources/images/fpsr/cara2.png'
                    },
                    {
                        xtype: 'image',
                        id: 'smallFace3',
                        src: 'resources/images/fpsr/cara3.png'
                    },
                    {
                        xtype: 'image',
                        id: 'smallFace4',
                        src: 'resources/images/fpsr/cara4.png'
                    },
                    {
                        xtype: 'image',
                        id: 'smallFace5',
                        src: 'resources/images/fpsr/cara5.png'
                    },
                    {
                        xtype: 'image',
                        id: 'smallFace6',
                        src: 'resources/images/fpsr/cara6.png'
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'InfoCaroCont',
                defaults: {
                    style: 'background-color:white',
                    
                },
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'carousel',
                        id: 'FPSCarousel',
                        defaults: {
                            style: 'background-position: 50% 1%; background-size: 270px;'
                        },
                        items: [
                            {
                                xtype: 'image',
                                id: 'face_1',
                                src: 'resources/images/fpsr/cara1.png',
                                value: 0
                            },
                            {
                                xtype: 'image',
                                id: 'face_2',
                                src: 'resources/images/fpsr/cara2.png',
                                value: 20
                            },
                            {
                                xtype: 'image',
                                id: 'face_3',
                                src: 'resources/images/fpsr/cara3.png',
                                value: 40
                            },
                            {
                                xtype: 'image',
                                id: 'face_4',
                                src: 'resources/images/fpsr/cara4.png',
                                value: 60
                            },
                            {
                                xtype: 'image',
                                id: 'face_5',
                                src: 'resources/images/fpsr/cara5.png',
                                value: 80
                            },
                            {
                                xtype: 'image',
                                id: 'face_6',
                                src: 'resources/images/fpsr/cara6.png',
                                value: 100
                            }
                        ]
                    },
                    {
                        xtype: 'InfoContainer',
                        id: 'FPSInfoCont'
                    }
                ]
            }
        ]
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe s'encarrega de crear el view principal que contindrà la resta de pantalles
 * que conformen aquesta aplicació.</p>
 * 
 */

Ext.define('Painometer.view.MainContainer', {
    extend: 'Ext.Container',
    requires: [
        'Painometer.view.FPSRPanel',
        'Painometer.view.NRS11Panel',
        'Painometer.view.CASPanel',
        'Painometer.view.VASPanel',
        'Painometer.view.ConfigCard'
    ],

    config: {
        id: 'MainContainer',
        style: 'background-color:white;',
        ui: '',
        layout: {
            animation: 'cube',
            type: 'card'
        },
        defaults: {
            style: 'background-color:white;',
            
        },
        items: [
            {
                xtype: 'fpsrpanel',
                id: 'FpsrPanel'
            },
            {
                xtype: 'nrs11panel',
                id: 'Nrs11Panel'
            },
            {
                xtype: 'CASPanel',
                id: 'casPanelIt'
            },
            {
                xtype: 'VASPanel',
                id: 'VasPanelIt'
            },
            {
                xtype: 'configCard',
                id: 'ConfigCard'
            }
        ]
    }

});
/*
 *
 * <Painometer. L'objectiu d'aquest programa és que l'usuari pugui fer un
   seguiment del seu dolor mitjançant diferents tipus d'escales.>
   Copyright (C) <2012> 
   <Unitat per a l'Estudi i Tractament del Dolor - ALGOS. Research on Pain>

   Aquest programa és programari lliure: podeu redistribuir-lo i/o modificar-lo 
   sota els termes de la Llicència Pública General de GNU publicada per 
   la Free Software Foundation, ja sigui la versió 3 de la Llicència, o 
   (a la seva elecció) qualsevol versió posterior.

   Aquest programa es distribueïx amb l'esperança que sigui útil, 
   però SENSE CAP GARANTIA; ni tan sols la garantia implícita 
   MERCANTIL o d'APTITUD PER A UN OBJECTIU PARTICULAR. 
   Consulteu els detalls de la Llicència Pública General de GNU 
   per a més informació.

   Haurieu de rebre una còpia de la Llicència Pública General de GNU junt 
   amb aquest programa. En cas contrari, consulteu <http://www.gnu.org/licenses/>.
   
 * Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència farà falta reconèixer l'autoria.
 * Reconeixement - NoComercial (by-nc): Es permet la generació d'obres derivades sempre que no se'n faci un ús comercial. 
 * Tampoc es pot utilizar l'obra original amb finalitats comercials.

 * @developer <href a="mailto:roman.roset@urv.cat"> Roman Roset </href>
 * @developer <href a="mailto:pere.llorensv@gmail.com"> Pere Llorens-Vernet </href>
 * @developer <href a="mailto:guti.gerard@gmail.com"> Gerard Gutiérrez-Vidal </href>
 * <p>Aquesta classe crea un finestra amb un missatge d'alerta que serà mostrat quan correspongui.</p>
 * 
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

