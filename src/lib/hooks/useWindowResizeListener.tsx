"use client";

import { useEffect } from "react";

/**
 * @description
 * This hook adds a window resize listener to the window and cleans it up when
 * the component unmounts.
 * @param callback The callback to be called when the window is resized.
 * @returns void
 */
export const useWindowResizeListener = (callback: () => void) => {
	useEffect(() => {
		window.addEventListener("resize", callback);

		return () => window.removeEventListener("resize", callback);
	}, [callback]);
};
