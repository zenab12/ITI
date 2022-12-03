## Random Colors Div Genertaor 

### this task for practice cloneNode with multiples clones for the same Node and Here you will find [Live Demo](https://zenab12.github.io/ITI/javascript/D05/cloneNode_Colors)

<q>I learned that we can't create multiple clones for the same element as browser will conflict elements if element and clone has the same id so we can solve this problem by using container will hold element and each time we clicked on it will choose the div element and create multiple clones with it by target as we can create nultiple clones by target </q>


```js
var container = document.querySelector(".container");
        container.addEventListener('click', function ({ target }) {
            if (target.nodeName = 'div' && target == container.firstElementChild) {
                var clone = target.cloneNode(true);
                container.appendChild(clone);
                var spanColored = clone.firstElementChild; 
                var randColor_1 = Math.round(Math.random() * 255);
                var randColor_2 = Math.round(Math.random() * 255);
                var randColor_3 = Math.round(Math.random() * 255);
                clone.style.backgroundColor = "rgb(" + randColor_1 + "," + randColor_2 + "," + randColor_3 + ")";
                clone.firstElementChild.innerHTML = "rgb(" + randColor_1 + "," + randColor_2 + "," + randColor_3 + ")";
            }
        });

```
