✅ Documentation for the HTML + Version Control Project:

📄 Project Title: Responsive Landing Page
✅ Description:
A responsive landing page built with Tailwind CSS and FontAwesome icons. It showcases an about section, services, pricing, FAQ, contact form, embedded Google Map, and social media links with icons.

# tejirimakel.github.io

## ✅ Project Structure (Tree Diagram)

<!DOCTYPE html>
<html>
├── <head>
│   ├── <meta>
│   ├── <title>
│   ├── <script> (Tailwind)
│   └── <link> (FontAwesome)
├── <style> (Global styles)
└── <body>
    ├── <header>
    │   └── <nav>
    │       ├── <a> (Logo)
    │       └── <ul> (Navigation links)
    ├── <section id="home"> (Hero Section)
    │   └── <div> (Content)
    │       ├── <h1>
    │       ├── <p>
    │       └── <a> (CTA Button)
    ├── <main>
    │   ├── <section id="about">
    │   │   ├── <figure> (Image)
    │   │   └── <div> (Text + Buttons)
    │   ├── <section id="services">
    │   │   └── <div> (Service Cards with Icons)
    │   ├── <section> (Table / Price List)
    │   │   └── <table>
    │   ├── <section> (CTA Box)
    │   └── <section id="contact">
    │       ├── <div> (FAQs - Ordered List)
    │       └── <div> (Contact Form)
    ├── <a> (Back to Top Button)
    ├── <iframe> (Google Map Embed)
    └── <footer>
        ├── <p> (Copyright)
        └── <nav> (Social Links)

✅ Sections Breakdown

1. Head
Added Meta tags and title for SEO and responsive design.
Tailwind CSS CDN for styles.
FontAwesome icons CDN for icons.

2. Global Styles
Added a smooth scroll behavior to the html element for smooth scrolling.

3. Header & Navigation
Added a fixed navbar with smooth scrolling anchor links.
Included site text logo and navigation menus using an unordered list.

4. Hero Section
Fullscreen image background with text overlay.
Call-To-Action button to services section.

5. About Section
Added a flexbox for a responsive layout with image and descriptive text.
Added buttons to contact or learn more.

6. Services Section
Added Features four service cards including icons in a grid layout. 
🌐 Web Development
🎨 Graphic Design
🖌️ UI/UX Design
📈 SEO Optimization

7. Pricing / Table
Added a table which included th, td and tr.

8. Call-To-Action Section
Bold message encouraging the user to get started.

9. FAQs and Contact
FAQs listed as an ordered list.
Contact form (Name, Email, Message).

10. Back-to-Top Button
Added a href for bookmark to #home
Scrolls smoothly back to the hero section.

11. Google Map Embed
Interactive map showing the location using an iframe.

12. Footer
Added a Copyright
Social media links (Facebook, Twitter, Instagram)

✅ Technologies Used:
HTML5
Tailwind CSS
FontAwesome Icons
Google Maps Embed

✅ Accessibility Features:
Semantic HTML tags used (<header>, <main>, <section>, <footer>).
aria-label for Back-to-Top Button.
alt attributes on images for screen readers.