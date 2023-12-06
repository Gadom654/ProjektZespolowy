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
    // Logika dla formularza logowania
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;

        var authenticationData = {
            Username: username,
            Password: password,
        };
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

        var userData = {
            Username: username,
            Pool: userPool // Zdefiniuj userPool zgodnie z konfiguracją AWS Cognito
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result) {
                console.log('Login successful!');
                window.location.href = 'update.html'; // Przekierowanie po udanym logowaniu
            },
            onFailure: function(err) {
                console.error(err.message || JSON.stringify(err));
                alert("Błąd logowania: " + err.message);
            }
        });
    });
}

// Logika dla formularza "Szybka porada"
if (document.getElementById('allergyForm')) {
    document.getElementById('allergyForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var allergies = document.querySelectorAll('input[name="allergies"]:checked');
        var advice = '';

        if (allergies.length === 0) {
            advice = 'Wszystko jest pod kontrolą. Pamiętaj jednak, że alergie mogą się rozwinąć w każdym wieku, więc bądź uważny na ewentualne objawy.';
        } else {
            var selectedAllergies = Array.from(allergies).map(function(el) { return el.value; });

            if (selectedAllergies.some(allergy => ["Pyłki", "Kurz", "Pleśń", "Łupież zwierzęcy"].includes(allergy))) {
                advice += 'Pamiętaj o regularnym zażywaniu leków antyhistaminowych, szczególnie w sezonie pylenia oraz o utrzymaniu czystości w domu, aby ograniczyć narażenie na alergeny.\n';
            }

            if (selectedAllergies.some(allergy => ["Alergie pokarmowe", "Alergie na leki"].includes(allergy))) {
                advice += 'Zawsze sprawdzaj skład produktów oraz informuj personel medyczny o swoich alergiach. W razie wystąpienia reakcji alergicznej, miej przy sobie leki przeciwhistaminowe.\n';
            }

            if (selectedAllergies.includes("Zmiany pogodowe")) {
                advice += 'Monitoruj prognozy pogody i planuj działania zgodnie z oczekiwanymi warunkami. W dniach o dużych zmianach ciśnienia atmosferycznego, możliwe są nasilone objawy alergii.\n';
            }

            if (selectedAllergies.includes("Ukąszenia owadów")) {
                advice += 'Unikaj miejsc, gdzie mogą przebywać owady i zawsze miej przy sobie autostrzykawkę z adrenaliną. W razie ukąszenia, niezwłocznie skontaktuj się z lekarzem.';
            }
        }

        alert(advice);
    });
}
