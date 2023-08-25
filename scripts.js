const contentElement = document.querySelector(".content")
const linkArray = document.querySelectorAll(".link");
const pageObject = {
    bio: `<div class="content bio">
    Lorem bpsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
</div>`,
    likes: `<div class="content likes">
    <ul>
        <li>Parkour</li>
        <li>Climbing</li>
        <li>Shadow boxing</li>
        <li>Puppies</li>
    </ul>
</div>`,
    dislikes: `<div class="content dislikes">
    <ul>
        <li>Meglomaniacs</li>
        <li>Crime</li>
        <li>Slippery surfaces</li>
        <li>Vanilla ice-cream</li>
    </ul>
</div>`,
    socials: `<div class="content socials">Follow my bat-crazy life at:<br><br>
    <a href="http://www.facebook.com" target="_blank" class="fa fa-facebook"></a><br>
<a href="http://www.twitter.com/" target="_blank" class="fa fa-twitter"></a>

</div>`
}

linkArray.forEach(linkElement => {
    linkElement.addEventListener("click", handleClick)
})

function handleClick(event) {
    const oldPage = document.querySelector(".current");
    oldPage.classList.remove("current");
    contentElement.classList.add("inactive");
    setTimeout(() => {
        event.target.classList.add("current");
        contentElement.innerHTML = pageObject[event.target.id];
        contentElement.classList.remove("inactive")}, 550);
}
