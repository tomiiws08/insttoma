let post = document.getElementById("post1"); 
let postsBox = document.getElementById("allposts") 
 
let imgurls = [ 
    "photo_5348344335453773668_y.jpg", 
    "photo_5348344335453773670_y.jpg", 
    "photo_5348344335453773671_y.jpg", 
    "photo_5359408471855979987_y.jpg" 
] 
for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("postImg")[0] 
    imgpost.setAttribute("src", imgurls[i%4]) 
 
    postsBox.appendChild(newpost); 
}