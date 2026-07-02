import React from 'react';

export const Shapes = ({
  shapesCount = 100,
  shapes = ['circle', 'square', 'triangle'],
  lowerLimit = '',
  upperLimit = '',
  delayLowerLimit = '',
  delayUpperLimit = '',
}) => {
  const min = lowerLimit === '' ? 0 : Number(lowerLimit);
  const max = upperLimit === '' ? 100 : Number(upperLimit);
  const delayMin = delayLowerLimit === '' ? 0 : Number(delayLowerLimit);
  const delayMax = delayUpperLimit === '' ? 5 : Number(delayUpperLimit);

  return (
    <div className="back-shapes">
      {Array.from({ length: shapesCount }).map((_, index) => {
        const shapeName = shapes[index % shapes.length];
        const top = `${Math.random() * (max - min) + min}%`;
        const left = `${Math.random() * (max - min) + min}%`;
        const animationDelay = `${Math.random() * (delayMax - delayMin) + delayMin}s`;

        return (
          <span
            key={`${shapeName}-${index}`}
            className={`floating ${shapeName}`}
            style={{ top, left, animationDelay }}
          />
        );
      })}
    </div>
  );
};