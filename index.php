<?php
// Reemplaza este correo por el tuyo
$destinatario = "felixpolobentura@gmail.com";

// Obtener datos del formulario
$nombre = $_POST['nombre'] ?? '';
$correo = $_POST['correo'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$programa = $_POST['programa'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Validar campos obligatorios
if (empty($nombre) || empty($correo) || empty($programa) || empty($mensaje)) {
    echo "Por favor completa todos los campos requeridos.";
    exit;
}

// Asunto del correo
$asunto = "Nuevo mensaje del formulario de contacto";

// Cuerpo del mensaje
$cuerpo = "Has recibido un nuevo mensaje del formulario de contacto:\n\n";
$cuerpo .= "Nombre completo: $nombre\n";
$cuerpo .= "Correo electrónico: $correo\n";
$cuerpo .= "Teléfono: $telefono\n";
$cuerpo .= "Programa de interés: $programa\n";
$cuerpo .= "Mensaje:\n$mensaje\n";

// Encabezados
$headers = "From: $correo" . "\r\n" .
           "Reply-To: $correo" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Enviar el correo
if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo "¡Mensaje enviado exitosamente!";
} else {
    echo "Error al enviar el mensaje. Inténtalo más tarde.";
}
?>
