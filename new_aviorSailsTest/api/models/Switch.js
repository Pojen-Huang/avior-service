/**
 * Switches
 *
 * @module      :: Model
 * @description :: A collection of data for the Switches on the network.
 * @docs		:: In Imagination Land
 */

module.exports = {
    
    identity: 'switch',

	connection: 'floodlight',


  attributes: {
      Features:{
        model:'switchfeatures',
        required:true
      },
      Desc:{
        model:'switchdesc',
        required:true
      },
      Flows:{
        model:'flow',
        required:true
      },
      Aggregate:{
        model:'aggregate',
        required:true
      },
      Table:{
        model:'table',
        required:true
      },
      Queue:{
        model:'queuestats',
        required:true
      },   
  }

}