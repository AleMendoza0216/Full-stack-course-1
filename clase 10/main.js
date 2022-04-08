

const myModal = document.getElementById('Modal 1')
const myInput = document.getElementById('Modal 2')

const validCredentials = {

    username: 'torterra@321',
    password: 'Werever123' 


  };
  
  const $username = document.getElementById('inUsername');
  const $password = document.getElementById('inPassword');
  const $submit = document.getElementById('submitBtn');
  const $private = document.getElementById('private');
  const $modal = document.getElementById('staticBackdrop');
  const $success = document.getElementById('success');
  const $error = document.getElementById('error');
  const $close = document.getElementById('closeBtn');
  const btn = document.getElementById('btn');

  const myCredentials = {
    username: null,
    password: null,
  };
  

const handleUsername = (event) => {
  console.log('value:', event.target.value);
  myCredentials.username = event.target.value;
  console.log(myCredentials);
};

const handlePassword = (event) => {
  console.log('value:', event.target.value);
  myCredentials.password = event.target.value;
  console.log(myCredentials);
};

const handleSubmit = () => {
  
  const username = myCredentials.username === validCredentials.username;
  console.log(username);
  const password = myCredentials.password === validCredentials.password;
  console.log(password);


  if (username && password) {
    console.log('permitir acceso');
    
   $private.classList.remove('disabled');
   console.log($private);
    console.log($modal)
    console.log($close);
    
    $success.classList.remove('d-none');
    
    setTimeout(() => {
      $success.classList.add('d-none');
      $close.click();
    }, 3000);
  } else {
    console.log('denegar access');
    
    $error.classList.remove('d-none');
    
    setTimeout(() => {
      $error.classList.add('d-none');
    }, 3000);
  }




};

 document.addEventListener('DOMContentLoaded', () => {
  $username.addEventListener('input', handleUsername);
  $password.addEventListener('input', handlePassword);
  $submit.addEventListener('click', handleSubmit);
});