const users = [
    {
        
        img: '/img/person_2.jpg',
        author: 'Jessica Winston',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        
        img: '/img/person_3.jpg',
        author: 'Hailie Greenwood',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
        
        img: '/img/person_4.jpg',
        author: 'Rafael Lucian',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        
        img: '/img/person_5.jpg',
        author: 'Maggie Johnson',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
    },
]

//console.log(users);
//VARIABLES 
const image = document.querySelector('.photo');
const author = document.querySelector('.author');
const desc = document.querySelector('.test-description');
const btns = document.querySelectorAll('.icon-direct');

let count = 0;

//Event Listener functions
btns.forEach(function(btn){
    //console.log(btn);
    btn.addEventListener('click', function(ev){
        const index = ev.target.classList;

        if(index.contains('increase')){
            //console.log('yes, it does');
            slide();
            count++;

            if(count > users.length -1){
                count = 0;
            }
        }else if(index.contains('decrease')){
            slide();
            count--;

            if(count < 0){
                count = users.length -1;
            }
        }
    })
})

function slide(){
    image.innerHTML = `<img src= ${users[count].img} class="photo" alt="person"></img>`;
    author.innerHTML = `<p class="author">${users[count].author}</p>`;
    desc.innerHTML = `<p class="test-description">${users[count].desc}</p>`;
}
