document.addEventListener('DOMContentLoaded', function() {
    var sectionHeaders = document.querySelectorAll('section h2');

    sectionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            var sectionContent = this.nextElementSibling;
            if (sectionContent.style.display === 'none') {
                sectionContent.style.display = 'block';
            } else {
                sectionContent.style.display = 'none';
            }
        });
    });
});