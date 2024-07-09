const express = require('express');
const app = express();
const path = 8080;
const { v4: uuidv4 } = require('uuid');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));

//declaration of sample data
posts = [
  {
    id: uuidv4(),
    username: 'Sonu Sharma',
    thaught: 'Life is Great ❤️',
    image: [
      'https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg',
      'https://wallpapers.com/images/high/thorough-mage-ba2zud4g6b7z9hs9.webp',
      'https://wallpapers.com/images/high/blue-boy-6klqmipm5nq8f6pu.webp',
    ],
  },
  {
    id: uuidv4(),
    username: 'Sahil Sharma',
    thaught: 'Working hard is one way to success',
    image: [
      'https://img.freepik.com/free-photo/anime-style-character-space_23-2151133952.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user',
      'https://wallpapers.com/images/hd/sad-anime-boy-computer-display-vc7o9yn7sgn4vxpi.webp',
      'https://wallpapers.com/images/high/darling-in-the-franxx-retro-anime-aesthetic-asp5htm46dj3padq.webp',
    ],
  },
  {
    id: uuidv4(),
    username: 'Mighty Raju',
    thaught: "Don't provoke indians",
    image: [
      'https://4kwallpapers.com/images/walls/thumbs_2t/16951.jpg',
      'https://wallpapers.com/images/high/attack-on-titan-anime-levi-ackerman-yqr0chiuqow3zngf.webp',
      'https://wallpapers.com/images/high/fate-zero-3552-x-1809-1nen6plvrngyt7r8.webp',
    ],
  },
];

//fetching index.js on /posts
app.get('/posts', (req, res) => {
  app.use(express.static(__dirname + '/public'));
  res.render('index.ejs', { posts });
});

//new post creation request on /posts/new
app.get('/posts/new', (req, res) => {
  res.render('new_thaught.ejs');
});

//update new post in /posts and redirect there
app.post('/posts', (req, res) => {
  console.log(req.body);
  let img = [];
  let { username, thaught, image } = req.body;
  id = uuidv4();
  console.log(id);
  //NOTE { username,thaught} === {username:username, thaught:thaught}
  if (image.constructor != Array) {
    img.push(image);
  } else {
    img = image;
  }
  posts.push({ id, username, thaught, image: img });
  console.log(posts);
  res.redirect('/posts');
});

//see post based on id in detail option=>Click here to see All xyz posts
app.listen(path, () => {
  console.log('listning on port', path);
});
