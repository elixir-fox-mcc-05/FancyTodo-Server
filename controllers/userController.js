class UserController {

    static register(req,res){

        let {first_name, last_name, username, password, email} = req.body
        let newUser = {first_name, last_name, username, password, email}

        User
            .create(newUser)
            .then(data => res.status(201).json({id :data.id,
                                                email : data.email,
                                                password : data.password
                                                }))
            .catch(err => {
                res.status(500).json({error : err.message})
            })

    }

    static login(req,res){

        const {email , password} = req.body

        User
            .findOne({where:{"email" : email}})
            .then(data => {

                if(data){

                    if (compare(password, data.password)){

                        let token = generateToken({
                                        email : data.email,
                                        password : data.password
                                    })
                        res.status(200).json({token})

                    }else {

                        res.status(400).json({error : 'invalid password'})

                    }
                }else {

                    res.status(401).json({error : 'invalid email'})

                }
                
                })
            .catch(err => {
                            res.status(500).json({error : err.message})               
                            })

    }

}

module.exports = UserController