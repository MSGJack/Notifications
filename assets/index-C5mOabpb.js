(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const S=[{name:"Zaku"},{name:"Londo"},{name:"Aloy"},{name:"Sacco"},{name:"Wells"}],j=[{name:"Jim"},{name:"Meow"},{name:"Lewis"},{name:"Rey"},{name:"Winter"}],U=[{type:"react"},{type:"followed"},{type:"joined"},{type:"left"},{type:"message"},{type:"commented"}],W=[{type:"Chess"},{type:"Gundam"},{type:"Book"},{type:"Art"},{type:"Sci-Fi"},{type:"Cooking"}],$=[{message:"Let's go to the movies or zoo"},{message:"I thought I saw you yesterday, either that or you have a twin out there"},{message:"You appeared in my dream!!"},{message:"Got any plans for tonight>"},{message:"Wanna go to a concert with me?"},{message:"Recommened me something, I'm bored!!"}],F=[{userpost:"Found 50 dollars"},{userpost:"Bought new gundam model kit"},{userpost:"Purchased new books"},{userpost:"Made food tonight"},{userpost:"Watched Scarface again!"},{userpost:"Going on radio silence for awhile"}],G=[{avatar:"assets/Cool-Cat.jpg"},{avatar:"assets/F-91.jpg"},{avatar:"assets/Londo.jpg"},{avatar:"assets/Turn-A-Face.jpg"},{avatar:"assets/The-Fly.jpg"},{avatar:"assets/WW.jpg"}],x=[{userPic:"assets/user-cac.jpg"},{userPic:"assets/user-mojave.jpg"},{userPic:"assets/user-post.jpg"},{userPic:"assets/user-salt.jpg"}];function H(t,n,r){const s=d=>d[Math.floor(Math.random()*d.length)],e=s(t),a=s(n),o=s(r),N=s(G),P=o.type==="message"?s($):null,h=o.type==="commented"?s(x):null,f=o.type==="react"?s(F):null,u=o.type==="left"||o.type==="joined"?s(W):null;return{randomFirstName:e,randomLastName:a,randomPostType:o,randomMessage:P,randomAvatar:N,randomUserPic:h,randomGroup:u,randomUserReact:f}}function M(t){const r=Math.floor(Date.now()/1e3)-t;return r<60?"Just Now":`${Math.floor(r/60)} min ago`}function k(){let t=document.getElementsByClassName("Unread").length;document.getElementById("Newest").innerHTML=String(t)}function q(){document.querySelectorAll(".Unread").forEach(t=>{t.classList.remove("Unread")}),document.querySelectorAll(".Post-New").forEach(t=>{t.classList.remove("Post-New")}),k()}document.querySelector("#app").innerHTML=`
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
`;document.getElementById("button-reset")?.addEventListener("click",q);const A=Math.floor(Date.now()/1e3)-300,I=Math.floor(Date.now()/1e3)-60;function R({Firstnames:t,Lastnames:n,PostList:r}){const s=H(t,n,r),{randomFirstName:e,randomLastName:a,randomPostType:o,randomAvatar:N,randomGroup:P,randomUserPic:h}=s,f=Math.floor(Date.now()/1e3),u=document.querySelector("#New-Post"),d=`<strong class="name">${e.name} ${a.name}</strong>`,m=document.createElement("div");m.classList.add("Post","Unread");const i=document.createElement("div");i.classList.add("Post-Content");const p=document.createElement("div");p.classList.add("Post-Avatar");const v=document.createElement("img");v.src=N.avatar,v.alt="user avatar";const c=document.createElement("div");c.classList.add("Post-Info");const l=document.createElement("div");l.classList.add("Post-Message"),document.createElement("div").classList.add("Post-Text");const g=document.createElement("p");g.classList.add("Post-Time","Post-Live"),g.textContent=M(f),g.setAttribute("data-timestamp",f.toString());const y=document.querySelector(".Post-Time.Angela");y&&(y.textContent=M(A),y.setAttribute("data-timestamp",A.toString()),y.classList.add("Post-Live"));const w=document.querySelector(".Post-Time.Mark");switch(w&&(w.textContent=M(I),w.setAttribute("data-timestamp",I.toString()),w.classList.add("Post-Live")),o.type){case"commented":if(!h)break;const C=document.createElement("div");C.classList.add("Post-With-Img");const L=document.createElement("div");L.innerHTML=`
    <p><strong class="name">${s.randomFirstName.name} ${s.randomLastName.name}</strong> commented on your picture <span class="Post-New"></span</p>
    `,L.classList.add("Post-Message-With-Img");const E=document.createElement("div");E.classList.add("Post-Pic-Sec");const b=document.createElement("img");b.src=h.userPic,b.classList.add("Post-Pic"),b.alt="some image",E.appendChild(b),L.appendChild(E),C.appendChild(L),C.appendChild(g),p.appendChild(v),i.appendChild(p),i.appendChild(C),m.appendChild(i),u?.prepend(m);return;case"message":{const T=document.createElement("section");T.textContent=s.randomMessage?.message??"",l.innerHTML=` <p><strong class="name">${d}</strong> sent you a private message <span class="Post-New"></span></p></p>`,c.appendChild(l),c.appendChild(g),c.appendChild(T),p.appendChild(v),i.appendChild(p),i.appendChild(c),m.appendChild(i),u?.prepend(m);return}case"followed":l.innerHTML=`<p>${d} has followed you <span class="Post-New"></span></p>`;break;case"joined":l.innerHTML=`<p>${d} has joined your group <strong class="Post-Group"> ${P?.type} Club</strong> <span class="Post-New"></span></p>`;break;case"left":l.innerHTML=`<p>${d} left the group <strong class="Post-Group"> ${P?.type} Club</strong> <span class="Post-New"></span></p>`;break;case"react":l.innerHTML=`<p>${d} reacted to your recent post <strong class="Post-react"> ${s.randomUserReact?.userpost}!</strong> <span class="Post-New"></span></p>`;break}c.appendChild(l),c.appendChild(g),p.appendChild(v),i.appendChild(p),i.appendChild(c),m.appendChild(i),u?.prepend(m)}setInterval(()=>{R({Firstnames:S,Lastnames:j,PostList:U}),k()},60*1e3);setInterval(()=>{document.querySelectorAll(".Post-Live").forEach(t=>{const n=t.getAttribute("data-timestamp");if(!n)return;const r=parseInt(n,10);t.textContent=M(r)})},60*1e3);
