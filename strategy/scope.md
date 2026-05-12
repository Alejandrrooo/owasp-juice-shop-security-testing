# Test Scope

## Objetivo del alcance
El objetivo de este alcance es enfocar las pruebas en los flujos que tienen mayor impacto para el negocio, los usuarios y el sistema, priorizando la calidad y la prevención sobre la cobertura total. 

## In Scope
- Registro / Login
- Acceso a cuenta de usuario
- Proceso de compra y checkout
- Acciones administrativas críticas
- Validaciones de seguridad asociadas a estos flujos
- Pruebas manuales, API y automatización selectiva

## Out of Scope
- Pruebas de estrés y carga
- Ataques DoS
- Hardening de infraestructura
- Explotación avanzada de vulnerabilidades
- Optimización de performance
- Cambios al código fuente

No están alineadas con el objetivo de QA enfocado en los flujos críticos y en la prevención de fallos.

## Definición de criticidad
Un escenario se considera crítico si cumple al menos uno de estos puntos:

- Expone datos sensibles
- Permite acceso no autorizado
- Afecta directamente ingresos
- Compromete el control del sistema
- Impacta la confianza del usuario

