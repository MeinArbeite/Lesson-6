
const text = document.getElementById('text');
const dlinnye = document.querySelector('.dlinna');
const glasnye = document.querySelector('.glasnye');
const okonchaniya = document.querySelector('.okonchanya');

const words = text.innerText.split(' ');
console.log(words)



dlinnye.oninput = () => {
    text.innerText=text.innerText
    words.forEach(element => {
        if(dlinnye.checked){
            if(element.length>8){
                text.innerHTML = text.innerHTML.replace(element, `<span style="background:purple">${element}</span>`)
            } 
        }else{
            text.innerHTML = text.innerHTML.replace( `<span style="background:purple">${element}</span>`,element)
        }
    });
}

glasnye.oninput = () => {
    text.innerText=text.innerText
    const vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    words.forEach(element => {
        if(glasnye.checked){
            if(vowels.includes(element.charAt(0).toLowerCase()) && element.length>2){
                text.innerHTML = text.innerHTML.replace(element, `<span style="background:purple">${element}</span>`)
            } 
        }else{
            text.innerHTML = text.innerHTML.replace( `<span style="background:purple">${element}</span>`,element)
        }
    });
}

okonchaniya.oninput = () => {
    text.innerText=text.innerText
    const ending = ['тся','ться'];
    words.forEach(element => {
        if(okonchaniya.checked){
            if(ending.includes(element.slice(-3)) || ending.includes(element.slice(-4))){
                text.innerHTML = text.innerHTML.replace(element, `<span style="background:purple">${element}</span>`)
            } 
        }else{
            text.innerHTML = text.innerHTML.replace( `<span style="background:purple">${element}</span>`,element)
        }
    });
}



