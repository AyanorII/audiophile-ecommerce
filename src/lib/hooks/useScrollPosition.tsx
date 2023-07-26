import { useRef, useState } from "react";

import { useEventListener } from "@/lib/hooks";

/**
 * Returns the current scroll position and whether the user is scrolling up or down.
 * @param {number} [scrollThreshold=0] - Optional. The minimum scroll difference to trigger the scroll event.
 * @param {number} [throttleTime=100] - Optional. The time in milliseconds to throttle the scroll event.
 * @returns {{isScrollingUp: boolean, isScrollingDown: boolean, scrollPosition: number}}
 */
export const useScrollPosition = (scrollThreshold = 0, throttleTime = 100) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isScrollingUp, setIsScrollingUp] = useState(false);
	const [isScrollingDown, setIsScrollingDown] = useState(false);

	const lastScrollTop = useRef(0);
	const isThrottled = useRef(false);

	useEventListener("scroll", () => {
		if (isThrottled.current) return;

		isThrottled.current = true;

		setTimeout(() => {
			isThrottled.current = false;
		}, throttleTime);

		const currentScrollTop =
			window.scrollY || document.documentElement.scrollTop;

		setScrollPosition(currentScrollTop);

		// Check if the scroll difference is more than the threshold
		if (Math.abs(currentScrollTop - lastScrollTop.current) <= scrollThreshold) {
			return; // If not, don't do anything
		}

		const isScrollingUp = currentScrollTop < lastScrollTop.current;
		const isScrollingDown = currentScrollTop > lastScrollTop.current;

		setIsScrollingUp(isScrollingUp);
		setIsScrollingDown(isScrollingDown);

		lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
	});

	return { isScrollingUp, isScrollingDown, scrollPosition };
};
