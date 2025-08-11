export interface FirstNameType {
  name: string;
}

export const Firstnames: FirstNameType[] = [
  { name: "Zaku" },
  { name: "Londo" },
  { name: "Aloy" },
  { name: "Sacco" },
  { name: "Wells" },
];

export interface LastNameType {
  name: string;
}

export const Lastnames: LastNameType[] = [
  { name: "Jim" },
  { name: "Meow" },
  { name: "Lewis" },
  { name: "Rey" },
  { name: "Winter" },
];

export interface PostType {
  type: string;
}

export const PostList: PostType[] = [
  { type: "react" },
  { type: "followed" },
  { type: "joined" },
  { type: "left" },
  { type: "message" },
  { type: "commented" },
];

export const GroupList = [
  { type: "Chess" },
  { type: "Gundam" },
  { type: "Book" },
  { type: "Art" },
  { type: "Sci-Fi" },
  { type: "Cooking" },
];

export const MessageList = [
  { message: "Let's go to the movies or zoo" },
  {
    message:
      "I thought I saw you yesterday, either that or you have a twin out there",
  },
  { message: "You appeared in my dream!!" },
  { message: "Got any plans for tonight>" },
  { message: "Wanna go to a concert with me?" },
  { message: "Recommened me something, I'm bored!!" },
];

export const UserPostList = [
  { userpost: "Found 50 dollars" },
  { userpost: "Bought new gundam model kit" },
  { userpost: "Purchased new books" },
  { userpost: "Made food tonight" },
  { userpost: "Watched Scarface again!" },
  { userpost: "Going on radio silence for awhile" },
];

export const AvatarList = [
  { avatar: "assets/Cool-Cat.jpg" },
  { avatar: "assets/F-91.jpg" },
  { avatar: "assets/Londo.jpg" },
  { avatar: "assets/Turn-A-Face.jpg" },
  { avatar: "assets/The-Fly.jpg" },
  { avatar: "assets/WW.jpg" },
];

export const UserPicPost = [
  { userPic: "assets/user-cac.jpg" },
  { userPic: "assets/user-mojave.jpg" },
  { userPic: "assets/user-post.jpg" },
  { userPic: "assets/user-salt.jpg" },
];
