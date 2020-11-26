export const MessageHandler = (() => {
  // Private functions and Variables
  function showMessage(message, type) {
    if (message === "The email address is badly formatted.")
      // eslint-disable-next-line no-restricted-globals
      setTimeout(location.reload(), 3000);

    let messagesDiv = document.querySelector(".messages");
    messagesDiv.style.display = "block";
    const div = document.createElement("div");
    div.className = "message d-flex py-2 px-2";
    div.innerHTML = `${message}
        <div class="close-btn">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>`;
    messagesDiv.prepend(div);

    const btnLink = document.querySelector("#signInLink");
    btnLink.style.display = "none";
    if (messagesDiv.classList.contains("pb-2"))
      messagesDiv.classList.remove("pb-2");

    if (type === "Sign in") {
      btnLink.style.display = "flex";
      messagesDiv.classList.add("pb-2");
    }

    window.scrollTo(0, 0);
    MessageHandler.initaliseEventListeners();
    setTimeout(hideMessage, 7000);
  }

  function hideMessage() {
    const messagesDiv = document.querySelector(".messages");
    const messageDiv = messagesDiv.querySelector(".message");
    messagesDiv.style.display = "none";
    if (messageDiv) messageDiv.remove();
  }

  function initaliseEventListeners(e) {
    const closeBtn = document.querySelector(".message .close-btn");
    closeBtn.addEventListener("click", function () {
      hideMessage();
    });
  }

  // Public functions and Variables
  return {
    showMessage,
    hideMessage,
    initaliseEventListeners,
  };
})();
