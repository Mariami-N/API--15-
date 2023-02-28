let container=document.querySelector(".container");
let box=document.querySelector(".box");
let advicebox=document.querySelector(".advicebox");
let btn=document.querySelector(".btn");
let h5=document.querySelector("h5");
let paragraph=document.querySelector("p");


let randomNum = Math.floor(Math.random() * 300);
    axios.get(`https://api.adviceslip.com/advice?random=${randomNum}`).then(response => {
        let advice = response.data.slip.advice;
        paragraph.innerHTML = `"${advice}"`;
        let id = response.data.slip.id;
            h5.innerHTML=`ADVICE #${id}`;
      })
    btn.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * 300);
    axios.get(`https://api.adviceslip.com/advice?random=${randomNum}`).then(response => {
        let advice = response.data.slip.advice;
        paragraph.innerHTML = `"${advice}"`;
        let id = response.data.slip.id;
            h5.innerHTML=`ADVICE #${id}`;
      })
    });