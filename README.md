Are you safe?

Aplikacja zakłada stworzenie prostej strony internetowej stworzonej dla alergików aby można było szybko uzyskać informacje na temat tego czy nalezałoby zażyć danego dnia jakieś leki? Strona miałaby zbierać informacje na temat użytkoników odnośnie ich uczuleń na dane pyłki i za pomocą API sprawdzać poziom pylenia w danym dniu. Aplikacja webowa będzie posiadać Stronę logowania, rejestracji, edycji danych użytkownika oraz strony informacyjne na temat danego dnia i stanu pyłków. Wykorzystanymi technologami będzie serverless AWS Lambda

    Projektowanie struktury:

    Frontend: Rejestracja / Logowanie przy wykorzystaniu AWS Cognito do zarządzania użytkownikami. Edycja profilu (zapisywanie informacji na temat uczuleń użytkownika). Strona główna z informacjami o stanie pyłków. Backend: Funkcje Lambda dla różnych zadań (np. aktualizacja profilu, pobieranie informacji o stanie pyłków itp.).

    Realizacja:

    Rejestracja / Logowanie: Skonfigurowanie AWS Cognito, aby umożliwić użytkownikom rejestrację i logowanie. Po zalogowaniu, użytkownik otrzymuje token JWT, który będzie używany do autoryzacji w innych częściach aplikacji.

    Edycja profilu: Stwórzenie formularzu na frontendzie, który pozwala użytkownikowi zapisywać jego uczulenia. Funkcja Lambda zapisuje te informacje w bazie danych (np. AWS DynamoDB).

    Pobieranie informacji o stanie pyłków: Skonfiguruj funkcję Lambda, aby korzystała z API dostarczającego informacje o poziomie pylenia ( znaleźienie odpowiedniego źródła danych ?). Na podstawie danych z API oraz informacji o uczuleniu użytkownika, funkcja może zwrócić odpowiednie rekomendacje (np. "Zażyj lek", "Pyłki na niskim poziomie").

    Bezpieczeństwo:

    Używanie bezpiecznych metod autoryzacji i autentykacji. Zabezpieczenie funkcje Lambda, aby dane były dostępne tylko dla autoryzowanych użytkowników (za pomocą tokenów JWT i IAM). Regularna aktualizacja wszystkich bibliotek i zależności.

    Deployment:

    AWS Lambda współpracuje z API Gateway, co umożliwia łatwe wystawienie funkcji jako punktów końcowych API. Wykorzystanie AWS S3 do przechowywania plików statycznych frontendu (HTML, CSS, JavaScript). Zintegrowanie wszystkiego za pomocą AWS CloudFormation lub Serverless Framework, w celu uproszczenia procesu wdrażania.

    Monitorowanie i skalowanie:

    Skonfigurowanie CloudWatch, aby monitorować działanie funkcji Lambda i być na bieżąco z wszelkimi problemami. AWS Lambda automatycznie skaluje się w zależności od obciążenia, więc nie trzeba martwić się o skalowanie infrastruktury.

Końcowy produkt będzie aplikacją webową dostosowaną do potrzeb alergików, której działanie będzie oparte na serverless i chmurze AWS.