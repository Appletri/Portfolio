import { useEffect } from "react";
import { useState } from "react";
import canvasDots from './DotAnimation';
import canvasDotsBg from './bgCanvas';
import React from 'react';

class Canvas extends React.Component {
  render() {
    return (
      <div>
        <div className='hero'>
          <div className='canvas'>
            <canvas class='connecting-dots'></canvas>
          </div>
          <div className='heading'>
            <div className='headline1'>
              <p>Hello, I'm Tri.</p>
            </div>
            <div className='headline2'>
              I'm a full stack web developer.
            </div>
          </div>
        </div>
        <div className='main-bg'>
          <div className='canvas'>
            <canvas className='canvas-2'></canvas>
          </div>
        </div>
      </div>
    )
  }
}

export default Canvas;