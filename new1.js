function init(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
   
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
init()

var cvr = document.querySelector(".cover")
var cir = document.querySelector(".circle")
cvr.addEventListener("mouseenter",function(){
    cir.style.display = "block"
 
})
cvr.addEventListener("mouseleave",function(){
    cir.style.display = "none"
 
})
window.addEventListener("mousemove",function(dets){
    cir.style.top = `${dets.y}px`
    cir.style.left = `${dets.x}px`
})
var tl = gsap.timeline()
tl.to("#nav #part1",{
    y:-100,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#nav #part1",
        scroller:"#main",
        // markers: true,
        start:"top -1%",
        end:"top -10%",
        scrub:0.9

    }
})
tl.from("#nav a",{
  scale:0,
    stagger:0.4,
    duration:0.5,
    delay:1,
    // scrollTrigger:{
    //     trigger:"#nav a",
    //     scroller:"#main",
    //     markers: true,
    //     start:"top -1%",
    //     end:"top -10%",
    //     scrub:0.9

    // }
})
gsap.from("#page2 .elem",{
    opacity:0,
    scale:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .elem",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 20%",
        scrub:true
    }
})
gsap.to("#page3 h1",{
    left:"16%",
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"#main",
        // markers:true,
        start:"top 92%",
        end:"top 10%",
        scrub:3
    }
})
gsap.to("#page3 h2",{
    left:"-10%",
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"#main",
        // markers:true,
        start:"top 92%",
        end:"top 10%",
        scrub:3
    }
})

gsap.from("#page4 .p p",{
    y:"120%",
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:"#page4 .p p",
        scroller:"#main",
        // markers:true,
        start:"top 126%",
        end:"top 4%",
        
             
    }
})
gsap.from("#page5 #div1 .vdeo",{
border:"130px solid #f2b67b",
duartion:5,
onStart:function(){
    var one = document.querySelector("#page5 #div1")
    var two = document.querySelector("#page5 #div1 .vdeo")
    one.addEventListener("mouseenter",function(){
        two.style.border = "10px solid #f2b67b"
    })
    one.addEventListener("mouseleave",function(){
        two.style.border = "20px solid #f2b67b"
    })
        },
scrollTrigger:{
    trigger:"#page5 #div1 .vdeo",
    scroller:"#main",
    // markers:true,
    start:"top 98%",
        end:"top 4%",

}
})
gsap.from("#page5 #div2 .vdeo",{
    border:"130px solid #ff4e4d",
    duartion:5,
    onStart:function(){
var one = document.querySelector("#page5 #div2")
var two = document.querySelector("#page5 #div2 .vdeo")
one.addEventListener("mouseenter",function(){
    two.style.border = "10px solid #ff4e4d"
})
one.addEventListener("mouseleave",function(){
    two.style.border = "20px solid #ff4e4d"
})
    },
    scrollTrigger:{
        trigger:"#page5 #div2 .vdeo",
        scroller:"#main",
        // markers:true,
        start:"top 98%",
            end:"top 4%",
    
    }
    })

    gsap.from("#page6 #div1 .vdeo",{
        border:"130px solid #f2b67b",
        duartion:5,
        onStart:function(){
            var one = document.querySelector("#page6 #div1")
            var two = document.querySelector("#page6 #div1 .vdeo")
            one.addEventListener("mouseenter",function(){
                two.style.border = "10px solid #f2b67b"
            })
            one.addEventListener("mouseleave",function(){
                two.style.border = "20px solid #f2b67b"
            })
                },
        scrollTrigger:{
            trigger:"#page6 #div1 .vdeo",
            scroller:"#main",
            // markers:true,
            start:"top 98%",
                end:"top 4%",
        
        }
        })
        gsap.from("#page6 #div2 .vdeo",{
            border:"130px solid #bfaaa1",
            duartion:5,
            onStart:function(){
        var one = document.querySelector("#page6 #div2")
        var two = document.querySelector("#page6 #div2 .vdeo")
        one.addEventListener("mouseenter",function(){
            two.style.border = "10px solid #bfaaa1"
        })
        one.addEventListener("mouseleave",function(){
            two.style.border = "20px solid #bfaaa1"
        })
            },
            scrollTrigger:{
                trigger:"#page6 #div2 .vdeo",
                scroller:"#main",
                // markers:true,
                start:"top 98%",
                    end:"top 4%",
            
            }
            })
            gsap.from("#page7 #div1 .vdeo",{
                border:"130px solid #d8d7b2",
                duartion:5,
                onStart:function(){
                    var one = document.querySelector("#page7 #div1")
                    var two = document.querySelector("#page7 #div1 .vdeo")
                    one.addEventListener("mouseenter",function(){
                        two.style.border = "10px solid #d8d7b2"
                    })
                    one.addEventListener("mouseleave",function(){
                        two.style.border = "20px solid #d8d7b2"
                    })
                        },
                scrollTrigger:{
                    trigger:"#page7 #div1 .vdeo",
                    scroller:"#main",
                    // markers:true,
                    start:"top 98%",
                        end:"top 4%",
                
                }
                })
                gsap.from("#page7 #div2 .vdeo",{
                    border:"130px solid #8f8feb",
                    duartion:5,
                    onStart:function(){
                var one = document.querySelector("#page7 #div2")
                var two = document.querySelector("#page7 #div2 .vdeo")
                one.addEventListener("mouseenter",function(){
                    two.style.border = "10px solid #8f8feb"
                })
                one.addEventListener("mouseleave",function(){
                    two.style.border = "20px solid #8f8feb"
                })
                    },
                    scrollTrigger:{
                        trigger:"#page7 #div2 .vdeo",
                        scroller:"#main",
                        // markers:true,
                        start:"top 98%",
                            end:"top 4%",
                    
                    }
                    })
                    gsap.from("#page9 h1",{
                        
                        opacity:0,
                        rotate:5,
                        y:100,
                      
                        scrollTrigger:{
                          trigger:"#page9 h1",
                          scroller:"#main",
                        //   markers:true,
                      start:"top 55%",
                      end:"top 35%",
                   
                      
                        }
                      })
                      var date = document.querySelector(".date1")
               var dot = document.querySelector(".dot")
               date.addEventListener("mouseenter",function(){
                dot.innerHTML = "<i class='ri-arrow-right-line'></i>"
                dot.style.border = "2px solid black"
          
               })
               date.addEventListener("mouseleave",function(){
                dot.innerHTML = "..."
                dot.style.border = "0px solid black"
                
               })
               var date = document.querySelector(".date2")
             
               var dot1 = document.querySelector(".dot1")
               date.addEventListener("mouseenter",function(){
                dot1.innerHTML = "<i class='ri-arrow-right-line'></i>"
                dot1.style.border = "2px solid black"
          
               })
               date.addEventListener("mouseleave",function(){
                dot1.innerHTML = "..."
                dot1.style.border = "0px solid black"
                
               })

  var cvrr = document.querySelector(".cverr")
var crcl = document.querySelector(".crcl")
cvrr.addEventListener("mouseenter",function(){
    crcl.style.display = "block"
 
})
cvrr.addEventListener("mouseleave",function(){
    crcl.style.display = "none"
 
})
cvrr.addEventListener("mousemove",function(dets){
    crcl.style.top = `${dets.y - 50}px`
    crcl.style.left = `${dets.x - 70}px`
})
// gsap.from("#page6 .div1 .vdeo", {
//     border: "40px solid #f2b67b",
//     scrollTrigger: {
//         trigger: "#page5 .div1 .vdeo",
//         scroller: "body",
//         markers: true,
//         start: "top 110%",
//         end: "top 4%"
//     }
// });
