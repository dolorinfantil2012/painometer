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