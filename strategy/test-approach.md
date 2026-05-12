# Test Approach

## Enfoque general
La validación de flujos críticos del sistema constituye la base del enfoque de pruebas, priorizando las situaciones que tienen un impacto considerable en la seguridad, los datos y el negocio. No se pretende una cobertura completa, sino una evaluación consciente que esté dirigida a prevenir fallos relevantes.

## Estrategia según la clase de prueba
- **Pruebas manuales:** 
Exploración inicial de flujos críticos para entender el funcionamiento real del sistema y encontrar errores obvios.

- **Pruebas API:** 
Supervisión de accesos, verificación de reglas de negocio y gestión de datos sin que la interfaz sea un requisito.

- **Pruebas automatizadas:** 
Una cobertura seleccionada de situaciones críticas y repetitivas que hacen posible la identificación de regresiones.

## Criterio de automatización
La automatización de un escenario ocurre cuando:
- Es crítico para la seguridad o el negocio
- Es estable y repetible
- Contribuye a la identificación anticipada de errores.

Los escenarios que son complejos, tienen poca estabilidad o un impacto bajo siguen siendo evaluados manualmente.

## Tipos de evidencia
- Capturas de pantalla
- Registros de requests y responses
- Logs de ejecución
- Resultados de pruebas automatizadas