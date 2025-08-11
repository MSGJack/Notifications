import "./style.css";
import { NewPost, TimeAgo } from "./counter";
import { Firstnames, Lastnames, PostList } from "./data";
import type { FirstNameType, LastNameType, PostType } from "./data";
import { updateNotification, markAsRead } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="Main">
    <div class="Card">
      <header>
      <div class="Notify">
        <div class="head-left">
          <h3>Notifications</h3>
          <span id="Newest" class="head-New">3</span>
        </div>
        </div>
        <div class="head-right">
          <button id="button-reset">Mark all as read</button>
        </div>
      </header>

      <div id="New-Post"></div>

      <div class="Post Unread" id="Unmarked">
        <div class="Post-Content">
          <div class="Post-Avatar">
            <img src="assets/avatar-mark-webber.webp" alt="image of person"/>
          </div>
          <div class="Post-Info">
            <div class="Post-Message"> 
               <div class="Post-Text">
                <p><strong class="name">Mark Webber</strong> reacted to your recent post <strong>My first tournament today!</strong> <span class="Post-New"/></span></p> 
               </div>
             </div>
            <p class="Post-Time Mark">1min ago</p>
          </div>
        </div>
      </div>

          <div class="Post Unread">
            <div class="Post-Content">
              <div class="Post-Avatar">
                <img src="assets/avatar-angela-gray.webp" alt="image of person"/>
              </div>
              <div class="Post-Info">
                  <div class="Post-Message"> 
                    <p><strong class="name">Angela Gray</strong> followed you  <span class="Post-New"/></span> </p>
                  </div>
                  <p class="Post-Time Angela">5min ago</p>
              </div>
            </div>
          </div>

          <div class="Post Unread">
           <div class="Post-Content">
        <div class="Post-Avatar">
          <img src="assets/avatar-jacob-thompson.webp" alt="image of person"/>
        </div>
        <div class="Post-Info">
         <div class="Post-Message"> 
           <div class="Post-Text">
          <p><strong class="name">Jacob Thompson</strong> has joined your group <strong class="Post-Group">Chess Club</strong>  <span class="Post-New"/></span> </p>
          </div>
          </div>
          <p class="Post-Time">1 day ago</p>
        </div>
        </div>
      </div>

              <div class="Post">
                <div class="Post-Content">
                  <div class="Post-Avatar">
                    <img src="assets/avatar-rizky-hasanuddin.webp" alt="image of person"/>
                  </div>
                  <div class="Post-Info">
                    <div class="Post-Message"> 
                      <p><strong class="name">Rizky Hasanuddin</strong> sent you a private message</p>
                    </div>
                    <p class="Post-Time">5 days ago</p>
                    <section>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</section>   
                  </div>
                </div>
              </div>

             <div class="Post">
              <div class="Post-Content">
                  <div class="Post-Avatar">
                    <img src="assets/avatar-kimberly-smith.webp" alt="image of person"/>
                   </div>
                  <div class="Post-With-Img">
                    <div class="Post-Message-With-Img"> 
                      <p><strong class="name">Kimberly Smith </strong> commented on your picture</p>  
                    <div class="Post-Pic-Sec">
                      <img src="assets/image-chess.webp" class="Post-Pic"/>
                    </div>
                  </div>
                  <p class="Post-Time">1 week ago</p>
                   </div>
              </div>
             </div>

             <div class="Post">
              <div class="Post-Content">
                <div class="Post-Avatar">
                  <img  src="assets/avatar-nathan-peterson.webp" alt="image of person"/>
                </div>
                <div class="Post-Info">
                  <div class="Post-Message"> 
                    <p><strong class="name">Nathan Peterson</strong> reacted to your recent post <strong class="Post-React">5 end-game strategies to increase your win rate</strong></p>   
                  </div>
                  <p class="Post-Time">2 weeks ago</p>
                </div>
              </div>
            </div>

             <div class="Post">
             <div class="Post-Content">
        <div class="Post-Avatar">
          <img src="assets/avatar-anna-kim.webp" alt="image of person"/>
        </div>
        <div class="Post-Info">
         <div class="Post-Message"> 
          <p><strong class="name">Anna Kim</strong> left the group <strong class="Post-Group">Chess Club</strong></p>  
          </div> 
          <p class="Post-Time">2 weeks ago</p>
          </div>
        </div>
      </div>

    </div>
  </div>
`;

//For clearing all unread posts
document.getElementById("button-reset")?.addEventListener("click", markAsRead);

type PostInput = {
  Firstnames: FirstNameType[];
  Lastnames: LastNameType[];
  PostList: PostType[];
};

//For Anegela's and Mark's post, allows them to update time
const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 5 * 60;
const oneMinuteAgo = Math.floor(Date.now() / 1000) - 1 * 60;

function DisplayNewPost({ Firstnames, Lastnames, PostList }: PostInput) {
  const generateNew = NewPost(Firstnames, Lastnames, PostList);
  const {
    randomFirstName,
    randomLastName,
    randomPostType,
    randomAvatar,
    randomGroup,
    // randomMessage,
    //randomUserPost,
    randomUserPic,
    //randomUserReact,
  } = generateNew;
  const timestamp = Math.floor(Date.now() / 1000);

  const addNewPostDiv = document.querySelector<HTMLDivElement>("#New-Post");
  const fullName = `<strong class="name">${randomFirstName.name} ${randomLastName.name}</strong>`;

  const postElement = document.createElement("div");
  postElement.classList.add("Post", "Unread");

  const contentElement = document.createElement("div");
  contentElement.classList.add("Post-Content");

  const avatarElement = document.createElement("div");
  avatarElement.classList.add("Post-Avatar");
  const avatarImg = document.createElement("img");
  avatarImg.src = randomAvatar.avatar;
  avatarImg.alt = "user avatar";

  const postInfoElement = document.createElement("div");
  postInfoElement.classList.add("Post-Info");

  const postMessageElement = document.createElement("div");
  postMessageElement.classList.add("Post-Message");

  const postTextElement = document.createElement("div");
  postTextElement.classList.add("Post-Text");

  const timeElement = document.createElement("p");
  timeElement.classList.add("Post-Time", "Post-Live");
  timeElement.textContent = TimeAgo(timestamp);
  timeElement.setAttribute("data-timestamp", timestamp.toString());

  const angelaTimeElement = document.querySelector(".Post-Time.Angela");

  if (angelaTimeElement) {
    angelaTimeElement.textContent = TimeAgo(fiveMinutesAgo);
    angelaTimeElement.setAttribute("data-timestamp", fiveMinutesAgo.toString());
    angelaTimeElement.classList.add("Post-Live");
  }

  const markTimeElement = document.querySelector(".Post-Time.Mark");

  if (markTimeElement) {
    markTimeElement.textContent = TimeAgo(oneMinuteAgo);
    markTimeElement.setAttribute("data-timestamp", oneMinuteAgo.toString());
    markTimeElement.classList.add("Post-Live");
  }

  switch (randomPostType.type) {
    case "commented":
      //commented required a different structure than the rest
      if (!randomUserPic) break;
      const postWithImgElement = document.createElement("div");
      postWithImgElement.classList.add("Post-With-Img");

      const postMessageWithImg = document.createElement("div");
      postMessageWithImg.innerHTML = `
    <p><strong class="name">${generateNew.randomFirstName.name} ${generateNew.randomLastName.name}</strong> commented on your picture <span class="Post-New"></span</p>
    `;
      postMessageWithImg.classList.add("Post-Message-With-Img");

      const picSection = document.createElement("div");
      picSection.classList.add("Post-Pic-Sec");

      const picImg = document.createElement("img");
      picImg.src = randomUserPic.userPic;
      picImg.classList.add("Post-Pic");
      picImg.alt = "some image";

      picSection.appendChild(picImg);
      postMessageWithImg.appendChild(picSection);
      postWithImgElement.appendChild(postMessageWithImg);
      postWithImgElement.appendChild(timeElement);

      avatarElement.appendChild(avatarImg);
      contentElement.appendChild(avatarElement);
      contentElement.appendChild(postWithImgElement);
      postElement.appendChild(contentElement);
      addNewPostDiv?.prepend(postElement);
      return;

    case "message": {
      const sectionElement = document.createElement("section");
      sectionElement.textContent = generateNew.randomMessage?.message ?? "";

      postMessageElement.innerHTML = ` <p><strong class="name">${fullName}</strong> sent you a private message <span class="Post-New"></span></p></p>`;
      postInfoElement.appendChild(postMessageElement);
      postInfoElement.appendChild(timeElement);
      postInfoElement.appendChild(sectionElement);
      avatarElement.appendChild(avatarImg);
      contentElement.appendChild(avatarElement);
      contentElement.appendChild(postInfoElement);
      postElement.appendChild(contentElement);
      addNewPostDiv?.prepend(postElement);
      return;
    }

    case "followed":
      postMessageElement.innerHTML = `<p>${fullName} has followed you <span class="Post-New"></span></p>`;
      break;
    case "joined":
      postMessageElement.innerHTML = `<p>${fullName} has joined your group <strong class="Post-Group"> ${randomGroup?.type} Club</strong> <span class="Post-New"></span></p>`;
      break;
    case "left":
      postMessageElement.innerHTML = `<p>${fullName} left the group <strong class="Post-Group"> ${randomGroup?.type} Club</strong> <span class="Post-New"></span></p>`;
      break;
    case "react":
      postMessageElement.innerHTML = `<p>${fullName} reacted to your recent post <strong class="Post-react"> ${generateNew.randomUserReact?.userpost}!</strong> <span class="Post-New"></span></p>`;
      break;
  }

  //Message added first then time, before message up end at the far end of each post
  postInfoElement.appendChild(postMessageElement);
  postInfoElement.appendChild(timeElement);
  avatarElement.appendChild(avatarImg);
  contentElement.appendChild(avatarElement);
  contentElement.appendChild(postInfoElement);
  postElement.appendChild(contentElement);
  addNewPostDiv?.prepend(postElement);
}

//New posts are added every minute and post time gets updated too
setInterval(() => {
  DisplayNewPost({ Firstnames, Lastnames, PostList });
  updateNotification();
}, 60 * 1000);

setInterval(() => {
  //searches for posts that the class Post-Time, gets time that is stored in data-timestamp, parses string into number that can then be used in TimeAgo function
  document.querySelectorAll(".Post-Live").forEach((element) => {
    const timeStamp = element.getAttribute("data-timestamp");
    if (!timeStamp) return;

    const timeStampNumber = parseInt(timeStamp, 10);
    element.textContent = TimeAgo(timeStampNumber);
  });
}, 60 * 1000);

