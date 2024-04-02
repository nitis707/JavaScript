/* So in order to listen for keyboard events, we still need to use add event listener. Because the key press event is simply just another type of event. Now, keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events we usually list and on the whole document. */

/* Now here about the name of the event itself there are actually three types of events for the keyboard. There is the key down the key press or the key up. key up, which is so it's this one this one only happens when we lift or finger off the keyboard basically Or off the key. Key press is fired continuously as we keep our finger on a certain key and key down is fired as soon as we just press down the key. And so usually that is the one that we use. */
document.addEventListener("keydown", function(e) {

    if(e.key === "Escape") {
        if(!modal.classList.contains("hidden")) {
            closeModal();
        }
    }
});