const mainArea = document.getElementsByTagName('main')[0];

const firstPost = document.getElementById('first-post');
const secondPost = document.getElementById('second-post');

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "img/avatar-vangogh.jpg",
        post: "img/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "img/avatar-courbet.jpg",
        post: "img/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "img/avatar-ducreux.jpg",
        post: "img/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (let i = 0; i < posts.length; i++) {

    let sectionElement = document.createElement('section');
    let nameDiv = document.createElement('div');
    nameDiv.classList.add('name-and-location');
    let avatar = document.createElement('img');
    avatar.src = posts[i].avatar
 
    avatar.classList.add('avatar')
    nameDiv.append(avatar)


    

    let containerDiv1 = document.createElement('div')
    let headingOne = document.createElement('h1');
    headingOne.textContent = posts[i].name;
    headingOne.classList.add('user-full-name')
    containerDiv1.append(headingOne)


   
    
    let locationElement = document.createElement('p');
    locationElement.innerHTML = posts[i].location
    locationElement.classList.add('location-text')
    containerDiv1.append(locationElement)
    nameDiv.append(containerDiv1)

    let containerDiv2 = document.createElement('div');
    containerDiv2.classList.add('post');
    let postImg = document.createElement('img');
    postImg.id = posts[i].username
    postImg.src = posts[i].post;
    containerDiv2.append(postImg)


    postImg.addEventListener('dblclick', function (e) {
        let post = posts.find(post => post.username === e.target.id)

        if (post) {
            let countElements = document.getElementsByClassName('likes-count');
            let imgElements = document.getElementsByClassName('like-img')
            
            for (let element of countElements) {
                if (e.target.id === element.id && !element.classList.contains('like-num-increased')) {
                    post.likes++
                    element.textContent = `${post.likes} likes`
                    element.classList.add('like-num-increased')
                } else if (e.target.id === element.id && element.classList.contains('like-num-increased')){
                    post.likes--;
                    element.textContent = `${post.likes} likes`
                    element.classList.remove('like-num-increased')
                }
            }

            for (let likeImgelement of imgElements) {
                if (e.target.id === likeImgelement.id && !likeImgelement.classList.contains('clicked')) {
                    likeImgelement.src = 'img/heart-filled.png'
                    likeImgelement.classList.add('clicked')
                } else if (e.target.id === likeImgelement.id && likeImgelement.classList.contains('clicked')){
                    likeImgelement.src = 'img/like.png'
                    likeImgelement.classList.remove('clicked')
                }
            }
            
        }
    })

    let div = document.createElement('div');
    div.classList.add('name-and-location');
    let img = document.createElement('img');
    img.src = posts[i].post
    div.append(img);

    let containerDiv3 = document.createElement('div')
    containerDiv3.classList.add('likes-and-comments')

    let likeImg = document.createElement('img');
    likeImg.src = 'img/like.png'
    likeImg.id = posts[i].username
    likeImg.classList.add('like-img')
    
    containerDiv3.append(likeImg)

    let commentImg = document.createElement('img');
    commentImg.src = 'img/comment.png'
    containerDiv3.append(commentImg)

    let shareImg = document.createElement('img');
    shareImg.src = 'img/share.png'
    containerDiv3.append(shareImg)

    var containerDiv4 = document.createElement('div')
    var likesCountElement = document.createElement('p');
    likesCountElement.classList.add('likes-count');
    likesCountElement.textContent = `${posts[i].likes} likes`
  
    likesCountElement.id = posts[i].username

    likeImg.addEventListener('click', function (e) {
        let post = posts.find(post => post.username === e.target.id);
        if (post) {
           
            let countElements = document.getElementsByClassName('likes-count');
            let imgElements = document.getElementsByClassName('like-img')
            for (let element of countElements) {
                if (e.target.id === element.id && !element.classList.contains('like-num-increased')) {
                    post.likes++
                    element.textContent = `${post.likes} likes`
                    element.classList.add('like-num-increased')
                } else if (e.target.id === element.id && element.classList.contains('like-num-increased')){
                    post.likes--;
                    element.textContent = `${post.likes} likes`
                    element.classList.remove('like-num-increased')
                }
            }

            for (let likeImgelement of imgElements) {
                if (e.target.id === likeImgelement.id && !likeImgelement.classList.contains('clicked')) {
                    likeImgelement.src = 'img/heart-filled.png'
                    likeImgelement.classList.add('clicked')
                } else if (e.target.id === likeImgelement.id && likeImgelement.classList.contains('clicked')){
                    likeImgelement.src = 'img/like.png'
                    likeImgelement.classList.remove('clicked')
                }
            }
        }
    })

    containerDiv4.append(likesCountElement)

    let containerDiv5 = document.createElement('div');
    let usernameCaption = document.createElement('p');

    let nameSpan = document.createElement('span');
    nameSpan.textContent = posts[i].username;
    nameSpan.classList.add('username')

    usernameCaption.textContent = posts[i].comment
    usernameCaption.classList.add('username-caption')
    
    containerDiv5.append(nameSpan, usernameCaption)
    
        
    sectionElement.append(nameDiv)
    sectionElement.append(containerDiv2)
    sectionElement.append(containerDiv3);
    sectionElement.append(containerDiv4);
    sectionElement.append(containerDiv5);
    
    mainArea.append(sectionElement)
}
