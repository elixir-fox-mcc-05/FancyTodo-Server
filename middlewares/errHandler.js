module.exports = (err, req, res, next) => {
    if (err.name === "SequelizeValidationError") {
        if(err.errors[0].path === "email"){
            return res.status(400).json ({
                Error : err.name,
                Message : "Your email doesn't valid, please use an email",
                Detail : err
            })
        } else if(err.errors[0].path === "password"){
            return res.status(400).json ({
                Error : err.name,
                Message : "Password must be from 8 - 50 characters",
                Detail : err
            })
        } else if(err.errors[0].path === "due_date"){
            return res.status(400).json ({
                Error : err.name,
                Message : "Only present to the future date is allowed",
                Detail : err
            })
        } else if(err.errors[0].path === "title"){
            return res.status(400).json({
                Error : err.name,
                Message : "Title Cannot be Empty",
                Detail : err
            })
        }
    } else if (err.name === "SequelizeUniqueConstraintError"){
        return res.status(400).json ({
            Error : err.name,
            Message : "Your email already exist",
            Detail : err
        })
    } else if(err.code) {
        return res.status(err.code).json({
            Error : err.type,
            Message : err.msg,
            Detail : err
        })
    } else {
        return res.status(500).json({
            Error : err.type,
            Message : err.msg,
            Detail : err
        })
    }
}