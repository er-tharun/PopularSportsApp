export class User {
    id?:string;
    userName?:string;
    normalizedUserName?:string;
    email?:string;
    normalizedEmail?:string;
    emailConfirmed?:boolean;
    passwordHash?:string;
    securityStamp?:string;
    concurrencyStamp?:string;
    phoneNumber?:string;
    phoneNumberConfirmed?:boolean;
    twoFactorEnabled?:number;
    lockoutEnd?:string;
    lockoutEnabled?:boolean;
    accessFailedCount?:number;
}