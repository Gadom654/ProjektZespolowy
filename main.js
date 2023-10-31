document.addEventListener("DOMContentLoaded", function() {
    
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const profileForm = document.getElementById('profileForm');

    if(registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = event.target.elements.username.value;
            const password = event.target.elements.password.value;
            const email = event.target.elements.email.value;

            // Tutaj dokonujemy faktycznej rejestracji za pomocą AWS Cognito
            // lub innej technologii, ale na razie po prostu wyświetlimy dane w konsoli
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Email:', email);
            
            alert('Rejestracja udana!'); // Tymczasowe potwierdzenie dla użytkownika
        });
    }

    if(loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = event.target.elements.username.value;
            const password = event.target.elements.password.value;

            // Analogicznie, tutaj można by dokonać faktycznego logowania za pomocą AWS Cognito
            console.log('Username:', username);
            console.log('Password:', password);
            
            alert('Logowanie udane!'); // Tymczasowe potwierdzenie dla użytkownika
    
        });
    }
    if(profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const username = event.target.elements.username.value;
            const email = event.target.elements.email.value;
            const allergy = event.target.elements.allergy.value;
    
            // W prawdziwej aplikacji tutaj byśmy dokonali aktualizacji danych w bazie danych lub za pomocą API.
            console.log('Nazwa użytkownika:', username);
            console.log('Email:', email);
            console.log('Informacje o alergiach:', allergy);
    
            alert('Profil zaktualizowany!'); // Tymczasowe potwierdzenie dla użytkownika
        });
    }
});
