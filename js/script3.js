// VARIABLES
const page = document.querySelector("#body");
const ariaMssg = document.querySelector("#sr-alert");
const btn = document.querySelector("#btn");
const upBtn = document.querySelector("#up-btn");
const keyLog = document.querySelector("#key-log");
const trigger = document.querySelector("#event-trigger");
const browserName = getBrowserName();
const eventMssg = document.querySelector("#event-type");

let currentKey;

// FUNCTIONS
const update = (k, el) => {
    if (el.lastChild) {
        // Remove the last child of the parent element
        el.removeChild(el.lastChild);
    }
    const textNode = document.createTextNode(k);
    el.appendChild(textNode);
}

const separateCamelCase = (inputString) => {
    // Regular expression to match right before each capital letter
    // except for the start of the string
    return inputString.replace(/([a-z])([A-Z0-9])/g, '$1 $2')
}

const addGlowingText = (text, el) => {
    update(text, el);
    const container = el;
    // Remove any existing animation
    container.style.animation = 'none';
    // Trigger reflow
    container.offsetWidth;
    // Set new text
    container.textContent = text;
    // Re-apply the animation
    container.style.animation = '';
}

function getBrowserName() {
    let userAgent = navigator.userAgent;

    if (userAgent.match(/chrome|chromium|crios/i)) {
        return "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        return "Firefox";
    } else if (userAgent.match(/safari/i)) {
        return "Safari";
    } else if (userAgent.match(/opr\//i)) {
        return "Opera";
    } else if (userAgent.match(/edg/i)) {
        return "Edge";
    } else if (userAgent.match(/msie|trident/i)) {
        return "Internet Explorer";
    } else {
        return "Unknown";
    }
}

// Define a function to handle button events.
function btnEvent(e, browserName) {
    // Prevent the default action of the event (which could be a form submission, for instance).
    e.preventDefault();

    // Get the constructor name of the event to identify what type of UI event it is.
    let uiEvent = e.constructor.name;

    // Get the type of pointer that triggered the event (e.g., mouse, pen, touch).
    let pointerType = e.pointerType;

    // Determine how the event was fired, defaulting to "Keyboard" if e.detail is less than 1; otherwise "Mouse Click".
    let fired = e.detail < 1 ? "Keyboard" : "Mouse Click";

    // Log details of the button event to the console.
    console.log(
        `BUTTON FIRED!
        Browser: ${browserName} 
        UI Event constructor: ${uiEvent}
        Event detail: ${e.detail}
        Event Type: ${e.type}
        Pointer ID: ${e.pointerId}
        Pointer Type: ${pointerType}
        Event Object: (SEE BELOW)`);
    console.log(e);

    // Branch the logic based on the type of the event.
    if (e.type === "mouseup") {
        // If the event is a mouseup event, specify the 'fired' variable accordingly and update the UI.
        fired = "Mouse Up";
        update("-", keyLog); // These functions (`update` and `addGlowingText`) should be defined elsewhere.
        update(uiEvent, eventMssg);
        addGlowingText(fired, trigger);
        update("-", keyLog);
        let announcement = `${currentKey} pressed. Event is ${uiEvent} triggered by a ${fired}.`;
        update(announcement, ariaMssg);
    } else if (e.type === "keyup") {
        // If the event is a keyup event, update the UI accordingly.
        fired = "Key Up";
        update(uiEvent, eventMssg);
        update(e.code, keyLog);
        addGlowingText(fired, trigger);
        update(currentKey, keyLog);
        let announcement = `${currentKey} pressed. Button trigger is a ${fired}.`;
        update(announcement, ariaMssg);
    } else if (uiEvent === "PointerEvent" && pointerType === "") {
        // Handle keyboard click events for browsers that support PointerEvent without a pointerType.
        update(uiEvent, eventMssg);
        addGlowingText(fired, trigger);
        let announcement = `${currentKey} pressed. Button trigger is ${fired}.`;
        update(announcement, ariaMssg);
        update(currentKey, keyLog);
    } else if (uiEvent === "PointerEvent" && pointerType === "mouse") {
        // Handle mouse click events for browsers that support PointerEvent with a pointerType of "mouse".
        update(uiEvent, eventMssg);
        addGlowingText(fired, trigger);
        let announcement = `${currentKey} pressed. Button trigger is ${fired}.`;
        update(announcement, ariaMssg);
        update("-", keyLog);
    } else if (uiEvent === "MouseEvent" && e.detail === 0) {
        // Handle keyboard click events for Safari/Firefox where it's registered as a MouseEvent without detail.
        update(uiEvent, eventMssg);
        update(currentKey, keyLog);
        addGlowingText(fired, trigger);
        let announcement = `${currentKey} pressed. Button trigger is ${fired}.`;
        update(announcement, ariaMssg);
    } else if (uiEvent === "MouseEvent" && e.detail >= 1){
        // Handle mouse click events for Safari/Firefox where it's registered as a MouseEvent with detail.
        update(uiEvent, eventMssg);
        addGlowingText(fired, trigger);
        let announcement = `No key pressed. Button trigger is ${fired}.`;
        update(announcement, ariaMssg);
        update("-", keyLog);
    } else {
        // Fallback for handling other UI events that don't match the above conditions.
        update(uiEvent, eventMssg);
        addGlowingText(uiEvent, trigger);
        let announcement = `Button trigger is ${uiEvent}.`;
        update(announcement, ariaMssg);
        update(currentKey, keyLog);
    }
};



// EVENT LISTENERS

page.addEventListener('keydown',(e)=>{
    // log keyboard keydown events and check for keys that trigger click events.
    const keyPush = separateCamelCase(e.code);
    currentKey = keyPush;
    if ((e.code === 'Enter' || e.code === 'Space') && !(btn.role)) {
        return;
    }
    console.log('key push:' + e.code);
    console.log(e);
    update("no event triggered", eventMssg);
    update(keyPush, keyLog);
    let announcement = `${keyPush} pressed.`;
    update (announcement, ariaMssg);
    update("-", trigger);
    // if (e.key !== 'Enter' && e.key !== ' ') {
    //     update(keyPush, keyLog);
    //     let announcement = `${keyPush} pressed.`;
    //     update (announcement, ariaMssg);
    //     update("-", trigger);
    // }
})

document.addEventListener('DOMContentLoaded', function() {
    if (upBtn) {
        upBtn.addEventListener('mouseup', (e) => {
            btnEvent(e, browserName);
        });
        upBtn.addEventListener('keyup', (e) => {
            const keyPush = separateCamelCase(e.code)
            console.log(keyPush);
            if (keyPush === "Space" || keyPush === "Enter") {
                btnEvent(e, browserName);
            }
        });
    }
    if (btn) {
        btn.addEventListener('click', (e)=> {
            btnEvent(e, browserName);
        });
    }
    console.log("DOM fully loaded and parsed");
});