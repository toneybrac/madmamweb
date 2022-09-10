const { cloudinary } = require('./utils/cloudinary');
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const { response } = require('express');
const formidable = require('formidable');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.MY_JWT_SECRET;


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
}
).on('error', (error) => {
    console.log(error);
}
);

app.use('/uploadV',routes)

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:dev_setups')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

app.get('/uploadVideo', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:videos')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});


  require('./models/userDetails')

  const User = mongoose.model('UserInfo');


app.post('/register', async(req, res) => {
    const { fname, lname, email, password } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if (oldUser) {
          return res.json({ error: "User Exists" });
        }
        
        await User.create({
            fname,
            lname,
            email,
            password,
        });
        res.send({statue: 'ok'})
        
        
    } catch (error) {
        res.send({status: 'error'})
    }
});


app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await password) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET);
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });


  app.post('/dashboard', async (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;
        User.findOne({ email: useremail }).then((data) => {
            res.send({status: 'ok', data: data});
        })
        .catch ((error) => {
            //res.send({ status: 'error', data: error });
            window.location.href = "/";
        })
    } catch (error) {
        
    }
  })

/*
app.post('/image-upload', (req, res) => {
    //console.log(req.body)
    const form = formidable({ multiples: true});
    form.parse(req, (err, field, files) => {
        console.log(files);
    })

})
*/

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('listening on 3001');
});
