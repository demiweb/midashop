function helloConsole() {
    var staticText = 'Made with ❤️ by Demiweb';
    var staticUrl = '> https://demiweb-studio.com.ua/';
    var hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #000; padding:5px 0;', 'color: #fff; background: #ff5112; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        var title = '%c';

        for (var i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 56px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUxIiBoZWlnaHQ9IjM3IiBmaWxsPSJub25lIj4NCiAgICA8cGF0aCBkPSJNMTUuNzczIDIzLjI1OGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzQuOTk5Ljk3OCAwIDEuNzctLjMzMyAyLjM3My0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjAzLS42ODctMS4zOTUtMS4wMy0yLjM3My0xLjAzLS45NzkgMC0xLjc3LjM0My0yLjM3NCAxLjAzLS42MDQuNjY3LS45MDYgMS42NzYtLjkwNiAzLjAzIDAgMS4zNTMuMzAyIDIuMzczLjkwNiAzLjA2em0xLjI4IDUuNjg0Yy0yLjI0OCAwLTQuMDM5LS43NS01LjM3MS0yLjI0OS0xLjMxMi0xLjQ5OS0xLjk2OC0zLjY2NS0xLjk2OC02LjQ5NiAwLTIuODMyLjY1Ni00Ljk5NyAxLjk2OC02LjQ5NiAxLjMzMi0xLjUgMy4xMjMtMi4yNSA1LjM3Mi0yLjI1IDEuODExIDAgMy4yMTcuNjI1IDQuMjE2IDEuODc1aC4xNTZWNi43NjdoNS4xNTRWMjguNjNoLTQuNTNsLS40NjgtMS43MThoLS4xNTZjLTEuMTI0IDEuMzUzLTIuNTgyIDIuMDMtNC4zNzIgMi4wM3ptMjAuOTIzIDBjLTIuNzQ5IDAtNC44NzMtLjc1LTYuMzcyLTIuMjQ5LTEuNDc4LTEuNTItMi4yMTctMy42ODUtMi4yMTctNi40OTYgMC0yLjc3Ljc2LTQuOTE0IDIuMjgtNi40MzQgMS41Mi0xLjU0IDMuNjIzLTIuMzExIDYuMzA5LTIuMzExIDIuNTgxIDAgNC42MDEuODEyIDYuMDU5IDIuNDM2IDEuNDc4IDEuNjAzIDIuMjE3IDMuNjU0IDIuMjE3IDYuMTUzbC0uMTU2IDEuNzE3SDM0LjU0Yy40MTYgMS44NzQgMS41MSAyLjgxMSAzLjI4IDIuODExIDEuMjI4IDAgMi4xNzUtLjQxNiAyLjg0MS0xLjI0OWg1LjI3OWE3LjIxIDcuMjEgMCAwMS0uNzgxIDEuOTA1Yy0uMzU0LjU4My0uODMzIDEuMTc3LTEuNDM3IDEuNzgtLjU4My41ODMtMS4zNzQgMS4wNTItMi4zNzMgMS40MDYtMSAuMzU0LTIuMTI0LjUzLTMuMzczLjUzem0tMy40MzYtMTAuNjJoNi41NTljLS4xNjctLjY4Ni0uNTQyLTEuMjctMS4xMjUtMS43NDgtLjU2Mi0uNS0xLjI4LS43NS0yLjE1NS0uNzUtLjg5NSAwLTEuNjI0LjIzLTIuMTg2LjY4Ny0uNTYyLjQ1OS0uOTI2IDEuMDYyLTEuMDkzIDEuODEyek00OC44OTUgMjguNjNWMTEuNzY0aDQuNTI4bC40NjkgMS43MThoLjE1NmMuOTU4LTEuMzUzIDIuMjA3LTIuMDMgMy43NDgtMi4wMy43MjkgMCAxLjM4NC4xMTQgMS45NjcuMzQzLjYwNC4yMDkgMS4wNzMuNDggMS40MDYuODEyLjM1NC4zMzQuNjE0LjYxNS43OC44NDQuMTg4LjIyOS4zMTMuNDE2LjM3NS41NjJoLjE1N2MuMTA0LS4yMy4yOTEtLjUxLjU2Mi0uODQzLjI5MS0uMzM0LjgzMy0uNjk4IDEuNjI0LTEuMDk0Ljc5MS0uNDE2IDEuNjc2LS42MjQgMi42NTUtLjYyNCAxLjYyNCAwIDMuMDQuNTkzIDQuMjQ3IDEuNzggMS4yMjkgMS4xNjYgMS44NDMgMi44MSAxLjg0MyA0LjkzNXYxMC40NjJoLTUuMTU0di05LjUyNWMwLS45NzktLjIwOC0xLjcxOC0uNjI0LTIuMjE4LS40MTYtLjUtLjk5LS43NS0xLjcxOC0uNzUtLjY2NiAwLTEuMTk3LjI1LTEuNTkzLjc1LS4zOTUuNS0uNTkzIDEuMjQtLjU5MyAyLjIxOHY5LjUyNmgtNS4xNTN2LTkuNTI2YzAtLjk3OS0uMjA5LTEuNzE4LS42MjUtMi4yMTgtLjQxNi0uNS0uOTktLjc1LTEuNzE4LS43NS0uNjY2IDAtMS4xOTcuMjUtMS41OTMuNzUtLjM5NS41LS41OTMgMS4yNC0uNTkzIDIuMjE4djkuNTI2aC01LjE1M3ptMjcuNzg1IDBWMTEuNzY0aDUuMTU0VjI4LjYzSDc2LjY4em00LjY1NC0xOC44OTZjLS41Mi41Mi0xLjIxOC43OC0yLjA5My43OC0uODc0IDAtMS41NzItLjI2LTIuMDkyLS43OC0uNTItLjU0MS0uNzgxLTEuMjE4LS43ODEtMi4wMyAwLS44MTIuMjYtMS40NzguNzgtMS45OTkuNTIxLS41NDEgMS4yMTktLjgxMiAyLjA5My0uODEyLjg3NSAwIDEuNTcyLjI3IDIuMDkzLjgxMi41NDEuNTIuODEyIDEuMTg3LjgxMiAxLjk5OXMtLjI3IDEuNDg5LS44MTIgMi4wM3ptNi45MTQgMTguODk2TDgzLjcyIDExLjc2NGg1LjMxbDIuNDk4IDEwLjQ2MyAyLjY1NC0xMC40NjNoNC45OThsMi42NTQgMTAuNDYzIDIuNDk5LTEwLjQ2M2g1LjMwOWwtNC41MjggMTYuODY2aC01Ljc3OGwtMi42NTUtOS4zNy0yLjY1NSA5LjM3aC01Ljc3OHptMzAuNzY2LjMxMmMtMi43NDggMC00Ljg3Mi0uNzUtNi4zNzEtMi4yNDktMS40NzgtMS41Mi0yLjIxNy0zLjY4NS0yLjIxNy02LjQ5NiAwLTIuNzcuNzYtNC45MTQgMi4yOC02LjQzNCAxLjUyLTEuNTQgMy42MjItMi4zMTEgNi4zMDgtMi4zMTEgMi41ODIgMCA0LjYwMi44MTIgNi4wNTkgMi40MzYgMS40NzkgMS42MDMgMi4yMTggMy42NTQgMi4yMTggNi4xNTNsLS4xNTYgMS43MTdoLTExLjU1NmMuNDE2IDEuODc0IDEuNTA5IDIuODExIDMuMjc5IDIuODExIDEuMjI5IDAgMi4xNzYtLjQxNiAyLjg0Mi0xLjI0OWg1LjI3OWE3LjIyIDcuMjIgMCAwMS0uNzgxIDEuOTA1Yy0uMzU0LjU4My0uODMzIDEuMTc3LTEuNDM3IDEuNzgtLjU4My41ODMtMS4zNzQgMS4wNTItMi4zNzMgMS40MDYtMSAuMzU0LTIuMTI0LjUzLTMuMzc0LjUzem0tMy40MzUtMTAuNjJoNi41NTljLS4xNjctLjY4Ni0uNTQyLTEuMjctMS4xMjUtMS43NDgtLjU2Mi0uNS0xLjI4LS43NS0yLjE1NS0uNzUtLjg5NSAwLTEuNjI0LjIzLTIuMTg2LjY4Ny0uNTYyLjQ1OS0uOTI3IDEuMDYyLTEuMDkzIDEuODEyem0yMC41NyA0LjkzNmMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzMuOTk5Ljk3OSAwIDEuNzctLjMzMyAyLjM3NC0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjA0LS42ODctMS4zOTUtMS4wMy0yLjM3NC0xLjAzLS45NzggMC0xLjc2OS4zNDMtMi4zNzMgMS4wMy0uNjA0LjY2Ny0uOTA2IDEuNjc2LS45MDYgMy4wMyAwIDEuMzUzLjMwMiAyLjM3My45MDYgMy4wNnptMy40NjYgNS42ODRjLTEuNzkgMC0zLjI0OC0uNjc3LTQuMzcyLTIuMDNoLS4xNTZsLS40NjkgMS43MThoLTQuNTI4VjYuNzY3aDUuMTUzdjYuNTU5aC4xNTZjMS0xLjI1IDIuNDA1LTEuODc0IDQuMjE2LTEuODc0IDIuMjQ5IDAgNC4wMjkuNzUgNS4zNDEgMi4yNDggMS4zMzMgMS41IDEuOTk5IDMuNjY1IDEuOTk5IDYuNDk3cy0uNjY2IDQuOTk3LTEuOTk5IDYuNDk2Yy0xLjMxMiAxLjUtMy4wOTIgMi4yNDktNS4zNDEgMi4yNDl6bTE0LjAyLS45NjhjLS41NDEuNTQxLTEuMjA4LjgxMi0xLjk5OS44MTItLjc5MSAwLTEuNDU3LS4yNzEtMS45OTktLjgxMmEyLjc4NSAyLjc4NSAwIDAxLS44MTItMmMwLS43Ny4yNzEtMS40MjUuODEyLTEuOTY3YTIuNjY4IDIuNjY4IDAgMDExLjk5OS0uODQzYy43OTEgMCAxLjQ1OC4yODEgMS45OTkuODQzYTIuNjggMi42OCAwIDAxLjgxMiAxLjk2OGMwIC43Ny0uMjcxIDEuNDM2LS44MTIgMS45OTl6bTEwLjAzMy45NjhjLTEuMzc0IDAtMi41NzItLjE2Ny0zLjU5Mi0uNS0xLjAyLS4zNTQtMS44MTEtLjgzMy0yLjM3My0xLjQzNy0uNTYzLS42MDMtLjk4OS0xLjIyOC0xLjI4MS0xLjg3M2E2Ljk0NCA2Ljk0NCAwIDAxLS41NjItMi4xMjRoNS4zMDljLjA4NC40MTYuMzU0Ljc4LjgxMiAxLjA5My40NTguMzEyIDEuMDIxLjQ2OCAxLjY4Ny40NjggMS42NjYgMCAyLjQ5OC0uMzY0IDIuNDk4LTEuMDkzIDAtLjM1NC0uMjM5LS42MzUtLjcxOC0uODQzLS40NzktLjIwOC0xLjA4My0uMzQ0LTEuODExLS40MDZhMTUuMDU5IDE1LjA1OSAwIDAxLTIuMzEyLS40MDYgMTUuNDg3IDE1LjQ4NyAwIDAxLTIuMzQyLS43OGMtLjcwOC0uMzEzLTEuMzAxLS44MzQtMS43OC0xLjU2My0uNDc5LS43MjgtLjcxOC0xLjYzNC0uNzE4LTIuNzE3IDAtMS41NjEuNjM1LTIuODMxIDEuOTA1LTMuODEgMS4yNy0xIDMuMDI5LTEuNSA1LjI3OC0xLjUgMi40OTggMCA0LjM1Mi41NTMgNS41NTkgMS42NTYgMS4yMDggMS4wODMgMS45MDUgMi40MDUgMi4wOTMgMy45NjdoLTUuMzFjLS4wNDEtLjM1NC0uMjYtLjY0Ni0uNjU2LS44NzUtLjM3NC0uMjUtLjkzNy0uMzc1LTEuNjg2LS4zNzUtMS4yNDkgMC0xLjg3NC4zNjUtMS44NzQgMS4wOTMgMCAuMzM0LjIzOS41OTQuNzE4Ljc4MS40NzkuMTg4IDEuMDczLjMyMyAxLjc4MS40MDYuNzI4LjA2MyAxLjUwOS4yMDkgMi4zNDIuNDM4LjgzMy4yMDggMS42MDMuNDY4IDIuMzExLjc4LjcyOS4zMTMgMS4zMzMuODQ0IDEuODEyIDEuNTkzLjQ3OC43MjkuNzE4IDEuNjM1LjcxOCAyLjcxN2E0LjY3IDQuNjcgMCAwMS0uMzQ0IDEuNzhjLS4yMjkuNTYzLS42MTQgMS4xMjUtMS4xNTUgMS42ODctLjUyMS41NjItMS4zMjIgMS4wMS0yLjQwNSAxLjM0My0xLjA4My4zMzMtMi4zODQuNS0zLjkwNC41em0xNy40OTEtLjMxMmMtMS45OTkgMC0zLjQzNS0uNDE3LTQuMzEtMS4yNS0uODc0LS44NTQtMS4zMTItMi4xNTUtMS4zMTItMy45MDRWMTYuNDVoLTIuNjU0di00LjY4NWgyLjY1NGwuNzgxLTQuMzcyaDQuMzczdjQuMzcyaDMuOTA0djQuNjg1aC0zLjkwNHY2LjA5YzAgLjM5Ni4xMzUuNzI5LjQwNiAxIC4yNy4yNy42MDMuNDA2Ljk5OS40MDZoMi40OTl2NC42ODRoLTMuNDM2em0xMi4zMjMuMzEyYy0xLjY0NCAwLTMuMDUtLjU3My00LjIxNi0xLjcxOC0xLjE0NS0xLjE2Ni0xLjcxOC0yLjg4NC0xLjcxOC01LjE1M1YxMS43NjRoNS4xNTR2OS41MjZjMCAuOTM3LjIyOSAxLjY2Ni42ODcgMi4xODYuNDU4LjUyIDEuMTE0Ljc4MSAxLjk2Ny43ODEuNzkyIDAgMS40MjctLjI2IDEuOTA1LS43OC41LS41NDIuNzUtMS4yNy43NS0yLjE4N3YtOS41MjZoNS4xNTNWMjguNjNoLTQuNTI4bC0uNDY5LTEuNzE4aC0uMTU2Yy0xLjE4NyAxLjM1My0yLjY5NiAyLjAzLTQuNTI5IDIuMDN6bTE4LjQwNy01LjY4NGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzQuOTk5Ljk3OCAwIDEuNzctLjMzMyAyLjM3My0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjAzLS42ODctMS4zOTUtMS4wMy0yLjM3My0xLjAzLS45NzkgMC0xLjc3LjM0My0yLjM3NCAxLjAzLS42MDQuNjY3LS45MDYgMS42NzYtLjkwNiAzLjAzIDAgMS4zNTMuMzAyIDIuMzczLjkwNiAzLjA2em0xLjI4MSA1LjY4NGMtMi4yNDkgMC00LjA0LS43NS01LjM3Mi0yLjI0OS0xLjMxMi0xLjQ5OS0xLjk2OC0zLjY2NS0xLjk2OC02LjQ5NiAwLTIuODMyLjY1Ni00Ljk5NyAxLjk2OC02LjQ5NiAxLjMzMi0xLjUgMy4xMjMtMi4yNSA1LjM3Mi0yLjI1IDEuODExIDAgMy4yMTcuNjI1IDQuMjE2IDEuODc1aC4xNTZWNi43NjdoNS4xNTNWMjguNjNoLTQuNTI4bC0uNDY5LTEuNzE4aC0uMTU2Yy0xLjEyNCAxLjM1My0yLjU4MiAyLjAzLTQuMzcyIDIuMDN6bTEzLjExNC0uMzEyVjExLjc2NGg1LjE1M1YyOC42M2gtNS4xNTN6bTQuNjUzLTE4Ljg5NmMtLjUyLjUyLTEuMjE4Ljc4LTIuMDkyLjc4LS44NzUgMC0xLjU3Mi0uMjYtMi4wOTMtLjc4LS41MjEtLjU0MS0uNzgxLTEuMjE4LS43ODEtMi4wMyAwLS44MTIuMjYtMS40NzguNzgxLTEuOTk5LjUyMS0uNTQxIDEuMjE4LS44MTIgMi4wOTMtLjgxMi44NzQgMCAxLjU3Mi4yNyAyLjA5Mi44MTIuNTQxLjUyLjgxMiAxLjE4Ny44MTIgMS45OTlzLS4yNzEgMS40ODktLjgxMiAyLjAzem0xNy44MTUgMTYuOTI4Yy0xLjQ3OSAxLjUyLTMuNTUgMi4yOC02LjIxNiAyLjI4LTIuNjY1IDAtNC43MzYtLjc2LTYuMjE1LTIuMjgtMS40NzgtMS41Mi0yLjIxNy0zLjY3NS0yLjIxNy02LjQ2NXMuNzM5LTQuOTQ1IDIuMjE3LTYuNDY1YzEuNDc5LTEuNTIgMy41NS0yLjI4IDYuMjE1LTIuMjggMi42NjYgMCA0LjczNy43NiA2LjIxNiAyLjI4IDEuNDc4IDEuNTIgMi4yMTcgMy42NzUgMi4yMTcgNi40NjVzLS43MzkgNC45NDUtMi4yMTcgNi40NjV6bS04LjU4OS0zLjQwNGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzMuOTk5Ljk3OSAwIDEuNzctLjMzMyAyLjM3NC0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjA0LS42ODctMS4zOTUtMS4wMy0yLjM3NC0xLjAzLS45NzggMC0xLjc2OS4zNDMtMi4zNzMgMS4wMy0uNjA0LjY2Ny0uOTA2IDEuNjc2LS45MDYgMy4wMyAwIDEuMzUzLjMwMiAyLjM3My45MDYgMy4wNnoiDQogICAgICAgICAgZmlsbD0iIzAwMCI+PC9wYXRoPg0KPC9zdmc+);');
    } else {
        var title = 'demiweb';
        var banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        var styler = [];

        var symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}

helloConsole();


var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


let headerMenu = [...document.querySelectorAll('.header-menu > ul > li')];
let backDrop = document.querySelector('.backdrop');

function hoverHeaderMenu() {
    if (headerMenu.length) {
        headerMenu.forEach((btn) => {
            btn.addEventListener('mouseover', () => {
                backDrop.classList.add('active');
            });
            btn.addEventListener('mouseout', () => {
                backDrop.classList.remove('active');
            })
        })
    }
}

hoverHeaderMenu();


//swipers

let productSlider = [...document.querySelectorAll('.product-slider-main')];
let slcSlider2 = ''

function startProductSlider() {
    if (!productSlider.length) {

    } else {
        let charsSingle = [...document.querySelectorAll('.single-char')];
        let colorsSingle = [...document.querySelectorAll('.single-color')];


        productSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.main-product-slider .swiper');
            slcSlider2 = sldCont;
            let pagin = sld.querySelector('.dots');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            $(sldCont).slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: sldPrev,
                nextArrow: sldNext,
                lazyLoad: 'progressive',
                dots: true,
                dotsClass: 'dots',
                vertical: false,
                spaceBetween: 10,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
                            vertical: true,
                            verticalSwiping: true,
                            spaceBetween: 10,
                        }
                    },
                ]
            });
        })

    }
}

startProductSlider();


let homeBanner = [...document.querySelectorAll('.home-banner')];

function startHomeBanner() {
    if (!homeBanner.length) {

    } else {


        homeBanner.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let pagin = sld.querySelector('.progress-bar');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: {
                    delay: 3700,
                },
                spaceBetween: 20,
                pagination: {
                    el: pagin,
                    type: "progressbar",
                },


            });


        })

    }
}

startHomeBanner();


let productsSlider = [...document.querySelectorAll('.product-slider .product-slider__cont')];

function startProductSliders() {
    if (!productsSlider.length) {

    } else {


        productsSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.progress-bar');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                effect: 'slide',
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,


                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 15,
                breakpoints: {
                    767: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 35,
                    }
                },
                pagination: {
                    el: pagin,
                    type: "progressbar",
                },


            });


        })

    }
}

startProductSliders();


let productsLikes = [...document.querySelectorAll('.product-like .product-slider__cont')];

function startProductLikesSliders() {
    if (!productsLikes.length) {

    } else {


        productsLikes.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.progress-bar');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                effect: 'slide',
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,


                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 15,
                breakpoints: {
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1600: {
                        slidesPerView: 4,
                        spaceBetween: 35,
                    }
                },
                pagination: {
                    el: pagin,
                    type: "progressbar",
                },


            });


        })

    }
}

startProductLikesSliders();


let productsDopSlider = [...document.querySelectorAll('.product-dop-slider')];

function startProductDopSliders() {
    if (!productsDopSlider.length) {

    } else {


        productsDopSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                effect: 'slide',
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,


                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 15,

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },


            });


        })

    }
}

startProductDopSliders();


let productsSliderCart = [...document.querySelectorAll('.modal-cont .product-slider__cont')];

function startProductSlidersCart() {
    if (!productsSliderCart.length) {

    } else {

        productsSliderCart.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.progress-bar');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                effect: 'slide',
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,


                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 15,
                breakpoints: {
                    767: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                },
                pagination: {
                    el: pagin,
                    type: "progressbar",
                },


            });


        })


    }
}

startProductSlidersCart();


//swipers

//seo control

//search control

var srchIc = [...document.querySelectorAll('.search-block .ic')];


function searchControl() {
    if (srchIc.length) {
        srchIc.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.closest('.search-block').classList.toggle('open');


            })
        })
    }
}

searchControl();


//search control

let seoBlock = [...document.querySelectorAll('.seo-block')];

function seoControl() {
    if (seoBlock.length) {
        seoBlock.forEach((cont) => {
            let btn = cont.querySelector('.control-seo');
            let txt = cont.querySelector('.seo-text');

            let opn = btn.dataset.open;
            let cls = btn.dataset.close;

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (txt.classList.contains('open')) {
                    txt.classList.remove('open');
                    btn.innerHTML = cls;

                } else {
                    txt.classList.add('open');
                    btn.innerHTML = opn;
                }
            })
        })
    }
}

seoControl();

//seo control


// scroll animations
var anim = document.querySelectorAll('.anim');

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target;
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }
                    el.classList.add('done');
                    let txt = el.dataset.txt;
                    observer.unobserve(entry.target);


                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

//


let menuControl = [...document.querySelectorAll('.menu-item-has-children > a')];

function controlMenu() {
    if (menuControl.length) {
        menuControl.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    e.stopPropagation();

                    btn.closest('li').classList.toggle('open');
                }

            })
        })
    }
}

controlMenu();

let otherMenu = [...document.querySelectorAll('.header-top__menu--opener > span')];

function controlOtherMenu() {
    if (otherMenu.length) {
        otherMenu.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    e.stopPropagation();

                    btn.closest('.header-top__menu--opener').classList.toggle('open');
                }

            })
        })
    }
}

controlOtherMenu();

var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

//footer control

let footerColumnSpan = [...document.querySelectorAll('.footer-column > span')];

function controlFooterColumn() {
    if (footerColumnSpan.length) {
        footerColumnSpan.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.footer-column').classList.toggle('open');
            })
        })
    }
}

controlFooterColumn();
//footer control


//tabs

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

//tabs

//rating

function getRaty() {
    $('.rating-stars').each(function (index) {
        if ($(this).html() == '') {
            $(this).raty({
                readOnly: true,
                starHalf: '/catalog/view/theme/mida/img/star-full.svg',
                starOn: '/catalog/view/theme/mida/img/star-full.svg',
                starOff: '/catalog/view/theme/mida/img/star-clear.svg',
                hints: ['a', null, '', null, '', null]
            });
        }
    });
}

getRaty();

let startsRateModal = [...document.querySelectorAll('.rate .sg-rate')];

function hoverStarsRate(startsRateModal) {
    if (!startsRateModal.length) {

    } else {
        startsRateModal.forEach((st, k) => {
            let number = k + 1;
            st.addEventListener('mouseover', () => {
                st.classList.add('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('hover');
                }
            });
            st.addEventListener('mouseout', () => {
                st.classList.remove('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.remove('hover');
                }
            });
            st.addEventListener('click', () => {
                startsRateModal.forEach((st2) => {
                    st2.classList.remove('clicked');
                });
                st.classList.add('clicked');
                st.closest('.form').querySelector('.rating-input input').value = number;
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('clicked');
                }
            })
        })
    }
}


hoverStarsRate(startsRateModal);


//rating control

//rating

//faq
let faqItems = [...document.querySelectorAll('.single-faq .faq-head')];

function controlFaq() {
    if (faqItems.length) {
        faqItems.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                faqItems.forEach((btn2, l) => {
                    if (l !== k) {
                        btn2.closest('.single-faq').classList.remove('open');
                    }

                });
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}

controlFaq();

//faq


//personalopener
let historyItems = [...document.querySelectorAll('.personal-opener')];

function controlHistory() {
    if (historyItems.length) {
        historyItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.personal-single').classList.toggle('open');
            })
        })
    }
}

controlHistory();


//personalopener

//add-cart

let addCartBtn = [...document.querySelectorAll('.add-cart')];
let addedBlock = document.querySelector('.added-cart');

function blockAddCart() {
    if (addCartBtn.length) {
        addCartBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                addedBlock.classList.add('visible');

                setTimeout(() => {
                    addedBlock.classList.remove('visible');
                }, 5000)
            })

        });
        addedBlock.querySelector('.added-cart__bot a:not(.btn').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            addedBlock.classList.remove('visible');
        })
    }
}

blockAddCart();


//add-cart

//modal windows

//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {


            $('body').on('click', '.btn-mod' ,function(e){
                e.preventDefault();
                e.stopPropagation();
                let data = this.dataset.mod;
                if (document.querySelector('.modal-window.visible')) {
                    document.querySelector('.modal-window.visible').classList.remove('visible');
                }
                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');

                        mod.classList.add('visible');
                        if (addedBlock) {
                            addedBlock.classList.remove('visible')
                        }
                    }
                })
            });





            $('body').on('click', '.modal-close' ,function(e){
                if (this.closest('.added-cart')) {
                    this.closest('.added-cart').classList.remove('visible');
                } else {
                    this.closest('.modal-window').classList.remove('visible');
                    document.body.classList.remove('no-scroll');
                    if (this.closest('.modal-window').classList.contains('video')) {
                        this.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');

                        this.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                    }
                }
            });





            $('body').on('click',  '.backplate' ,function(e) {
                this.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

                if (this.closest('.modal-window').classList.contains('video')) {
                    this.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');
                    this.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                }
            });


        if (clsSecModal.length) {

                $('body').on('click',  '.modal-window .cls' ,function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.closest('.modal-window').classList.remove('visible');
                    document.body.classList.remove('no-scroll');
                    if (this.closest('.modal-window').classList.contains('video')) {
                        this.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');

                        this.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                    }
                });



        }
    }
}

controlModal();


//telephones


let indexNumber = '+38';

function getNewIndexNumber() {
    // console.log(document.documentElement.lang);
    if (document.documentElement.lang === 'ro-RO') {
        indexNumber = '+40';
    } else {
        indexNumber = '+38';
    }
}

getNewIndexNumber();
// let maskPhone = [...document.querySelectorAll('.phone-mask')];
let maskPhone2 = [...document.querySelectorAll('.input-wrap.input-tel')];

function getMaskPhone2() {
    if (maskPhone2.length) {
        [].forEach.call(document.querySelectorAll('.input-tel input'), function (input) {
            // console.log(input);
            // input.autocomplete = 'off';
            let keyCode;

            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                let pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                let matrix = `${indexNumber} (___)-___-__-__`,
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    newValue = matrix.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                    });
                i = newValue.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    newValue = newValue.slice(0, i);
                }
                let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function (a) {
                        return "\\d{1," + a.length + "}";
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
                if (event.type == "blur" && this.value.length < 5) this.value = "";
            }


            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", (e) => {
                e.stopPropagation();
                e.preventDefault();
            }, false);
            input.addEventListener("keydown", mask, false);


        });
    }
}

if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    // console.log("This is an iOS device.");
} else {

    // console.log("This is not an iOS device!");
}
// getMaskPhone2();
// $(".input-tel input").mask("+38(999) 999-9999");
//telephones
let zero = '0';
let tls = [...document.querySelectorAll(".input-tel input")];

var maskOptions = {
    mask: `{+38}(000)000-00-00`,
};


tls.forEach((tl) => {
    var mask = IMask(tl, maskOptions);
});
// $(".input-tel input").mask("+38(999) 999-9999");
//open cabinet menu

let btnCabOpen = [...document.querySelectorAll('.acc-h-btn')];

function controlCabinetOpen() {
    if (btnCabOpen.length) {
        btnCabOpen.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.personal-account__left').classList.toggle('open');
            })
        })
    }
}

controlCabinetOpen();

//open cabinet menu
//open orders list

$(document).on('click', '.quantity__button--minus', function (e) {
    var t = $(this).next().find('input').val();
    t > 1 && $(this).next().find('input').val(+t - 1);


    return false;
});
$(document).on('click', '.quantity__button--plus', function (e) {
    var t = $(this).prev().find('input').val();
    $(this).prev().find('input').val(+t + 1);

    return false;
});


//map mag contacts-maps__single
let allMapsDots = [...document.querySelectorAll('.contacts-maps__single')];
let addressCoord = [];

let selectedCity = document.querySelector('.contacts-maps__select select option[selected]');

let cordsSelected = [];

function goSelCoords() {
    if (selectedCity) {
        cordsSelected[0] = selectedCity.dataset.locationY;
        cordsSelected[1] = selectedCity.dataset.locationX;
    }
}

goSelCoords();

function ifHaveDots(x = cordsSelected[1], y = cordsSelected[0], zoom = 10) {
    if (!allMapsDots.length) {

    } else {
        addressCoord = [];

        addressCoord = addressCoord2;
        // console.log(addressCoord);
        createMapBuy(x, y, zoom);
    }
}


let numberOfChanges = 0;

ifHaveDots();

function createMapBuy(x, y, zoom) {
    function createNewMap() {
        let divMap = document.createElement('div');
        divMap.id = 'mapid';
        document.querySelector('.map-container').appendChild(divMap);
    }

    // console.log(addressCoord);
    let mapDiv = document.querySelector('#mapid');

    if (!mapDiv) {
        createNewMap();
    } else {
        mapDiv.remove();
        createNewMap();
    }

    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
        }),

        latlng = L.latLng(x, y);

    var map = L.map('mapid', {center: latlng, zoom: zoom, layers: [tiles]});


    var greenIcon = L.icon({
        iconUrl: '/catalog/view/theme/mida/img/leaf-green.svg',
        shadowUrl: '/catalog/view/theme/mida/img/leaf-shadow.svg',

        iconSize: [35, 50], // size of the icon
        shadowSize: [0, 0], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var markers = L.markerClusterGroup();
    let markersPos = [];

    for (var i = 0; i < addressCoord.length; i++) {
        var a = addressCoord[i];
        var title = a[2];
        var marker = L.marker(new L.LatLng(a[0], a[1]), {title: title, icon: greenIcon});
        marker.bindPopup(title);
        markers.addLayer(marker);
        markersPos.push(marker);
    }

    map.addLayer(markers);
    allMapsDots = [...document.querySelectorAll('.contacts-maps__single')];
    allMapsDots.forEach((ot, i) => {

        ot.addEventListener('click', (e) => {
            e.preventDefault();
            $('html,body').animate({scrollTop: $('#mapid').offset().top - 200}, 600);


            allMapsDots.forEach((rk) => {
                rk.classList.remove('active');
            });
            ot.classList.add('active');
            // let idMap = document.getElementById('mapid').getBoundingClientRect().top;


            // e.preventDefault();
            let xCoord1 = Number(ot.dataset.locationX);
            let yCoord1 = Number(ot.dataset.locationY);

            map.setView([xCoord1, yCoord1], 18);
            map.panTo(new L.LatLng(xCoord1, yCoord1));
            markersPos[i].openPopup();
        })
    })
}

$('.contacts-maps__select .select-wrap select').niceSelect();

let moveOnMapCity = [...document.querySelectorAll('.contacts-maps__select .nice-select .list li')];

function moveOnMapSelect() {
    if (moveOnMapCity.length) {
        // console.log(moveOnMapCity);
        let allBigCities = [...document.querySelectorAll('.contacts-maps__city')];

        moveOnMapCity.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {


                let opt = [...document.querySelectorAll('.contacts-maps__select select option')][k];

                let zoom = 10;

                let xCoord1 = Number(opt.dataset.locationX);
                let yCoord1 = Number(opt.dataset.locationY);

                createMapBuy(xCoord1, yCoord1, zoom);

                allBigCities.forEach((btn2) => {
                    btn2.classList.remove('visible');
                });

                allBigCities[k].classList.add('visible');

            })
        })
    }
}


moveOnMapSelect();
//map mag


let rateBlk = [...document.querySelectorAll('.rate-blk')];

function scrollRateBlk() {
    if (rateBlk.length) {
        rateBlk.forEach((btn) => {
            btn.querySelector('a').addEventListener('click', (e) => {

                e.stopPropagation();
                e.preventDefault();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".product__comments").offset().top - 170
                }, 600);
            });

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".product__comments").offset().top - 170
                }, 600);
            })
        })
    }
}

scrollRateBlk();
var winNav = window.navigator;
var isChromium = winNav.userAgent.match("CriOS");


// console.log(isChromium);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
// console.log(isSafari);
// document.querySelector('.product-main-frame > p').innerHTML = winNav.userAgent;

function productPageAddMorePadding() {
    if (document.querySelector('.product-main-frame')) {
        // if (isChromium) {
        if (window.innerWidth < 767) {
            let pmf = document.querySelector('.product-main-frame');
            let sldrPl = document.querySelector('.main-product-slider');
            let headerHeight = header.offsetHeight;
            let windowHeight = window.innerHeight;

            let pmf2 = document.querySelector('.wrap-mob-blk');
            let pmf2Height = pmf2.offsetHeight;

            let prrPad = document.querySelector('.product-right');
            let st = prrPad.currentStyle || window.getComputedStyle(prrPad);
            let ptPr = st.paddingTop.match(/\d+/)[0];

            let style = pmf.currentStyle || window.getComputedStyle(pmf);
            let mt = style.marginTop.match(/\d+/)[0];


            let newMarginTop = Number(mt) + 35;
            // console.log(windowHeight);
            // console.log(mt);
            let mtTopNew = windowHeight - headerHeight - pmf2Height - ptPr - 5;
            let pbTopNew = Number(pmf2Height) + 5 + Number(ptPr);
            // console.log(pmf2Height);
            // console.log(ptPr);
            //
            // console.log(pbTopNew + ' =')
            // console.log(mtTopNew);
            pmf.style.marginTop = `${mtTopNew}px`;
            // console.log(ptPr);
            sldrPl.style.paddingBottom = `${pbTopNew}px`;

            // console.log('allo')
            // pmf.style.marginTop = `-${newMarginTop}px`;
            // document.querySelector('.product-main-frame > p').innerHTML = `${windowHeight} | ${headerHeight} | ${pmf2Height} | ${ptPr}`;
            // console.log(mt.match(/\d+/)[0]);

            $(slcSlider2).slick('slickGoTo', '0');
        }
    }


    // }
}

setTimeout(() => {
    productPageAddMorePadding();
}, 300);

let ellHeight = document.querySelector('.product-page');

function checkHeightOfElement() {
    if (ellHeight) {
        if (window.innerWidth > 767) {
            let prodRight = document.querySelector('.product-right');
            let h = ellHeight.offsetHeight;
            // console.log(h);

            prodRight.style.height = `${h}px`;
            window.addEventListener('resize', () => {
                h = ellHeight.offsetHeight;
                prodRight.style.height = `${h}px`;
            });
            window.onresize = () => {
                prodRight.style.height = `auto`;
                h = ellHeight.offsetHeight;
                prodRight.style.height = `${h}px`;
            }
        }

    }
}

checkHeightOfElement();

let lettersLinks = [...document.querySelectorAll('.link-to-letter')];

function toLetter() {
    if(lettersLinks.length) {
        lettersLinks.forEach((btn) => {
            let lnk = btn.dataset.id;

            let item = document.querySelector(`.letter-line#${lnk}`);

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(item).offset().top - 40
                }, 500);
            })

        })
    }
}
toLetter();

let multipleUploader = new MultipleUploader('#multiple-uploader').init({
    // input name sent to backend
    // form selector
    formSelector: "#form-upload",
    maxSize: 10,
    filesInpName: "files"
});

