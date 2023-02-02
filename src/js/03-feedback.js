// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email 
// і message, у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок
// "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
//  заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями 
// email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.


import throttle from 'lodash.throttle';
// import '../css/common.css';
// import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form  textarea'),
  input: document.querySelector ('.feedback-form input' )
  
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', onFormInput )

populateTextarea();

const formData = {};

function onFormInput (event) {

  formData[event.target.name] = event.target.value;

}

function onTextareaInput(event) {
     
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function onFormSubmit(event) {

    event.preventDefault();

    console.log(formData);
    
    event.currentTarget.reset();
 
    localStorage.removeItem(STORAGE_KEY);
  
 }

function populateTextarea() {

    
    try {

        const storagedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (storagedMessage) {
      refs.textarea.value = storagedMessage.message;
      refs.input.value = storagedMessage.email;
         }
    } catch (error) {
      console.log("parsing error");
    }
   
}

