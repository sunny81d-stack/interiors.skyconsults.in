'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Html, ContactShadows } from '@react-three/drei';
import { RotateCw, ZoomIn, Move } from 'lucide-react';

interface Props {
  modelPath: string;
}

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1} position={[0, -1, 0]} />;
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-silver-700" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-royal-500 animate-spin" />
        </div>
        <p className="font-body text-sm text-silver-400">Loading 3D Model...</p>
      </div>
    </Html>
  );
}

function PlaceholderMessage({ path }: { path: string }) {
  return (
    <Html center>
      <div className="text-center max-w-xs">
        <div className="w-16 h-16 rounded-full bg-royal-500/10 border border-royal-500/20 flex items-center justify-center mx-auto mb-4">
          <RotateCw className="w-7 h-7 text-royal-500/40" />
        </div>
        <p className="font-display text-lg text-silver-400 mb-2">3D Viewer</p>
        <p className="font-body text-xs text-silver-600">
          Place your <code className="px-1 py-0.5 bg-white/5 rounded text-royal-400">.glb</code> file
          at <code className="px-1 py-0.5 bg-white/5 rounded text-royal-400">{path}</code>
        </p>
      </div>
    </Html>
  );
}

export default function ThreeViewer({ modelPath }: Props) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {/* Controls hint */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {[
          { icon: RotateCw, label: 'Left-click drag to rotate' },
          { icon: ZoomIn, label: 'Scroll to zoom' },
          { icon: Move, label: 'Right-click drag to pan' },
        ].map((hint) => (
          <div
            key={hint.label}
            className="flex items-center gap-2 text-xs text-silver-500 font-body"
          >
            <hint.icon className="w-3.5 h-3.5" />
            {hint.label}
          </div>
        ))}
      </div>

      {/* 3D Canvas */}
      <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-silver-900/50">
        <Canvas
          camera={{ position: [4, 3, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          onError={() => setHasError(true)}
        >
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={0.8} castShadow />
          <directionalLight position={[-3, 4, -3]} intensity={0.3} />
          <pointLight position={[0, 4, 0]} intensity={0.3} color="#4A90C4" />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Floor shadow */}
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />

          {/* Model or Placeholder */}
          <Suspense fallback={<LoadingFallback />}>
            {hasError ? (
              <PlaceholderMessage path={modelPath} />
            ) : (
              <ErrorBoundaryModel path={modelPath} onError={() => setHasError(true)} />
            )}
          </Suspense>

          {/* Camera Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={15}
            minPolarAngle={0.2}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Model info */}
      <div className="mt-4 flex items-center justify-between">
        <p className="font-body text-xs text-silver-600">
          Model: {modelPath.split('/').pop()}
        </p>
        <p className="font-body text-xs text-silver-600">
          Drag to interact · Auto-rotating
        </p>
      </div>
    </div>
  );
}

/**
 * Wrapper that catches GLB loading errors gracefully
 */
function ErrorBoundaryModel({
  path,
  onError,
}: {
  path: string;
  onError: () => void;
}) {
  try {
    return <Model path={path} />;
  } catch {
    onError();
    return <PlaceholderMessage path={path} />;
  }
}