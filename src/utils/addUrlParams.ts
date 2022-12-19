export const addUrlParams = (paramKey: string, paramValue: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(paramKey, paramValue);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
}

export const deleteUrlParams = (paramKey: string) => {
    const params = new URLSearchParams(window.location.search);
    params.delete(paramKey);
    window.history.replaceState({}, '', `${location.pathname}${location.hash}`);
}

