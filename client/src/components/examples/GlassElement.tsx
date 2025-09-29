import { GlassElement } from '../glass/GlassElement';

export default function GlassElementExample() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center gap-8 p-8">
      <GlassElement
        width={200}
        height={200}
        radius={50}
        depth={10}
        blur={2}
        chromaticAberration={5}
      />
      <GlassElement
        width={150}
        height={150}
        radius={75}
        depth={8}
        blur={3}
        chromaticAberration={0}
      />
      <GlassElement
        width={180}
        height={180}
        radius={20}
        depth={6}
        blur={1}
        chromaticAberration={3}
      />
    </div>
  );
}