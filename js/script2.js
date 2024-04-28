// // VARIABLES
// const page = document.querySelector("#body");
// const ariaMssg = document.querySelector("#sr-alert");
// const btn = document.querySelector("#btn");
// const upBtn = document.querySelector("#up-btn");
// const keyLog = document.querySelector("#key-log");
// const trigger = document.querySelector("#event-trigger");
// const browserName = getBrowserName();
//
// let currentKey;
//
//
// // FUNCTIONS
// const update = (k, el) => {
//     if (el.lastChild) {
//         // Remove the last child of the parent element
//         el.removeChild(el.lastChild);
//     }
//     const textNode = document.createTextNode(k);
//     el.appendChild(textNode);
// }
//
// const separateCamelCase = (inputString) => {
//     // Regular expression to match right before each capital letter
//     // except for the start of the string
//     return inputString.replace(/([a-z])([A-Z0-9])/g, '$1 $2')
// }
//
// const addGlowingText = (text, el) => {
//     update(text, el);
//     const container = el;
//     // Remove any existing animation
//     container.style.animation = 'none';
//     // Trigger reflow
//     container.offsetWidth;
//     // Set new text
//     container.textContent = text;
//     // Re-apply the animation
//     container.style.animation = '';
// }
//
// function getBrowserName() {
//     let userAgent = navigator.userAgent;
//
//     if (userAgent.match(/chrome|chromium|crios/i)) {
//         return "Chrome";
//     } else if (userAgent.match(/firefox|fxios/i)) {
//         return "Firefox";
//     } else if (userAgent.match(/safari/i)) {
//         return "Safari";
//     } else if (userAgent.match(/opr\//i)) {
//         return "Opera";
//     } else if (userAgent.match(/edg/i)) {
//         return "Edge";
//     } else if (userAgent.match(/msie|trident/i)) {
//         return "Internet Explorer";
//     } else {
//         return "Unknown";
//     }
// }
//
//
// // EVENT LISTENERS
//
// page.addEventListener('keydown',(e)=>{
//     // log keyboard keydown events and check for keys that trigger click events.
//     const keyPush = separateCamelCase(e.code);
//     currentKey = keyPush;
//     console.log('key push:' + e.code);
//     console.log(e);
//     update(keyPush, keyLog);
//         let announcement = `${keyPush} pressed.`;
//         update (announcement, ariaMssg);
//         update("-", trigger);
//     // if (e.key !== 'Enter' && e.key !== ' ') {
//     //     update(keyPush, keyLog);
//     //     let announcement = `${keyPush} pressed.`;
//     //     update (announcement, ariaMssg);
//     //     update("-", trigger);
//     // }
// })
//
// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let uiEvent = e.constructor.name;
//     let pointerType = e.pointerType;
//     let fired = "Keyboard";
//     console.log(
//         `BUTTON FIRED!
//         Browser: ${browserName}
//         UI Event constructor: ${uiEvent}
//         Event detail: ${e.detail}
//         Event Type: ${e.type}
//         Pointer ID: ${e.pointerId}
//         Pointer Type: ${pointerType}
//         Event Object:`);
//     console.log(e);
//     if (e.detail >= 1) {
//             fired = "Mouse Click"
//             update("-", keyLog);
//             addGlowingText(fired, trigger);
//             let announcement = `${currentKey} pressed. Button trigger is a ${fired}.`;
//             update(announcement, ariaMssg);
//
//     } else if (uiEvent === "PointerEvent" && pointerType === "") {
//         // update(currentKey, keyLog);
//         addGlowingText(fired, trigger);
//         let announcement = `No key pressed. Button trigger is ${fired}.`;
//         update(announcement, ariaMssg);
//     }
//     else if (!(uiEvent === "MouseEvent" && pointerType)){
//         // update(currentKey, keyLog);
//         addGlowingText(fired, trigger);
//         let announcement = `No key pressed. Button trigger is ${fired}.`;
//         update(announcement, ariaMssg);
//     } else {
//         addGlowingText(uiEvent, trigger);
//         let announcement = `Button trigger is ${uiEvent}.`;
//         update(announcement, ariaMssg);
//     }
// });
//
