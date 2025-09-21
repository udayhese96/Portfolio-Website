import { useEffect, useRef } from 'react';

const CyberpunkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced 3D particle system
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      speed: number;
      size: number;
      opacity: number;
      char: string;
      angle: number;
      rotationSpeed: number;
      color: string;
      trail: Array<{x: number, y: number, opacity: number}>;
    }> = [];

    const characters = ['0', '1', '█', '▓', '▒', '░', '⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    const colors = ['#00ffff', '#0080ff', '#00ccff', '#66d9ff', '#80e5ff'];
    const maxParticles = 120;

    // Initialize enhanced particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1500 + 100,
        speed: Math.random() * 3 + 1,
        size: Math.random() * 20 + 8,
        opacity: Math.random() * 0.8 + 0.3,
        char: characters[Math.floor(Math.random() * characters.length)],
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: []
      });
    }

    // Enhanced neural network connections
    const connections: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
      pulseSpeed: number;
      thickness: number;
      color: string;
      dataNodes: Array<{position: number, size: number, glow: number}>;
    }> = [];

    for (let i = 0; i < 50; i++) {
      connections.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        opacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        thickness: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        dataNodes: Array.from({length: 3}, () => ({
          position: Math.random(),
          size: Math.random() * 8 + 4,
          glow: Math.random() * 0.5 + 0.5
        }))
      });
    }

    // 3D Floating geometric shapes
    const geometricShapes: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      rotation: {x: number, y: number, z: number};
      rotationSpeed: {x: number, y: number, z: number};
      shape: 'cube' | 'pyramid' | 'octahedron';
      color: string;
      opacity: number;
    }> = [];

    for (let i = 0; i < 15; i++) {
      const shapes = ['cube', 'pyramid', 'octahedron'] as const;
      geometricShapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 800 + 200,
        size: Math.random() * 40 + 20,
        rotation: {
          x: Math.random() * Math.PI * 2,
          y: Math.random() * Math.PI * 2,
          z: Math.random() * Math.PI * 2
        },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.1
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      // Enhanced clear with dynamic fade
      const fadeIntensity = 0.03 + Math.sin(time * 0.5) * 0.02;
      ctx.fillStyle = `rgba(0, 4, 12, ${fadeIntensity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.016;

      // Draw enhanced neural connections with multiple data flows
      connections.forEach((conn, index) => {
        const pulse = Math.sin(time * conn.pulseSpeed * 60 + index) * 0.5 + 0.5;
        const opacity = conn.opacity * pulse;

        // Parse color from hex to rgba
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        // Enhanced connection line with dynamic thickness
        const dynamicThickness = conn.thickness * (0.8 + pulse * 0.4);
        const gradient = ctx.createLinearGradient(conn.x1, conn.y1, conn.x2, conn.y2);
        gradient.addColorStop(0, hexToRgba(conn.color, opacity * 0.2));
        gradient.addColorStop(0.5, hexToRgba(conn.color, opacity * 0.8));
        gradient.addColorStop(1, hexToRgba(conn.color, opacity * 0.2));

        ctx.strokeStyle = gradient;
        ctx.lineWidth = dynamicThickness;
        ctx.beginPath();
        ctx.moveTo(conn.x1, conn.y1);
        ctx.lineTo(conn.x2, conn.y2);
        ctx.stroke();

        // Multiple flowing data nodes
        conn.dataNodes.forEach((node, nodeIndex) => {
          const nodeSpeed = 1 + nodeIndex * 0.3;
          const flowPosition = ((time * nodeSpeed + index + nodeIndex) % 1);
          const flowX = conn.x1 + (conn.x2 - conn.x1) * flowPosition;
          const flowY = conn.y1 + (conn.y2 - conn.y1) * flowPosition;

          const nodeGradient = ctx.createRadialGradient(flowX, flowY, 0, flowX, flowY, node.size);
          nodeGradient.addColorStop(0, hexToRgba(conn.color, opacity * node.glow));
          nodeGradient.addColorStop(0.7, hexToRgba(conn.color, opacity * node.glow * 0.5));
          nodeGradient.addColorStop(1, hexToRgba(conn.color, 0));

          ctx.fillStyle = nodeGradient;
          ctx.beginPath();
          ctx.arc(flowX, flowY, node.size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Enhanced 3D matrix rain with trails
      particles.forEach((particle, index) => {
        // Update 3D position with variable speed
        const speedMultiplier = 1 + Math.sin(time + index) * 0.5;
        particle.z -= particle.speed * speedMultiplier * 6;

        if (particle.z <= 0) {
          particle.z = 1500;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.char = characters[Math.floor(Math.random() * characters.length)];
          particle.color = colors[Math.floor(Math.random() * colors.length)];
          particle.trail = [];
        }

        // Calculate enhanced 3D projection
        const focalLength = 400;
        const scale = focalLength / particle.z;
        const perspectiveX = canvas.width / 2 + (particle.x - canvas.width / 2) * scale;
        const perspectiveY = canvas.height / 2 + (particle.y - canvas.height / 2) * scale;
        const projectedSize = particle.size * scale;

        // Update trail
        particle.trail.push({
          x: perspectiveX,
          y: perspectiveY,
          opacity: particle.opacity * (1 - particle.z / 1500)
        });
        if (particle.trail.length > 8) {
          particle.trail.shift();
        }

        // Update rotation with 3D effect
        particle.angle += particle.rotationSpeed;

        // Skip if out of bounds
        if (perspectiveX < -100 || perspectiveX > canvas.width + 100 ||
            perspectiveY < -100 || perspectiveY > canvas.height + 100) return;

        // Calculate depth-based opacity and color
        const depthOpacity = particle.opacity * (1 - particle.z / 1500);
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        // Draw particle trail
        particle.trail.forEach((trailPoint, trailIndex) => {
          const trailOpacity = (trailPoint.opacity * (trailIndex / particle.trail.length)) * 0.3;
          if (trailOpacity > 0.01) {
            const trailSize = projectedSize * (trailIndex / particle.trail.length) * 0.5;
            const trailGradient = ctx.createRadialGradient(
              trailPoint.x, trailPoint.y, 0,
              trailPoint.x, trailPoint.y, trailSize * 2
            );
            trailGradient.addColorStop(0, hexToRgba(particle.color, trailOpacity));
            trailGradient.addColorStop(1, hexToRgba(particle.color, 0));

            ctx.fillStyle = trailGradient;
            ctx.beginPath();
            ctx.arc(trailPoint.x, trailPoint.y, trailSize, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // Enhanced glow effect
        const glowSize = projectedSize * 4;
        const glowIntensity = depthOpacity * (0.8 + Math.sin(time * 3 + index) * 0.2);
        const glowGradient = ctx.createRadialGradient(
          perspectiveX, perspectiveY, 0,
          perspectiveX, perspectiveY, glowSize
        );
        glowGradient.addColorStop(0, hexToRgba(particle.color, glowIntensity));
        glowGradient.addColorStop(0.4, hexToRgba(particle.color, glowIntensity * 0.5));
        glowGradient.addColorStop(1, hexToRgba(particle.color, 0));

        ctx.fillStyle = glowGradient;
        ctx.fillRect(
          perspectiveX - glowSize,
          perspectiveY - glowSize,
          glowSize * 2,
          glowSize * 2
        );

        // Draw enhanced rotating character with shadows
        ctx.save();
        ctx.translate(perspectiveX, perspectiveY);
        ctx.rotate(particle.angle);

        // Character shadow
        ctx.fillStyle = hexToRgba('#000000', depthOpacity * 0.3);
        ctx.font = `${projectedSize}px 'Orbitron', monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(particle.char, 2, 2);

        // Main character
        ctx.fillStyle = hexToRgba(particle.color, depthOpacity);
        ctx.fillText(particle.char, 0, 0);
        ctx.restore();
      });

      // Draw 3D geometric shapes
      geometricShapes.forEach((shape, index) => {
        // Update rotation
        shape.rotation.x += shape.rotationSpeed.x;
        shape.rotation.y += shape.rotationSpeed.y;
        shape.rotation.z += shape.rotationSpeed.z;

        // Calculate 3D projection
        const focalLength = 500;
        const scale = focalLength / shape.z;
        const perspectiveX = canvas.width / 2 + (shape.x - canvas.width / 2) * scale;
        const perspectiveY = canvas.height / 2 + (shape.y - canvas.height / 2) * scale;
        const projectedSize = shape.size * scale;

        // Skip if too small or out of bounds
        if (projectedSize < 2 || perspectiveX < -100 || perspectiveX > canvas.width + 100 ||
            perspectiveY < -100 || perspectiveY > canvas.height + 100) return;

        const depthOpacity = shape.opacity * (1 - shape.z / 1000);

        ctx.save();
        ctx.translate(perspectiveX, perspectiveY);

        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        // Draw shape based on type
        ctx.strokeStyle = hexToRgba(shape.color, depthOpacity);
        ctx.lineWidth = 2;
        ctx.beginPath();

        if (shape.shape === 'cube') {
          const half = projectedSize / 2;
          ctx.rect(-half, -half, projectedSize, projectedSize);
        } else if (shape.shape === 'pyramid') {
          const half = projectedSize / 2;
          ctx.moveTo(0, -half);
          ctx.lineTo(-half, half);
          ctx.lineTo(half, half);
          ctx.closePath();
        } else if (shape.shape === 'octahedron') {
          const vertices = 8;
          const angleStep = (Math.PI * 2) / vertices;
          const radius = projectedSize / 2;
          for (let i = 0; i <= vertices; i++) {
            const angle = i * angleStep + shape.rotation.z;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        }

        ctx.stroke();

        // Add glow effect for shapes
        ctx.shadowColor = shape.color;
        ctx.shadowBlur = 20;
        ctx.stroke();

        ctx.restore();
      });

      // Draw holographic grid
      const gridSpacing = 50;
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSpacing) {
        const wave = Math.sin(time * 2 + x * 0.01) * 5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + wave, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSpacing) {
        const wave = Math.sin(time * 1.5 + y * 0.01) * 5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y + wave);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Enhanced HTML particle system
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';

      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';

      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      const blueVariations = [
        'hsl(195, 100%, 60%)',
        'hsl(195, 100%, 70%)',
        'hsl(200, 100%, 65%)',
        'hsl(190, 100%, 65%)',
        'hsl(180, 100%, 60%)'
      ];
      const color = blueVariations[Math.floor(Math.random() * blueVariations.length)];
      particle.style.background = color;
      particle.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}`;

      particlesRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 25000);
    };

    const particleInterval = setInterval(createParticle, 200);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
      {/* Enhanced 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, #001122 0%, #000511 40%, #000000 100%)'
        }}
      />

      {/* Additional 3D Layer Effects */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse"
             style={{
               boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff',
               animation: 'float 8s ease-in-out infinite'
             }}></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40"
             style={{
               boxShadow: '0 0 15px #0080ff, 0 0 30px #0080ff',
               animation: 'float 6s ease-in-out infinite reverse'
             }}></div>
        <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-cyan-300 rounded-full opacity-50"
             style={{
               boxShadow: '0 0 10px #66d9ff, 0 0 20px #66d9ff',
               animation: 'float 10s ease-in-out infinite'
             }}></div>

        {/* Geometric Wireframes */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-cyan-400/20 transform rotate-45"
             style={{animation: 'spin 30s linear infinite'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-blue-400/15 rounded-full"
             style={{animation: 'spin 25s linear infinite reverse'}}></div>

        {/* Circuit Patterns */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
        <div className="absolute right-0 top-1/2 w-32 h-px bg-gradient-to-l from-cyan-400/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 w-px h-24 bg-gradient-to-t from-blue-400/50 to-transparent"></div>
      </div>

      {/* Enhanced HTML particles with 3D perspective */}
      <div
        ref={particlesRef}
        className="absolute inset-0 w-full h-full"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      ></div>

      {/* 3D Geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 opacity-20 animate-spin"
           style={{
             animationDuration: '20s',
             borderImage: 'linear-gradient(45deg, hsl(var(--neon-cyan)), hsl(var(--neon-blue))) 1',
             filter: 'drop-shadow(0 0 10px hsl(var(--neon-blue)))',
             transform: 'rotateX(45deg) rotateY(45deg)'
           }}></div>

      <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 opacity-15 animate-spin"
           style={{
             animationDuration: '15s',
             animationDirection: 'reverse',
             borderImage: 'linear-gradient(45deg, hsl(var(--neon-blue)), hsl(var(--neon-electric))) 1',
             filter: 'drop-shadow(0 0 8px hsl(var(--neon-cyan)))',
             transform: 'rotateX(-45deg) rotateY(-45deg)'
           }}></div>

      {/* Glowing 3D orbs */}
      <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full opacity-60"
           style={{
             background: 'radial-gradient(circle, hsl(var(--neon-cyan)), hsl(var(--neon-blue)))',
             boxShadow: '0 0 20px hsl(var(--neon-cyan)), 0 0 40px hsl(var(--neon-blue))',
             animation: 'pulseGlow 2s ease-in-out infinite alternate',
             transform: 'translateZ(50px)'
           }}></div>

      <div className="absolute bottom-1/3 left-1/5 w-4 h-4 rounded-full opacity-40"
           style={{
             background: 'radial-gradient(circle, hsl(var(--neon-blue)), hsl(var(--neon-electric)))',
             boxShadow: '0 0 15px hsl(var(--neon-blue)), 0 0 30px hsl(var(--neon-electric))',
             animation: 'pulseGlow 1.5s ease-in-out infinite alternate',
             animationDelay: '1s',
             transform: 'translateZ(30px)'
           }}></div>

      <div className="absolute top-2/3 right-1/5 w-3 h-3 rounded-full opacity-50"
           style={{
             background: 'radial-gradient(circle, hsl(var(--neon-cyan)), hsl(var(--neon-blue)))',
             boxShadow: '0 0 12px hsl(var(--neon-cyan)), 0 0 24px hsl(var(--neon-blue))',
             animation: 'pulseGlow 2.5s ease-in-out infinite alternate',
             animationDelay: '2s',
             transform: 'translateZ(20px)'
           }}></div>

      {/* Enhanced Random Moving Shapes with Zoom Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Triangles with Zoom */}
        <div className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-cyan-400/30"
             style={{
               top: '10%',
               left: '15%',
               animation: 'floatRandomZoom1 15s ease-in-out infinite',
               filter: 'drop-shadow(0 0 10px hsl(var(--neon-cyan)))'
             }}></div>

        <div className="absolute w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-blue-400/40"
             style={{
               top: '70%',
               right: '20%',
               animation: 'floatRandomZoom2 18s ease-in-out infinite',
               filter: 'drop-shadow(0 0 8px hsl(var(--neon-blue)))'
             }}></div>

        {/* Enhanced Floating Diamonds with Complex Motion */}
        <div className="absolute w-6 h-6 bg-purple-400/30 transform rotate-45"
             style={{
               top: '30%',
               right: '30%',
               animation: 'floatRandomZoom3 12s ease-in-out infinite',
               filter: 'drop-shadow(0 0 12px hsl(var(--neon-purple)))'
             }}></div>

        <div className="absolute w-4 h-4 bg-cyan-300/40 transform rotate-45"
             style={{
               bottom: '40%',
               left: '25%',
               animation: 'floatRandomZoom1 16s ease-in-out infinite reverse',
               filter: 'drop-shadow(0 0 8px hsl(var(--neon-cyan)))'
             }}></div>

        {/* Additional Moving Shapes */}
        <div className="absolute w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full"
             style={{
               top: '20%',
               right: '10%',
               animation: 'floatRandomZoom2 14s ease-in-out infinite',
               filter: 'drop-shadow(0 0 15px hsl(var(--neon-blue)))'
             }}></div>

        <div className="absolute w-5 h-5 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full"
             style={{
               bottom: '20%',
               right: '40%',
               animation: 'floatRandomZoom3 20s ease-in-out infinite',
               filter: 'drop-shadow(0 0 12px hsl(var(--neon-pink)))'
             }}></div>

        <div className="absolute w-3 h-3 bg-cyan-400/40 rounded-full"
             style={{
               top: '60%',
               left: '10%',
               animation: 'floatRandomZoom1 22s ease-in-out infinite',
               filter: 'drop-shadow(0 0 10px hsl(var(--neon-cyan)))'
             }}></div>

        {/* Floating Hexagons */}
        <div className="absolute w-8 h-8"
             style={{
               top: '60%',
               left: '70%',
               animation: 'floatRandom5 16s ease-in-out infinite'
             }}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30"
                     fill="none"
                     stroke="hsl(var(--neon-electric))"
                     strokeWidth="3"
                     opacity="0.4"
                     style={{filter: 'drop-shadow(0 0 10px hsl(var(--neon-electric)))'}} />
          </svg>
        </div>

        {/* Floating Circles */}
        <div className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30"
             style={{
               top: '80%',
               right: '10%',
               animation: 'floatRandom6 11s ease-in-out infinite',
               filter: 'drop-shadow(0 0 15px hsl(var(--neon-blue)))'
             }}></div>

        <div className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-400/40 to-pink-400/40"
             style={{
               top: '15%',
               right: '60%',
               animation: 'floatRandom7 13s ease-in-out infinite',
               filter: 'drop-shadow(0 0 12px hsl(var(--neon-pink)))'
             }}></div>

        {/* Floating Plus Signs */}
        <div className="absolute text-2xl text-cyan-400/30 font-bold"
             style={{
               top: '45%',
               left: '10%',
               animation: 'floatRandom8 9s ease-in-out infinite',
               filter: 'drop-shadow(0 0 8px hsl(var(--neon-cyan)))'
             }}>+</div>

        <div className="absolute text-lg text-blue-400/40 font-bold"
             style={{
               bottom: '20%',
               right: '40%',
               animation: 'floatRandom9 17s ease-in-out infinite',
               filter: 'drop-shadow(0 0 6px hsl(var(--neon-blue)))'
             }}>+</div>
      </div>

      {/* Dynamic circuit lines */}
      <div className="absolute top-0 left-1/2 w-px h-full opacity-30"
           style={{
             background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--neon-cyan)) 20%, hsl(var(--neon-blue)) 50%, hsl(var(--neon-cyan)) 80%, transparent 100%)',
             filter: 'drop-shadow(0 0 5px hsl(var(--neon-blue)))',
             animation: 'circuitFlow 4s ease-in-out infinite'
           }}></div>

      <div className="absolute left-0 top-1/2 w-full h-px opacity-30"
           style={{
             background: 'linear-gradient(to right, transparent 0%, hsl(var(--neon-blue)) 20%, hsl(var(--neon-cyan)) 50%, hsl(var(--neon-blue)) 80%, transparent 100%)',
             filter: 'drop-shadow(0 0 5px hsl(var(--neon-cyan)))',
             animation: 'circuitFlow 3s ease-in-out infinite reverse'
           }}></div>

      {/* Enhanced corner decorations with glow */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 opacity-60"
           style={{
             borderColor: 'hsl(var(--neon-cyan))',
             filter: 'drop-shadow(0 0 8px hsl(var(--neon-cyan)))',
             animation: 'neonGlow 3s ease-in-out infinite alternate'
           }}></div>

      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 opacity-60"
           style={{
             borderColor: 'hsl(var(--neon-blue))',
             filter: 'drop-shadow(0 0 8px hsl(var(--neon-blue)))',
             animation: 'neonGlow 3s ease-in-out infinite alternate',
             animationDelay: '0.5s'
           }}></div>

      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 opacity-60"
           style={{
             borderColor: 'hsl(var(--neon-electric))',
             filter: 'drop-shadow(0 0 8px hsl(var(--neon-electric)))',
             animation: 'neonGlow 3s ease-in-out infinite alternate',
             animationDelay: '1s'
           }}></div>

      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 opacity-60"
           style={{
             borderColor: 'hsl(var(--neon-cyan))',
             filter: 'drop-shadow(0 0 8px hsl(var(--neon-cyan)))',
             animation: 'neonGlow 3s ease-in-out infinite alternate',
             animationDelay: '1.5s'
           }}></div>
    </div>
  );
};

export default CyberpunkBackground;