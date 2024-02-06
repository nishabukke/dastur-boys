$(document).ready(function() {

    $('#calendar').fullCalendar({
      //locale: 'zh-cn',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      defaultDate: new Date(),
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Career Guidance and Counselling for Std. 9 & 10 by Col. Uday Jagavkar',
          start: '2023-01-16'
        },
        {
          title: 'Students Medical Check Up by Jehangir Medical Doctors',
          start: '2023-01-18'
        },
        {
          id: 999,
          title: 'Funathon - Sports Week',
          start: '2023-01-21',
          end: '2023-01-25'
        },
        {
          title: ' Republic Day',
          start: '2023-01-26'
        },
        {
          title: 'Students and Parents Session on Cyber Crime by ASI Kadir Deshmukh',
          start: '2023-01-30'
        },
        {
          title: 'Investiture Ceremony & Computer Day',
          start: '2023-02-03'
        },
        {
          title: 'SSC Farewell',
          start: '2023-02-04'
        },
        {
          title: 'Pune District East-West Taluka Wise Golden Jubilee Science Exhibition Our School Won First Prize in the Teachers and Students Category',
          start: '2023-02-09'
        },
        {
          title: 'School Science Exhibition',
          start: '2023-02-28'
        },
        {
          title: 'NDA Visit on the Occasion of 144th Passing Out Parade',
          start: '2023-05-28'
        },
        {
          title: 'International Yoga Day',
          start: '2023-06-21'
        },
        {
          title: 'Cyber Security and Awareness Session',
          start: '2023-07-06'
        },
        {
          title: 'Environment Day',
          start: '2023-07-07'
        },
        {
          title: 'English Day',
          start: '2023-07-24'
        },
        {
          title: 'Independence Day',
          start: '2023-08-15'
        },
        {
          title: 'Teachers Day',
          start: '2023-09-05'
        },
        {
          title: ' Inter - School Science Exhibition and Hindi Day',
          start: '2023-09-14'
        },
        {
          title: 'English, Marathi and Hindi Elocution',
          start: '2023-09-15',
          end: '2023-09-26'
        },
        {
          title: 'Aadit Wagh from Std. 9th B Won Cash Prize of Rs. 5000 /- and Certicicate in Mahatma Gandhi Essay Writing Competition',
          start: '2023-10-02'
        },
        {
          title: 'Birth Centenery Year of Lt.Col. Ardeshir Tarapore PVC (Ex student 1923 - 1965) ',
          start: '2023-10-06'
        },
        {
          title: 'Reading Inspiration Day and World Mental Health Day',
          start: '2023-10-13'
        }
      ]
    });

  });



  
// Open the Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
    // var mainContainer = document.getElementById('top_header');
    //   mainContainer.style.display = 'none';
  }
  
  // Close the Modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    // var mainContainer = document.getElementById('top_header');
    // mainContainer.style.display = 'block';
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n, slideId) {
    showSlides(slideIndex += n, slideId);
  }
  
  // Thumbnail image controls
  function currentSlider(n,slideId) {
    showSlides(slideIndex = n, slideId);
  }
  
  function showSlides(n, slideId) {
    var i;
    var slides = document.getElementsByClassName(slideId);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
 