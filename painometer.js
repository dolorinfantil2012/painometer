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
 * <p>Aquesta classe s'encarrega de cridar a totes les classes que s'encarreguen del funcionament d'quest programa.</p>
 * 
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'Config',
        'ScaleType',
        'LanguageType'
    ],

    stores: [
        'ScaleTypes',
        'LanguageTypes'
    ],

    views: [
        'MainContainer',
        'NRS11Panel',
        'CASPanel',
        'ConfigPanel',
        'FPSRPanel',
        'InfoContainer',
        'CreditsContainer',
        'VASPanel',
        'ConfigCard',
        'OrientationInfo'
    ],

    glossOnIcon: true,

    name: 'Painometer',

    controllers: [
        'ConfigController',
        'FPSRPanel',
        'NRS11Panel',
        'CreditsContainer',
        'CASPanelController',
        'VASPanel',
        'OrientationController'
    ],

	// data mars of the application
	painometerData : null, // instance of the current state
	
	getPainometerData: function() {
		if (this.painometerData === null) {
			this.painometerData = Ext.create('Painometer.model.Config', {id : 1});
		}
		return this.painometerData;
	},
	
    launch: function() {
    	this.loadData();
    },
    
    
    /* the data */
    loadData: function() {
    	var configModel = Ext.ModelMgr.getModel('Painometer.model.Config');
        configModel.load(1, {
            scope: this,
            failure: function(record) {
                this.getPainometerData().save();
            }, 
            success: function (record) {
            	this.painometerData = record;
            },
            callback: function() {
            	var configController = this.getController("ConfigController");
            	Ext.create('Painometer.view.MainContainer', {fullscreen: true});
        		this.showView();
            }
        });
    },
    
    getValue: function() {
        return this.getPainometerData().get('value');
    },

    setValue: function(newValue) {
        this.getPainometerData().set('value', newValue);
        this.getPainometerData().save();
    },
    
    getValue: function() {
        return this.getApplication().getPainometerData().get('value');
    },
    
    setScale: function(newScale) {
        this.getPainometerData().set('scale', newScale);
        this.getPainometerData().save();
    },
    
    getScale: function() {
        return this.getApplication().getPainometerData().get('scale');
    },
    
    setReset: function(newValue) {
    	this.getPainometerData().set('reset', newValue);
    	this.getPainometerData().save();
    },
    
    isReset: function() {
    	return this.getApplication().getPainometerData().get('reset');
    },
    
    setViewIndex: function(newViewIndex) {
    	this.getPainometerData().set('viewIndex', newViewIndex);
    	this.getPainometerData().save();
    },
    
    getViewIndex: function() {
    	return this.getPainometerData().get('viewIndex');
    },
    
    showView: function() {
    	var main = Ext.Viewport.getItems().get("MainContainer");
    	main.setActiveItem(this.getPainometerData().get('viewIndex'));
    },
    
});
