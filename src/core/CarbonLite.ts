import { CarbonLiteMessage } from '../elements/CarbonLiteMessage'
import { CarbonLiteElement } from '../elements/CarbonLiteElement'
import { CarbonLiteConfig } from '../types/CarbonLiteConfig';

export default class CarbonLite {
    initialised: boolean = false;

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
    };

    configure(configuration: object){
        this.config = {...this.config, ...configuration}
    }

    init(configuration: CarbonLiteConfig|null = null) {
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

    addEventListeners() {
        console.log('CarbonLite: adding event listeners')

        console.log('CarbonLite: adding mousemove event listeners')
        let CarbonLite = this;
        document.addEventListener(`mousemove`, () => {
            CarbonLite.userInteracted()
        })

        console.log('CarbonLite: adding message event listeners')

        CarbonLite.carbonLiteMessage.addEventListener(`mouseenter`, (event) => {
            CarbonLite.carbonLiteMessage.classList.remove('fading')
            if (CarbonLite.carbonLiteMessageTimer) {
                console.log('CarbonLite: clearing message fade out timer due to mouseenter')
                clearTimeout(CarbonLite.carbonLiteMessageTimer)
            }
        })

        CarbonLite.carbonLiteMessage.addEventListener(`mouseleave`, (event) => {
            CarbonLite.fadeOutMessage()
        })
    }

    restartTimer() {
        clearTimeout(this.carbonLiteTimer)
        this.carbonLiteTimer = setTimeout(() => { this.open() }, this.config.timeout)
    }

    userInteracted() {
        if (this.carbonLite) {
            this.hideBackground()
        } else {
            this.restartTimer()
        }
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
        console.log('CarbonLite: hiding message')

        document.body.removeChild(CarbonLite.carbonLiteMessage)
        console.log('CarbonLite: clearing message fade out timer due to message being hidden')
        clearTimeout(CarbonLite.carbonLiteMessageTimer)
        CarbonLite.carbonLiteMessage.classList.remove('fading')

        console.log('CarbonLite: restarting timer after message has been hidden')
        CarbonLite.restartTimer()
    }

    fadeOutMessage() {
        console.log('CarbonLite: setting timer to fade out message')

        this.carbonLiteMessage.classList.add('fading')
        this.carbonLiteMessageTimer = setTimeout(() => { this.hideMessage() }, this.config.messageTimeout)
    }

    open() {
        console.log('CarbonLite: opening')
        let CarbonLite = this;

        if (CarbonLite.carbonLiteMessageTimer) {
            console.log('CarbonLite: clearing message fade out timer')
            clearTimeout(CarbonLite.carbonLiteMessageTimer)
        }

        document.body.appendChild(CarbonLite.carbonLite)
        document.body.appendChild(CarbonLite.carbonLiteMessage)
    }
}
