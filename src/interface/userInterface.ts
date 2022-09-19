import { UserType } from "../types";

export interface IUser {
    userData: UserType;

    getFullName(): string,
    setProfilePicture(): boolean,
    getProfilePicture(): string,
    getEmailID(): string,
    getUserID(): string,
    saveUser(): boolean
}