const forms=document.querySelector("form");
forms.addEventListener("submit",(e)=>{
    e.preventDefault();
    const getData=new FormData(forms);
    console.log(Object.fromEntries(getData));
    
})


    // const forms = document.querySelector("form");
    // forms.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     const data = new FormData(forms);
    //     // console.log(Object.fromEntries(data));
    //     console.log(data.value);
        
    //     console.log(document.querySelector('input[name="Gender"]:checked')?.value);

    // })