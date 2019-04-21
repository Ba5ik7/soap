/**
 * SoapController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const soap = require('soap');
const convert = require('xml-js');

module.exports = {
  
    async hello(req, res) {
        res.ok();
    },

    async someSoapCall(req, res) {
        soap.createClient('http://demo4006214.mockable.io/hello?wsdl', (err, client) => {
            if(err) return res.send({ status: 500, err });

            client.getSomeData({ description: 'YOOOOOOOOO' }, (err, result) => {
                // if(err) return res.send({ status: 500, err });

                const payload = result.toJSON();
                let xml2js = convert.xml2js(payload.body, { compact: false });
                xml2js.elements[0].elements[0].elements[0].elements[0].elements[0].text = 'This is shit';

                const js2xml = convert.json2xml(xml2js);
                res.send({ raw_body: payload.body, xml2js, js2xml });
            });
        });
    }
};

