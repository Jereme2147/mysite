<?php
    $contact = '
    <div id="contact-icons">
        <p>828-898-2942</p>
        <p>jereme.daniels@gmail.com</p>
        <i class="fab fa-twitter">  @jd2147</i>
        <!-- <i class="fas fa-phone">828-898-2942</i>
        <i class="fas fa-envelope">jereme.daniels@gmail.com</i>
        <i class="fab fa-twitter"></i> -->
    </div>
    <div id="contact-stuff">
        <p>Fill out the form below to send us a message. Alternatively call or use the provided links. 
             We will be in contact quickly. </p>
    </div>
    <div id="email-form">
        <form id="mail-form" action="./php/mail.php" method="POST">
            <input class="inputs"id="first" type="text" name="first" placeholder="First Name">
            <input class="inputs"type="text" name="last" placeholder="Last Name">
            <input class="inputs"type="text" name="business" placeholder="Business">
            <input class="inputs"type="email" name="email" required placeholder="Email Address">
            <textarea class="inputs" name="message" id="email-message" placeholder="Message"cols="30" rows="1"></textarea>
            <button type="submit" name="submit" id="submit">Send</button>
            
        </form>
        
    </div>';
