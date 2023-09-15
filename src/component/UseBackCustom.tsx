import React, {useState} from "react";
import {useEffect} from "react";
import {createBrowserHistory, Listener} from "history";

export default function UseBackNextCustom(backEvent: () => void, nextEvent: () => void) {
    const [locationKeys, setLocationKeys] = useState<any[]>([]);
    useEffect(() => {
        const history = createBrowserHistory();
        history.push(window.location.href);

        window.addEventListener("popstate", backEvent);

        return () => {
            window.removeEventListener("popstate", backEvent);
        }
    }, [backEvent, nextEvent]);
}