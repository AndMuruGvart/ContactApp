import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export function useToken() {
    const [token, setToken] = useState<string>('');
    useEffect(() => {
        if (window.__token__) {
            setToken(window.__token__);
        }
     }, []);

     return([token])
}