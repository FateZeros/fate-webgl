function main() {
    // method1()
    method2()
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