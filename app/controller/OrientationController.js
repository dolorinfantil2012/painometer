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