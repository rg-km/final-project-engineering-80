import { useEffect } from "react"

export const useMatchMedia = (callBack) => {

    return useEffect(() => {

        window.addEventListener('resize', () => {
            callBack(document.documentElement.clientWidth)
        });

        return window.removeEventListener('resize', () => {
            callBack(document.documentElement.clientWidth)
        });

    }, [callBack])
}