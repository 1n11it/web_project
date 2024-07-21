# Minimalist

Minimalist is a sleek platform designed to highlight products or services in a clean and elegant manner. This project utilizes HTML, CSS, and JavaScript libraries to deliver a modern and professional design, complete with interactive features and smooth animations.

## Features

- **Hover Animations**: Dynamic hover effects on images to enhance the browsing experience.
- **Minimalist Design**: Clean and simple text layout for a sophisticated look.
- **Smooth Transitions**: Secondary page features a polished slide-up animation for a seamless experience.
- **Customizable Template**: Template format allows users to easily modify the product page to suit their needs.
- **Visual Interest**: Different images of influencers on each page add personality and engagement.

## Technologies Used

- HTML
- CSS
- JavaScript
  - [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll)
  - [GSAP](https://greensock.com/gsap/)
  - [Shery](https://github.com/aayushchouhan24/sheryjs/)

## Key Functions

### JavaScript Files

1. **File 1: Core Animations and Effects**
   - Initializes smooth scrolling with `LocomotiveScroll`.
   - Animates elements using `GSAP`.
   - Applies image effects with `Shery`.

   ```javascript
   const scroll = new LocomotiveScroll({
       el: document.querySelector('#main'),
       smooth: true
   });

   gsap.from(".cover", {
       stagger: .2,
       y: 10,
       duration: 2,
       opacity: 0,
   });

   Shery.textAnimate("#heading h1", {
       style: 2,
       y: 10,
       delay: 0.3,
       duration: 2,
       ease: "cubic-bezier(0.23, 1, 0.320, 1)",
       multiplier: 0.1,
   });
   ```

2. **File 2: Interactive Elements**
   - Manages hover effects and image transformations.
   - Controls page animations on click events.

   ```javascript
   Shery.imageEffect("#back", {
       style: 5,
       config: { /* Configuration for image effects */ },
       gooey: true,
   });

   var elems = document.querySelectorAll(".elem");
   elems.forEach(function(elem) {
       var h1s = elem.querySelectorAll("h1");
       var index = 0;
       var animating = false;
       document.querySelector("#main").addEventListener("click", function() {
           if (!animating) {
               animating = true;
               gsap.to(h1s[index], {
                   top: '-=100%',
                   ease: Expo.easeInOut,
                   duration: .9,
                   onComplete: function() {
                       gsap.set(this._targets[0], { top: "100%" });
                       animating = false;
                   },
               });
               index === h1s.length - 1 ? (index = 0) : index++;
               gsap.to(h1s[index], {
                   top: '-=100%',
                   ease: Expo.easeInOut,
                   duration: .9,
               });
           }
       });
   });
   ```

## Installation and Setup

To view or customize the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/1n11it/web_project.git
   ```
2. Navigate to the Minimalist Showcase project directory:
   ```bash
   cd web_project/minimalist
   ```
3. Open `index.html` in your preferred web browser to view the project locally.

## Live Demo

You can view the live version of Minimalist Showcase here: [Minimalist](https://minimalist-369.netlify.app/)

## Contributing

This is a personal project, but contributions are welcome. If you have suggestions or encounter any issues, feel free to open an issue or submit a pull request.

## Contact

For more information or queries, please visit the [repository](https://github.com/1n11it/web_project).
