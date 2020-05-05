import React from "react";

export const withSuspense = (Component) => {  //Ленивая загрузка компанента

    return(props) => {
        return <React.Suspense fallback={<div style={{"margin": "20px"}}>Loading...</div>}>
            <Component {...props}/>
        </React.Suspense>
    }

}