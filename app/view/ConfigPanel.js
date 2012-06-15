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