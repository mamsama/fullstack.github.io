function ScrollHeading (a) {
    var a = document.querySelector('.heading');
    var b = document.querySelector('.heading1');
    var aheight = a.offsetHeight;
        document.onscroll = function () {
            if(window.scrollY > 60) {
                Object.assign(a.style,{
                    display: 'flex',
                    top: 0
                })
               
            }else{
                a.style.display = 'none';
                a.style.top = 25+'px';
                
            }
        };
};
ScrollHeading();

function clickmenu() {
        var menuMobile = document.querySelector('.heading__login-icon-menu')
        var div1 = document.querySelector('.heading__login-icon-menu-sum')
        var huhu = div1.clientHeight
        var iconx = document.querySelector('.heading__login-icon-1-sub-heading.sum')
        iconx.onclick = function(e) {
            Object.assign(div1.style, {
                transform: 'translateX(100%)',
                transition: 'all linear 0.2s',
                
               })
        }
        
       
    
       
        
        // menuMobile.onclick = function() {
        //     if(huhu === 0) {

        //       Object.assign(div1.style, {
        //     transform: 'translateX(0)',
        //     transition: 'all linear 0.2s',
            
        //    })
        //     } 
        
           
          
        // }
       


        

        // thoong bao
        
        var body2 = document.querySelector('body')
        var navbarMenu = document.querySelector('.heading__login-icon-1');
        var navbarMenu2 = document.querySelector('.heading__login-icon-2');
        var menuMobile4 = document.querySelector('.heading__login-icon-4');
        var menuMobile5 = document.querySelector('.heading__login-icon-5');

        console.log(menuMobile4)
        var client1 = document.querySelector('.client');
        const navbarMenuSub = document.querySelector('.heading__login-icon-1-sub ');
        const navbarMenuSub4 = document.querySelector('.heading__login-icon-4-sub ');
        const navbarMenuSub5 = document.querySelector('.heading__login-icon-5-sub ');
        const navbarMenuSub2 = document.querySelector('.heading__login-icon-2-sub ');
       client1.onmousedown = function() {
        navbarMenuSub.style.display = 'none'
        client1.style.display = 'none'
        navbarMenuSub2.style.display = 'none'
        navbarMenuSub4.style.display = 'none'
        navbarMenuSub5.style.display = 'none'
             }
        
       if(navbarMenu) {
        navbarMenu.onmousedown = function() {
            
            if (navbarMenuSub.style.display == 'none'  ) {
             navbarMenuSub.style.display = 'block'
             navbarMenuSub2.style.display = 'none'
             client1.style.display = 'block'
            } else  {
             navbarMenuSub.style.display = 'none'
             client1.style.display = 'none'
             
             }
            
        
        }
       } 
       if(menuMobile4) {
        menuMobile4.onmousedown = function() {
            
            if (navbarMenuSub4.style.display == 'none'  ) {
             navbarMenuSub4.style.display = 'block'
             navbarMenuSub2.style.display = 'none'
             client1.style.display = 'block'
            } else  {
             navbarMenuSub4.style.display = 'none'
             client1.style.display = 'none'
             
             }
            
        
        }
       } 
       
        navbarMenu2.onmousedown = function() {
            
            if (navbarMenuSub2.style.display == 'none') {
             navbarMenuSub2.style.display = 'block'
             client1.style.display = 'block'
             navbarMenuSub.style.display = 'none'
           
            } else {
             navbarMenuSub2.style.display = 'none'
             client1.style.display = 'none'
             }
            
        
        }
        menuMobile5.onmousedown = function() {
            
            if (navbarMenuSub5.style.display == 'none') {
             navbarMenuSub5.style.display = 'block'
             client1.style.display = 'block'
             navbarMenuSub.style.display = 'none'
           
            } else {
             navbarMenuSub5.style.display = 'none'
             client1.style.display = 'none'
             }
            
        
        }
 }
        
            
       
       
       
            
        
        

clickmenu()
