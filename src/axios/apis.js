
const baseUrl = "http://127.0.0.1:3000/motie";
export default {
 
    homeIndex:{
        url:baseUrl + "/home",
        method:"GET"
    },
    recentUpdate:{
        url:baseUrl + "recentUpdates",
        method:"GET"
    }

};