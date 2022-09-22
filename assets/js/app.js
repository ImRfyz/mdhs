// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

//nav scroll

var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

//slider logo
function productScroll() {
  let slider = document.getElementById("slider");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}


//skeleton
const skeletons = document.querySelectorAll(".skeleton");
window.setTimeout(removeSkeleton, 2500);
function removeSkeleton() {
    skeletons.forEach((element) => {
        element.classList.remove("skeleton")
    });
}
const animatepulse = document.querySelectorAll(".animate-pulse");
window.setTimeout(removeAnimatepulse, 2500);
function removeAnimatepulse() {
    animatepulse.forEach((element) => {
        element.classList.remove("animate-pulse")
    });
}

// Instafeed

var userFeed = new Instafeed({
  get: 'user',
  accessToken: 'IGQVJXU0g0VFhGdFRUSEVMYU1ScWxBODVzUVFsRjFodUdmV2VoLTNaYlVVdG5VY3I2NG9iQlZAadUlwT3BzTnNXalZAhbGVYeC1JeWpVT2dEeWpNZAmhXUi1ENURFVUJuX3hUY0xjM2N3bDk0VC1GNHpMSgZDZD',
  resolution: 'standard_resolution',
  template: '<a href="{{link}}" target="_blank" id="{{id}}"> <div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p></div><img src="{{image}}" class="img-responsive"></div></a>',
  sortBy: 'most-recent',
  limit: 12,
  links: false
});
userFeed.run();
