<?php
/**
 * Notynox Engineering — contact form handler.
 *
 * Receives a POST from the contact form and emails it to the company inbox
 * using PHP's mail() function (available on virtually all cPanel hosting).
 * On success it redirects back to /contact/?sent=1, on failure ?error=1.
 *
 * To change the recipient, edit $TO below.
 */

$TO      = 'notynox.engineering@gmail.com';
$SUBJECT = 'New enquiry from notynox.com';

function back($status) {
    header('Location: /contact/?' . $status . '=1');
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    back('error');
}

// Honeypot: real users never fill this hidden field
if (!empty($_POST['_gotcha'])) {
    // Silently pretend success for bots
    back('sent');
}

// Collect and sanitise input
function clean($key) {
    return isset($_POST[$key]) ? trim(strip_tags($_POST[$key])) : '';
}

$name     = clean('name');
$company  = clean('company');
$email    = clean('email');
$phone    = clean('phone');
$service  = clean('service');
$location = clean('location');
$message  = clean('message');

// Basic validation
if ($name === '' || $email === '' || $message === '' ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    back('error');
}

// Build the email body
$body  = "New enquiry from the Notynox website\n";
$body .= "----------------------------------------\n\n";
$body .= "Name:      $name\n";
$body .= "Company:   $company\n";
$body .= "Email:     $email\n";
$body .= "Phone:     $phone\n";
$body .= "Service:   $service\n";
$body .= "Location:  $location\n\n";
$body .= "Message:\n$message\n";

// Headers — send from a same-domain address, reply-to the enquirer
$domain  = isset($_SERVER['HTTP_HOST']) ? preg_replace('/^www\./', '', $_SERVER['HTTP_HOST']) : 'notynox.com';
$headers  = 'From: Notynox Website <no-reply@' . $domain . ">\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (@mail($TO, $SUBJECT, $body, $headers)) {
    back('sent');
} else {
    back('error');
}
