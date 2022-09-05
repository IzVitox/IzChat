
function checkLoggedIn(req) {
    if(req.session.loggedIn){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    checkLoggedIn,
}