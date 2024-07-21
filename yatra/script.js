const parallaxElement =document.querySelectorAll(".parallax");
const main =document.querySelector("main");

let xValue = 0, yValue = 0;
let rotateDegee = 0;

function update(cursorPosition){
    parallaxElement.forEach( el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * .1;

        el.style.transform = ` perspective(2300px) translateZ(${zValue * speedz}px)
        rotateY(${rotateDegee * rotateSpeed}deg)
        translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px)) `;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    if (timeline.isActive()) return;

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegee = (xValue / (window.innerWidth / 2)) * 20 ;
    update(e.clientX);
});

if(window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * .6}px`;
} else{
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

let timeline = gsap.timeline();

Array.from(parallaxElement)
.filter(el => !el.classList.contains("text"))
.forEach(el => {
    timeline.from(
        el, 
        {
            top: `${el.offsetHeight / 2 + parseFloat(el.dataset.distance)}px`,
            duration: 2.2,
            ease: "power3.out",
        },
        "start"
    );
})

timeline.from(
    ".text h1",
    {
        y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top,
        duration: 1,
        opacity: 0,
    },
    "1.8"
).from(
    ".text h2",
    {
        y:-120,
        opacity: 0,
        duration: 1,
    },
    "2"
).from(".hide",{
    opacity: 0,
    duration: 1,
},"2"
);
