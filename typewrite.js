/*
Author: Bolaji Ajani
File: Typewrite
About: It will give text a typewriter effect with blinking caret. It is based on one of the solutions on https://css-tricks.com/snippets/css/typewriter-effect/
*/

var typeWrite = function(el, toRotate, period, delay = 1000, loop = 'true') {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10);
        this.delay = parseInt(delay, 10);
        this.loop = loop.toLowerCase();
        this.halt = '';
        this.interval = this.period;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
    };

    typeWrite.prototype.tick = function() {
       if(this.halt != 'stop') {
         //let us make deleting 1/5 of normal speed
      this.interval = (this.interval === this.delay) ? this.period / 5 : this.interval;

        var i       = this.loopNum % this.toRotate.length,
            fullTxt = this.toRotate[i],
            that    = this;

        this.txt = (this.isDeleting) ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
        this.el.innerHTML = '<span>'+this.txt+'</span>';

        if (!this.isDeleting && this.txt === fullTxt) {
        this.isDeleting = true;
        this.interval = this.delay;
        if(this.loop === 'false' && this.loopNum == (this.toRotate.length - 1)) {
          this.halt = 'stop';
         }
        }
        else if (this.isDeleting && this.txt === '') {
        this.interval = this.period;
        this.isDeleting = false;
        this.loopNum++;
    }
  }
        setTimeout(function() {
        that.tick();
      }, that.interval);
};

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-set'),
                period = elements[i].getAttribute('data-period'),
                delay = elements[i].getAttribute('data-delay'),
                loop = elements[i].getAttribute('data-loop');
                //optional data
                delay = (!delay) ? '1000' : delay;
                loop = (!loop) ? 'true' : loop;
            if (toRotate) {
              new typeWrite(elements[i], JSON.parse(toRotate), period, delay, loop);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > span { border-right: 0.08em solid #fff}";
        css.innerHTML += ' @keyframes typewrite { from{border-right-color: #fff;} to{border-right-color: transparent;}}';
        css.innerHTML += ' .typewrite > span {animation-name: typewrite; animation-duration: 1s; animation-iteration-count: infinite;}';
        document.body.appendChild(css);
    };
