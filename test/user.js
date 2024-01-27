process.env.NODE_ENV = "test";

let { User } = require("../src/models");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../src/index");
let should = chai.should();

chai.use(chaiHttp);

describe("#User", function () {
  // beforeEach((done) => {
  //   User.deleteMany({}, (err) => {
  //     done();
  //   });
  // });
  describe("#POST [/api/auth/signup], User Signup", function () {
    it("creating account", function (done) {
      User.deleteMany({}, (err) => {
        if (err) done(err);
      });
      chai
        .request(server)
        .post("/api/auth/signup")
        .send({
          username: "testuser",
          email: "testuser@example.com",
          password: "testpassword",
        })
        .end((err, res) => {
          if (err) done(err);
          else {
            res.should.have.status(200);
            done();
          }
        });
    });
  });
  describe("#POST [/api/auth/login], User Login", function () {
    it("login", function (done) {
      chai
        .request(server)
        .post("/api/auth/login")
        .send({ username: "testuser", password: "testpassword" })
        .end((err, res) => {
          res.body.should.have.property("token");
          var token = res.body.token;
          done();
        });
    });
  });
});
