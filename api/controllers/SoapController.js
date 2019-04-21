/**
 * SoapController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const soap = require('soap');
module.exports = {
  
    async hello(req, res) {
        res.ok();
    },


    async someSoapCall(req, res) {
        console.log('Hello');
        soap.createClient('http://demo4006214.mockable.io/hello?wsdl', (err, client) => {
            if(err) return res.send({ status: 500, err });            
            // res.send({ status: client.wsdl.xml });
            client.getSomeData('', (err, data) => {
                // if(err) return res.send({ status: 500, err });
                console.log(err, data);
                res.send({ status: 200 });
            });
        });
    }
};

