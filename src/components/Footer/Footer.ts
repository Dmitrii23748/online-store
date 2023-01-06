export const footerBlock = () => {

    const footerBlock = document.createElement('div');

    const linkD = document.createElement('a');
    const linkA = document.createElement('a');
    const spanYear = document.createElement('span');
    const linkRS = document.createElement('a');

    const imgD = document.createElement('img');
    const imgA = document.createElement('img');
    const imgRS = document.createElement('img');

    const spanTitleD = document.createElement('span');
    const spanTitleA = document.createElement('span');

    footerBlock.classList.add('footer__block')
    linkD.classList.add('link');
    linkA.classList.add('link');
    linkRS.classList.add('link');
    linkRS.classList.add('link-rs');
    
    spanTitleD.classList.add('span-title');
    spanTitleA.classList.add('span-title');

    imgRS.classList.add('rs-school');
    imgRS.src = 'https://rs.school/images/rs_school_js.svg';
    imgRS.alt ='rs-school'

    linkD.href = 'https://github.com/Dmitrii23748';
    linkD.target = '_blank';
    linkA.href = 'https://github.com/antonbudetbezb';
    linkA.target = '_blank';
    linkRS.href = 'https://rs.school/js/';
    linkRS.target = '_blank';


    imgD.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR34HFVdWcJ8HtLo6hWVa0LW21w_qgBetGA&usqp=CAU';
    imgD.alt = 'github';
    imgA.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR34HFVdWcJ8HtLo6hWVa0LW21w_qgBetGA&usqp=CAU';
    imgA.alt = 'github';

    spanTitleD.textContent = 'Dmitrii23748';
    spanTitleA.textContent = 'Antonbudetbezb';
    spanYear.textContent = '2023';

    linkD.append(imgD, spanTitleD);
    linkA.append(imgA, spanTitleA);
    linkRS.append(imgRS);

    footerBlock.append(linkD, linkA, spanYear, linkRS);

    return footerBlock

}