import Cookies from "universal-cookie";

const functions = {
    isUserLogedIn() {
        const cookie = new Cookies();
        const uid = cookie.get('UID');
        
        return (uid) ? true : false;
    },
    
    getUserUid() {
        const cookie = new Cookies();
        const uid = cookie.get('UID');
        
        return uid;
    },
    
    getUserToken() {
        const cookie = new Cookies();
        const token = cookie.get('TOKEN');
        
        return token;
    }
}

export default functions;