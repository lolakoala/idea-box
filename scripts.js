// We will need a constructor function

function Idea(id, title, body, quality = swill) {
  this.id = id;
  this.title = title;
  this.body = body;
}
// event listener for .header input fields
    // when .title-input.value !== ""  and .body-input.value !== "", .save-button.disabled = false

// event listener for save button {
      // when .title-input.value === "", placeholder = "Please include a title."
      // when .body-input.value === "", placeholder = "Please include an idea."

      // function to add html with .title-input.value and .body-input.value -preppend to .idea-container
      // function to add idea to local storage
      // Do we need localStorage.getItem?
      // }


// function to add html with .title-input.value and .body-input.value -preppend to .idea-container
              // <article class="idea-card">
              // <form>
              //     <input type="text" class= "card idea-title" value="body-input.value" />
              //     <div class="button-div delete-button"></div>
              //
              //   <textarea rows="2" type="text" class= "card idea-body">title-input.value</textarea>
              //   <div class="button-div upvote-button"></div>
              //   <div class="button-div downvote-button"></div>
              //     <p class="quality">quality: swill</p>
              //   </form>
              // </article>
      // add event listener to delete button {
          // function to remove .closest.idea-card
          // function to remove from local storage}
      // add event listener for upvote-button {
          // if (quality:swill) {
          // change to quality:plausible;
          // } else if (quality: plausible) {
          // change to quality:genius;
          // }}
      // add event listener for downvote-button {
          // if (quality:genius) {
          // change to quality:plausible;
          // } else if (quality: plausible) {
          // change to quality:swill;
          // }


// event listener for clicking outside of input fields in .idea-container or pressing enter
      // function to update .title-input.value and .body-input.value
      // function to update local storage


// Search and filter function.... WTF????
