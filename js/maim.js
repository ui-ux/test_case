var data = {
    "avatar" : "./img/ava-1.svg",
    "nick" : "Nick Name",
    "identifier" : "# Matumbaman"
}

window.addEventListener('load', function() {
    var template = document.getElementById('template').innerHTML;
    var compiled_template = Handlebars.compile(template);
    var rendered = compiled_template(data);
    document.getElementById('main').innerHTML = rendered;

    var tl = new TimelineMax({});
    tl.fromTo("body", 3, {backgroundColor:"white"}, {backgroundColor:"black"});


    TweenMax.to(".avatar", 3, {y: -600, autoAlpha: 1, ease: Circ.easeOut});
    TweenMax.to(".nick", 3, {y: -600, autoAlpha: 1, ease: Circ.easeOut});
    TweenMax.to(".identifier", 3, {y: -600, autoAlpha: 1, ease: Circ.easeOut});
    TweenMax.to(".nick_name_content", 1, {x: 400, autoAlpha: 1, ease: Circ.ease});
    TweenMax.to(".identifier_content", 1, {x: 400, autoAlpha: 1, ease: Circ.ease});

    setTimeout(function(){ 
        TweenMax.to(".avatar", 1.5, {y: -1000, autoAlpha: 0, ease: Circ.easeOut});
        TweenMax.to(".nick", 1.5, {y: -1000, autoAlpha: 0, ease: Circ.easeOut});
        TweenMax.to(".identifier", 1.5, {y: -1000, autoAlpha: 0, ease: Circ.easeOut});
         }, 3000);
}, false);
