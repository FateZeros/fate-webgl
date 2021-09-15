# WebGL 入门

## WebGL 辅助函数 - getWebGLContext

在获取 WebGL 绘图上下文时，`canvas.getContext()` 函数接收的参数，在不同的浏览器会有所不同，
故使用 `getWebGLContext` 来隐藏不同浏览器之间的差异。

## 设置 canvas 背景色 - clearColor

获取 WebGL 绘图上下文后，使用 `clearColor` 来设置背景色，用背景色清空 `canvas` 绘图区域。
**在清空绘图区域之前也得指定背景颜色**

```bash
gl.clearColor(red, blue, green, alpha)

// 如背景色被指定为黑色
gl.clearColor(0.0, 0.0, 0.0, 1.0) 
```

在二维图形中，颜色分量值在 0～255 之间。由于 WebGL 继承自 OpenGL，颜色分量值的取值范围遵循 OpenGL 的取值，区间为 0.0～1.0。

## 清空 canvas - clear

`gl.clear(gl.COLOR_BUFFER_BIT)` **清空绘图区域，实际是清空颜色缓存区(color buffer)**

**gl.clear 参数**

| buffer  | 说明 | 相关函数 |
| ------------- | ------------- | ------------- |
| gl.COLOR_BUFFER_BIT  | 颜色缓存区  | gl.clearColor() |
| gl.DEPTH_BUFFER_BIT  | 深度缓冲区  | gl.clearDepth() |
| gl.STENCIL_BUFFER_BIT  | 模版缓冲区  | gl.clearStencil() |

默认参数 gl.clearColor(0.0, 0.0, 0.0, 0.0), gl.clearDepth(1.0), gl.clearStencil(0)

## 着色器是什么

**WebGL 依赖着色器(Shader)的绘图机制，来绘制二维/三维的图形**

WebGL 需要两种着色器: 顶点着色器和片元着色器

### 顶点着色器(Vertex Shader)

描述顶点特性(如位置、颜色等)的程序。顶点(Vertex)是指二维/三维空间中的一个点，比如二维/三维图形的端点或者交点。

### 片元着色器(Fragment Shader)

进行逐片元处理过程如光照的程序。片元(Fragment)是一个 WebGL 术语，可以理解为像素(图像中的单元)。
