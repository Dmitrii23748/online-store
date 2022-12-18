export const listenerHrefId: () => number = () => {
    const urlStr: string[] = window.location.href.split('/');
    const numberUrlId: number = +urlStr[urlStr.length - 1];
    return numberUrlId
}