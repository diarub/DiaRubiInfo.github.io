<?php

    $nombre = $_POST['nombre'];
    $comentario = $_POST['comentario'];
    
    $conn = mysqli_connect('localhost', 'root', 'root', 'blog');
    $nombre = mysqli_real_escape_string($conn, $nombre);
    $comentario = mysqli_real_escape_string($conn, $comentario);

    $resultado = mysqli_query($conn, 'INSERT INTO comentarios(nombre, comentario) VALUES("'.$nombre.", " .$comentario. '")' );

    if($resultado)
        echo("Comentario enviado con éxito.");
    else
        echo("Error enviando comentario.");
    
    mysqli_close($conn);
?>