function main() {
    console.log(22)
    const canvasWrap = document.getElementById('webGL')

    if (!canvasWrap) {
        return
    }

    // 获取绘制图形的上下文
    const ctx = canvasWrap.getContext('2d')
    ctx.fillStyle = 'red'

    // canvase 范围内绘制的 x坐标，y坐标，绘制图形的宽度，长度
    ctx.fillRect(120, 10, 150, 150)
}