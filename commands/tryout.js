let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

for(let prop in types){
    console.log(prop);
    for(let i=0; i < types[prop].length; i++){
        console.log(types[prop][i]);
    }
    // if("media" == prop){
    //     console.log(types[prop]);
    // }
}

// let fs = require("fs");
// console.log(fs.existsSync("//home//kaushal//Dev//Lecture"));
