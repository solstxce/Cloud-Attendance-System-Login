/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
   const input = document.getElementById(inputPass),
         iconEye = document.getElementById(inputIcon)
         
   iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
           // Switch to text
           input.type = 'text'

           // Add icon
           iconEye.classList.add('ri-eye-line')
           // Remove icon
           iconEye.classList.remove('ri-eye-off-line')
       }else{
           // Change to password
           input.type = 'password'

           // Remove icon
           iconEye.classList.remove('ri-eye-line')
           // Add icon
           iconEye.classList.add('ri-eye-off-line')
       }
   })
}
// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');
//     const inputEmail = document.getElementById('input-email');

//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent default form submission

//         const cardId = inputEmail.value;
//         const apiUrl = `http://localhost:8000/process/?card_id=${cardId}`;

//         fetch(apiUrl)
//             .then(response => response.text())
//             .then(data => {
//                 // Display the API response
//                 console.log(data);
//                 // You can also update the UI with the response data if needed
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const inputEmail = document.getElementById('input-email');
    const successMessage = document.getElementById('successMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const cardId = inputEmail.value;
        const apiUrl = `https://zero0.tech/process/?card_id=${cardId}`; // Use the proxy path

        fetch(apiUrl)
            .then(response => response.text())
            .then(data => {
                // Display the success message
                successMessage.textContent = 'Success!';
                successMessage.classList.add('show');

                // Hide the success message after 3 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                    successMessage.textContent = '';
                }, 3000);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
showHiddenPass('input-pass','input-icon')