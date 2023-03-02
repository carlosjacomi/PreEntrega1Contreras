import React from 'react';

/** Componente personalizar SVG
  * @component
*/
const Svg = ({ width, height,xmlns,viewBox,children}) =>{
    return (
        <svg width={width} height={height} xmlns={xmlns} viewBox={viewBox}>
            {children}
        </svg>
    );
}

export default Svg;