import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
// Add useMemo to imports
import { Suspense, useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";

export default function Shapes() {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas
                className="z-0"
                shadows
                gl={{ antialias: true }}
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 25], fov: 25, near: 1, far: 40 }}
            >
                {/* Fallback lights in case Environment fails */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} />

                {/* Main Geometries in their own Suspense */}
                <Suspense fallback={null}>
                    <Geometries />
                    <ContactShadows
                        position={[0, -3.5, 0]}
                        opacity={0.65}
                        scale={40}
                        blur={1}
                        far={9}
                    />
                </Suspense>

                {/* Environment in separate Suspense so it doesn't block Geometries */}
                <Suspense fallback={null}>
                    <Environment preset="studio" />
                </Suspense>
            </Canvas>
        </div>
    );
}

function Geometries() {
    const geometries = [
        {
            position: [0, 0, 0],
            r: 0.3,
            geometry: new THREE.IcosahedronGeometry(3), // Gem (Center)
        },
        {
            position: [1, -0.75, 4], // Moved closer (was [2.5, -2, 4])
            r: 0.4,
            geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), // Pill (Closer)
        },
        {
            position: [-1.4, 2, -4], // Moved closer (was [-3, 3, -4])
            r: 0.6,
            geometry: new THREE.DodecahedronGeometry(1.5), // Soccer ball (Closer)
        },
        {
            position: [-0.8, -0.75, 5], // Moved closer (was [-2.5, -2, 5])
            r: 0.5,
            geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut (Closer)
        },
        {
            position: [1.6, 1.6, -4], // Moved closer (was [3, 3, -4])
            r: 0.7,
            geometry: new THREE.OctahedronGeometry(1.5), // Diamond (Closer)
        },
    ];

    const soundEffects = useMemo(() => [
        new Audio("/sounds/hit2.ogg"),
        new Audio("/sounds/hit3.ogg"),
        new Audio("/sounds/hit4.ogg"),
    ], []);

    const materials = [
        new THREE.MeshNormalMaterial(),
        new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
        new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
        new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
        new THREE.MeshStandardMaterial({
            roughness: 0,
            metalness: 0.5,
            color: 0x2980b9,
        }),
        new THREE.MeshStandardMaterial({
            color: 0x2c3e50,
            roughness: 0.1,
            metalness: 0.5,
        }),
        // Add new warmer/reference colors
        new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.1 }), // Pastel Red
        new THREE.MeshStandardMaterial({ color: 0xff9f43, roughness: 0.1 }), // Pastel Orange
        new THREE.MeshStandardMaterial({ color: 0x54a0ff, roughness: 0.1 }), // Pastel Blue
        new THREE.MeshStandardMaterial({ color: 0x5f27cd, roughness: 0.1 }), // Purple
    ];

    return geometries.map(({ position, r, geometry }) => (
        <Geometry
            key={JSON.stringify(position)} // Unique key
            position={position.map((p) => p * 2)}
            geometry={geometry}
            soundEffects={soundEffects}
            materials={materials}
            r={r}
        />
    ));
}

function Geometry({ r, position, geometry, soundEffects, materials }: any) {
    const meshRef = useRef<THREE.Group>(null);
    const [visible, setVisible] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const startingMaterial = getRandomMaterial();

    function getRandomMaterial() {
        return gsap.utils.random(materials);
    }

    function handleClick(e: any) {
        const mesh = e.object;

        gsap.utils.random(soundEffects).play();

        gsap.to(mesh.rotation, {
            x: `+=${gsap.utils.random(0, 2)}`,
            y: `+=${gsap.utils.random(0, 2)}`,
            z: `+=${gsap.utils.random(0, 2)}`,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            yoyo: true,
        });

        mesh.material = getRandomMaterial();
    }

    const handlePointerOver = () => {
        document.body.style.cursor = "pointer";
    };

    const handlePointerOut = () => {
        document.body.style.cursor = "default";
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            setVisible(true);
            // @ts-ignore
            gsap.from(meshRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: gsap.utils.random(0.8, 1.2),
                ease: "elastic.out(1,0.3)",
                delay: gsap.utils.random(0, 0.5),
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <group position={position as any} ref={meshRef}>
            <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
                <mesh
                    geometry={geometry}
                    onClick={handleClick}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    visible={visible}
                    material={startingMaterial}
                ></mesh>
            </Float>
        </group>
    );
}
