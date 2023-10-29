import "./style.css"

const mainNav = document.querySelector('.main-nav');
mainNav.style.overflowX = 'auto';
mainNav.firstElementChild.style.flexWrap = 'nowrap';

const mainNavItems = mainNav.querySelectorAll('ul li');

const moreMenuItem = document.querySelector('.nav__more-item');
moreMenuItem.style.display = 'block';

const moreMenuLink = moreMenuItem.querySelector('a');
const secondaryNav = document.querySelector('.secondary-nav');
const secondaryNavItems = document.querySelectorAll('.secondary-nav__element')

moreMenuLink.addEventListener("click", (e) => {
    e.preventDefault();

    const expanded = moreMenuLink.getAttribute('aria-expanded') === 'true' || false;
    moreMenuLink.setAttribute('aria-expanded', !expanded);

    const open = secondaryNav.style.display === 'flex' || false;
    secondaryNav.style.display = open ? 'none' : 'flex';
    
    if(!open){
        var firstVisibleItem = secondaryNav.querySelector('.secondary-nav__list li a')
        firstVisibleItem.focus();
    }

})

moreMenuLink.addEventListener('keydown', function (e) {
    console.log(e.code)
    if (e.code === 'Space') {
      e.preventDefault();
      moreMenuLink.click();
    }
});

secondaryNav.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      e.preventDefault();
      moreMenuLink.setAttribute('aria-expanded', false);
      secondaryNav.style.display = 'none';
      moreMenuLink.focus();
    }
})

for(let item of secondaryNavItems){
    item.style.display = 'none';
}

function isInViewport(element, viewport) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (viewport.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (viewport.innerWidth || document.documentElement.clientWidth - 110)
    );
}


window.addEventListener('resize', ()=>{
    for(let item of mainNavItems){
        if(!isInViewport(item, document.querySelector('.main-nav ul'))){
            item.style.visibility = 'hidden';
            for(let secondItem of secondaryNavItems){
                if(secondItem.getAttribute('data-index') == item.getAttribute('data-index')){
                    secondItem.style.display = 'block';
                }
            }
        }
        if(isInViewport(item, document.querySelector('.main-nav ul'))){
            item.style.visibility = 'visible';
            for(let secondItem of secondaryNavItems){
                if(secondItem.getAttribute('data-index') == item.getAttribute('data-index')){
                    secondItem.style.display = 'none';
                }
            }
        }
    }
})

window.addEventListener('load', () => {
    for(let item of mainNavItems){
        if(!isInViewport(item, document.querySelector('.main-nav ul'))){
            item.style.visibility = 'hidden';
            for(let secondItem of secondaryNavItems){
                if(secondItem.getAttribute('data-index') == item.getAttribute('data-index')){
                    secondItem.style.display = 'block';
                }
            }
        }
        if(isInViewport(item, document.querySelector('.main-nav ul'))){
            item.style.visibility = 'visible';
            for(let secondItem of secondaryNavItems){
                if(secondItem.getAttribute('data-index') == item.getAttribute('data-index')){
                    secondItem.style.display = 'none';
                }
            }
        }
    }
})