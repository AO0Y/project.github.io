const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('#feedback');
const rating = form.querySelector('input[name="rating"]:checked');
const email = form.querySelector('#email');
const submitBtn = form.querySelector('button');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  
  const feedbackValue = textarea.value.trim();
  const ratingValue = rating ? rating.value : null;
  const emailValue = email.value.trim();
  
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(emailValue);
  
  if (feedbackValue === '') {
    alert('Please enter your feedback!');
  } else if (!ratingValue) {
    alert('Please rate our service!');
  } else if (!isValidEmail) {
    alert('Please enter a valid email address!');
  } else {
  
    const wordCount = feedbackValue.split(' ').filter(word => word !== '').length;
    
    alert(`Thank you for your feedback!\n\nRating: ${ratingValue}\nEmail: ${emailValue}\nWord count: ${wordCount}`);
    
   
    form.reset();
  }
});
