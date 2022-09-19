import { IUser } from "../interface/userInterface";
import { UserType } from "../types";

class User implements IUser {
    protected userData: UserType;

    constructor(user: UserType) {
        this.userData = user;
    }
    
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    setProfilePicture(): boolean {
        throw new Error('Method not implemented.');
    }
    getProfilePicture(): string {
        if(this.profilePhoto === undefined) {
            return 'defaultimage.jpg';
        }
        return this.profilePhoto;
    }
    getEmailID(): string {
        throw new Error('Method not implemented.');
    }
    getUserID(): string {
        throw new Error('Method not implemented.');
    }
    saveUser(): boolean {
        throw new Error('Method not implemented.');
    }
    
}

