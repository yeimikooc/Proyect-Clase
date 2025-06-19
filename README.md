
Gestor de Proyectos Escolares



 Objetivo general

Desarrollar una aplicación web que permita registrar, visualizar y organizar proyectos escolares con los campos: nombre del proyecto, asignatura, fecha de entrega y materiales necesarios, con el fin de facilitar el seguimiento académico de los estudiantes.



 Tecnologías utilizadas
• HTML5, CSS3 y JavaScript
• Firebase (Firestore) como base de datos en la nube



 Estructura de la base de datos (Firestore)

Colección: proyectos
Cada documento contiene los siguientes campos:
Campo
Tipo de dato
Descripción
nombreProyecto
string
Nombre del proyecto
asignatura
string
Materia relacionada al proyecto
fechaEntrega
string/date
Fecha de entrega (formato YYYY-MM-DD)
materiales
array/string
Lista de materiales necesarios


Instrucciones de uso
1. Inicio: Abre la aplicación desde tu navegador.
2. Agregar proyecto: Llena el formulario con nombre, asignatura, fecha y materiales.
3. Guardar: Al hacer clic en “Guardar”, los datos se almacenan en Firestore.
4. Ver proyectos: Los proyectos guardados se muestran en una tabla o lista.
5. Editar/Eliminar: Puedes modificar o borrar cada proyecto con sus botones respectivos.




Autores o equipo de desarrollo
• Yeimi López
