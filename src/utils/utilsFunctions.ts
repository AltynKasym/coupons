export const hideShowHeader = (headerRef: any) => {
    
    const scrollPosition = (): number => document.documentElement.scrollTop;
    const classHideHas = () => headerRef.current?.classList.contains('header__body--hide');
    const offsetHideHeader = 180;
    let lastScroll: number = 0;

    window.addEventListener('scroll', () => {
        if(scrollPosition() > lastScroll && !classHideHas() && scrollPosition() > offsetHideHeader){
            headerRef.current.classList.add('header__body--hide');
        }
        if(scrollPosition() < lastScroll && classHideHas()){
            headerRef.current.classList.remove('header__body--hide');
        }

        lastScroll = scrollPosition();
    })
}