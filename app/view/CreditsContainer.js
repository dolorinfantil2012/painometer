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
            	html:'<center><u><b>Licència:</b></u><br></center>'
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