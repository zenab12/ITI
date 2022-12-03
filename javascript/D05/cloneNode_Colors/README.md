## Random Colors Div Genertaor 

### this task for practice cloneNode with multiples clones for the same Node and Here you will find [Live Demo](https://zenab12.github.io/ITI/javascript/D05/cloneNode_Colors)


### there is two ways to create multiple clone nodes : 

- 1)

```js 
        var container = document.querySelector(".container");
        var clone = document.getElementsByClassName("clone")[0];
        var c;
        clone.addEventListener('click', function () {
            c = clone.cloneNode(true);
            container.appendChild(c);
            var randColor_1 = Math.round(Math.random() * 255);
            var randColor_2 = Math.round(Math.random() * 255);
            var randColor_3 = Math.round(Math.random() * 255);
            c.style.backgroundColor = "rgb(" + randColor_1 + "," + randColor_2 + "," + randColor_3 + ")";
            c.firstElementChild.innerHTML = "rgb(" + randColor_1 + "," + randColor_2 + "," + randColor_3 + ")";

        });

```

- 2)

```js
var container = document.querySelector(".container");
        container.addEventListener('click', function ({ target }) {
            if (target.nodeName = 'div' && target == container.firstElementChild) {
                var clone = target.cloneNode(true);
                container.appendChild(clone);
                var randColor_1 = Math.round(Math.random() * 255);
                var randColor_2 = Math.round(Math.random() * 255);
                var randColor_3 = Math.round(Math.random() * 255);
                clone.style.backgroundColor = "rgb(" + randColor_1 + "," + randColor_2 + "," + randColor_3 + ")";
                clone.firstElementChild.innerHTML = "rgb(" + randColor_1 + "," + randColor_2 + "," + randColor_3 + ")";
            }
        });

```
