module.exports= {
    port: 5000,
    host: false, // if any pass in strings else set false i-e "127.0.0.1",
    mail_server:{
        host: "smtp.gmail.com", // your mail host here i-e "smtp.ethereal.email
        port: 587, //
        secure: true, // boolean value i-e true/false,
        auth: {
            acct1: {
                user : "", //email,
                pass: "", //pass
            }
            // ad more acct if required
        } 
    } 
}