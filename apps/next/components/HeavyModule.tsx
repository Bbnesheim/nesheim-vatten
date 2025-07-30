import React from 'react';

export interface HeavyModuleProps {
  /**
   * Text displayed inside the component. This allows pages to
   * customise the message while keeping the component strongly typed.
   */
  content: string;
}

const HeavyModule: React.FC<HeavyModuleProps> = ({ content }) => {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};
export default HeavyModule;
