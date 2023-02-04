import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  input: document.querySelector ('.feedback-form input' )
  
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


const formData ={};


populateTextarea();

function onFormInput(event) {
  
  formData[event.target.name] = event.target.value;
  
  const storagedData = JSON.parse(localStorage.getItem(STORAGE_KEY))

   localStorage.setItem( STORAGE_KEY,
    JSON.stringify({ ...storagedData, [event.target.name] : event.target.value  })
  );


}


function onFormSubmit(event) {

    event.preventDefault();

   
    event.currentTarget.reset();
 
    localStorage.removeItem(STORAGE_KEY);
  
 }

function populateTextarea() {

    
  try {
  const storagedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

refs.form.elements.email.value = storagedData?.email || '';
 refs.form.elements.message.value = storagedData?.message || '';
    
  
  }
   catch (error) {
      console.log("parsing error");
    }
}
  
// function onFormInput(e) {
//   formData[e.target.name] = e.target.value;


// }


// const dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_KEY));
// form.elements.email.value = dataFromLocalStorage?.email || '';
// form.elements.message.value = dataFromLocalStorage?.message || '';