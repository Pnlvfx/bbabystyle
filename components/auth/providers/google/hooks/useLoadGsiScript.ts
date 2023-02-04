import { useEffect, useRef, useState } from "react";
import { clientUrl } from "../../../../../config/config";
import { useSession } from "../../../UserContextProvider";

export interface UseLoadGsiScriptOptions {
     /**
    * Callback fires on load [gsi](https://accounts.google.com/gsi/client) script success
    */
    onScriptLoadSuccess?: () => void;
    /**
    * Callback fires on load [gsi](https://accounts.google.com/gsi/client) script failure
    */
    onScriptLoadError?: () => void;
}

const useLoadGsiScript = (options: UseLoadGsiScriptOptions = {}): boolean => {
    const { onScriptLoadSuccess, onScriptLoadError} = options;
    const {session} = useSession();
    const [scriptLoadedSuccessfully, setScriptLoadSuccessfully] = useState(false);

    const onScriptLoadSuccessRef = useRef(onScriptLoadSuccess);
    onScriptLoadSuccessRef.current = onScriptLoadSuccess;
  
    const onScriptLoadErrorRef = useRef(onScriptLoadError);
    onScriptLoadErrorRef.current = onScriptLoadError;

    useEffect(() => {
        if (session?.user) return;
        if (clientUrl.startsWith('http://192')) return;
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://accounts.google.com/gsi/client';
        scriptTag.async = true;
        scriptTag.defer = true;
        scriptTag.onload = () => {
            setScriptLoadSuccessfully(true);
            onScriptLoadSuccessRef.current?.();
        };
        scriptTag.onerror = () => {
            setScriptLoadSuccessfully(false);
            onScriptLoadErrorRef.current?.();
        };
        document.body.appendChild(scriptTag);
    }, [])

    return scriptLoadedSuccessfully;
}

export default useLoadGsiScript;