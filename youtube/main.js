const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const thumbsup = document.querySelector('.info .actions button .fa-thumbs-up');
const thumbsdown = document.querySelector('.info .actions button .fa-thumbs-down');
const share = document.querySelector('.info .actions button .fa-share');
const plus = document.querySelector('.info .actions button .fa-plus');
const flag = document.querySelector('.info .actions button .fa-font-awesome-flag');
const likes = document.querySelector('.info .actions button .fa-thumbs-up+span');
const dislikes = document.querySelector('.info .actions button .fa-thumbs-down+span');
moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});
thumbsup.addEventListener('click', ()=> {
  thumbsup.classList.toggle('active');
  if (likes.innerHTML =='1K'){
    likes.innerHTML ='999'
  }else {
    likes.innerHTML = '1K'
  }
  console.log('clicked')
})
thumbsdown.addEventListener('click', ()=> {
  thumbsdown.classList.toggle('active');
  if (dislikes.innerHTML =='0'){
    dislikes.innerHTML ='1'
  }else {
    dislikes.innerHTML = '0'
  }
  console.log('clicked')
})
share.addEventListener('click', ()=> {
  share.classList.toggle('active');
  console.log('clicked')
})
plus.addEventListener('click', ()=> {
  plus.classList.toggle('active');
  console.log('clicked')
})
flag.addEventListener('click', ()=> {
  flag.classList.toggle('active');
  console.log('clicked')
})
