import { useEffect, useRef } from 'react';

const VERTEX_SHADER = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform float u_time;
uniform vec2 u_res;
uniform float u_rowCount;
uniform float u_speed;
uniform vec2 u_mouse;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float hash1(float n) {
  return fract(sin(n) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float randomChar(vec2 id, float t) {
  float h = hash(id + t);
  vec4 chars[16];
  chars[0] = vec4(0x30, 0x31, 0x32, 0x33);
  chars[1] = vec4(0x34, 0x35, 0x36, 0x37);
  chars[2] = vec4(0x38, 0x39, 0x41, 0x42);
  chars[3] = vec4(0x43, 0x44, 0x45, 0x46);
  chars[4] = vec4(0x2E, 0x2F, 0x5C, 0x7C);
  chars[5] = vec4(0x2D, 0x5F, 0x3E, 0x3C);
  chars[6] = vec4(0x3A, 0x3B, 0x5B, 0x5D);
  chars[7] = vec4(0x7B, 0x7D, 0x3D, 0x2B);
  chars[8] = vec4(0x2A, 0x26, 0x25, 0x23);
  chars[9] = vec4(0x40, 0x21, 0x3F, 0x7E);
  chars[10] = vec4(0x30, 0x78, 0x46, 0x46);
  chars[11] = vec4(0x43, 0x56, 0x45, 0x2D);
  chars[12] = vec4(0x53, 0x51, 0x4C, 0x49);
  chars[13] = vec4(0x58, 0x53, 0x53, 0x52);
  chars[14] = vec4(0x44, 0x44, 0x4F, 0x53);
  chars[15] = vec4(0x52, 0x43, 0x45, 0x20);

  int idx1 = int(mod(h * 16.0, 16.0));
  int idx2 = int(mod(h * 64.0, 4.0));
  float ch = 0.0;

  if (idx1 == 0) ch = chars[0][idx2];
  else if (idx1 == 1) ch = chars[1][idx2];
  else if (idx1 == 2) ch = chars[2][idx2];
  else if (idx1 == 3) ch = chars[3][idx2];
  else if (idx1 == 4) ch = chars[4][idx2];
  else if (idx1 == 5) ch = chars[5][idx2];
  else if (idx1 == 6) ch = chars[6][idx2];
  else if (idx1 == 7) ch = chars[7][idx2];
  else if (idx1 == 8) ch = chars[8][idx2];
  else if (idx1 == 9) ch = chars[9][idx2];
  else if (idx1 == 10) ch = chars[10][idx2];
  else if (idx1 == 11) ch = chars[11][idx2];
  else if (idx1 == 12) ch = chars[12][idx2];
  else if (idx1 == 13) ch = chars[13][idx2];
  else if (idx1 == 14) ch = chars[14][idx2];
  else if (idx1 == 15) ch = chars[15][idx2];

  return ch / 255.0;
}

vec3 drawCell(vec2 cellId, vec2 cellUV, float t) {
  float charRand = hash(cellId);
  float changeSpeed = 2.0 + charRand * 8.0;
  float charTime = floor(t * changeSpeed);
  float charVal = randomChar(cellId, charTime);
  float inChar = smoothstep(charVal - 0.02, charVal + 0.02, cellUV.x);
  return vec3(inChar);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / min(u_res.x, u_res.y);
  float rows = u_rowCount;
  float cols = rows * (u_res.x / u_res.y);
  vec2 gridUV = fract(uv * vec2(cols, rows)) - 0.5;
  vec2 cellId = floor(uv * vec2(cols, rows));
  float t = u_time * u_speed;

  float n1 = noise(cellId * 0.15 + vec2(0.0, t * 0.5));
  float n2 = noise(cellId * 0.3 + vec2(0.0, t * 0.8));
  float cascade = smoothstep(0.35, 0.65, n1 * 0.6 + n2 * 0.4);

  float dataBand = smoothstep(0.2, 0.25, abs(fract(cellId.x * 0.15) - 0.5)) * smoothstep(0.15, 0.2, abs(fract(cellId.y * 0.25 + t * 0.05) - 0.5));

  float cellState = cascade * dataBand;

  vec3 charCell = drawCell(cellId, gridUV, t);
  float r = charCell.x * cellState * (0.8 + 0.2 * hash(cellId + floor(t * 3.0)));
  float g = charCell.y * cellState * 0.95;
  float b = charCell.z * cellState * 0.9;

  vec2 mUV = (u_mouse - u_res * 0.5) / min(u_res.x, u_res.y);
  float mDist = length(uv - mUV);
  float mouseFade = smoothstep(0.6, 0.15, mDist);

  vec3 col = vec3(r * 0.8 + mouseFade * 0.2, g * 0.9 + mouseFade * 0.15, b + mouseFade * 0.5);

  float scan = smoothstep(0.0, 0.15, abs(gridUV.y));
  col *= scan * 0.85 + 0.15;

  col -= hash(gl_FragCoord.xy + fract(u_time) * 100.0) * 0.08;

  float vig = 1.0 - smoothstep(0.3, 1.1, length(uv));
  col *= 0.6 + vig * 0.4;

  gl_FragColor = vec4(col, 1.0);
}
`;

function getWebGLContext(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return null;
  const isWebGL2 = gl instanceof WebGL2RenderingContext;
  if (!isWebGL2) {
    gl.getExtension('OES_standard_derivatives');
  }
  return { gl: gl as WebGLRenderingContext, isWebGL2 };
}

export default function CyberMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctxResult = getWebGLContext(canvas);
    if (!ctxResult) return;
    const { gl } = ctxResult;

    const dpr = Math.min(window.devicePixelRatio || 1, prefersReduced ? 1 : 2);
    const opts = { rows: window.innerWidth < 768 ? 30 : 40, speed: 0.4, density: 1.0, resolution: dpr };
    let time = 0;
    let mouse = { x: 0, y: 0 };
    let running = true;
    let lastTime = 0;
    let animId = 0;

    const program = gl.createProgram()!;

    function compile(type: number, source: string) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const vs = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_res');
    const uRowCount = gl.getUniformLocation(program, 'u_rowCount');
    const uSpeed = gl.getUniformLocation(program, 'u_speed');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    function resize() {
      canvas.width = canvas.clientWidth * opts.resolution;
      canvas.height = canvas.clientHeight * opts.resolution;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener('resize', resize);
    resize();

    function render(now: number) {
      if (!running) {
        animId = requestAnimationFrame(render);
        return;
      }
      const dt = prefersReduced ? 0 : (now - lastTime) / 1000;
      lastTime = now;
      time += dt * opts.speed;

      gl.uniform1f(uTime, time);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uRowCount, opts.rows * opts.density);
      gl.uniform1f(uSpeed, 1.0);
      gl.uniform2f(uMouse, mouse.x * opts.resolution, (canvas.clientHeight - mouse.y) * opts.resolution);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      animId = requestAnimationFrame(render);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    animId = requestAnimationFrame(render);

    cleanupRef.current = () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
