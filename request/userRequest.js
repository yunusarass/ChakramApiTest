class UserRequest {

    static createUserBody() {
        const body = {
            "id": 789,
            "username": "yunusarass",
            "firstName": "Yunus Emre",
            "lastName": "ARAS",
            "email": "yunusjshdjsfg@gmail.com",
            "password": "123456789100",
            "phone": "+90546126548",
            "userStatus": 1
        };
        return body;
    }

    static createUserHeaders() {
        const header = {
            "Content-Type": "application/json",
            "accept": "application/json"
        };
        return header;
    }

    static getUser() {
        return "yunusarass";
    }
}
module.exports = UserRequest;