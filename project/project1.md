# project 1
## solution 1

```javascript
markdown cheac

```

```python 
jsnxjsnxjn
```

```vikrant 
njcnkckckck

```
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const r = document.querySelector('#results');

  if (h === '' || h < 0 || isNaN(h)) {
    r.innerHTML = `plse enter right height `;
  } else if (w === '' || w < 0 || isNaN(w)) {
    r.innerHTML = `plse enter right weight `;
  } else {
    let BMI = (w / ((h * h) / 10000)).toFixed(2);
    if (BMI < 18.6) {
      r.innerHTML = ` <span>${BMI}</span> <p>you are Under Weight</p>`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      r.innerHTML = ` <span>${BMI}</span><p>you are Normal</p>`;
    } else {
      r.innerHTML = ` <span>${BMI}</span><p>you are Overweight</p>`;
    }
  }
});
```
