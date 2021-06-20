const nav = document.querySelector('nav');
function debounce(func,delay = 100){
    let timeoutId;
    return arg => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func();
        },delay)
    }
}

const scrollNavStyle = debounce(() => {
    if(window.scrollY > 150){
            nav.style.opacity = 0.9;
        } else {
            nav.style.opacity = 1;
        }
},50)

window.addEventListener('scroll',
scrollNavStyle)

const scrollToElement = (el,offset,topOrBottom)=>{
    let pos;
    if(topOrBottom === 'top'){
        pos = el.getBoundingClientRect().top + window.pageYOffset - el.getBoundingClientRect().height * 0.2;
    } else if(topOrBottom === 'bottom'){
        pos = el.getBoundingClientRect().bottom + window.pageYOffset - offset;
    }
    window.scrollTo({
                top:pos,
                left: 0,
                behavior: 'smooth'
            });
    
}

nav.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.tagName === "A"){
        const el = document.querySelector(e.target.hash);
        scrollToElement(el,100,'top');
        
    }
})

