 document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');

    const sections = [
        { name: 'Info', link: 'info.html' },
        { name: 'Experience', link: 'experience.html' },
        { name: 'Education', link: 'education.html' },
        { name: 'Skills', link: 'skills.html' },
        { name: 'Languages', link: 'languages.html' }
    ];

    const ul = document.createElement('ul');

    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = section.name;
        a.href = section.link; // Link to the new page
        a.target = '_blank'; // Opens the link in a new tab
        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.appendChild(ul);
});
