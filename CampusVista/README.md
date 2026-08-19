# CampusVista – Student Campus Hub

CampusVista is a polished front-end internship project built with HTML5, CSS3 and Vanilla JavaScript. It presents one cohesive student campus hub where visitors can learn about campus facilities, student clubs, events, gallery photos and contact information.

## Internship Purpose

This project is created for a Full-Stack Development Internship front-end task submission. It demonstrates exactly three selected internship tasks in one professional website:

- TASK 1: Create a Basic HTML Web Page
- TASK 3: Create a Navigation Menu
- TASK 6: Build a Simple Image Slider

## Objectives

- Build a complete HTML5 website with semantic structure.
- Create a responsive sticky navigation menu with a working dropdown.
- Add a JavaScript image slider with controls, dots, captions and auto-play.
- Present campus information in a clean, modern and student-friendly design.
- Keep the project lightweight with no frameworks or backend.

## Features

- Hero section with internal navigation buttons.
- Welcome section with paragraphs, image, unordered list and ordered list.
- Campus information cards for facilities, library, sports and clubs.
- Facility cards for library, computer labs, innovation center, sports complex, cafeteria and student center.
- Student club section with five meaningful club descriptions.
- Upcoming events section with dates, locations and details buttons.
- Responsive image slider with five campus images, previous and next buttons, dots, counter, captions and auto-play.
- Contact section with email, phone and campus location links.
- Professional footer with quick links and social placeholder links.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

No React, Angular, Vue, Bootstrap, Tailwind CSS, jQuery, backend or database is used.

## Project Structure

```text
CampusVista/
|-- index.html
|-- css/
|   |-- style.css
|-- js/
|   |-- script.js
|-- images/
|   |-- campus-1.jpg
|   |-- campus-2.jpg
|   |-- campus-3.jpg
|   |-- campus-4.jpg
|   |-- campus-5.jpg
|-- documentation/
|   |-- project-report.md
|-- README.md
```

## TASK 1: Create a Basic HTML Web Page

Implemented in `index.html`.

- Uses a complete HTML5 document with `<!DOCTYPE html>`, `<html>`, `<head>` and `<body>`.
- Uses semantic elements including `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` and `<footer>`.
- Includes the title `CampusVista – Student Campus Hub`.
- Includes a hero section, welcome section, meaningful images with alt text, unordered list, ordered list and hyperlinks.
- Includes email, phone, campus location, internal section links and an external educational resource link.

## TASK 3: Create a Navigation Menu

Implemented in `index.html`, `css/style.css` and `js/script.js`.

- Sticky header with the CampusVista logo.
- Horizontal desktop navigation with Home, About, Campus, Clubs, Events, Gallery and Contact.
- Campus dropdown with Facilities, Library, Sports and Student Center.
- Mobile hamburger menu that opens and closes using Vanilla JavaScript.
- Dropdown works on desktop and mobile.
- Includes accessible buttons, `aria-label`, `aria-expanded`, keyboard focus states and Escape key support.

## TASK 6: Build a Simple Image Slider

Implemented in `index.html`, `css/style.css` and `js/script.js`.

- Slider contains five campus images.
- Includes previous button, next button, navigation dots, image counter and captions.
- Supports auto-play, pause on mouse enter, resume on mouse leave and keyboard arrow navigation.
- Loops correctly from last image to first image and first image to last image.
- Uses clear JavaScript functions: `showSlide()`, `nextSlide()`, `previousSlide()`, `startAutoPlay()`, `stopAutoPlay()` and `updateDots()`.

## How to Run

1. Open the `CampusVista` folder.
2. Open `index.html` in any modern browser.
3. No installation, build command or server is required.

## Browser Compatibility

Tested for modern browser support in:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

## Testing

The project was checked for:

- Homepage loading.
- Navigation links and internal anchors.
- Campus dropdown behavior.
- Mobile hamburger menu behavior.
- Image loading through local image paths.
- Slider previous and next controls.
- Slider dots and counter.
- Auto-play and looping behavior.
- Responsive layout at mobile, tablet and desktop widths.
- Keyboard navigation for menu and slider controls.
- No obvious console errors.
- No horizontal scrolling in the tested layout.

## Future Enhancements

- Add a real campus map.
- Add a searchable events list.
- Add a club registration form.
- Add dark mode.
- Add more gallery categories.

## Author

Faisal Iqbal
