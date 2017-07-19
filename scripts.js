// We will need a constructor function

function Idea(title, body) {
  this.id = Date.now();
  this.title = title;
  this.body = body;
  this.quality = 'swill';
}

$('.title-input').on('keypress', enableSave);
$('.body-input').on('keypress', enableSave);


function enableSave() {
  var titleInput = $('.title-input').val();
  var bodyInput = $('.body-input').val();
  if ((titleInput !== "") && (bodyInput !== "")) {
    $('.save-button').removeAttr('disabled');
  };
};

// event listener for save button {
$('.save-button').on('click', function() {
  errorMsg();
  constructIdea();
  clearFields();
});

$('.idea-list').on('click', '.upvote-button', upVote);

function upVote() {
var cardId = parseInt($(this).closest('.idea-card').attr('id'));

ideaArray.forEach(function(idea, index) {
  if (idea.id === cardId) {
    console.log(idea.quality);
    if (idea.quality === 'swill') {
    idea.quality = 'plausible';
    $('.quality').text(`quality: ${idea.quality}`);
  } else if (idea.quality === 'plausible') {
    idea.quality = 'genius';
    $('.quality').text(`quality: ${idea.quality}`);
  }
};
  localStorage.clear();
  var stringifiedArray = JSON.stringify(ideaArray);
  localStorage.setItem('saveIdea', stringifiedArray);
})};

$('.idea-list').on('click', '.downvote-button', downVote);

function downVote() {
var cardId = parseInt($(this).closest('.idea-card').attr('id'));
ideaArray.forEach(function(idea, index) {
  if (idea.id === cardId) {
    console.log(idea.quality);
    if (idea.quality === 'genius') {
    idea.quality = 'plausible';
    $('.quality').text(`quality: ${idea.quality}`);
  } else if (idea.quality === 'plausible') {
    idea.quality = 'swill';
    $('.quality').text(`quality: ${idea.quality}`);
  }
};
  localStorage.clear();
  var stringifiedArray = JSON.stringify(ideaArray);
  localStorage.setItem('saveIdea', stringifiedArray);
})};

$('.idea-list').on('click', '.delete-button', function(){

  console.log('in delete function')
  var cardId = parseInt($(this).closest('.idea-card').attr('id'));

  ideaArray.forEach(function(idea, index) {
    if (idea.id === cardId) {
      ideaArray.splice(index, 1);
    };
  localStorage.clear();
  var stringifiedArray = JSON.stringify(ideaArray);
  localStorage.setItem('saveIdea', stringifiedArray);
  $('.delete-button').closest('.idea-card').remove();

})});

function errorMsg() {
  var titleInput = $('.title-input').val();
  var bodyInput = $('.body-input').val();
  if (titleInput === "") {
    $('.title-input').val("Please inclue a title.");
  } else if (bodyInput === "") {
    $('.body-input').val("Please inclue an idea.");
  };
};



function addIdea(newIdea) {
  var titleInput = newIdea.title;
  var bodyInput = newIdea.body;
  var ideaId = newIdea.id;
  var ideaQuality = newIdea.quality;
  // I had added ${newIdea.id} as a class to the div, but the delete function stopped working
  var ideaHtml = `<div class="idea-card" id = "${ideaId}">
  <input type="text" class= "card idea-title" value="${titleInput}" />
  <div class="button-div delete-button"></div>
  <textarea rows="2" type="text" class= "card idea-body">${bodyInput}</textarea>
  <div class="button-div upvote-button"></div>
  <div class="button-div downvote-button"></div>
  <p class="quality">quality: ${ideaQuality}</p>
  </div>`;

  $('.idea-list').prepend(ideaHtml);
};

function clearFields() {
  $('.title-input').val("");
  $('.body-input').val("");
};

function constructIdea() {
  var title = $('.title-input').val();
  var body = $('.body-input').val();
  var newIdea = new Idea(title, body);
  addIdea(newIdea);
  storeIdea(newIdea);
};



var ideaArray = [];

$(window).on('load', function(){
  retrieveLocalStorage();
});

function retrieveLocalStorage() {
  ideaArray = JSON.parse(localStorage.getItem('saveIdea')) || [];
  ideaArray.forEach(function(idea) {
    addIdea(idea);
  });
};

function storeIdea(newIdea) {
  ideaArray.push(newIdea);
  var stringifiedArray = JSON.stringify(ideaArray);
  localStorage.setItem('saveIdea', stringifiedArray);
  console.log(localStorage)
};





  // function downVote() {
  //   if (($('.quality').text()) === "quality: genius") {
  //     $('.quality').text("quality: plausible");
  //     // change object property in local storage
  //   } else if (($('.quality').text()) === "quality: plausible") {
  //     $('.quality').text("quality: swill");
  //     // change object property in local storage
  //   };
  // };



// this is not working, not getting in function at all. Event listeners not working?
// function editIdea(newIdea) {
//   alert('youre in editIdea');
//   ideaArray.push(newIdea);
//   localStorage.setItem('saveIdea', JSON.stringify(ideaArray));
// }



// Search and filter function.... WTF????
