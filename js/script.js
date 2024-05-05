/*------------======================typing animation========================*/
var typed = new Typed(".typing",{
    strings:["Web designer", "Web Developer", "Ui/Ux Designer","Fitness Influencer","Digital Creator", "Video Creator"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*------------======================ASIDE animation========================*/
const nav = document.querySelector(".nav"),

navlist = nav.querySelectorAll("li"),

totalNavList = navlist.length;
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;

for(let i=0; i<totalNavList; i++)

{

const a = navlist[i].querySelector("a");

a.addEventListener("click", function()

{

for(let j=0; j<totalNavList; j++)

{

navlist[j].querySelector("a").classList.remove("active");

}

this.classList.add("active") 
showSection(this);
if(window.innerWidth < 1200)
{
    asideSectionTogglerBtn();
}

})

}
function showSection(element){
    const href=element.getAttribute("href").split("#");
    target = href[1];
    console.log(target)
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navlist[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#");
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }

    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex);
    showSection(this);
    updateNav(this);
})






