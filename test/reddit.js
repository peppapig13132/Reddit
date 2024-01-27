process.env.NODE_ENV = "test";

let { Reddit } = require("../src/models");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../src/index");
let should = chai.should();

chai.use(chaiHttp);

let token = "";

describe("#Reddit", function () {
  beforeEach((done) => {
    chai
      .request(server)
      .post("/api/auth/signup")
      .send({
        email: "testuser@example.email",
        username: "testuser",
        password: "testpassword",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          chai
            .request(server)
            .post("/api/auth/login")
            .send({ username: "testuser", password: "testpassword" })
            .end((err, res) => {
              res.body.should.have.property("token");
              token = res.body.token;
              done();
            });
        }
      });
  });
  describe("#POST [/api/reddits], Get all reddits", function () {
    it("get all reddits", function (done) {
      chai
        .request(server)
        .get("/api/reddits")
        .set("Authorization", "Bearer " + token)
        .end((err, res) => {
          if (err) done(err);
          else {
            res.body.should.have.property("result");
            res.body.result.should.equal(false);
            done();
          }
        });
    });
  });
});
