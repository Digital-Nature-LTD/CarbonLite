import { CarbonLiteMessage } from './elements/CarbonLiteMessage'
import { CarbonLiteElement } from './elements/CarbonLiteElement'
import { CarbonLiteConfig } from './types/CarbonLiteConfig';

export default class CarbonLite {
    initialised: boolean = false;
    mediaPlaying: boolean = false;
    suspended: boolean = false;

    // objects
    carbonLite: CarbonLiteElement = new CarbonLiteElement();
    carbonLiteMessage: CarbonLiteMessage = new CarbonLiteMessage();
    carbonLiteTimer: ReturnType<typeof setTimeout>|undefined = undefined;
    carbonLiteMessageTimer: ReturnType<typeof setTimeout>|undefined = undefined;

    // configurable
    config: CarbonLiteConfig = {
        message: 'Saving the planet, one (dark) pixel at a time',
        timeout: 60000,
        backgroundColour: '#000',
        messageTimeout: 3000,
        messageColour: '#222',
        messageColourHover: '#DDD',
        messageBorderColour: '#DDD',
        messageDropShadowColour: '#555',
        debug: false
    };

    configure(configuration: object){
        this.config = {...this.config, ...configuration}
    }

    debug(message: string) {
        if (this.config.debug) {
            console.log(message)
        }
    }

    init(configuration: CarbonLiteConfig|null = null) {
        this.debug('CarbonLite: initialising')
        if (this.initialised) {
            return
        }

        if (configuration) {
            this.configure(configuration)
        }

        if (this.config.message) {
            this.carbonLite.configure(this.config.message);
        }

        // add styles
        const style = document.createElement('style')
        style.innerHTML = this.generateStyles()
        document.head.appendChild(style)

        this.addEventListeners()
        this.restartTimer()
        this.initialised = true
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
            z-index: 999998;
            background: ${this.config.backgroundColour};
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        carbon-lite-message {
            position: fixed;
            bottom: 100px;
            right: 100px;
            color: ${this.config.messageColour};
            text-align: center;
            z-index: 999999;
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

    addGlobalEventListener(eventType: string) {
        let CarbonLite = this;

        let iframes = this.getIframes()

        iframes.forEach(iframe => {
            iframe.addEventListener(eventType, () => {
                CarbonLite.userInteracted()
            })
        })

        document.addEventListener(eventType, () => {
            CarbonLite.userInteracted()
        })
    }

    addEventListeners() {
        this.debug('CarbonLite: adding event listeners')

        this.addGlobalEventListener('mousemove')
        this.addGlobalEventListener('click')
        this.addGlobalEventListener('scroll')
        this.addGlobalEventListener('keypress')
        this.addGlobalEventListener('resize')
        this.addVideoEventListeners()

        let CarbonLite = this;

        this.debug('CarbonLite: adding message event listeners')

        CarbonLite.carbonLiteMessage.addEventListener(`mouseenter`, (event) => {
            CarbonLite.carbonLiteMessage.classList.remove('fading')
            if (CarbonLite.carbonLiteMessageTimer) {
                this.debug('CarbonLite: clearing message fade out timer due to mouseenter')
                clearTimeout(CarbonLite.carbonLiteMessageTimer)
            }
        })

        CarbonLite.carbonLiteMessage.addEventListener(`mouseleave`, (event) => {
            CarbonLite.fadeOutMessage()
        })

        document.addEventListener('carbon-lite-suspend', function(event) {
            CarbonLite.suspend()
        });

        document.addEventListener('carbon-lite-resume', function(event) {
            CarbonLite.resume()
        });
    }

    addVideoEventListeners() {
        this.debug('CarbonLite: adding video event listeners')
        let CarbonLite = this;

        let videos = document.getElementsByTagName(`video`);

        for (let i = 0; i < videos.length; i++) {
            let videoEl = videos[i]

            videoEl.addEventListener(`playing`, () => {
                CarbonLite.debug('playing')
                CarbonLite.mediaPlaying = true;
                CarbonLite.suspend()
            })
            videoEl.addEventListener(`ended`, () => {
                CarbonLite.mediaPlaying = false;
            })
            videoEl.addEventListener(`pause`, () => {
                CarbonLite.mediaPlaying = false;
            })
            videoEl.addEventListener(`suspend`, () => {
                CarbonLite.mediaPlaying = false;
            })
        }
    }

    restartTimer() {
        clearTimeout(this.carbonLiteTimer)
        this.carbonLiteTimer = setTimeout(() => { this.open() }, this.config.timeout)
    }

    userInteracted() {
        if (this.mediaPlaying) {
            return;
        }

        if (this.carbonLite) {
            this.hideBackground()
        } else {
            this.restartTimer()
        }
    }

    suspend() {
        this.debug('suspending')
        document.body.removeChild(this.carbonLite)
        document.body.removeChild(this.carbonLiteMessage)
        clearTimeout(this.carbonLiteTimer)
        clearTimeout(this.carbonLiteMessageTimer)
    }

    resume() {
        this.debug('resuming')
        this.restartTimer()
    }

    hideBackground() {
        if (!this.carbonLite || !this.carbonLite.parentNode) {
            return;
        }

        document.body.removeChild(this.carbonLite)
        this.fadeOutMessage()
    }

    hideMessage() {
        let CarbonLite = this;

        if (!CarbonLite.carbonLiteMessage || !CarbonLite.carbonLiteMessage.parentNode) {
            return;
        }
        this.debug('CarbonLite: hiding message')

        document.body.removeChild(CarbonLite.carbonLiteMessage)
        this.debug('CarbonLite: clearing message fade out timer due to message being hidden')
        clearTimeout(CarbonLite.carbonLiteMessageTimer)
        CarbonLite.carbonLiteMessage.classList.remove('fading')

        this.debug('CarbonLite: restarting timer after message has been hidden')
        CarbonLite.restartTimer()
    }

    fadeOutMessage() {
        this.debug('CarbonLite: setting timer to fade out message')

        this.carbonLiteMessage.classList.add('fading')
        this.carbonLiteMessageTimer = setTimeout(() => { this.hideMessage() }, this.config.messageTimeout)
    }

    open() {
        this.debug('CarbonLite: opening')
        let CarbonLite = this;

        if (CarbonLite.carbonLiteMessageTimer) {
            this.debug('CarbonLite: clearing message fade out timer')
            clearTimeout(CarbonLite.carbonLiteMessageTimer)
        }

        document.body.appendChild(CarbonLite.carbonLite)
        document.body.appendChild(CarbonLite.carbonLiteMessage)
    }
}
