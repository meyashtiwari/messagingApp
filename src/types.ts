export type UserType = {
    id: string,
    salutation?: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePhoto?: string
}

export type MessageType = {
    sender: UserType,
    receiver: UserType,
    message: string,
    creationTime: string,
    messageType: string
}