"use strict";

const workModules = document.querySelectorAll('.work-module');

const $workGrid = $('.work-grid').masonry({
    itemSelector: '.work-module',
    columnwidth: 'work-grid-sizer',
    gutter: 30,
    fitWidth: true
});

$workGrid.imagesLoaded().progress(() => $workGrid.masonry('layout'));


// shows/hides the work module info panel
function toggleInfo() {
    const info = this.querySelector('.work-info');
    if (!info.classList.contains('active')) {
        info.classList.add('active');
    } else {
        info.classList.remove('active');
    }
}

// add mouseover event handlers for each work module
workModules.forEach(workModule => workModule.addEventListener('mouseover',  toggleInfo ));
workModules.forEach(workModule => workModule.addEventListener('mouseout',  toggleInfo ));



