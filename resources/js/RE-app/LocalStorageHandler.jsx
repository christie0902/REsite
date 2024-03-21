import React, { useContext, useEffect } from "react";
import Context from "./store/Context";

const LocalStorageHandler = () => {
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        const sessionData = localStorage.getItem("session");
        if (sessionData) {
            try {
                const session = JSON.parse(sessionData);
                dispatch({
                    type: "state/recover",
                    payload: session,
                });
            } catch (error) {
                console.error("Failed to parse session data", error);
            }
        }
    }, [dispatch]);

    useEffect(() => {
        try {
            const session = {
                cart: state.cart,
                customizerState: state.customizerState,
                currency: state.currency,
                total: state.total,
            };
            localStorage.setItem("session", JSON.stringify(session));
        } catch (error) {
            console.error("Failed to save session data", error);
        }
    }, [state.cart, state.customizerState, state.currency, state.total]);
    return null;
};

export default LocalStorageHandler;
