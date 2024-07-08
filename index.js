const express = require('express');
const app = express();
const path = 8080;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

posts = [
  {
    username: 'Sonu Sharma',
    thaught: 'Life is Great ❤️',
    image: [
      '',
      'https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg',
      'https://img.freepik.com/free-photo/anime-style-character-space_23-2151133952.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user',
      'https://wallpapers.com/images/high/blue-boy-6klqmipm5nq8f6pu.webp',
    ],
  },
  {
    username: 'Sahil Sharma',
    thaught: 'Working hard is one way to success',
    image: [
      'https://img.freepik.com/free-photo/anime-style-character-space_23-2151133952.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user',
      'https://wallpapers.com/images/hd/sad-anime-boy-computer-display-vc7o9yn7sgn4vxpi.webp',
      'https://wallpapers.com/images/high/darling-in-the-franxx-retro-anime-aesthetic-asp5htm46dj3padq.webp',
    ],
  },
  {
    username: 'Mighty Raju',
    thaught: "Don't provoke indians",
    image: [
      'https://4kwallpapers.com/images/walls/thumbs_2t/16951.jpg',
      'https://wallpapers.com/images/high/attack-on-titan-anime-levi-ackerman-yqr0chiuqow3zngf.webp',
      'https://wallpapers.com/images/high/fate-zero-3552-x-1809-1nen6plvrngyt7r8.webp',
    ],
  },
];

app.use(express.urlencoded({ extended: true }));

app.get('/posts', (req, res) => {
  app.use(express.static(__dirname + '/public'));
  res.render('index.ejs', { posts });
});

app.get('/posts/new', (req, res) => {
  res.render('new_thaught.ejs');
});

app.post('/posts', (req, res) => {
  console.log(req.body);

  //   let { username, thaught } = req.body;
  //NOTE { username,thaught} === {username:username, thaught:thaught}
  posts.push(req.body);
  res.redirect('/posts');
});

app.listen(path, () => {
  console.log('listning on port', path);
});
