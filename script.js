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


//blog 화면 띄우기
let blogMoreBtn = document.querySelector('.blog-more');
blogMoreBtn.onclick = showBlog;


function showBlog() {
  document.querySelector('.blog-sum').style.display = 'none';
  document.querySelector('.bottom-section').style.display = 'none';
  document.querySelector('.blog').style.display = 'block';
  target = document.querySelector('div.blog');
  if (target.querySelector('.post-title-more') === null) {
    postings.forEach(creatPost);
  }

}

function creatPost(posting) {
  temp = document.querySelector('#temp-post-content');
  let newPost = document.importNode(temp.content, true);

  newPost.querySelector('.post-title-more').textContent = posting['post-title'];

  if (posting['post-img'] !== '') {
    newPost.querySelector('img.post-img-more').src = 'images/' + posting['post-img'];
  }

  newPost.querySelector('.post-desc-more').textContent = posting['post-desc'];
  target.insertBefore(newPost, target.childNodes[0]);
}

//blog 닫기
let blogCloseBtn = document.querySelector('.close-blog');
blogCloseBtn.onclick = closeBlog;

function closeBlog() {
  document.querySelector('.blog-sum').style.display = 'block';
  document.querySelector('.bottom-section').style.display = 'block';
  document.querySelector('.blog').style.display = 'none';
}

//random youtube가져오기 
let randomKahoot = kahoots[Math.floor(Math.random() * kahoots.length)];
document.querySelector('.youtube-category').textContent = randomKahoot['category'];
document.querySelector('.youtube-title').textContent = randomKahoot['youtube-title'];
document.querySelector('iframe#main-youtube').src = 'https://www.youtube.com/embed/' + randomKahoot['youtube-link'];
console.log(randomKahoot['kahoot-link']);
console.log(document.querySelector('a#main-youtube-kahoot'));
document.querySelector('a#main-youtube-kahoot').href = randomKahoot['kahoot-link'];

//youtube kahoot list 띄우기
let kahootMoreBtn = document.querySelector('.kahoot-more');
kahootMoreBtn.onclick = showKahootList;


function showKahootList() {
  document.querySelector('.blog-sum').style.display = 'none';
  document.querySelector('.bottom-section').style.display = 'none';
  document.querySelector('.youtube-quiz').style.display = 'block';
  target = document.querySelector('div.youtube-quiz');
  if (target.querySelector('.youtube-more') === null) {
    kahoots.forEach(creatKahootList);
  }

}

function creatKahootList(kahoot) {
  temp = document.querySelector('#temp-youtube-more');
  let newKahoot = document.importNode(temp.content, true);

  newKahoot.querySelector('.youtube-title-more').textContent = kahoot['youtube-title'];
  newKahoot.querySelector('iframe.youtube-link-more').src = 'https://www.youtube.com/embed/' + kahoot['youtube-link'];
  newKahoot.querySelector('a.youtube-kahoot-more').href = kahoot['kahoot-link'];

  target.insertBefore(newKahoot, target.childNodes[0]);
}

//quiz 닫기
let quizCloseBtn = document.querySelector('.close-quiz');
quizCloseBtn.onclick = closeQuiz;

function closeQuiz() {
  document.querySelector('.blog-sum').style.display = 'block';
  document.querySelector('.bottom-section').style.display = 'block';
  document.querySelector('.youtube-quiz').style.display = 'none';
}



//마지막 5개 단어 가져오기
target = document.querySelector('div.word-inner-box');
// console.log(target);

for (let i = words.length - 1; i >= words.length - 5; i--) {

  // console.log(i, '번째 단어', words[i]);
  getWordsSum(words[i]);
}

function getWordsSum(word) {
  // console.log('getWordsum');
  temp = document.querySelector('#temp-word-main');
  // console.log(temp);
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
// console.log(wordBtn);

for (let i = 0; i < wordBtn.length; i++) {
  wordBtn[i].onclick = popWord;
}

function popWord() {
  let wordPop = this.nextElementSibling;
  // console.log(wordPop);
  wordPop.style.display = 'inline-block';

}

// 단어 전체 리스트 띄우기
let wordsMoreBtn = document.querySelector('.words-more');
wordsMoreBtn.onclick = showWordList;

function showWordList() {
  document.querySelector('.blog-sum').style.display = 'none';
  document.querySelector('.bottom-section').style.display = 'none';
  document.querySelector('.words').style.display = 'block';
  target = document.querySelector('div.words');
  if (target.querySelector('.word-card') === null) {
    words.forEach(creatWordList);
  }
}

function creatWordList(word) {
  temp = document.querySelector('#temp-words-more');
  newWord = document.importNode(temp.content, true);

  newWord.querySelector('.word-card-word').textContent = word['word'];
  newWord.querySelector('.word-card-definition').textContent = '뜻 : ' + word['definition'];
  if (word['example'] !== '') {
    newWord.querySelector('.word-card-example').textContent = '예문 : ' + word['example'];
  }
  target.insertBefore(newWord, target.childNodes[0]);
}



// 단어리스트 닫기
let wordsCloseBtn = document.querySelector('.close-words');
wordsCloseBtn.onclick = closeWords;

function closeWords() {
  document.querySelector('.blog-sum').style.display = 'block';
  document.querySelector('.bottom-section').style.display = 'block';
  document.querySelector('.words').style.display = 'none';
}


//모든 pop-up에 공통으로 사용될 close  (blog, word)
let popClose = document.getElementsByClassName('pop-close');


for (let i = 0; i < popClose.length; i++) {
  popClose[i].onclick = closePop;
}

function closePop() {
  let popWindow = this.parentNode;
  popWindow.style.display = 'none';

}