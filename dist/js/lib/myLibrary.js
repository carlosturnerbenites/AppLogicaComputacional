function compareArrays(t,e){return String(t)==String(e)?!0:!1}function getElemtDOM(t){return element=document.querySelector(t),element}function createElementDOM(t){var t=document.createElement(t);return t}function setAttrs(t,e){for(var r in e)t.setAttribute(r,e[r])}function ramdonInt(t,e){var r=Math.floor(Math.random()*t+e);return r}Array.prototype.findElement=function(t){},Array.prototype.getElementRandom=function(){var t=this[ramdonInt(this.length,0)];return t},Array.prototype.FindElementsEquals=function(){for(var t=!1,e=0;e<this.length;e++)for(var r=0;r<this.length;r++)e!=r&&this[e]==this[r]&&(t=!0);return t?!0:!1},String.prototype.toArray=function(){return this.split("")},HTMLFormElement.prototype.enableDisabled=function(){for(var t,e=this.elements,r=0;t=e[r];r++)t.disabled?t.removeAttribute("disabled"):t.setAttribute("disabled","disabled")},HTMLElement.prototype.enableDisabled=function(){this.disabled?this.removeAttribute("disabled"):this.setAttribute("disabled","disabled")},HTMLElement.prototype.removeAllChildrens=function(){for(;this.firstChild;)this.removeChild(this.firstChild);return this},Node.prototype.addClass=function(){for(clase in arguments)this.classList.add(arguments[clase]);return this},Node.prototype.removeClass=function(){for(clase in arguments)this.classList.remove(arguments[clase]);return this},Node.prototype.toggleClass=function(t,e){return e="undefined"!=typeof e?e:!0,this.classList.toggle(t,e),this},Node.prototype.containClass=function(t){var e=this.classList.contains(t);return e},Node.prototype.setAttr=function(t,e){return this.setAttribute(t,e),this},Node.prototype.setAttrs=function(t){for(var e in t)this.setAttribute(e,t[e]);return this},Node.prototype.getAttr=function(t){var e=this.getAttribute(t);return e},Node.prototype.text=function(t){return this.innerText=t,this},Node.prototype.append=function(){for(element in arguments)this.appendChild(arguments[element]);return this},Node.prototype.on=function(t,e,r){return this.addEventListener(t,e,r),this},Node.prototype.childrenOn=function(nameEvent,callback,useCapture){for(var childrens=this.children,i=0,children;children=childrens[i];i++)children.addEventListener(nameEvent,eval(callback),useCapture);return this};