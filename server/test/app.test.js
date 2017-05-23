import chai from 'chai'
import chaihttp from 'chai-http'

// const should = chai.should();
chai.use(chaihttp);

import app from '../src/app';

describe('Quest Backend base route', () => {
    it('should return 200', done => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.statusCode.should.equal(200);
                done();
            });
    });
});