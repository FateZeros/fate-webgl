function main() {
    // method1()
    // method2()
    // method3()
    method4()
}

// 普通 canva 图形绘制
function method1() {
    const canvasWrap = document.getElementById('webGL')

    if (!canvasWrap) {
        return
    }

    // 获取绘制图形的上下文
    const ctx = canvasWrap.getContext('2d')
    ctx.fillStyle = 'rgba(0, 255, 0, 1)'

    // canvase 绘图区域内绘制: (坐标x，坐标y，宽度，长度) 的图形
    // 宽度、长度以像素 px 为单位
    ctx.fillRect(120, 10, 150, 150)
}

// canvas 背景色
function method2() {
    const canvasWrap = document.getElementById('webGL')

    // cuon-utils - getWebGLContext
    const gl = getWebGLContext(canvasWrap)

    if (!gl) {
        return
    }

    // 清空 canvas 背景颜色
    gl.clearColor(0.0, 0.0, 0.0, 1.0)

    // 清空 canvas 
    gl.clear(gl.COLOR_BUFFER_BIT)
}

// 画一个点
function method3() {
    // 顶点着色器
    // gl_Position 顶点位置
    // gl_PointSize 顶点尺寸
    var VSHADER_SOURCE = `void main() {
        gl_Position = vec4(0.0, 0.5, 0.0, 1.0);
        gl_PointSize = 10.0;
    }
    `

    // 片元着色器
    // gl_FragColor 指定片元颜色
    var FSHADER_SOURCE = `void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }`

    const canvasWrap = document.getElementById('webGL')
    const gl = getWebGLContext(canvasWrap)

    if (!gl) {
        return
    }

    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        return
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0)

    gl.clear(gl.COLOR_BUFFER_BIT)

    // gl.POINTS -> 绘制一个点
    // 0 -> 表示从第一个顶点开始画起
    // 1 -> 表示只绘制一个点
    gl.drawArrays(gl.POINTS, 0, 1)
}

// 变量 attribute
function method4() {
    // 顶点着色器
    // gl_Position 顶点位置
    // gl_PointSize 顶点尺寸
    // 声明一个 attribute 变量: attribute -> 存储限定符， vec4 类型， a_Postion 变量；
    var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
    }
    `

    // 片元着色器
    // gl_FragColor 指定片元颜色
    var FSHADER_SOURCE = `void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }`

    const canvasWrap = document.getElementById('webGL')
    const gl = getWebGLContext(canvasWrap)

    if (!gl) {
        return
    }

    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        return
    }

    // 获取 attribute 变量的存储位置
    var a_Position =  gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        return
    }

    // 将顶点位置传输给 attribute 变量
    gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);

    gl.clearColor(0.0, 0.0, 0.0, 1.0)

    gl.clear(gl.COLOR_BUFFER_BIT)

    // gl.POINTS -> 绘制一个点
    // 0 -> 表示从第一个顶点开始画起
    // 1 -> 表示只绘制一个点
    gl.drawArrays(gl.POINTS, 0, 1)
}