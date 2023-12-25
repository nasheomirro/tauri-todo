export type EventWith<Element extends HTMLElement = HTMLElement, E extends Event = Event> = E & {
	currentTarget: EventTarget & Element;
};
