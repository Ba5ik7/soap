/**
 * HelloController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    async hey(req, res) {
        res.send({ status: 200, test: 'bar' });
    }
};
