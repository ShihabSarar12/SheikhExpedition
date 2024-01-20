import multer from 'multer';

//TODO hav to include Date.now() and find a way to store originalname with it.
const storage = multer.diskStorage({
    //TODO might face problems with paths upon domain hosting as backend and frontend are separate
    destination: (req, file, cb) =>{
        return cb(null, 'pictures');
    },
    filename: (req, file, cb) =>{
        return cb(null, `${file.originalname}`);
    }
});

const upload = multer({
    storage
});

export {
    upload
}