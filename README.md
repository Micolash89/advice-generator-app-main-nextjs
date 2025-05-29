# Advice Generator App 🎲

Una aplicación generadora de consejos con animación de escritura tipo IA, construida como parte del desafío de Frontend Mentor.

![Preview del proyecto](preview.jpg)

## 🚀 Demo en vivo

- [Ver demo](tu-url-de-demo-aqui)

## 📋 Sobre el proyecto

Esta aplicación consume la [Advice Slip API](https://api.adviceslip.com) para generar consejos aleatorios con una experiencia de usuario mejorada que incluye:

- **Animación de escritura**: Los consejos se muestran letra por letra simulando una IA
- **Diseño responsivo**: Optimizada para dispositivos móviles y desktop
- **Estados interactivos**: Efectos hover y estados de carga
- **Cursor parpadeante**: Indicador visual durante la animación de escritura

## 🛠️ Tecnologías utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Advice Slip API** - Fuente de consejos

## ✨ Características principales

### Funcionalidades base (Frontend Mentor)
- ✅ Diseño responsivo para móviles y desktop
- ✅ Generación de nuevos consejos al hacer clic en el dado
- ✅ Integración con Advice Slip API

### Mejoras implementadas
- 🆕 **Animación de escritura**: Efecto typewriter que simula IA
- 🆕 **Cursor animado**: Indicador visual durante la escritura
- 🆕 **Animación de carga**: Indicador visual de la llamada a la API
- 🆕 **Transiciones suaves**: Mejora la experiencia visual

## 🔧 Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/Micolash89/advice-generator-app-main-nextjs

# Navegar al directorio
cd advice-generator-app

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

```

## 🎯 Desafíos superados

1. **Animación de escritura**: Implementación de efecto typewriter usando `setInterval`
2. **Gestión de estados**: Coordinar loading, typing y disabled states
3. **Experiencia de usuario**: Prevenir interacciones durante animaciones
4. **Responsividad**: Adaptación de la animación a diferentes dispositivos

## 🏆 Créditos

- Desafío original: [Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)
- API utilizada: [Advice Slip API](https://api.adviceslip.com)
- Desarrollador: [Javier Espindola](https://github.com/Micolash89)
