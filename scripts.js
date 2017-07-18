// We will need a constructor function

function Idea(id, title, body, quality) {
  this.id = id;
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
  $('.delete-button').on('click', deleteIdea);
  $('.upvote-button').on('click', upVote);
  $('.downvote-button').on('click', downVote);
  storeIdea();
  clearFields();
});

function errorMsg() {
  var titleInput = $('.title-input').val();
  var bodyInput = $('.body-input').val();
  if (titleInput === "") {
    $('.title-input').val("Please inclue a title.");
  } else if (bodyInput === "") {
    $('.body-input').val("Please inclue an idea.");
  };
}



function addIdea(newIdea) {
  var titleInput = newIdea.title;
  var bodyInput = newIdea.body;
  var ideaHtml = `<div class="idea-card"><input type="text" class= "card idea-title" value="${titleInput}" /><div class="button-div delete-button"></div><textarea rows="2" type="text" class= "card idea-body">${bodyInput}</textarea><div class="button-div upvote-button"></div><div class="button-div downvote-button"></div><p class="quality">quality: swill</p></div>`;
  $('.idea-list').prepend(ideaHtml);
}

function clearFields() {
  $('.title-input').val("");
  $('.body-input').val("");
}

function constructIdea() {
  var title = $('.title-input').val();
  var body = $('.body-input').val();
  id += 1;
  var newIdea = new Idea(id, title, body);
  addIdea(newIdea);
}


var id = 0;
var ideaArray = [];
var saveCards = JSON.parse(localStorage.getItem('saveIdea')) || [];

for (var i = 0; i < saveCards.length; i++) {
  addIdea(saveCards[i]);
  ideaArray.push(saveCards[i]);
}

function storeIdea() {
  var titleInput = $('.title-input').val();
  var bodyInput = $('.body-input').val();
  id += 1;
  var newIdea = new Idea(id, titleInput, bodyInput);
  // make object an array
  ideaArray.push(newIdea);
  // var stringifiedIdea = JSON.stringify(ideaArray);
  localStorage.setItem('saveIdea', JSON.stringify(ideaArray));
  console.log(localStorage);
}


function deleteIdea() {
  this.closest('.idea-card').remove();
  removeIdea();
  }

  function removeIdea() {
    // function to remove from local storage}
  }

  function upVote() {
    if (($('.quality').text()) === "quality: swill") {
      $('.quality').text("quality: plausible");
      // change object property in local storage
    } else if (($('.quality').text()) === "quality: plausible") {
      $('.quality').text("quality: genius");
      // change object property in local storage
    };
  }

  function downVote() {
    if (($('.quality').text()) === "quality: genius") {
      $('.quality').text("quality: plausible");
      // change object property in local storage
    } else if (($('.quality').text()) === "quality: plausible") {
      $('.quality').text("quality: swill");
      // change object property in local storage
    };
  }



// event listener for clicking outside of input fields in .idea-container or pressing enter
      // function to update .title-input.value and .body-input.value
      // function to update local storage


// Search and filter function.... WTF????
