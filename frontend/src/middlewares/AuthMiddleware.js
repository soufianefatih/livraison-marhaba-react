import {Navigate} from "react-router-dom";

export function isLogin() {
    return window.localStorage.getItem("login") ?? 0;
}

export function checkLoginBeforeRenderComponent(component,role, ifNotLoginRedirectToUrl = "/login") {
    let login = window.localStorage.getItem("login") ?? 0;

    if (login == 1 && role == 'admin') {
        return component;
    } else {
        return <Navigate to={ifNotLoginRedirectToUrl} />
    }
}

export function checkIfNotLoginBeforeRenderComponent(component, ifNotLoginRedirectToUrl = "/") {
    let login = window.localStorage.getItem("login") ?? 0;

    if (login == 0) {
        return component;
    } else {
        return <Navigate to={ifNotLoginRedirectToUrl} />
    }
}

// export function checkrole(component) {
//     let role = window.localStorage.getItem("role") ?? 0;

//      if (role == admin) {
//         return component;
//     } else {
//         return <Navigate to={ifNotLoginRedirectToUrl="/"} />
//     }
// }