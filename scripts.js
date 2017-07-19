var ideaArray = [];

$(window).on('load', retrieveLocalStorage());
$('.title-input').on('keypress', enableSave);
$('.body-input').on('keypress', enableSave);
$('.save-button').on('click', saveFunction);
$('.idea-list').on('click', '.upvote-button', upVote);
$('.idea-list').on('click', '.downvote-button', downVote);
$('.idea-list').on('click', '.delete-button', deleteFunction);
$('.idea-list').on('blur', '.idea-title', editTitle)
$('.idea-list').on('blur', '.idea-body', editBody)
$('.idea-list').on('keyup', '.idea-title', checkEnter)
$('.idea-list').on('keyup', '.idea-body', checkEnter)
$('.search-input').on('input', searchFunction)


function Idea(title, body) {
  this.id = Date.now();
  this.title = title;
  this.body = body;
  this.quality = 'swill';
}

function retrieveLocalStorage() {
  ideaArray = JSON.parse(localStorage.getItem('saveIdea')) || [];
  ideaArray.forEach(function(idea) {
    addIdea(idea);
  });
};

function enableSave() {
  var titleInput = $('.title-input').val();
  var bodyInput = $('.body-input').val();
  if ((titleInput !== "") && (bodyInput !== "")) {
    $('.save-button').removeAttr('disabled');
  };
};

function saveFunction() {
  errorMsg();
  constructIdea();
  clearFields();
};

function errorMsg() {
  var titleInput = $('.title-input').val();
  var bodyInput = $('.body-input').val();
  if (titleInput === "") {
    $('.title-input').val("Please inclue a title.");
  } else if (bodyInput === "") {
    $('.body-input').val("Please inclue an idea.");
  };
};

function editTitle() {
  var cardId = parseInt($(this).closest('.idea-card').attr('id'));
  ideaArray.forEach(function(idea, index) {
    if (idea.id === cardId) {
      idea.title = $('.idea-title').val();
    };
    localStorage.clear();
    var stringifiedArray = JSON.stringify(ideaArray);
    localStorage.setItem('saveIdea', stringifiedArray);
})}

function editBody() {
  var cardId = parseInt($(this).closest('.idea-card').attr('id'));
  ideaArray.forEach(function(idea, index) {
    if (idea.id === cardId) {
      idea.body = $('.idea-body').val();
    };
    localStorage.clear();
    var stringifiedArray = JSON.stringify(ideaArray);
    localStorage.setItem('saveIdea', stringifiedArray);
})}

function constructIdea() {
  var title = $('.title-input').val();
  var body = $('.body-input').val();
  var newIdea = new Idea(title, body);
  addIdea(newIdea);
  ideaArray.push(newIdea);
  storeIdea();
};




function upVote() {
var cardId = parseInt($(this).closest('.idea-card').attr('id'));
var ideaQ = $(this).closest('.idea-card').find('.quality');
console.log(this);
ideaArray.forEach(function(idea, index) {
  if (idea.id === cardId) {
    if (idea.quality === 'swill') {
    idea.quality = 'plausible';
    ideaQ.text(`quality: ${idea.quality}`);
  } else if (idea.quality === 'plausible') {
    idea.quality = 'genius';
    ideaQ.text(`quality: ${idea.quality}`);
  }
};
})
storeIdea();
};


function downVote() {
var cardId = parseInt($(this).closest('.idea-card').attr('id'));
var ideaQ = $(this).closest('.idea-card').find('.quality');
console.log(cardId);
ideaArray.forEach(function(idea, index) {
  if (idea.id === cardId) {
    console.log(idea.quality);
    if (idea.quality === 'genius') {
    idea.quality = 'plausible';
    ideaQ.text(`quality: ${idea.quality}`);
  } else if (idea.quality === 'plausible') {
    idea.quality = 'swill';
    ideaQ.text(`quality: ${idea.quality}`);
  }
};

})
storeIdea();
};


function deleteFunction(){
  console.log(this);
  var cardId = parseInt($(this).closest('.idea-card').attr('id'));
  ideaArray.forEach(function(idea, index) {
    if (idea.id === cardId) {
      ideaArray.splice(index, 1);
    };
})
  storeIdea();

  $(this).closest('.idea-card').remove();

};




function addIdea(newIdea) {
  var titleInput = newIdea.title;
  var bodyInput = newIdea.body;
  var ideaId = newIdea.id;
  var ideaQuality = newIdea.quality;
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



function storeIdea() {
  var stringifiedArray = JSON.stringify(ideaArray);
  localStorage.setItem('saveIdea', stringifiedArray);
  };

function checkEnter(e) {
  e.which = e.which || e.keyCode;
  if(e.which == 13) {
    editTitle();
    editBody();
  }
}

function searchFunction() {
  var searchInput = $('.search-input').val()

    if (searchInput !== "") {
      var filterCards = ideaArray.filter(function(idea) {
        return (idea.title.toLowerCase().includes(searchInput.toLowerCase()) || idea.body.toLowerCase().includes(searchInput.toLowerCase()));
      })
      console.log(filterCards);
      $('.idea-list').empty();
      filterCards.forEach(function(idea) {
        addIdea(idea);
      });
    }
    else if (searchInput === "") {
      $('.idea-list').empty();
      retrieveLocalStorage();
    }
  }
