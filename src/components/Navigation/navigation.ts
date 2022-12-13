
export const addNavigate = () => {
    const navBlock: string = `
        <nav class="navigate">
            <ul class="navigate-list">
                <li class="navigate-item">
                    <a href="#/" class="navigate-item__link">Main Page</a>
                </li>
                <li class="navigate-item">
                    <a href="#/cart" class="navigate-item__link">Cart Page</a>
                </li>
            </ul>
        </nav>
    `;

    const divNav = document.createElement('div');
    divNav.innerHTML = navBlock;
    return divNav;
}