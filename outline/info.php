<?php
    include_once "info-head.php";
?>
    <script src="info.js"></script>
<?php
    include_once "info-nav.php";
    include "./info-content/about-content.php";
    include "./info-content/contact-content.php";
    echo $about;
    echo $contact; 
    include_once "info-footer.php";

?>