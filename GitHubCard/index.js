//  Step 1: using axios, send a GET request to the following URL 
//            (replacing the palceholder with your Github name):
//            https://api.github.com/users/<your name>
//  Step 2: Inspect and study the data coming back, this is YOUR 
//    github info! You will need to understand the structure of this 
//    data in order to use it to build your component function 
//    Skip to Step 3.
//  Step 4: Pass the data received from Github into your function, 
//            create a new component and add it to the DOM as a child of .cards


//  Step 5: Now that you have your own card getting added to the DOM, either 
//           follow this link in your browser https://api.github.com/users/<Your github name>/followers 
//           , manually find some other users' github handles, or use the list found 
//           at the bottom of the page. Get at least 5 different Github usernames and add them as
//           Individual strings to the friendsArray below.
          
//           Using that array, iterate over it, requesting data for each user, creating a new card for each
//           user, and adding that card to the DOM.



//  Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:
// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>

//  List of LS Instructors Github username's: 
//   tetondan
//   dustinmyers
//   justsml
//   luishrd
//   bigknell

const personal_url = [
 "https://api.github.com/users/rockyFierro",
 "https://api.github.com/users/tetondan",
 "https://api.github.com/users/dustinmyers",
 "https://api.github.com/users/justsml",
 "https://api.github.com/users/bigknell"
 ];

personal_url.forEach(person => {
axios.get(person)
  .then(reply => {
    const makeID = (arg) => document.querySelector(".cards").append(GithubCard(arg));
    makeID(reply.data);
  })
  .catch(err => {
    console.log("whoops, looks like: ", err);
  });
});

function GithubCard(r){
  const container = document.createElement("div");
  const profile_information_container = document.createElement("h3");
  const profile_picture = document.createElement("img");
  const profile_user_name = document.createElement("h3");
  const profile_users_bio = document.createElement("p");
  const profile_user_username = document.createElement("p");
  const profile_user_location = document.createElement("p");
  const profile_link_label = document.createElement("p");
  const profile_user_github_page = document.createElement("a");
  const profile_users_following = document.createElement("p");
  const profile_users_followers = document.createElement("p");

  container.classList.add("card");
  profile_user_username.classList.add("username");
  profile_information_container.classList.add("card-info");
  profile_user_name.classList.add("name");

  profile_picture.src = r.avatar_url;
  profile_user_name.textContent = r.name;
  profile_user_username.textContent = r.login;
  profile_user_location.textContent = r.location;
  profile_link_label.textContent = "Profile: ";
  profile_user_github_page.textContent = r.html_url;
  profile_users_followers.textContent = "Followers: " + r.followers;
  profile_users_following.textContent = "Following: " + r.following;
  profile_users_bio.textContent = "Bio: " + r.bio;

  profile_link_label.append(profile_user_github_page);

  profile_information_container.append(
    profile_user_name,
    profile_user_username,
    profile_user_location,
    profile_user_github_page,
    profile_users_followers,
    profile_users_following,
    profile_users_bio);

  container.append(
    profile_picture,
    profile_information_container);

  return container;
};