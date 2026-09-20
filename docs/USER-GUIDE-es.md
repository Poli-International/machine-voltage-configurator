# Configurador de Voltaje para Máquinas: guía de usuario

El Configurador de Voltaje para Máquinas calcula ventanas empíricas de voltaje inicial, mecánica de recorrido y fichas de referencia imprimibles para tatuadores que operan máquinas rotativas y de bobinas.

## Para qué sirve

El Configurador de Voltaje para Máquinas establece una base de partida empírica para el voltaje de la máquina de tatuar, el recorrido de la excéntrica y la calibración de la fuente de alimentación. Los tatuadores pueden hacer coincidir la arquitectura de su máquina, la longitud de recorrido y su técnica con una ventana de inicio probada en lugar de tener que adivinar números. La herramienta también explica la mecánica del recorrido, verifica la compatibilidad eléctrica entre cables y fuentes de alimentación, y guarda fichas de referencia personalizadas para el puesto de trabajo.

## A quién está dirigido

Esta herramienta está diseñada para:

- Tatuadores profesionales que configuran máquinas tipo pen, máquinas de accionamiento directo o máquinas de bobinas.
- Aprendices que estudian cómo el voltaje, el recorrido de la leva excéntrica y la inercia del grupo de agujas afectan al tejido dérmico.
- Dueños de estudio que buscan establecer pautas operativas estandarizadas en todas las cabinas de trabajo.
- Artistas invitados o residentes itinerantes que calibran fuentes de alimentación o baterías inalámbricas desconocidas en estudios de invitados o convenciones.

## Cómo usarlo

### Cálculo del voltaje base y del recorrido

1. Haga clic en `Configurador de Voltaje y Recorrido` en la barra de navegación.
2. En `Parámetros de la Máquina`, elija `Rotativa (Accionamiento Directo, Deslizador o Tipo Pen)` o `Máquina de Bobinas (Martillo Electromagnético)`.
3. Seleccione su `Longitud de Recorrido (Excéntrica / Stroke)` entre `2,5 mm (Corto / Sombreado Muy Suave y Capas de Grey Wash)` y `4,5 mm (Extra Largo / Líneas Gruesas y Magnums Grandes)`.
4. Seleccione `Línea / Trazado (Lining)`, `Sombreado (Shading)`, `Relleno de Color Sólido (Color Packing)` o `Punteado / Puntillismo (Stippling)`.
5. En `Ventana de Inicio Sugerida`, consulte el `Intervalo Base Inicial`, la `Velocidad Relativa de Aguja`, la `Fuerza de Impacto Relativa (Punch)` y el `Ciclo de Trabajo (Duty Cycle)`.
6. Haga clic en `💾 Guardar en la Ficha 'Mis Máquinas'` para copiar esta configuración en sus registros.

### Comparación de recorrido y velocidad

1. Haga clic en `Visualizador de Recorrido y Velocidad` en la barra de navegación.
2. En `Seleccionar recorrido a comparar:`, elija entre `2,5 mm (Recorrido Corto)` y `4,5 mm (Recorrido Fuerte)`.
3. En `Seleccionar nivel de voltaje inicial:`, alterne entre `Tensión Baja`, `Tensión Media` o `Tensión Alta`.
4. Revise los valores resultantes: `Recorrido Excéntrico:`, `Frecuencia de Ciclo Relativa:`, `Energía de Impacto / Punch:` y `Permanencia de Aguja en Piel:`.
5. Examine el esquema que ilustra el `Desplazamiento Excéntrico del Motor`, la `Profundidad de Penetración de Agujas` y el `Límite de Superficie Cutánea (Línea Dérmica)`.

### Guardar y gestionar máquinas personales

1. Haga clic en `Mis Máquinas (Ficha de Puesto)` en la barra de navegación.
2. En `Registrar Ajuste de Máquina y Técnica`, introduzca el identificador en `Nombre de la Máquina / Modelo *`.
3. Seleccione `Máquinas Rotativas` o `Máquinas de Bobinas`, especifique el `Recorrido (mm) *` y seleccione la `Técnica de Aplicación *`.
4. Introduzca el `Voltaje Comprobado en Cabina (Voltios) *` y especifique el grupo en `Configuración de Aguja y Conicidad (Taper) *`.
5. Añada notas en `Notas de Sesión / Observaciones`, seleccione `Funcionó a la Perfección`, `Demasiado Suave / Falta Fuerza` o `Demasiado Agresivo / Lesiona Piel`, y haga clic en `Guardar Ajuste de Máquina`.
6. Filtre las fichas en `Fichas de Puesto Guardadas` con `Todas las Máquinas`, `Máquinas Rotativas` o `Máquinas de Bobinas`, o haga clic en `Eliminar` para borrar una entrada.

### Verificación de conexiones eléctricas y fuentes de alimentación

1. Haga clic en `Comprobador de Conexión y Fuente` en la barra de navegación.
2. En `1. Conector en la Máquina`, elija `Conector Hembra RCA (Rotativas modernas y máquinas tipo pen)` o `Bornes Clipcord (Máquinas clásicas de bobinas)`.
3. En `2. Tipo de Fuente de Alimentación y Amperaje`, elija `Fuente Digital de Sobremesa (Salida continua 2,0 A – 3,0 A, con función jumpstart)` o `Batería Inalámbrica Modular (Iones de litio, 1500–2000 mAh)`.
4. En `3. Cable de Interconexión`, elija `Cable RCA de Calidad Profesional` o `Cable Clipcord Tradicional con Fleje de Acero`.
5. Haga clic en `Comprobar Compatibilidad de Componentes` para revisar diagnósticos de coincidencia como `Incoherencia en el Cableado`, `Incompatibilidad Mecánica` o `Capacidad de Arranque Limitada`.

### Calibración práctica por sensación y ajustes de bobinas

1. Haga clic en `Calibración por Sensación y Guía de Bobinas / Baterías` en la barra de navegación.
2. Siga los pasos de prueba en piel sintética: `1. Escuche el Sonido del Motor`, `2. Examine el Depósito de Tinta` y `3. Ajuste en Intervalos Mínimos`.
3. Calibre las máquinas de bobinas en orden mecánico: `1. Alineación Mecánica: Varilla de aguja, tetina (grommet) y tubo deben correr centrados sin rozamiento lateral.`, `2. Separación de Contactos: Ajuste mecánico del tornillo (aprox. grosor de una moneda de 10 céntimos para líneas, de 50 céntimos para sombras).`, `3. Tensión de Flejes: Doble o calibre el fleje trasero para ajustar la fuerza de retorno del martillo antes de tocar el voltaje.` y `4. Ajuste Fino de Tensión: Regule la fuente solo cuando la geometría mecánica y los flejes trabajen sincronizados.`.
4. Considere los factores de las baterías inalámbricas: `1. Caída de Tensión Bajo Carga (Voltage Sag)`, `2. Impulso de Arranque Asistido (Jumpstart)` y `3. Fluctuaciones con Batería Baja`.

### Inserción de la herramienta en el sitio web del estudio

1. Haga clic en `Código de Inserción` en la barra de navegación.
2. Localice el fragmento de código en `Copie el siguiente código iframe (utiliza la dirección oficial de Poli International):`.
3. Haga clic en `📋 Copiar Código de Inserción` para copiar la etiqueta iframe HTML.

## Qué no hace

El Configurador de Voltaje para Máquinas se centra estrictamente en los voltajes de partida, la dinámica de recorrido y la compatibilidad eléctrica. No proporciona:

- Selección de conicidad de agujas, diámetros de cartuchos ni geometría de grupos. Utilice el Selector de Agujas en https://poliinternational.com/needle-selector/.
- Diagnóstico de averías de hardware eléctrico para pedales rotos, cables seccionados o fallos de transformador. Utilice la Guía de Solución de Problemas de Alimentación en https://poliinternational.com/power-supply-troubleshooter/.
- Programas de mantenimiento de equipos, registros de sustitución de flejes, seguimiento de autoclave ni fichas de servicio técnico. Utilice el Registro de Mantenimiento de Máquinas en https://poliinternational.com/machine-maintenance-logbook/.

## Dónde residen sus datos

Todos los registros de máquinas, notas de voltaje y configuraciones de cabina creados en esta herramienta se guardan exclusivamente en el navegador local de este dispositivo. Los datos se conservan a través de `localStorage` en el cliente bajo la clave `poli_tattoo_machines`.

Ningún registro, nombre o configuración de máquina se transmite jamás a un servidor externo ni a una base de datos en la nube. Sus datos permanecen almacenados de una sesión a otra hasta que haga clic deliberadamente en `Eliminar` en una ficha individual o borre los datos de navegación de este sitio.

## Impresión y exportación

Para generar una ficha física de referencia para su mesa de trabajo:

1. Haga clic en `Mis Máquinas (Ficha de Puesto)` y revise las configuraciones guardadas.
2. Haga clic en `🖨️ Imprimir Ficha de Puesto para la Mesa de Trabajo`.
3. El navegador abre su diálogo de impresión con un formato de alto contraste adaptado que omite pestañas de navegación y botones interactivos.
4. Imprima la tabla resultante en papel estándar A4 o carta, plastifíquela y colóquela en su mesa de trabajo para una consulta inmediata.

## Preguntas y respuestas

### ¿Qué voltaje debo utilizar para hacer líneas con una máquina rotativa de tatuar?
La mayoría de las máquinas rotativas operan entre 6,5 V y 8,5 V para líneas, dependiendo del recorrido de la excéntrica y del par motor. Comience en el extremo inferior del rango y aumente la potencia en incrementos de 0,2 V hasta que las líneas se depositen de manera limpia y uniforme en una sola pasada.

### ¿Cómo afecta la longitud de recorrido al voltaje de la máquina de tatuar?
Un recorrido corto (de 2,5 mm a 3,0 mm) cicla con rapidez e impacto suave, lo que requiere un voltaje ligeramente mayor para vencer la resistencia de la membrana del cartucho. Un recorrido largo (de 4,0 mm a 4,5 mm) tiene mayor inercia mecánica y mueve grupos de agujas grandes a voltajes moderados, aunque exige una velocidad de mano más rápida.

### ¿Por qué se ralentiza mi máquina de tatuar cuando la aguja toca la piel?
La resistencia de la piel y la tensión de la membrana del cartucho aumentan la carga mecánica sobre el motor, lo que provoca una caída de tensión en fuentes compactas. Si el tono del motor disminuye de forma audible al entrar en contacto con la piel, aumente el voltaje entre 0,2 V y 0,4 V o utilice una fuente que proporcione al menos 2,0 A continuos.

### ¿Puedo utilizar una máquina de bobinas con una batería inalámbrica?
Las máquinas de bobinas tradicionales solo deben conectarse a baterías inalámbricas diseñadas específicamente para cargas inductivas. Las baterías estándar para rotativas carecen de amortiguación contra picos inductivos, por lo que las chispas del tornillo de contacto generan fuerzas contraelectromotrices que sobrecalientan las celdas o disparan los circuitos de protección interna.

### ¿Cuál es la diferencia entre un recorrido de 3,5 mm y uno de 4,0 mm?
Un recorrido de 3,5 mm equilibra la velocidad de ciclo con un impacto moderado, ideal para sombras suaves, degradados y líneas de grosor medio. Un recorrido de 4,0 mm ofrece un desplazamiento de aguja más amplio y una fuerza de golpe más contundente, destacando en líneas gruesas sólidas y en relleno denso con magnums grandes.

### ¿Por qué no arranca mi máquina de cartuchos a bajo voltaje?
Los cartuchos incorporan membranas internas de goma que resisten el avance del motor. Los motores rotativos sin escobillas suelen carecer de par de arranque suficiente para vencer esa resistencia por debajo de 6,5 V si no cuentan con un pulso de arranque automático asistido de 9 V a 12 V.

### ¿Cómo ajusto la separación del tornillo de contacto en una máquina de bobinas?
Afloje el tornillo de fijación y ajuste el tornillo de contacto hasta que toque suavemente el fleje delantero con el martillo en reposo. Establezca una separación de 1,0 mm (grosor de una moneda de 10 céntimos) para trazados rápidos, o ábrala entre 1,5 mm y 2,0 mm para un sombreado más suave.

### ¿Aumentar el voltaje hace que la máquina de tatuar golpee más fuerte?
En una máquina rotativa, un voltaje más alto incrementa la frecuencia de ciclos por segundo y no la fuerza del impacto, la cual está determinada por la longitud de la excéntrica. En una máquina de bobinas, un voltaje más alto incrementa la atracción magnética, aumentando la velocidad y la firmeza hasta el límite elástico del fleje.

## Límites

El Configurador de Voltaje para Máquinas proporciona valores de partida empíricos basados en pruebas estándar de taller y principios mecánicos. No puede medir la resistencia interna del bobinado del motor, la fricción del rodamiento de la excéntrica, la fatiga de los flejes ni la rigidez particular de la membrana de cada cartucho.

Asimismo, esta herramienta no puede evaluar la elasticidad, el grosor ni la hidratación de la piel de cada cliente. El tatuador sigue siendo el único responsable de evaluar la respuesta del tejido, controlar la profundidad de penetración, escuchar el sonido del motor y mantener los voltajes de funcionamiento dentro de los límites fijados por el fabricante.
