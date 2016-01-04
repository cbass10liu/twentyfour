export default class Event {
    static trigger(eventName, data) {
        var event = new CustomEvent(eventName, {
            bubbles: true, cancelable: true, detail: data
        });
        window.dispatchEvent(event);
    }
}