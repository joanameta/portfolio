<?php

require_once "recaptchalib.php";

// your secret key
$secret = "6LdVeQgUAAAAAHWaadPV9nzgRzS_O0NkmOLfRtsg";
// empty response
$response = null;
// check secret key
$reCaptcha = new ReCaptcha($secret);

  // if submitted check response
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}

if ($response != null && $response->success) {
  if(isset($_POST['name']) && ($_POST['name'] != NULL) && isset($_POST['email']) && ($_POST['email'] != NULL)) {
     $from_name = $_POST['name'];
     $from_email = $_POST['email'];
     $message = $_POST['message'];
     $to_email = "konradd1991@gmail.com";
     $title = "Konrad Sakowski Portfolio - formularz";

     $messageform = "";
     $messageform .= "Imie i nazwisko: " . $from_name . "\n";
     $messageform .= "Email: " . $from_email . "\n" . "\n";
     $messageform .= "Wiadomość: " . $message . "\n";

     $sukces = mail($to_email, $title, $messageform, "Od: <$from_email>");
     if ($sukces){
       echo '<p class="succes">Dzięki za wiadomość! Do usłyszenia</p>';			}
     else{
       echo "<p>Upewnij się, że formularz został wypełniony poprawnie</p>";
     }
   }
 } else {
   echo "<p>Zweryfikuj czy nie jesteś robotem</p>";
 }
?>
