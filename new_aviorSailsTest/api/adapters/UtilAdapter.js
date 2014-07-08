var Floodlight = require('./FloodlightAdapter');
var OpenDaylight = require('./OpenDaylightAdapter');

module.exports = {
	identity: 'util',

    sdncontroller: 'test',
    
        registerConnection: function (conn, coll, cb) {
                if (!conn.hostname) { conn.hostname = '10.11.17.40'; }
                if (!conn.port) { conn.port = '8080'; }
                if (!conn.method) { conn.method = 'GET'; }
                cb();
        },
    
        /*setController: function() {
            var self = this;
             switch(this.sdncontroller){
             case 'floodlight': 
                    self = Floodlight;
                    console.log("Floodlight is now the active controller.");
                    break;
             case 'opendaylight':
                    self = OpenDaylight;
                    console.log("OpenDaylight is now the active controller.");
                    break;
            default:
                    console.log("Error: No valid controller was provided.");
                    break;
            } 
        },*/

        find: function (conn, coll, options, cb) {
            switch(this.sdncontroller){
             case 'floodlight': 
                    Floodlight.find(conn, coll, options, cb);
                    break;
             case 'opendaylight':
                    OpenDaylight.find(conn, coll, options, cb);
                    break;
            default:
                    console.log("Error: No valid controller was provided.");
                    break;
            } 
        },
    
        
        create: function (conn, coll, options, cb) {
               
        },
    
        update: function (conn, coll, options, cb) {
              
        },
    
        destroy: function (conn, coll, options, cb) {
               
        },
    
}