/* 

So again, this function will not be called immediately once the script here is executed. This function will only be called as soon as the event happens. And you can also see that here in the code, because, well, we don't call the function anywhere using the parenthesis.

The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

The method addEventListener() works by adding a function, or an object that implements a handleEvent() function, to the list of event listeners for the specified event type on the EventTarget on which it's called. If the function or object is already in the list of event listeners for this target, the function or object is not added a second time.

*/

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('message').textContent = '⛔ No Number!'
    }
});