// // VARIABLES
// const page = document.querySelector("#body");
// const ariaMssg = document.querySelector("#sr-alert");
// const btn = document.querySelector("#btn");
// const keyLog = document.querySelector("#key-log");
// const trigger = document.querySelector("#event-trigger");
// const browserName = getBrowserName();
// let currentKey;
//
// // FUNCTIONS
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
//
//     const container = el;
//     const textNode = document.createTextNode(text);
//
//     if (el.lastChild) {
//         // Remove the last child of the parent element
//         el.removeChild(el.lastChild);
//     }
//     el.appendChild(textNode);
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
// // EVENT LISTENERS
//
// page.addEventListener('keydown',(e)=>{
//     const keyPush = separateCamelCase(e.code);
//     currentKey = keyPush;
//     console.log('key push:' + e.code);
//     console.log(e)
//     update(keyPush, keyLog);
//     let announcement = `${keyPush} pressed.`;
//     update(currentKey, keyLog);
//     update("-", trigger);
//     update (announcement, ariaMssg);
// });
//
// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let fired = "Keyboard";
//     if (e.detail >= 1){
//         console.log(`Button fired. Event detail: ${e.detail}.`);
//         console.log(e);
//         fired = "Mouse Click"
//         update("No key pressed ", keyLog);
//         addGlowingText(fired, trigger);
//         let announcement = `No key pressed. Button trigger is a ${fired}.`;
//         update (announcement, ariaMssg);
//
//     } else {
//         console.log(`Button fired. Event detail: ${e.detail}.`);
//         console.log(e);
//         update(currentKey, keyLog);
//         addGlowingText(fired, trigger);
//         let announcement = `${currentKey} pressed. Button trigger is a ${fired}.`;
//         update (announcement, ariaMssg);
//     }
// });
//
//
//
