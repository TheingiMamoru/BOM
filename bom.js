// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.outerWidth)
// console.log(window.outerHeight)

const exampleModal = new bootstrap.Modal("#exampleModal");
//user အသုံးပြုတာ ၇၅% လောက်ရောက်ရင် modal box ပြမယ်

const h75 = 0.75 * (document.body.getBoundingClientRect().height - window.innerHeight)

window.addEventListener("scroll",() => {
    console.log(window.scrollY)
    if(window.scrollY > h75){
        exampleModal.show();
    }

});

window.addEventListener("resize", () => {
    console.log(window.innerHeight)
    console.log(window.innerWidth)
})

//Depends on internet
window.addEventListener("offline", () => {
    console.log("I am offline");
})

window.addEventListener("online", () => {
    console.log("I am back online");
});

//window ကိုအရှေ့က မရေးပဲ သုံးလို့လည်းရတယ်
// alert();
//console.log(innerHeight);

const clock = document.querySelector("#clock");

const run = () => {
    const d = new Date();
    clock.innerText = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
}

// setTimeout(run, 3000); //3 sec ကြာမှ ဒါအလုပ်လုပ်တယ်
//time count လုပ်ရင် သုံးလို့ရတယ်
setInterval(run, 1000) //ဒါ အလုပ်လုပ်ဖို့ တစ်ခေါက်နဲ့ တစ်ခေါက်ကြားမှာ ၃ sec ကြာတယ်

