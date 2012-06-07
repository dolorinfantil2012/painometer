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