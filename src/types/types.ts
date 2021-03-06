export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type SourceType = {
    name: string
}

export type NewsType = {
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    source: SourceType
}

export type DialogType = {
    hasNewMessages: boolean
    newMessagesCount: number
    id: number
    photos: PhotosType
    userName: string
}
export type MessageType = {
    id: string
    body: string
    viewed: boolean
    recipientId: number
    senderId: number
    senderName: string
}
