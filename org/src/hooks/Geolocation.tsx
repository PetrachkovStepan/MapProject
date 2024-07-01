import { useEffect, useState } from "react";

export const useGeolocation = () => {
    const [position, setPosition] = useState<GeolocationCoordinates | undefined>()
    const [error, setError] = useState<string>();

    useEffect(() => {
        const geo = navigator.geolocation;
        if(!geo){
            setError("Location data is not available");
        }
        const watcher = geo.watchPosition((e) => {
            setPosition(e.coords)
        }, (e) => setError(e.message));
        return () =>geo.clearWatch(watcher);
    }, [setPosition, setError]);

    return {
        position,
        error
    }
}
