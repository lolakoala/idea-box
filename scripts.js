// We will need a constructor function

function Idea(id, title, body) {
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
  addIdea();
  $('.delete-button').on('click', deleteIdea);
  $('.upvote-button').on('click', upVote);
  $('.downvote-button').on('click', downVote);
  // storeIdea();
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



function addIdea() {
  var titleInput = $('.title-input').val();
  var bodyInput = $('.body-input').val();
  var ideaHtml = `<div class="idea-card"><input type="text" class= "card idea-title" value="${titleInput}" /><div class="button-div delete-button"></div><textarea rows="2" type="text" class= "card idea-body">${bodyInput}</textarea><div class="button-div upvote-button"></div><div class="button-div downvote-button"></div><p class="quality">quality: swill</p></div>`;
  $('.idea-list').prepend(ideaHtml);
}

function clearFields() {
  $('.title-input').val("");
  $('.body-input').val("");
}




// function to add idea to local storage
// Do we need localStorage.getItem?
// How to save each idea with new variable/string name? ('saveIdea')
// I think I stored the object incorrectly.
var id = 0;

function storeIdea() {
  var titleInput = $('.title-input').val();
  var bodyInput = $('.body-input').val();
  id = id++;
  var newIdea = new Idea(id, titleInput, bodyInput);
  var stringifiedIdea = JSON.stringify(newIdea);
  localStorage.setItem('saveIdea', stringifiedIdea);
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





          // if (quality:genius) {
          // change to quality:plausible;
          // } else if (quality: plausible) {
          // change to quality:swill;
          // }


// event listener for clicking outside of input fields in .idea-container or pressing enter
      // function to update .title-input.value and .body-input.value
      // function to update local storage


// Search and filter function.... WTF????
