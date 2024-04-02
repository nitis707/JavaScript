for (let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].addEventListener("click", function () {
        console.log("Button clicked");
        /* Just keep in mind that we do not use the dot here.
 So not like this, okay. And I'm telling you that because I used to do that mistake myself. And I remembered that. And so, I want you to avoid it. So the dot is only for the selector. But here we are not anymore selecting anything. We're just passing in the name of the class. And so all we need is a string with that name. */
        modal.classList.remove("hidden");

    }));
}

btnCloseModal.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})


/* Next up, usually when we click outside of a modal, then the modal window also closes. So that's pretty common, right. So what I mean is, clicking this area here outside, should also close this window. So basically we want this in a code here to also be executed when we click on the modal. Or actually on the overlay. */
overlay.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})

/* if you want to use the same function in multiple event listeners, then you need to specify that function as a separate function, like this one here. And then you can pass that function as an argument to multiple "add event listener" methods. */
const openModal = function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
}