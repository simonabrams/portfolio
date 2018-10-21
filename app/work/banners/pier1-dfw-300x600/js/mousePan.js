"use strict";

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var MousePan = function () {
    function MousePan(options) {
        _classCallCheck(this, MousePan);

        this.resize = this.resize.bind(this);
        this.onMousemove = this.onMousemove.bind(this);
        this.tick = this.tick.bind(this);
        this.$wrapper = options.el;
        this.banner = options.banner;
        this.dimensions = options.dimensions;
        this.ease = options.ease || .08;
        this.init();
    }

    _createClass(MousePan, [{
        key: 'init',
        value: function init() {
            this.position = {
                x: Math.abs(this.dimensions.imageX),
                y: this.dimensions.imageY
            };

            this.destination = {
                x: 0,
                y: 0
            };

            this.size = {
                x: 0,
                y: 0,
                offsetX: 0,
                offsetY: 0

            };
            this.resize();
            // this.bindEvents();
            // this.tick();
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.setWrapperSize();
            this.setWrapperPosition();
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            this.banner.addEventListener('mousemove', this.onMousemove);
        }

        /**
         * Sets the wrapper size based on its taller and wider childrens
         */

    }, {
        key: 'setWrapperSize',
        value: function setWrapperSize() {
            this.size = { w: this.dimensions.imageWidth, h: this.dimensions.imageHeight };
            this.size.offsetX = this.size.w - this.dimensions.bannerWidth;
            this.size.offsetY = this.size.h - this.dimensions.bannerHeight;
        }

        /**
         * Returns the max width and height between two objects
         * @param  {[type]} acc [description]
         * @param  {[type]} cur [description]
         * @return {[type]}     [description]
         */

    }, {
        key: 'setWrapperPosition',
        value: function setWrapperPosition() {
            this.destination.x = .5 * this.size.offsetX;
            this.destination.y = .5 * this.size.offsetY;
        }
    }, {
        key: 'onMousemove',
        value: function onMousemove(e) {
            var x = e.clientX - this.banner.offsetLeft + this.dimensions.bannerWidth / 2;
            var y = e.clientY - this.banner.offsetTop;
            // Map destination x to the overflowing width;
            this.destination.x = this.size.offsetX > 0 ? this.map(x, 0, this.dimensions.bannerWidth, 0, this.size.offsetX) : 0;
            // Map destination y to the overflowing height;
            this.destination.y = this.size.offsetY > 0 ? this.map(y, 0, this.dimensions.bannerHeight, 0, this.size.offsetY) : 0;
        }
    }, {
        key: 'tick',
        value: function tick() {
            // Put motion in the displacement of the wrapper
            // Instead of setting position = destination
            // We add the distance between the destination and the position to the position
            this.movePosition();
            this.$wrapper.style.transform = 'translate3d(-' + this.position.x + 'px, -' + this.position.y + 'px, 0)';
            window.requestAnimationFrame(this.tick);
        }

        /**
         * Calculates the new position based on the distance between the destination and the current position
         * We add a percentage to add the easing effect
         * https://codepen.io/rachsmith/post/animation-tip-lerp
         * @return {[type]} [description]
         */

    }, {
        key: 'movePosition',
        value: function movePosition() {
            this.position.x += (this.destination.x - this.position.x) * .05;
            this.position.y += (this.destination.y - this.position.y) * .1;
        }

        // Utils

    }, {
        key: 'map',
        value: function map(val, oldMin, oldMax, newMin, newMax) {
            return newMin + (val - oldMin) * (newMax - newMin) / (oldMax - oldMin);
        }
    }]);

    return MousePan;
}();