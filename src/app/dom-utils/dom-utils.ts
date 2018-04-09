/* ######### */
/* CONSTANTS */
/* ######### */
const TWITTER_BACKGROUND = '#48AAE6';
const FACEBOOK_BACKGROUND = '#4867AA';
const PINTEREST_BACKGROUND = '#BD081C';
const GOOGLE_PLUS_BACKGROUND = '#DC4B38';

const socialClasses = {
    twitter : {
        iconClass : 'fa-twitter',
        background: TWITTER_BACKGROUND
    },
    facebook : {
        iconClass: 'fa-facebook-f',
        background: FACEBOOK_BACKGROUND
    },
    pinterest : {
        iconClass: 'fa-pinterest-p',
        background: PINTEREST_BACKGROUND
    },
    googleplus : {
        iconClass : 'fa-google-plus-g',
        background: GOOGLE_PLUS_BACKGROUND
    }
};
/* ######### */

var DOMUtils = {
    create: function(type) {
        if(type === 'social-icon')
            return createSocialIcon();
    }
}

function createSocialIcon() {
    return {
        social: function(type) {
            return {
                set: function(ele) {
                    let _icon = document.createElement('i'),
                        socialmedia = socialClasses[type].iconClass,
                        background = socialClasses[type].background;
                    _icon.classList.add('fab');
                    _icon.classList.add(socialmedia);
                    ele.appendChild(_icon);
                    ele.style.width = '40px'
                    ele.style.height = '40px'
                    ele.style.background = background;
                    ele.style.borderRadius = '50%';
                    ele.style.color = '#fff';
                    ele.style.display = 'flex';
                    ele.style.justifyContent = 'center';
                    ele.style.alignItems = 'center';
                }
            }
        }
    }
}

export { DOMUtils };