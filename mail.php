<?php
require 'claves.php';

require __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer-master/src/SMTP.php';
require __DIR__ . '/PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
//contacto  !&YaW{0dJv9@   contacto@iestptrujillo.edu.pe



try {
    /* 1) Configuración del servidor */
    $mail->isSMTP();
    $mail->Host       = $HostCorreo;   // ← host corporativo
    $mail->Port       = 465;                    // 465 para SSL, 587 para STARTTLS
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // 'ssl'
    // Si tu TI indica STARTTLS:
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // 'tls'
    // $mail->Port = 587;

    $mail->SMTPAuth   = true;                   // La mayoría exige autenticación
    $mail->Username   = $UsuarioCorreo;
    $mail->Password   = $ClaveCorreo;

    $mail->CharSet = 'UTF-8';              // Codificación del mensaje
    $mail->Encoding = 'quoted-printable';

    $nombre = $_POST['nombre'] ?? '';
    $correo = $_POST['correo'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $programa = $_POST['programa'] ?? '';
    $mensaje = $_POST['mensaje'] ?? '';

    /* 2) Configuración de remitente y destinatario */
    $mail->setFrom($CorreoFrom, 'Instituto Trujillo');
    $mail->addAddress($CorreoTo, 'Instituto Trujillo');

    

    $asunto = "Nuevo mensaje del formulario de contacto";

    /* 3) Contenido */
    $mail->Subject = $asunto;

    $cuerpo = "Has recibido un nuevo mensaje del formulario de contacto:\n\n";
    $cuerpo .= "Nombre completo: $nombre\n";
    $cuerpo .= "Correo electrónico: $correo\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Programa de interés: $programa\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";



    $mail->Body    =  $cuerpo;
    $mail->isHTML(false);

    /* 4) Envío */
    $mail->send();


    $mail->clearAddresses();  // limpia destinatarios
    $mail->clearAttachments();

    $mail->addAddress($correo, $nombre);
    $mail->Subject = '¡Gracias por contactarnos!';
    $mail->Body    =
        "Hola $nombre:\n\n".
        "Hemos recibido tu mensaje sobre el programa $programa.\n".
        "Nos pondremos contacto contigo a la brevedad.\n\n".
        "Saludos cordiales,\nIntituto Trujillo";
    $mail->send();            // ← 2.º envío

//    echo 'Mensaje enviado correctamente.';
} catch (Exception $e) {
  //  echo "No se pudo enviar: {$mail->ErrorInfo}";
}

header("Location: index.html");
exit();
