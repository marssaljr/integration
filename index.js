let soap = require ( 'soap' );

let uri = 'http://www.soapclient.com/xml/soapresponder.wsdl';
soap.createClient ( uri, ( err, client ) => {
    if ( err ) return console.log ( err );
    console.log ( client );
});