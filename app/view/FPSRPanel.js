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