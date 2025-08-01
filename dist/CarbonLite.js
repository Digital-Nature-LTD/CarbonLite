(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.CarbonLite = factory());
})(this, (function () { 'use strict';

    class CarbonLiteMessage extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
    <a href="https://www.digital-nature.co.uk/libraries/carbon-lite" target="_blank">
        <svg
           fill="currentColor"
           viewBox="0 0 489.242 489.242"
           xml:space="preserve"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:svg="http://www.w3.org/2000/svg"><defs
           id="defs3" />
            <g id="g3">
                <g id="g2">
                    <path d="M416.321,171.943c0-97.8-82.2-176.9-181-171.7c-89.5,5.2-160.3,79.1-162.4,168.6c0,44.7,16.6,86.3,45.8,118.6    c47.7,51.1,41.6,110.3,41.6,110.3c0,11.4,9.4,20.8,20.8,20.8h126.9c11.4,0,20.8-9.4,21.8-20.8c0,0-7-57.7,40.6-109.2    C399.621,257.243,416.321,215.643,416.321,171.943z M288.321,377.943h-87.4c-2.1-42.7-20.8-84.3-51-116.5    c-22.9-25-34.3-57.2-34.3-90.5c1-68.7,54.1-124.8,122.8-129c74.9-4.2,137.3,56.2,137.3,130c0,32.3-12.5,64.5-35.4,88.4    C309.121,293.643,290.421,335.243,288.321,377.943z" id="path1" />
                    <path d="M281.021,447.643h-73.9c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h73.9c11.4,0,20.8-9.4,20.8-20.8    C301.821,457.043,292.521,447.643,281.021,447.643z" id="path2" />
                </g>
            </g>
            <g id="g2-0" transform="matrix(0.67077473,0,0,0.67077473,72.605091,-0.16116944)">
                <path class="st0" d="m 496.123,167.12 c -4.457,-12.064 -9.825,-23.73 -15.992,-34.864 -11.674,-21.088 -26.21,-40.373 -43.13,-57.261 -0.413,-0.413 -0.754,-0.762 -1.167,-1.175 h -0.028 c -0.48,-0.476 -0.937,-0.936 -1.445,-1.404 l -0.035,-0.024 c -1.449,-1.445 -2.948,-2.881 -4.457,-4.223 C 384.25,25.859 323.069,0.002 255.998,0.002 c -38.948,0 -75.912,8.722 -108.972,24.302 -2.27,1.071 -4.532,2.174 -6.754,3.31 -24.25,12.309 -46.277,28.356 -65.281,47.381 -27.793,27.761 -49.214,61.951 -61.924,100.11 -0.639,1.921 -1.27,3.873 -1.861,5.817 l -0.076,0.215 c -0.405,1.317 -0.793,2.682 -1.174,4.032 -0.944,3.23 -1.806,6.46 -2.592,9.754 -0.31,1.135 -0.563,2.278 -0.818,3.437 C 2.262,216.882 0,236.183 0,256 c 0,70.627 28.682,134.73 74.991,181.007 26.06,26.048 57.75,46.531 93.075,59.483 1.099,0.405 2.222,0.81 3.36,1.182 6.75,2.381 13.655,4.468 20.659,6.27 1.222,0.31 2.468,0.619 3.718,0.889 19.314,4.69 39.488,7.166 60.194,7.166 70.634,0 134.725,-28.674 181.003,-74.991 8.492,-8.468 16.36,-17.524 23.559,-27.127 C 492.834,367.055 512,313.706 512,256 c 0,-31.229 -5.615,-61.182 -15.877,-88.88 z M 94.789,417.221 C 53.512,375.897 28.015,319 28.015,256 c 0,-11.643 0.87,-23.056 2.552,-34.206 7.766,5.429 21.932,13.024 22.111,13.064 0.531,0.167 1.142,0.254 1.881,0.254 1.147,0 2.524,-0.206 3.948,-0.436 1.504,-0.222 3.036,-0.444 4.254,-0.444 0.381,0 0.742,0.016 1.028,0.071 0.527,0.238 1.393,2.238 1.849,3.31 0.945,2.159 1.913,4.396 3.905,5.373 1.849,0.936 5.849,1.421 11.71,2.047 1.941,0.215 3.925,0.453 4.944,0.619 0.381,0.698 0.845,2.405 1.151,3.596 0.893,3.349 1.778,6.77 4.329,8.294 2.116,1.294 9.016,7.857 12.866,11.722 0.508,0.492 1.146,0.746 1.809,0.746 0.425,0 0.889,-0.103 1.27,-0.357 0.306,-0.175 7.027,-4.111 9.373,-5.579 0.488,0.158 1.353,0.706 2.139,1.381 0.123,3.69 0.591,15.897 0.614,18.365 -0.432,1.532 -5.555,6.856 -11.206,11.634 -0.559,0.468 -0.9,1.127 -0.92,1.833 -0.024,0.698 -0.636,16.817 0,23.294 0.666,6.563 11.436,19.389 14.333,22.722 1.226,3.326 4.567,12.175 5.842,14.072 1.273,1.912 14.19,11.603 22.495,17.738 v 38.19 c 0,4.278 1.671,7.071 3.004,9.341 0.818,1.349 1.452,2.413 1.452,3.381 v 26.746 c 0,3.477 1.012,6.326 2.416,8.738 C 133.911,450.3 112.868,435.269 94.789,417.221 Z M 453.413,161.755 c -4.464,-3.174 -11.465,-4.452 -11.465,-4.452 l -5.099,-0.651 c -2.544,-5.088 -1.27,-16.547 -10.182,-14.008 -8.921,2.555 -38.214,7.642 -44.583,8.92 -6.361,1.27 -14.008,11.452 -19.099,19.096 -5.099,7.642 -19.106,31.848 -21.654,35.666 -2.544,3.817 -3.822,28.024 -3.822,34.381 0,6.381 28.028,33.127 36.936,34.396 8.917,1.27 33.11,-5.095 39.484,-6.365 6.369,-1.286 10.186,7.635 15.282,7.635 5.095,0 11.464,2.547 6.368,10.206 -5.095,7.619 -5.095,11.444 0,16.54 5.096,5.103 15.282,24.206 8.913,39.492 -6.369,15.277 -1.265,22.912 2.552,29.285 0.73,1.222 1.5,2.92 2.318,4.92 -9.178,14.635 -19.976,28.19 -32.151,40.404 -41.321,41.262 -98.218,66.762 -161.213,66.762 -21.044,0 -41.389,-2.866 -60.726,-8.167 0.08,-0.318 0.155,-0.674 0.21,-1.04 0.321,-2.388 -0.666,-4.166 -1.686,-5.42 1.429,-0.683 2.572,-1.778 3.385,-3.239 1.23,-2.238 1.432,-4.984 1.23,-7.151 l 1.238,0.024 c 3.107,0 6.679,-0.286 9.428,-2.246 4.504,-3.206 4.588,-9.984 3.742,-14.69 0.329,0.143 0.666,0.301 0.972,0.396 0.35,0.143 0.735,0.175 1.123,0.175 4.076,0 8.584,-7.326 9.798,-12.175 0.464,-1.778 2.167,-5.714 3.83,-9.548 3.893,-9.04 6.234,-14.722 5.782,-17.547 0.067,-1.778 7.052,-7.342 13.261,-8.588 7.366,-1.468 9.988,-4.174 12.766,-13.23 2.651,-8.595 3.953,-22.912 3.266,-29.032 -0.202,-2.007 4.142,-8.119 7.055,-12.166 4.735,-6.682 7.619,-10.952 7.619,-14.286 0,-7.698 -6.475,-12.889 -11.341,-16.134 -4.837,-3.23 -13.321,-3.976 -18.952,-4.445 -1.575,-0.135 -2.953,-0.254 -3.592,-0.388 -0.583,-0.12 -1.603,-1.23 -2.417,-2.088 -1.754,-1.889 -4.158,-4.46 -7.98,-4.944 -0.432,-0.056 -0.885,-0.072 -1.317,-0.072 -2.428,0 -4.584,0.762 -6.698,1.5 -1.885,0.683 -3.671,1.334 -5.448,1.334 -0.544,0 -1.048,-0.063 -1.556,-0.191 -0.944,-0.198 -1.306,-0.46 -1.378,-0.46 0.02,-0.428 0.838,-1.865 2.845,-3.199 1.941,-1.293 3.778,-4.15 1.663,-10.627 -1.503,-4.666 -4.285,-9.079 -5.396,-10.73 -4,-6.007 -11.29,-6.007 -13.683,-6.007 -2.191,0 -4.333,0.214 -6.528,0.404 l -0.476,0.016 c -2.219,0 -3.516,-1.952 -6.04,-6.079 -1.429,-2.342 -3.035,-4.961 -5.266,-7.659 -4.849,-5.81 -11.618,-6.58 -17.631,-6.58 -0.794,0 -1.556,0 -2.298,0.032 -0.634,0 -1.25,0.016 -1.829,0.016 -0.814,0 -1.556,-0.016 -2.198,-0.103 -2.21,-0.278 -5.5,-1.96 -8.401,-3.452 -3.182,-1.635 -6.19,-3.191 -8.738,-3.548 l -0.635,-0.047 c -3.643,0 -7.766,4.23 -13.651,10.643 -1.46,1.587 -3.341,3.642 -4.337,4.507 -0.198,-0.23 -0.457,-0.523 -0.655,-0.778 -1.071,-1.365 -2.527,-3.158 -5.103,-4.031 -0.556,-0.183 -1.119,-0.286 -1.678,-0.286 -2.012,0 -3.512,1.159 -4.818,2.158 -1.163,0.873 -2.159,1.612 -3.362,1.612 -0.706,0 -1.524,-0.246 -2.468,-0.754 -3.512,-1.92 -2.346,-9.278 -1.425,-15.183 0.436,-2.714 0.845,-5.27 0.845,-7.421 0,-4.888 -2.889,-5.42 -4.103,-5.42 -1.174,0 -2.321,0.406 -3.646,0.929 -1.5,0.54 -3.235,1.182 -5.044,1.182 -0.814,0 -1.576,-0.135 -2.314,-0.388 -1.452,-0.476 -2.095,-0.984 -2.194,-1.286 -0.357,-0.977 1.528,-3.85 2.9,-5.968 0.636,-0.969 1.302,-1.985 1.937,-3.024 2.655,-4.42 4.032,-7.682 2.623,-10.151 -0.87,-1.492 -2.465,-2.27 -4.762,-2.27 -0.885,0 -1.88,0.103 -3.055,0.333 -0.866,0.158 -1.683,0.238 -2.497,0.238 -1.094,0 -1.936,-0.151 -2.674,-0.278 -0.69,-0.11 -1.222,-0.214 -1.686,-0.214 -3.512,0 -3.944,3.491 -4.127,5 -0.655,5.301 -3.838,8 -9.417,8 -0.413,0 -0.809,-0.024 -1.246,-0.048 -5.937,-0.381 -8.464,-4.595 -8.464,-14.016 0,-4.095 0.643,-5.174 2.548,-8.388 0.944,-1.548 2.118,-3.508 3.543,-6.381 3.155,-6.294 5.655,-7.468 8.837,-8.936 0.94,-0.445 1.912,-0.896 2.909,-1.469 0.762,-0.46 1.397,-0.658 1.853,-0.658 0.337,0 0.687,0.135 1.302,0.341 0.845,0.317 1.984,0.722 3.492,0.722 0.432,0 0.888,-0.015 1.396,-0.087 4.687,-0.801 5.679,-3.548 6.548,-5.968 0.108,-0.254 0.202,-0.524 0.338,-0.865 0.25,0.087 0.504,0.15 0.762,0.198 2.064,0.595 5.504,1.556 11.055,1.556 1.833,0 3.159,0.023 4.127,0.08 -0.69,3.492 -0.666,10.222 6.234,18.087 2.27,2.571 4.262,3.769 6.294,3.769 6.528,0 7.08,-11 7.08,-23.238 0,-7.396 2.805,-9.42 11.107,-15.349 l 0.54,-0.397 c 4.508,-3.198 7.187,-7 9.778,-10.674 2.806,-3.96 5.448,-7.707 10.42,-10.802 4.666,-2.944 11.948,-6.175 18.98,-9.334 8.123,-3.611 15.786,-7.031 19.385,-9.904 4.127,-3.317 3.309,-8.508 2.643,-12.722 -0.866,-5.414 -0.611,-6.532 1.556,-7.176 3.568,-1.008 7.389,-1.602 11.44,-2.238 5.802,-0.913 11.818,-1.857 17.988,-4.182 6.405,-2.388 7.889,-5.809 8.016,-8.278 0.234,-4.174 -3.366,-7.516 -6.516,-9.095 -1.378,-0.691 -1.536,-4.072 -1.635,-7.072 -0.151,-3.833 -0.301,-7.777 -2.778,-10.222 -1.397,-1.428 -3.186,-2.143 -5.25,-2.143 -2.698,0 -5.6,1.19 -8.961,2.611 -2.222,0.912 -4.714,1.928 -7.364,2.69 -0.286,0.08 -0.536,0.135 -0.738,0.135 -0.996,0 -1.707,-2.071 -2.592,-4.976 -1.361,-4.294 -3.369,-10.722 -10.424,-10.722 -0.79,0 -1.659,0.072 -2.572,0.254 -8.992,1.801 -11.107,11.444 -12.631,18.491 -0.54,2.532 -1.377,6.373 -2.119,6.881 -5.298,0 -7.004,3.381 -8.662,6.666 -1.048,2.096 -2.238,4.461 -4.56,6.778 -1.425,1.429 -2.413,1.818 -2.698,1.85 -0.432,-0.405 -1.092,-3.508 1.682,-9.048 1.174,-2.325 2.496,-5.714 0.866,-8.484 -1.913,-3.238 -6.44,-3.452 -11.667,-3.642 -2.087,-0.103 -4.254,-0.183 -6.42,-0.46 -4.131,-0.516 -5.218,-1.564 -5.27,-1.786 0,-0.103 0.052,-0.818 1.175,-2.198 34.055,-20.246 73.836,-31.888 116.38,-31.888 51.586,0 99.082,17.103 137.292,45.968 -0.595,2.389 -2.527,5.865 -4.202,8.794 -2.543,4.468 -1.269,7.016 -1.269,7.016 0,0 12.103,-1.913 14.643,-3.182 0.896,-0.444 1.706,-1.762 2.302,-3.357 1.297,1.095 2.567,2.198 3.809,3.357 -3.028,2.745 -6.281,5.626 -7.381,6.372 -1.905,1.262 -8.274,3.182 -10.825,4.444 -2.548,1.278 7.638,5.739 7.638,7.643 0,1.913 0,10.826 -3.821,11.452 -3.817,0.643 -21.643,0.643 -21.643,0.643 0,0 -5.738,20.374 -4.464,22.286 1.274,1.92 9.552,6.381 14.65,5.746 5.092,-0.658 16.559,-6.365 16.559,-6.365 l 5.088,-11.46 10.186,-10.85 c 0,0 7.643,3.182 10.194,0.643 2.544,-2.54 7.642,-5.079 7.642,-5.079 0,0 5.096,9.539 8.278,10.818 l 0.615,0.278 0.016,0.039 c 3.679,5.064 7.115,10.278 10.318,15.659 l 0.032,0.04 v 0.024 l 0.047,0.112 c 0.175,0.373 0.358,0.706 0.588,0.921 5.218,8.841 9.885,18.031 13.904,27.547 -4.105,-0.268 -8.919,-3.022 -12.78,-5.768 z" id="path1-9" />
            </g>
        </svg>
        Get CarbonLite free at
        <br/>digital-nature.co.uk
    </a>`;
        }
    }
    customElements.define('carbon-lite-message', CarbonLiteMessage);

    class CarbonLiteElement extends HTMLElement {
        configure(message) {
            this.innerHTML = `
          <div>
            ${message}
          </div>
        `;
        }
    }
    customElements.define('carbon-lite', CarbonLiteElement);

    class CarbonLite {
        constructor() {
            this.initialised = false;
            this.ignoreInteractions = false;
            // objects
            this.carbonLite = new CarbonLiteElement();
            this.carbonLiteMessage = new CarbonLiteMessage();
            this.carbonLiteTimer = undefined;
            this.carbonLiteMessageTimer = undefined;
            // configurable
            this.config = {
                message: 'CarbonLite is reducing the carbon usage of this site, one (dark) pixel at a time',
                timeout: 60000,
                backgroundColour: '#000',
                messageTimeout: 3000,
                messageColour: '#254137',
                messageColourHover: '#7DF799',
                messageBorderColour: '#7DF799',
                messageDropShadowColour: '#254137',
                debug: false
            };
        }
        configure(configuration) {
            this.config = { ...this.config, ...configuration };
        }
        debug(message) {
            if (this.config.debug) {
                console.log(`CarbonLite: ${message}`);
            }
        }
        init(configuration = null) {
            this.debug('initialising');
            if (this.initialised) {
                return;
            }
            if (configuration) {
                this.configure(configuration);
            }
            if (this.config.message) {
                this.carbonLite.configure(this.config.message);
            }
            // add styles
            const style = document.createElement('style');
            style.innerHTML = this.generateStyles();
            document.head.appendChild(style);
            this.addEventListeners();
            this.restartTimer();
            this.initialised = true;
        }
        generateStyles() {
            return `
        carbon-lite {
            position: fixed;
            bottom: 0;
            right: 0;
            top: 0;
            left: 0;
            color: ${this.config.messageColour};
            z-index: 2147483646;
            background: ${this.config.backgroundColour};
            display: flex;
            justify-content: center;
            align-items: center;
            
            div {
                max-width: 80%;
                line-height: 1.5rem;
            }
        }
        
        carbon-lite-message {
            position: fixed;
            bottom: 100px;
            right: 100px;
            color: ${this.config.messageColour};
            text-align: center;
            z-index: 2147483647;
            opacity: 0.8;
            transition: opacity ${this.config.messageTimeout}ms ease-in;
            
            a {
                color: ${this.config.messageColour};
                background: ${this.config.backgroundColour};
                padding: 20px;
                display: block;
                text-decoration: none;
                border-radius: 20px;
                border: 3px solid ${this.config.backgroundColour};
                
                &:hover {
                    color: ${this.config.messageColourHover};
                    text-decoration: underline;
                    border-color: ${this.config.messageBorderColour};
                    filter: drop-shadow(0 0 0.75rem ${this.config.messageDropShadowColour});
                }
                
                svg {
                    height: 100px;
                    display: block;
                    margin: 0 auto 20px auto;
                }               
            }
            
            &.fading {
                opacity: 0;
                
                a {
                    border-color: ${this.config.messageBorderColour};
                    filter: drop-shadow(0 0 0.75rem ${this.config.messageDropShadowColour});
                }
            }
            
            &:hover {
                transition: opacity 0ms linear;
            }
        }
    `;
        }
        getIframes() {
            let iframes = document.getElementsByTagName(`iframe`);
            let iframesArray = [];
            for (let i = 0; i < iframes.length; i++) {
                iframesArray.push(iframes[i]);
            }
            return iframesArray;
        }
        addGlobalEventListener(eventType) {
            this.debug(`Adding listeners for event type ${eventType}`);
            let CarbonLite = this;
            let iframes = this.getIframes();
            iframes.forEach(iframe => {
                iframe.addEventListener(eventType, () => {
                    CarbonLite.userInteracted();
                });
            });
            document.addEventListener(eventType, () => {
                CarbonLite.userInteracted();
            });
        }
        addEventListeners() {
            this.debug('adding event listeners');
            this.addGlobalEventListener('mousemove');
            this.addGlobalEventListener('click');
            this.addGlobalEventListener('scroll');
            this.addGlobalEventListener('keypress');
            this.addGlobalEventListener('resize');
            this.addVideoEventListeners();
            let CarbonLite = this;
            this.debug('adding message event listeners');
            CarbonLite.carbonLiteMessage.addEventListener(`mouseenter`, (event) => {
                CarbonLite.carbonLiteMessage.classList.remove('fading');
                if (CarbonLite.carbonLiteMessageTimer) {
                    this.debug('clearing message fade out timer due to mouseenter');
                    clearTimeout(CarbonLite.carbonLiteMessageTimer);
                }
            });
            CarbonLite.carbonLiteMessage.addEventListener(`mouseleave`, (event) => {
                CarbonLite.fadeOutMessage();
            });
            document.addEventListener('carbon-lite-suspend', function (event) {
                CarbonLite.suspend();
            });
            document.addEventListener('carbon-lite-resume', function (event) {
                CarbonLite.resume();
            });
            document.addEventListener('carbon-lite-open', (event) => {
                if (event.detail?.interactionDelay) {
                    this.debug(`ignoring interactions for ${event.detail.interactionDelay} ms`);
                    CarbonLite.ignoreInteractions = true;
                    let originalMessage = this.config.message;
                    if (event.detail.tempMessage) {
                        this.debug(`Adding a temporary message ${event.detail.tempMessage}`);
                        this.carbonLite.configure(event.detail.tempMessage);
                    }
                    setTimeout(() => {
                        this.debug('allowing interactions');
                        CarbonLite.ignoreInteractions = false;
                        if (originalMessage) {
                            this.carbonLite.configure(originalMessage);
                        }
                    }, event.detail.interactionDelay);
                }
                CarbonLite.open();
            });
        }
        addVideoEventListeners() {
            this.debug('adding video event listeners');
            let CarbonLite = this;
            let videos = document.getElementsByTagName(`video`);
            for (let i = 0; i < videos.length; i++) {
                let videoEl = videos[i];
                videoEl.addEventListener(`playing`, () => {
                    CarbonLite.debug('video playing');
                    CarbonLite.suspend();
                });
                videoEl.addEventListener(`ended`, () => {
                    CarbonLite.debug('video ended');
                    CarbonLite.resume();
                });
                videoEl.addEventListener(`pause`, () => {
                    CarbonLite.debug('video paused');
                    CarbonLite.resume();
                });
            }
        }
        restartTimer() {
            clearTimeout(this.carbonLiteTimer);
            this.carbonLiteTimer = setTimeout(() => { this.open(); }, this.config.timeout);
        }
        userInteracted() {
            if (this.ignoreInteractions) {
                this.debug('ignoring interactions');
                return;
            }
            if (this.backgroundIsVisible()) {
                this.debug('user interacted - hiding');
                this.hideBackground();
            }
            else {
                this.debug('user interacted - restarting timer');
                this.restartTimer();
            }
        }
        suspend() {
            this.debug('suspending timer');
            if (this.backgroundIsVisible()) {
                document.body.removeChild(this.carbonLite);
            }
            if (this.messageIsVisible()) {
                document.body.removeChild(this.carbonLiteMessage);
            }
            clearTimeout(this.carbonLiteTimer);
            clearTimeout(this.carbonLiteMessageTimer);
        }
        backgroundIsVisible() {
            return this.carbonLite.parentNode === document.body;
        }
        messageIsVisible() {
            return this.carbonLiteMessage.parentNode === document.body;
        }
        resume() {
            this.debug('resuming timer');
            this.restartTimer();
        }
        hideBackground() {
            if (!this.carbonLite || !this.carbonLite.parentNode) {
                return;
            }
            document.body.removeChild(this.carbonLite);
            this.fadeOutMessage();
        }
        hideMessage() {
            let CarbonLite = this;
            if (!CarbonLite.carbonLiteMessage || !CarbonLite.carbonLiteMessage.parentNode) {
                return;
            }
            this.debug('hiding message');
            document.body.removeChild(CarbonLite.carbonLiteMessage);
            this.debug('clearing message fade out timer due to message being hidden');
            clearTimeout(CarbonLite.carbonLiteMessageTimer);
            CarbonLite.carbonLiteMessage.classList.remove('fading');
            this.debug('restarting timer after message has been hidden');
            CarbonLite.restartTimer();
        }
        fadeOutMessage() {
            this.debug('setting timer to fade out message');
            this.carbonLiteMessage.classList.add('fading');
            this.carbonLiteMessageTimer = setTimeout(() => { this.hideMessage(); }, this.config.messageTimeout);
        }
        open() {
            this.debug('opening');
            let CarbonLite = this;
            if (CarbonLite.carbonLiteMessageTimer) {
                this.debug('clearing message fade out timer');
                clearTimeout(CarbonLite.carbonLiteMessageTimer);
            }
            document.body.appendChild(CarbonLite.carbonLite);
            document.body.appendChild(CarbonLite.carbonLiteMessage);
        }
    }

    return CarbonLite;

}));
//# sourceMappingURL=CarbonLite.js.map
