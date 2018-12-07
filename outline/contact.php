<?php
    include_once "info-head.php";
?>
    <script src="contact.js"></script>
<?php
    include_once "info-nav.php";
?>
    <div id="email-form">
        <form id="mail-form" action="./php/mail.php" method="POST">
            <input class="inputs"id="first" type="text" name="first" placeholder="First Name">
            <input class="inputs"type="text" name="last" placeholder="Last Name">
            <input class="inputs"type="text" name="business" placeholder="Business">
            <input class="inputs"type="email" name="email" required placeholder="Email Address">
            <textarea class="inputs" name="message" id="email-message" placeholder="Message"cols="30" rows="1"></textarea>
            <button type="submit" name="submit" id="submit">Send</button>
            
        </form>
        
    </div>
<?php
    include_once "info-footer.php";

?>