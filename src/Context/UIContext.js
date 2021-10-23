import React, { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ( {children} ) => {

    const [loading, setLoading] = useState(false);

    return(
        <div>
            <UIContext.Provider value={{
                loading,
                setLoading
            }}>
                {children}
            </UIContext.Provider>
        </div>
    )
}