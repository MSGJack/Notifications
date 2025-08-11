import {
  Firstnames,
  Lastnames,
  PostList,
  GroupList,
  MessageList,
  UserPostList,
  AvatarList,
  UserPicPost,
} from "./data";
import type { FirstNameType, LastNameType, PostType } from "./data";

export function NewPost(
  Firstnames: FirstNameType[],
  Lastnames: LastNameType[],
  PostList: PostType[]
) {
  const getRandom = <T>(list: T[]) =>
    list[Math.floor(Math.random() * list.length)];

  const randomFirstName = getRandom(Firstnames);
  const randomLastName = getRandom(Lastnames);
  const randomPostType = getRandom(PostList);
  const randomAvatar = getRandom(AvatarList);

  const randomMessage =
    randomPostType.type === "message" ? getRandom(MessageList) : null;

  const randomUserPic =
    randomPostType.type === "commented" ? getRandom(UserPicPost) : null;

  const randomUserReact =
    randomPostType.type === "react" ? getRandom(UserPostList) : null;

  const randomGroup =
    randomPostType.type === "left" || randomPostType.type === "joined"
      ? getRandom(GroupList)
      : null;

  return {
    randomFirstName,
    randomLastName,
    randomPostType,
    randomMessage,
    randomAvatar,
    randomUserPic,
    randomGroup,
    randomUserReact,
  };
}

export function TimeAgo(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diffInSeconds = now - timestamp;
  //New posts will always get the text "Just Now", older posts will get their time adjusted
  if (diffInSeconds < 60) {
    return "Just Now";
  }

  const minutes = Math.floor(diffInSeconds / 60);
  return `${minutes} min ago`;
}

//Gets all the posts with the class .Unread, counts them and updates accordingly
export function updateNotification() {
  let unreadPosts = document.getElementsByClassName("Unread").length;
  document.getElementById("Newest")!.innerHTML = String(unreadPosts);
}

//Gets all posts that have both .Unread and .Post-New, removes both classes  and then calls updateNotifications to set Notifications to 0
export function markAsRead() {
  document.querySelectorAll(".Unread").forEach((element) => {
    element.classList.remove("Unread");
  });

  document.querySelectorAll(".Post-New").forEach((span) => {
    span.classList.remove("Post-New");
  });

  updateNotification();
}

