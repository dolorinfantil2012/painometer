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