import chai from 'chai'
import chaihttp from 'chai-http'

// const should = chai.should();
chai.use(chaihttp);

// import app from '../../src/routes/post.js';
import app from '../../src/app';

describe('route /post', () => {
    it('should produce JSON result', done => {
        chai.request(app)
            .get('/api/post')
            .end((err, res) => {
                // should.not.exist(err);
                res.statusCode.should.equal(200);
                res.type.should.equal('application/json');
                done();
            });
    })
});

