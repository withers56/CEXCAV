import createView from './createView.js';


export default function init() {
    loadViewOnPageRequest();
    addListenerToNavLinks();
}
/**
 * When the DOM loads, build the view given the current endpoint.
 */
function loadViewOnPageRequest() {
    window.addEventListener('DOMContentLoaded', function() {
        //TODO: Switched to location.pathname so the route would be accurate to current view
        createView(location.pathname);
    });
}

/**
 * Add a listener that will change the view if a nav link is clicked.
 */
function addListenerToNavLinks() {
    document.addEventListener('click', e => {

        if(event.target.type && event.target.type === "checkbox" || event.target.type === "file") {
            return;
        }
        if(event.target.matches('label')) {
            return;
        }
        if(event.target.parentElement && event.target.parentElement.href && event.target.parentElement.href.matches('github')){
            return;
        }
        if(event.target.parentElement && event.target.parentElement.href && event.target.parentElement.href.matches('linkedin')){
            return;
        }
        if(event.target.parentElement && event.target.parentElement.href && event.target.parentElement.href.matches('mailto')){
            return;
        }
        e.preventDefault();
        if (e.target.dataset['link'] !== undefined) {
            const URI = e.target.href.substring(location.origin.length);
            createView(URI);
        }
    });
}

