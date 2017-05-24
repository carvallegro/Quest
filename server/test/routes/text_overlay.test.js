import chai from 'chai'
import chaihttp from 'chai-http'

chai.use(chaihttp);

import app from '../../src/app';

describe('route /text-overlay', () => {
    it("'/'should produce JSON result", done => {
        chai.request(app)
            .get('/api/text-overlay')
            .end((err, res) => {
                res.statusCode.should.equal(200);
                res.type.should.equal('application/json');
                done();
            });
    })
});

