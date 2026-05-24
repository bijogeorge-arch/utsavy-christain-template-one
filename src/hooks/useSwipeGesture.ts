import { useRef } from "react";
import type { TouchEvent } from "react";

type SwipeActions = {
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
};

export function useSwipeGesture({ onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight }: SwipeActions) {
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const minSwipeDistance = 60; // Slightly higher threshold to avoid accidental swipes

    const onTouchStart = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        // Ignore swipe events that originate inside input elements, scrollable text areas or lists
        if (
            target.closest("textarea") ||
            target.closest("input") ||
            target.closest("button") ||
            target.closest(".overflow-y-auto") ||
            target.closest(".overflow-x-auto") ||
            target.closest("[role='slider']") ||
            target.closest("[role='tablist']")
        ) {
            return;
        }

        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
        if (touchStartX.current === null || touchStartY.current === null) {
            return;
        }

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const diffX = touchStartX.current - touchEndX;
        const diffY = touchStartY.current - touchEndY;

        // Perform navigation based on the stronger swipe component
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Horizontal swipe
            if (Math.abs(diffX) > minSwipeDistance) {
                if (diffX > 0) {
                    onSwipeLeft?.();
                } else {
                    onSwipeRight?.();
                }
            }
        } else {
            // Vertical swipe
            if (Math.abs(diffY) > minSwipeDistance) {
                if (diffY > 0) {
                    onSwipeUp?.();
                } else {
                    onSwipeDown?.();
                }
            }
        }

        // Reset tracking coordinates
        touchStartX.current = null;
        touchStartY.current = null;
    };

    return {
        onTouchStart,
        onTouchEnd,
    };
}
