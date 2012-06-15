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