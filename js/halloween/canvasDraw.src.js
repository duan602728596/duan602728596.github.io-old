(()=>{
    const ctx = document.getElementById('canvas1').getContext('2d');
    const n = 3;
    {   /* 绘制矩形 */
        ctx.beginPath();
        ctx.rect(0, 0, 301 * n, 301 * n);
        ctx.fillStyle='#4e2438';
        ctx.fill();
        ctx.stroke();
    }
    {   /* 画南瓜头 */
        ctx.beginPath();
        ctx.moveTo(127 * n, 76 * n);
        ctx.quadraticCurveTo(26 * n, 36 * n, 9 * n, 162 * n);
        ctx.quadraticCurveTo(17 * n, 284 * n, 131 * n, 249 * n);
        ctx.quadraticCurveTo(146 * n, 267 * n, 168 * n, 250 * n);
        ctx.quadraticCurveTo(277 * n, 287 * n, 290 * n, 163 * n);
        ctx.quadraticCurveTo(297 * n, 53 * n, 184 * n, 62 * n);
        ctx.quadraticCurveTo(146 * n, 54 * n, 127 * n, 76 * n);
        ctx.strokeStyle='transparent';
        ctx.fillStyle='#cf5c0b';
        ctx.fill();
        ctx.stroke();
    }
    {   /* 画花纹 */
        ctx.beginPath();
        // 1
        ctx.moveTo(115 * n, 72 * n);
        ctx.quadraticCurveTo(53 * n, 72 * n, 51 * n, 163 * n);
        ctx.quadraticCurveTo(47 * n, 231 * n, 107 * n, 250 * n);
        ctx.quadraticCurveTo(42 * n, 255 * n, 41 * n, 157 * n);
        ctx.quadraticCurveTo(48 * n, 59 * n, 115 * n, 72 * n);
        // 2
        ctx.moveTo(140 * n, 254 * n);
        ctx.quadraticCurveTo(118 * n, 230 * n, 118 * n, 162 * n);
        ctx.quadraticCurveTo(119 * n, 97 * n, 134 * n, 75 * n);
        ctx.quadraticCurveTo(110 * n, 79 * n, 108 * n, 166 * n);
        ctx.quadraticCurveTo(106 * n, 227 * n, 140 * n, 254 * n);
        // 3
        ctx.moveTo(162 * n, 251 * n);
        ctx.quadraticCurveTo(188 * n, 232 * n, 189 * n, 156 * n);
        ctx.quadraticCurveTo(194 * n, 117 * n, 167 * n, 76 * n);
        ctx.quadraticCurveTo(183 * n, 115 * n, 181 * n, 162 * n);
        ctx.quadraticCurveTo(184 * n, 220 * n, 162 * n, 251 * n);
        // 4
        ctx.moveTo(195 * n, 71 * n);
        ctx.quadraticCurveTo(251 * n, 81 * n, 252 * n, 160 * n);
        ctx.quadraticCurveTo(255 * n, 235 * n, 190 * n, 249 * n);
        ctx.quadraticCurveTo(259 * n, 259 * n, 262 * n, 160 * n);
        ctx.quadraticCurveTo(265 * n, 76 * n, 195 * n, 71 * n);

        ctx.strokeStyle='transparent';
        ctx.fillStyle='#bf4305';
        ctx.fill();
        ctx.stroke();
    }
    {   /* 画南瓜茎 */
        ctx.beginPath();
        ctx.moveTo(129 * n, 27 * n);
        ctx.quadraticCurveTo(155 * n, 14 * n, 175 * n, 22 * n);
        ctx.quadraticCurveTo(159 * n, 48 * n, 184 * n, 62 * n);
        ctx.quadraticCurveTo(172 * n, 70 * n, 170 * n, 83 * n);
        ctx.quadraticCurveTo(153 * n, 64 * n, 139 * n, 86 * n);
        ctx.quadraticCurveTo(145 * n, 69 * n, 126 * n, 76 * n);
        ctx.quadraticCurveTo(151 * n, 61 * n, 129 * n, 27 * n);

        ctx.strokeStyle='transparent';
        ctx.fillStyle='#556237';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(137 * n, 23 * n);
        ctx.quadraticCurveTo(144 * n, 20 * n, 152 * n, 20 * n);
        ctx.quadraticCurveTo(162 * n, 63 * n, 169 * n, 81 * n);
        ctx.quadraticCurveTo(158 * n, 69 * n, 143 * n, 80 * n);
        ctx.quadraticCurveTo(151 * n, 46 * n, 137 * n, 23 * n);

        ctx.strokeStyle='transparent';
        ctx.fillStyle='#2f3b23';
        ctx.fill();
        ctx.stroke();
    }
    {   /* 画眼睛 */
        ctx.beginPath();
        ctx.moveTo(92 * n, 120 * n);
        ctx.lineTo(124 * n, 160 * n);
        ctx.lineTo(72 * n, 168 * n);
        ctx.moveTo(222 * n, 121 * n);
        ctx.lineTo(244 * n, 168 * n);
        ctx.lineTo(192 * n, 163 * n);

        ctx.strokeStyle='transparent';
        ctx.fillStyle='#351226';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(90 * n, 128 * n);
        ctx.lineTo(110 * n, 154 * n);
        ctx.lineTo(77 * n, 159 * n);
        ctx.moveTo(218 * n, 128 * n);
        ctx.lineTo(232 * n, 158 * n);
        ctx.lineTo(198 * n, 155 * n);

        ctx.strokeStyle='transparent';
        ctx.fillStyle='#4e2438';
        ctx.fill();
        ctx.stroke();
    }
    {   /* 画嘴 */
        ctx.beginPath();
        ctx.moveTo(59 * n, 185 * n);
        ctx.lineTo(89 * n, 189 * n);
        ctx.lineTo(89 * n, 201 * n);
        ctx.lineTo(98 * n, 202 * n);
        ctx.lineTo(99 * n, 190 * n);
        ctx.lineTo(127 * n, 198 * n);
        ctx.lineTo(128 * n, 206 * n);
        ctx.lineTo(142 * n, 206 * n);
        ctx.lineTo(146 * n, 196 * n);
        ctx.lineTo(168 * n, 195 * n);
        ctx.lineTo(166 * n, 206 * n);
        ctx.lineTo(180 * n, 207 * n);
        ctx.lineTo(184 * n, 196 * n);
        ctx.lineTo(207 * n, 194 * n);
        ctx.lineTo(207 * n, 206 * n);
        ctx.lineTo(213 * n, 205 * n);
        ctx.lineTo(217 * n, 193 * n);
        ctx.lineTo(250 * n, 188 * n);
        ctx.quadraticCurveTo(247 * n, 212 * n, 223 * n, 217 * n);
        ctx.lineTo(224 * n, 208 * n);
        ctx.lineTo(214 * n, 211 * n);
        ctx.lineTo(212 * n, 220 * n);
        ctx.lineTo(188 * n, 225 * n);
        ctx.lineTo(192 * n, 214 * n);
        ctx.lineTo(180 * n, 213 * n);
        ctx.lineTo(174 * n, 224 * n);
        ctx.lineTo(156 * n, 225 * n);
        ctx.lineTo(157 * n, 215 * n);
        ctx.lineTo(145 * n, 215 * n);
        ctx.lineTo(143 * n, 226 * n);
        ctx.lineTo(125 * n, 226 * n);
        ctx.lineTo(120 * n, 214 * n);
        ctx.lineTo(110 * n, 213 * n);
        ctx.lineTo(112 * n, 226 * n);
        ctx.lineTo(92 * n, 221 * n);
        ctx.lineTo(91 * n, 212 * n);
        ctx.lineTo(82 * n, 207 * n);
        ctx.lineTo(82 * n, 216 * n);
        ctx.quadraticCurveTo(62 * n, 207 * n, 59 * n, 185 * n);

        ctx.strokeStyle='transparent';
        ctx.fillStyle='#4f2438';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(223 * n, 217 * n);
        ctx.quadraticCurveTo(232 * n, 216 * n, 238 * n, 210 * n);
        ctx.lineTo(225 * n, 212 * n);
        ctx.lineTo(223 * n, 217 * n);

        ctx.moveTo(212 * n, 220 * n);
        ctx.lineTo(214 * n, 211 * n);
        ctx.lineTo(192 * n, 215 * n);
        ctx.lineTo(188 * n, 225 * n);

        ctx.moveTo(156 * n, 225 * n);
        ctx.lineTo(174 * n, 224 * n);
        ctx.lineTo(178 * n, 216 * n);
        ctx.lineTo(158 * n, 217 * n);

        ctx.moveTo(125 * n, 226 * n);
        ctx.lineTo(143 * n, 226 * n);
        ctx.lineTo(144 * n, 218 * n);
        ctx.lineTo(122 * n, 218 * n);

        ctx.moveTo(92 * n, 221 * n);
        ctx.lineTo(112 * n, 226 * n);
        ctx.lineTo(111 * n, 218 * n);
        ctx.lineTo(91 * n, 212 * n);

        ctx.moveTo(82 * n, 216 * n);
        ctx.lineTo(82 * n, 207 * n);
        ctx.quadraticCurveTo(66 * n, 199 * n, 59 * n, 185 * n);
        ctx.quadraticCurveTo(58 * n, 202 * n, 82 * n, 216 * n);

        ctx.strokeStyle='transparent';
        ctx.fillStyle='#290f1c';
        ctx.fill();
        ctx.stroke();
    }

    /* ---------------- 分 ---------------- 割 ---------------- 线 ---------------- */

    const ctx2 = document.getElementById('canvas2').getContext('2d');
    {   /* 绘制矩形 */
        ctx2.beginPath();
        ctx2.rect(0, 0, 903, 903);
        ctx2.fillStyle='#ec8101';
        ctx2.fill();
        ctx2.stroke();
    }
    {   /* 写文字 */
        const gradient=ctx.createLinearGradient(0, 0, 908,0);
        gradient.addColorStop('0', '#3b09ab');
        gradient.addColorStop('0.5', '#8a56ff');
        gradient.addColorStop('1.0', '#3b09ab');
        ctx2.font = 'bold 80px arial';
        ctx2.fillStyle = gradient;
        ctx2.fillText('Happy halloween!', 100, 360);
    }
    {   /* 写文字 */
        const gradient=ctx.createLinearGradient(0, 0, 301,0);
        gradient.addColorStop('0', '#b61818');
        gradient.addColorStop('0.5', '#7a0b0b');
        gradient.addColorStop('1.0', '#b61818');
        ctx2.font = 'bold 100px 宋体';
        ctx2.fillStyle = gradient;
        ctx2.fillText('万圣节快乐！', 180, 500);
    }
})();
