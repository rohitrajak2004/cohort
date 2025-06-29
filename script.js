const songs = [
  {
    ranking: 1,
    songName: "Kesariya",
    artistName: "Arijit Singh",
    imageUrl: "https://images.unsplash.com/photo-1748630840849-abfe1f614807?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    description: "A soulful romantic track from the movie 'Brahmāstra', known for its beautiful lyrics and melody."
  },
  {
    ranking: 2,
    songName: "Tum Hi Ho",
    artistName: "Arijit Singh",
    imageUrl: "https://images.unsplash.com/photo-1716570956471-d42e260e187c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3Dw",
    description: "This heartfelt love song from 'Aashiqui 2' became an anthem of romance across the country."
  },
  {
    ranking: 3,
    songName: "Raataan Lambiyan",
    artistName: "Jubin Nautiyal, Asees Kaur",
    imageUrl: "https://plus.unsplash.com/premium_photo-1675204861882-b3975ea68cca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    description: "A soft romantic melody that captured hearts with its soothing tune and lovely vocals."
  },
  {
    ranking: 4,
    songName: "Apna Bana Le",
    artistName: "Arijit Singh",
    imageUrl: "https://images.unsplash.com/photo-1560580146-9708bc97f827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    description: "A modern romantic hit from the movie 'Bhediya' with gentle lyrics and warm emotions."
  },
  {
    ranking: 5,
    songName: "Heeriye",
    artistName: "Jasleen Royal, Arijit Singh",
    imageUrl: "https://plus.unsplash.com/premium_photo-1729860648289-77a7554dd083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    description: "A sweet love song blending modern beats with traditional romance, widely loved by youth."
  },
  {
    ranking: 6,
    songName: "Tujh Mein",
    artistName: "Roop Kumar Rathod",
    imageUrl: "https://plus.unsplash.com/premium_photo-1682125488670-29e72e5a7672?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM3fHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    description: "An emotional and devotional love song from 'Rab Ne Bana Di Jodi', capturing deep connection."
  },
  {
    ranking: 7,
    songName: "Bekhayali",
    artistName: "Sachet Tandon",
    imageUrl: "https://images.unsplash.com/photo-1590011776354-784645d13579?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU5fHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    description: "A powerful breakup song that expresses intense emotions and raw heartbreak."
  },
  {
    ranking: 8,
    songName: "Dil Diyan Gallan",
    artistName: "Atif Aslam",
    imageUrl: "https://images.unsplash.com/photo-1608470052276-6133d353d380?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY0fHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    description: "A romantic ballad with soft music and heartfelt lyrics, ideal for special moments."
  },
  {
    ranking: 9,
    songName: "Galliyan",
    artistName: "Ankit Tiwari",
    imageUrl: "https://images.unsplash.com/photo-1668022733247-8457145a6426?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk1fHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    description: "An emotional love song that became hugely popular for its catchy tune and depth."
  },
  {
    ranking: 10,
    songName: "Shayad",
    artistName: "Arijit Singh",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683299264772-2ecbdcb5eaa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk3fHxzb25nJTIwY292ZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    description: "A sweet and thoughtful love song from 'Love Aaj Kal' with simple yet meaningful lyrics."
  }
];


let sum = ''
songs.forEach(function(elem){
    sum = sum + `<div id="cards">
        <h1>${elem.ranking}</h1>
        <h5>${elem.songName}</h5>
        <h6>${elem.artistName}</h6>
        <img src="${elem.imageUrl}" alt="">
        <p>${elem.description}</p>
      </div>`
})

let body = document.querySelector('body');
body.innerHTML = sum;

// let like = document.querySelector('#like');
   
   
//         like.addEventListener('click', function() {
//             if (like.style.opacity === '1') {
//                 like.style.opacity = '0.1'; // Dislike
//             } else {
//                 like.style.opacity = '1';   // Like
//             }
//         });
   