//Switch features

module.export = {
	identity: 'switchfeatures',

	connection: 'floodlight',

	attributes: {
		Datapath: {
            type:'integer',
            required:'true'
        },
        Buffers: {
            type:'integer',
            required:'true'
        },
        Tables: {
            type:'integer',
            required:'true'
        },
        Capabilities: {
            type:'integer',
            required:'true'
        },
        Actions: {
            model:'action',
            required:'true'
        },
        Ports: {
            model:'port',
            required:'true'
        },
	}
}