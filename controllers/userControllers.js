import User from "../models/User";
import routes from "../routes";

export const getPhoneNum = (req, res) => res.render("phoneNum");

export const postPhoneNum = async(req, res) => {


    const {
        body: {phoneNum}
    } = req;

    console.log("전화번호:");
    console.log(req.body.phoneNum);

    try {

        await User.create({
            phoneNum: phoneNum
        })

        res.redirect(routes.home);

    }catch(error){
        console.log(error);
    }

}