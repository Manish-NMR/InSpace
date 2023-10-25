import './index.css';
import React from 'react';
export default function Index(){
function hi(){

}
  return(
    <div class="app">
        <div id="bound-one" class="scroll-bound">
            <div class="content">
                <p>WebM Video</p>
                 <video width="600" muted preload>
                    <source src="https://cdn.ananaspizza.de/file/malte-image-store/v9-webm.webm" type="video/webm">
                    <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
            </div>
        </div>
        
        <div id="bound-two" class="scroll-bound">
            <div class="content">
                <p>MP4 Video - Keyframe Interval 1</p>
                 <video width="600" muted preload>
                   <source src="https://cdn.ananaspizza.de/file/malte-image-store/keyframe-interval-1.mp4" type="video/mp4">
                <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
            </div>
        </div>
        
        <div id="bound-three" class="scroll-bound">
            <div class="content">
                <p>MP4 Video - Keyframe Interval 20</p>
                 <video width="600" muted preload>
                   <source src="https://cdn.ananaspizza.de/file/malte-image-store/keyframe-interval-20.mp4" type="video/mp4">
                <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
            </div>
        </div>
        
    </div>
  );
}
