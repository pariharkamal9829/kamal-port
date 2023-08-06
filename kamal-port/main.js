// auto type word
var typed = new Typed('#name', {
  strings: ['Kamlesh Parihar', 'WEB DEVELOPER', 'UI/UX DESIGNER', 'FREELANCER'],
  typeSpeed: 80,
  loop: true,
  backDelay: 1500,
  backSpeed: 40,
});










// -------------------Download Button Animation-----------
var btn = document.querySelector('#downloadBtn')

      function startDownload() {
        const btn = document.querySelector('.btn-layout');

        btn.addEventListener('click', function () {
          this.classList.add('is-active');

          // Simulate the download process
          setTimeout(function () {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = 'cv.pdf'; // Replace with the actual URL of your CV file
            link.download = 'cv.pdf'; // Specify the filename for the downloaded file

            // Simulate a click on the link element to trigger the download
            link.click();

            btn.classList.add('dl-completed');
            btn.classList.add('animation-ended');
          }, 1200);
        });
      }
      startDownload();


// ---------------------- Page Animation-----------

function revealOnce() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    var isRevealed = reveals[i].classList.contains("active");

    if (elementTop < windowHeight - elementVisible && !isRevealed) {
      reveals[i].classList.add("activat");
    }
  }
}

window.addEventListener("scroll", revealOnce);


// -------------------------Categrie Filler -------------------

var filterItems = document.querySelectorAll('.filters ul li');
var portfolioItems = document.querySelectorAll('.portfolio-item');

filterItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // Remove 'active' class from all filter buttons
    filterItems.forEach(function (item) {
      item.classList.remove('active');
    });

    // Add 'active' class to the clicked filter button
    this.classList.add('active');

    // Get the data-filter attribute value
    var data = this.getAttribute('data-filter');

    // Filter the portfolio items based on the selected category
    portfolioItems.forEach(function (item) {
      if (data === 'all' || item.classList.contains(data)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
