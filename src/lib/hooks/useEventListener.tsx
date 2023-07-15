"use client";

import { useEffect } from "react";

type EventCallback<T extends keyof WindowEventMap> = (
	event: WindowEventMap[T]
) => void;

/**
 * @description
 * This hook adds an event listener and cleans it up when the component unmounts.
 * @param callback The callback to be called when the event is fired.
 * @returns void
 */
export const useEventListener = <T extends keyof WindowEventMap>(
	eventType: T,
	callback: EventCallback<T>,
	onUnmount?: () => void
) => {
	useEffect(() => {
		const eventListener: EventListener = (event) => {
			callback(event as WindowEventMap[T]);
		};

		window.addEventListener(eventType, eventListener);

		return () => {
			onUnmount?.();
			window.removeEventListener(eventType, eventListener);
		};
	}, [eventType, callback, onUnmount]);
};
