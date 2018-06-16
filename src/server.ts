import app from './app';
import SongModel from './models/SongModel';
import PlayerCore from './player/PlayerCore';
const PORT = 4000;


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/add', (req, res) => {
  res.render('addSong')
})

app.post('/queueSong', (req, res) => {
  const newSong = new SongModel();
  newSong.url = req.body.songURL;
  newSong.providerType = req.body.providerType;
  const player = PlayerCore.getInstance();
  player.addToQueue(newSong);
  player.play();
})

app.get('/pause', (req, res) => {
  const player = PlayerCore.getInstance();
  player.pause();
})

app.get('/play', (req, res) => {
  const player = PlayerCore.getInstance();
  player.play();
})

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
})