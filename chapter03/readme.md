# WebGL 绘制和变换三角形

绘制多个顶点组成的图形，比如三角形，正方形，需要一次性的将图形的顶点全部传入顶点着色器。
WebGL 提供一种很方便的机制，即**缓冲区对象(buffer object)**,它可以一次性地向着色器传入多个顶点的数据。
缓冲区对象是 WebGL 系统中的一块内存区域。可以一次性的向缓冲区对象中填充大量的顶点数据，然后将这些数据保存其中，
供顶点着色器使用。