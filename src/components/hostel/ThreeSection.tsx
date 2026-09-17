import { lazy, Suspense, useEffect, useState } from "react";

const HostelBuildingScene = lazy(async () => {
  const module = await import("./ThreeScenes");
  return { default: module.HostelBuildingScene };
});

const StudentRoomScene = lazy(async () => {
  const module = await import("./ThreeScenes");
  return { default: module.StudentRoomScene };
});

const SecurityShieldScene = lazy(async () => {
  const module = await import("./ThreeScenes");
  return { default: module.SecurityShieldScene };
});

function useCanRender3D() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanRender(!reduced);
  }, []);

  return canRender;
}

function SceneFallback({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[320px] items-center justify-center rounded-3xl border border-border bg-card/70 text-center shadow-soft">
      <div>
        <div className="mx-auto mb-4 size-16 rounded-2xl bg-accent/15" />
        <p className="font-display text-xl font-semibold text-foreground">{label}</p>
      </div>
    </div>
  );
}

export function Building3D() {
  const canRender = useCanRender3D();
  if (!canRender) return <SceneFallback label="Premium hostel residence" />;

  return (
    <Suspense fallback={<SceneFallback label="Loading residence view" />}>
      <HostelBuildingScene />
    </Suspense>
  );
}

export function Room3D() {
  const canRender = useCanRender3D();
  if (!canRender) return <SceneFallback label="Interactive room preview" />;

  return (
    <Suspense fallback={<SceneFallback label="Loading room view" />}>
      <StudentRoomScene />
    </Suspense>
  );
}

export function Shield3D() {
  const canRender = useCanRender3D();
  if (!canRender) return <SceneFallback label="Safety first" />;

  return (
    <Suspense fallback={<SceneFallback label="Loading safety view" />}>
      <SecurityShieldScene />
    </Suspense>
  );
}
