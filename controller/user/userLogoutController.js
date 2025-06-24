

const Logout = async (req, res) => {
    try{
       res.clearCookie("token")

       res.json({
        message : "Logged out successfully",
        success : true,
        error : false,
        data : []
       })
    }catch(err){
       res.json({
          message : err.message,
          sucess : false,
          error : true,
       })
    }

}



export default Logout;