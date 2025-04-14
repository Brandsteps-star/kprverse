import StaggerTextReveal from "./effects/StaggerTextReveal"
export const App2 = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-8">
          <useTypingEffect
            text="Welcome to KPRVERSE"
            speed={0.08}
            className="text-4xl font-bold mb-12"
          />
    
          <StaggerTextReveal
            lines={[
              'We design immersive experiences.',
              'Scroll-driven animations.',
              'Creative 3D and visuals.',
            ]}
            className="text-2xl font-medium text-center"
          />
        </section>
      );
}