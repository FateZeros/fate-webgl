function main() {
    // method1()
    // method2()
    method3()
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

function method3() {
    // 顶点着色器
    // gl_Position 顶点位置
    // gl_PointSize 顶点尺寸
    var VSHADER_SOURCE = `void main() {
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
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

    gl.drawArrays(gl.POINTS, 0, 1)
}