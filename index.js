const show_menu = document.getElementById('show_menu'),
toggle_button = document.querySelector('.toggle_button'),
close_nav = document.querySelector('.close_nav');



if(toggle_button){
  toggle_button.addEventListener('click',()=>{
    show_menu.classList.add('show_menu')
  })
}

if(close_nav){
  close_nav.addEventListener('click',()=>{
    show_menu.classList.remove('show_menu')
  })
}



// .nav_menu{
//   justify-content:space-between;
// }
// .nav_links{
//   display:block;
//   position:absolute;
//     left:0;
//     right:0;
//     top:0;
//     bottom:0;
//     /* background-color:var(--clrblack); */
//     padding-inline:2rem;
//     padding-top:3rem;
    
// }
// .nav_links>li:first-child{
//   margin-bottom:7rem; 
// }
// .d_none{
//   display:none;
// }

// .nav_links li + li{
//   margin-top:1.5rem;
// }
// .nav_links a{
//   font-size:1.5rem;
//   font-weight:var(--fw-400);
//   display:inline-block;
//   }
// .close_nav,.toggle_button{
//     width:30px;
//     font-size:2.5rem;
//     color:var(--clr-white);
//     background-color:transparent;
//     border:none;
//     }
// .toggle_button{
//       display:none;
//     }

// .close_nav{
//   position:absolute;
//   top:2.5rem;
//   right:2rem;
// }


// @media(max-width:600px){
//   .d_none{
//     display:none;
//   }
  
//   .nav_links{ 
//     padding:1.5rem;
//     padding-top:10rem; 
//     }
//   .close_nav,.toggle_button{
//     display:block;
//   }
// }
// @media(min-width:600px){
//   /* .nav_links{
//     display:none;
//     } */
//   .close_nav,.toggle_button{
//     display:block;
//   }
// }



// .show_menu .logo_mobile{
//   position:absolute;
//   top:3.5rem;
//   left:2rem;
//    }  
//  .show_menu .nav_links{
//   display:block;
//    left:0;
//   }