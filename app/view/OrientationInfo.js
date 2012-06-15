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