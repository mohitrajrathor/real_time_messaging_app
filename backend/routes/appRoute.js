const express = require('express');
const app = express();

const Users = require('../mongose/users')


app.post('/register', (req, res) => {
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        role: req.body.role
    });
    User.save().then(data =>{
        return res.status(200).json({message: "User successfully registered"});
    }).catch(err =>{
        return res.status(500).json({error:err});
    });
});


app.post('/login', (req, res) => {
    let emailPassed = req.body.email;
    let passwordPassed = req.body.password;
    Users.findOne({
        email:emailPassed
    }).then((user) => {
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        var isPasswordValid = bcrypt.compareSync(passwordPassed, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Invalid Password"
            });
        }
        else{
            var token = jwt.sign({
                token_id: user_id
            }, password.env.LOgin_secret, {
                expiresIn: 86400
            });
            return res.status(200).send({
                user: {
                    id: user.id
                },
                message: "Login successfully",
                accessToken: token
            });
        }
    }).catch(err => {
        return res.status(500).json({error:err});
 
    })
})




module.exports = express.model('AppRoute', )

