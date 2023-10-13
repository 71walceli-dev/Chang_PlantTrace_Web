import React from 'react';
import BaseLayout from '../components/BaseLayout';

export const Home: React.FC = () => {
  return (
    <BaseLayout>
      <div>
        {/* Contenido específico de la vista */}
        <h1>Mi Vista</h1>
        <p>Contenido de la vista.</p>
      </div>
    </BaseLayout>
  );
};