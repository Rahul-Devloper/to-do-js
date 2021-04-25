const btn = document.querySelector('.btn');
let task = document.getElementById('task');
let toFill = document.getElementById('to-fill')


btn.addEventListener('click', (e)=>{
    let list = document.createElement('li');
    const but = document.createElement('button');
    

    list.innerText = task.value;
    but.innerText = 'delete';

    toFill.appendChild(list);
    toFill.appendChild(but);


    but.addEventListener('click',(e)=>{
        (e).preventDefault;
        toFill.removeChild(list);
        toFill.removeChild(but);
    })
})
