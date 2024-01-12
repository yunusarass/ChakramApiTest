const chakram = require('chakram'),
    expect = chakram.expect;

class UserResponse {

    static createUserResult() {
        const result = {
            "code": 200,
            "type": "unknown",
            "message": "789"
          };
        return result;
    }

    static getUserResult() {
        return {
            "id": 789,
            "username": "yunusarass",
            "firstName": "Yunus Emre",
            "lastName": "ARAS",
            "email": "yunusjshdjsfg@gmail.com",
            "password": "123456789100",
            "phone": "+90546126548",
            "userStatus": 1
          };
    }
}
module.exports = UserResponse;