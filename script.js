// Select the project1 section and change the background color on mouseover
const project1Section = document.querySelector('#project');

projectSection.addEventListener('mouseover', function() {
projectSection.style.backgroundColor = 'blue';
});

projectSection.addEventListener('mouseout', function() {
projectSection.style.backgroundColor = 'pink';
});