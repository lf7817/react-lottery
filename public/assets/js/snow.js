/* eslint-disable */
function r(a) {
  return a * Math.random()
}

function s() {
  return document.createElement("canvas")
}

function u() {
  var a, d, e, f;
  for (p += 0.01, d = Math.sin(p), a = 0; m > a; a++) {
    f = o[a], e = Math.sin(4 * p + a), f[1] += f[2] / 2 + (2 + e), f[0] += 6 * (d + e / 2) / (10 / f[2]), f[1] > c && (f[1] = -n, f[0] = r(b)), (f[0] > b || f[0] < -n) && (f[0] = d > 0 ? -n : b), o[a] = f
  }
}

function t() {
  var a, d;
  for (d = 0; m > d; d++) {
    a = 0.6 * m > d ? 0 : 0.8 * m > d ? 1 : 0.9 * m > d ? 2 : 0.98 * m > d ? 3 : 4, o[d] = [r(b), r(c), a]
  }
}

function w() {
  b = window.innerWidth, c = window.innerHeight, void 0 !== j && (j.width = b, j.height = c, m = b * c / 6000, l = k.createLinearGradient(0, 0, 0, c), t())
}

function t() {
  var a, d;
  for (d = 0; m > d; d++) {
    a = 0.6 * m > d ? 0 : 0.8 * m > d ? 1 : 0.9 * m > d ? 2 : 0.98 * m > d ? 3 : 4, o[d] = [r(b), r(c), a]
  }
}

function v() {
  var a;
  for (k.fillStyle = l, k.clearRect(0, 0, b, c), k.beginPath(), a = 0; m > a; a++) {
    k.drawImage(i[o[a][2]], o[a][0], o[a][1])
  }
  k.fill(), u()
}

function w() {
  b = 1920, c = 1080, void 0 !== j && (j.width = b, j.height = c, m = b * c / 6000, l = k.createLinearGradient(0, 0, 0, c), t())
}

function x(id) {
  var a = !1;
  try {
    a = 1
  } catch (b) {}
  return a ? (window.addEventListener("resize", w, !1), j = document.createElement("canvas"), j.style.position = "fixed", j.style.top = "0px", j.style.left = "0px", j.style.zIndex = 5000, j.style.pointerEvents = "none", j.id = "canvas_snow", document.getElementById(id).appendChild(j), k = j.getContext("2d"), k.strokeStyle = "none", d = s(), b = s(), f = s(), g = s(), h = s(), i = [d, b, f, g, h], y({
    canvas: d,
    width: 0.4 * n,
    height: 0.4 * n,
    color: "#FFF",
    soft: 0.05
  }), y({
    canvas: b,
    width: 0.5 * n,
    height: 0.5 * n,
    color: "#FFF",
    soft: 0.05
  }), y({
    canvas: f,
    width: 0.6 * n,
    height: 0.6 * n,
    color: "#FFF",
    soft: 0.3
  }), y({
    canvas: g,
    width: 0.8 * n,
    height: 0.8 * n,
    color: "#FFF",
    soft: 0.2
  }), y({
    canvas: h,
    width: n,
    height: n,
    color: "#FFF",
    soft: 0.05
  }), w(null), snowTimer = setInterval(function () {
    q(v)
  }, 50), void 0) : !1
}

function z(a, b) {
  var c, d, e;
  return a = a.replace(/^s*#|s*$/g, ""), 3 === a.length && (a = a.replace(/([0-9a-fA-F])/g, "$1$1")), d = parseInt(a.substr(2, 2), 16), e = parseInt(a.substr(4, 2), 16), c = parseInt(a.substr(0, 2), 16), "rgba(" + c + ", " + d + ", " + e + ", " + b + ")"
}

function y(a) {
  var b, c, d, e, f, g, h, i, j;
  d = a.width || 30, e = a.height || 30, f = d / 2, g = e / 2, i = a.color || "#FFF", h = a.soft || 0, b = a.canvas, b.width = d, b.height = d, c = b.getContext("2d"), c.clearRect(0, 0, d, e), j = c.createRadialGradient(f, g, 0, f, g, f), j.addColorStop(0, i), j.addColorStop(0.1, i), j.addColorStop(0.85, z(i, h)), j.addColorStop(1, z(i, 0)), c.fillStyle = j, c.fillRect(0, 0, d, e)
}
var b, c, d, e, f, g, h, i = [],
  j, k, l, m, n = 20,
  o = [],
  p = 0,
  q = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
      window.setTimeout(a, 62.5)
    }
  }();
var timer = setInterval(function() {
  if (document.getElementById('main-content')) {
    x('main-content');
    clearInterval(timer);
  }
}, 100)


