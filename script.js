let words = window.wordsData;
let postings = window.blogData;
let kahoots = window.kahootData;
console.log(words);

//마지막 3개 blog summary 가져오기
let target = document.querySelector('div.blog-sum');
console.log(target);

for (let i = postings.length - 1; i >= postings.length - 3; i--) {

  console.log(postings[i]);
  getBlogSum(postings[i]);
}

function getBlogSum(posting) {
  console.log('getblogsum');
  let temp = document.querySelector('#temp-post-sum');
  let tempPop = document.querySelector('#temp-post-pop');
  // console.log(temp);
  let newBlogSum = document.importNode(temp.content, true);
  let newBlogPop = document.importNode(tempPop.content, true);

  newBlogSum.querySelector('.post-title-sum').textContent = posting['post-title'];
  newBlogPop.querySelector('.post-title-pop').textContent = posting['post-title'];

  if (posting['post-img'] === '') {
    newBlogSum.querySelector('img.post-img-sum').src = 'images/hanlove_logo.jpg';
    newBlogPop.querySelector('img.post-img-pop').src = 'images/hanlove_logo.jpg';
  } else {
    newBlogSum.querySelector('img.post-img-sum').src = 'images/' + posting['post-img'];
    newBlogPop.querySelector('img.post-img-pop').src = 'images/' + posting['post-img'];

  }

  newBlogSum.querySelector('.post-desc-sum').textContent = posting['post-desc'];
  newBlogPop.querySelector('.post-desc-pop').textContent = posting['post-desc'];
  target.appendChild(newBlogSum);
  target.appendChild(newBlogPop);
}

let postSumBtn = document.getElementsByClassName('post-sum-more');
console.log(postSumBtn);

for (let i = 0; i < postSumBtn.length; i++) {
  postSumBtn[i].onclick = popPost;
}

function popPost() {
  let postPop = this.parentNode.nextElementSibling;
  console.log(postPop);
  postPop.style.display = 'block';

}

//random youtube가져오기 
let randomKahoot = kahoots[Math.floor(Math.random() * kahoots.length)];
document.querySelector('.youtube-category').textContent = randomKahoot['category'];
document.querySelector('.youtube-title').textContent = randomKahoot['youtube-title'];
document.querySelector('iframe#main-youtube').src = 'https://www.youtube.com/embed/' + randomKahoot['youtube-link'];
document.querySelector('a#main-youtube-kahoot').src = randomKahoot['kahoot-link'];

// <div class="youtube-header">
// <div class="youtube-category">전래</div>
// <div class="youtube-title">삼 년 고개</div>
// </div>
// <!-- 반드시 www.youtube.com/embed/가 포함된 링크를 해야만 iframe에서 열릴수 있음 -->
// <iframe id="main-youtube" width="420" height="315" src="https://www.youtube.com/embed/yOyJtDGDkXU"
// frameborder="0" allowfullscreen ng-show="showvideo">
// </iframe>
// <div id="main-youtube-kahoot" class="kahoot-link bottom-kahoot">
// <a href src="https://create.kahoot.it/share/1436c835-7018-4775-adf3-c3ab603d8b07">Kahoot! 동영상 퀴즈</a>
// </div>


//마지막 5개 단어 가져오기
target = document.querySelector('div.word-inner-box');
console.log(target);

for (let i = words.length - 1; i >= words.length - 5; i--) {

  console.log(i, '번째 단어', words[i]);
  getWordsSum(words[i]);
}

function getWordsSum(word) {
  console.log('getWordsum');
  temp = document.querySelector('#temp-word-main');
  console.log(temp);
  let newWord = document.importNode(temp.content, true);

  newWord.querySelector('.word-main').textContent = word['word'];
  newWord.querySelector('.word-pop-word').textContent = word['word'];
  newWord.querySelector('.word-pop-definition').textContent = '뜻 : ' + word['definition'];
  if (word['example'] !== '') {
    newWord.querySelector('.word-pop-example').textContent = '예문 : ' + word['example'];
  }

  target.appendChild(newWord);
}

let wordBtn = document.getElementsByClassName('word-main');
console.log(wordBtn);

for (let i = 0; i < wordBtn.length; i++) {
  wordBtn[i].onclick = popWord;
}

function popWord() {
  let wordPop = this.nextElementSibling;
  console.log(wordPop);
  wordPop.style.display = 'block';

}



//모든 pop-up에 공통으로 사용될 close  (blog, word, youtube)
let popClose = document.getElementsByClassName('pop-close');


for (let i = 0; i < popClose.length; i++) {
  popClose[i].onclick = closePop;
}

function closePop() {
  let popWindow = this.parentNode;
  popWindow.style.display = 'none';

}