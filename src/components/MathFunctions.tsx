import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

interface MathElement {
  id: string;
  latex: string;
  baselineX: number; // initial horizontal position
  baseRotation: number; // base rotation in degrees
  y: number; // vertical position in px
  vy: number; // vertical velocity in px/ms
  scale: number;
  opacity: number;
  phase: number; // phase for horizontal oscillation
  rotationPhase: number; // phase for fluttering rotation
}

const EXPRESSIONS = [
  "\\sin(x)",
  "\\cos(x)",
  "\\tan(x)",
  "e^x",
  "\\log(x)",
  "\\sqrt{x}",
  "\\int_{0}^{x} t\\, dt",
  "f(x) = ax^2 + bx + c",
  "\\sum_{i=0}^{n} i^2",
  "\\lim_{x \\to \\infty} \\frac{1}{x}",
  "\\nabla \\cdot \\mathbf{A}",
  "\\mathcal{NN}",
  "\\Delta y",
  "L(x) = \\sum_{i=1}^{n} \\left|\\left|\\mathbf{x}_i - \\mathbf{w}_i\\right|\\right|^2",
  "J(\\theta) = \\frac{1}{2} \\sum_{i=1}^{m} \\left(h_\\theta(x_i) - y_i\\right)^2",
  "ReLU(x) = \\max(0, x)",
  "Sigmoid(x) = \\frac{1}{1 + e^{-x}}",
  "Tanh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}",
  "Softmax(x) = \\frac{e^x}{\\sum_{i=1}^{n} e^{x_i}}",
];

const createMathElement = (startY?: number): MathElement => ({
  id: Math.random().toString(36).substring(2, 9),
  latex: EXPRESSIONS[Math.floor(Math.random() * EXPRESSIONS.length)],
  baselineX: Math.random() * window.innerWidth,
  baseRotation: (Math.random() - 0.5) * 10, // between -5° and 5°
  y: startY !== undefined ? startY : Math.random() * window.innerHeight,
  // Start with a very gentle vertical velocity.
  vy: 0.005 + Math.random() * 0.005,
  scale: 0.8 + Math.random() * 0.4,
  opacity: 0.6 + Math.random() * 0.4,
  phase: Math.random() * Math.PI * 2,
  rotationPhase: Math.random() * Math.PI * 2,
});

const MathBackground: React.FC = () => {
  const [elements, setElements] = useState<MathElement[]>([]);
  const globalTimeRef = useRef(0);
  const lastFrameRef = useRef(performance.now());

  // Constants for the physics and flutter effect.
  const gravity = 0.00002; // vertical acceleration in px/ms^2
  const oscillationAmplitude = 30; // horizontal displacement in px
  const oscillationFrequency = 0.001; // horizontal oscillation speed (radians/ms)
  const flutterAmplitude = 15; // additional rotation in degrees due to flutter
  const angularFrequency = 0.002; // rotation oscillation speed (radians/ms)

  // Set up the initial array of math elements.
  useEffect(() => {
    const initialElements = Array.from({ length: 12 }, () =>
      createMathElement()
    );
    setElements(initialElements);
  }, []);

  // Update loop using requestAnimationFrame.
  useEffect(() => {
    let animationFrameId: number;
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameRef.current;
      globalTimeRef.current += deltaTime;
      lastFrameRef.current = currentTime;

      // Update vertical position and velocity using simple physics.
      setElements((prevElements) =>
        prevElements.map((el) => {
          const newVY = el.vy + gravity * deltaTime;
          const newY = el.y + newVY * deltaTime;
          // When the element goes below the viewport, reset it above.
          if (newY > window.innerHeight + 50) {
            return createMathElement(-50);
          }
          return { ...el, vy: newVY, y: newY };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Adjust baseline positions on window resize to avoid sudden jumps.
  useEffect(() => {
    const handleResize = () => {
      setElements((prev) =>
        prev.map((el) => ({
          ...el,
          baselineX: Math.min(el.baselineX, window.innerWidth - 50),
        }))
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {elements.map((el) => {
        // Compute horizontal oscillation: a gentle sway.
        const animatedX =
          el.baselineX +
          oscillationAmplitude *
            Math.sin(oscillationFrequency * globalTimeRef.current + el.phase);
        // Compute a natural fluttering rotation.
        const animatedRotation =
          el.baseRotation +
          flutterAmplitude *
            Math.sin(
              angularFrequency * globalTimeRef.current + el.rotationPhase
            );
        return (
          <motion.div
            key={el.id}
            style={{
              position: "absolute",
              // Use computed x position, fixed y position, rotation, and scale.
              transform: `translate(${animatedX}px, ${el.y}px) rotate(${animatedRotation}deg) scale(${el.scale})`,
              opacity: el.opacity,
            }}
          >
            <BlockMath math={el.latex} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default MathBackground;
