import {Navigate} from "react-router-dom";

export function isLogin() {
    return window.localStorage.getItem("login") ?? 0;
}
export function userrole() {
    return window.localStorage.getItem("role") ;
}

export function checkLoginBeforeRenderComponent(component, ifNotLoginRedirectToUrl = "/login") {
    let login = window.localStorage.getItem("login") ?? 0;
    let role = window.localStorage.getItem("role");

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


export function checkLoginRoleClient(component, ifNotLoginRedirectToUrl = "/login") {
    let login = window.localStorage.getItem("login") ?? 0;
    let role = window.localStorage.getItem("role");
    if (login == 1 && role == 'client') {
        return component;
    } else {
        return <Navigate to={ifNotLoginRedirectToUrl} />
    }
}

export function checkLoginRoleDelivery(component, ifNotLoginRedirectToUrl = "/login") {
    let login = window.localStorage.getItem("login") ?? 0;
    let role = window.localStorage.getItem("role");
    if (login == 1 && role == 'livreur') {
        return component;
    } else {
        return <Navigate to={ifNotLoginRedirectToUrl} />
    }
}


