let soap = require ( 'soap' );

//should return a dailydilbert xml
let uri = 'http://www.gcomputer.net/webservices/dilbert.asmx?wsdl';
soap.createClient ( uri, ( err, client ) => {
    client.DailyDilbert ( { ADate: "2021-27-02" }, (err, result) => {
        if ( err ) return console.log ( err );
        console.log ( result.DailyDilbertResult );
    } );
});