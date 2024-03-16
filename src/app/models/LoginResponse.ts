export class LoginResponse {
    tokenType : string;
    accessToken : string;
    expiresIn : number;
    refreshToken :string;

    constructor() {
        this.tokenType = this.accessToken = this.refreshToken = "";
        this.expiresIn = 0;
    }
}