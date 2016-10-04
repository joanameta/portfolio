<?php

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
?>
