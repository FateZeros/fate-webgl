# WebGL 概述

## WebGL 程序的结构

在 HTML 中，动态网页包含 HTML 和 JavaScript 两种语言。
在 WebGL 中，包含 HTML、JavaScript 和 GLSL ES。

### GLSL ES

OpenGL 支持一项很重要的特性，即可编程着色方法(programmable shader functions), 被 OpenGL ES 2.0 继承，并成为 WebGL 1.0 的核心标准。

着色器方法使用一种类似 C 的编程语言实现了精美的视觉效果。编写着色器的语言又称为<strong>着色器语言(shading language)</strong>。OpenGL ES 2.0
基于 OpenGL 着色器语言(GLSL)，又被称为 OpenGL ES 着色器语言 (GLSL ES)。