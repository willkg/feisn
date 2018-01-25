"use strict";

/**
 * Content script that runs in the context of service-now web pages and nixes
 * the Enter-to-post thing.
 */

function fixEnter() {
    // Find the comment textarea and the form
    var form = document.querySelector('#sand');
    var textarea = document.querySelector('#post-input');
    if (form == null || textarea == null) {
        console.info('form or textarea not there, yet');
        return;
    }
    var newForm = document.querySelector('#fixEnterForm');
    if (newForm != null) {
        console.info('already has a form.');
        return;
    }

    console.info('found form and textarea.');

    // Create a new form with a textarea and its own copy button. Users can
    // write their stuff in there and then click "copy" and then click the
    // "Send" button.
    var newForm = document.createElement('form');
    newForm.id = 'fixEnterForm';

    var newDiv = document.createElement('div');
    newDiv.classList.add('input-group');
    newForm.appendChild(newDiv);

    var newTextarea = document.createElement('textarea');
    newTextarea.id = 'fixEnterTextarea';
    newTextarea.classList.add('form-control');
    newTextarea.placeholder = (
        'Type your message here...(Enter = New line)'
    );
    newDiv.appendChild(newTextarea);

    var btnDiv = document.createElement('div');
    btnDiv.classList.add('input-group-btn');
    newDiv.appendChild(btnDiv);

    var copyBtn = document.createElement('button');
    copyBtn.id = 'fixEnterButton';
    copyBtn.appendChild(document.createTextNode('Copy to textarea'));
    copyBtn.classList.add('btn');
    copyBtn.classList.add('btn-primary');
    copyBtn.addEventListener('click', function(ev) {
        ev.preventDefault();

        // Copy the text to the textarea
        textarea.value = newTextarea.value;

        // Trigger a change event in the textarea to mark it dirty so that the
        // "Send" button works
        var changeEvent = new Event('change');
        textarea.dispatchEvent(changeEvent);
    });
    btnDiv.appendChild(copyBtn);

    newForm.appendChild(
        document.createTextNode(
            'Instructions: Write your text in the above textarea. ' +
                'When you are done, click on "Copy to textarea". ' +
                'Then click the "Send" button.'
        )
    );

    form.parentNode.insertBefore(newForm, form);
}

// Run for the current page
fixEnter();

// Set up an observer to update on mutations
let body = document.querySelector('body');
const bodyObserver = new window.MutationObserver((mutations) => {
    fixEnter();
});
bodyObserver.observe(body, {
    childList: true,
    attributes: false,
    characterData: false
});

console.info('loaded fix-enter...');
