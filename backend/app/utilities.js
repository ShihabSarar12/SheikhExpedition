import bcrypt from 'bcrypt';

const hashPassword = async (password) =>{
    const hash = await bcrypt.hash(password, parseInt(process.env.HASH_ITERATION));
    return hash;
}
const hashMatch = async (password, hash) =>{
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
}

export { 
    hashPassword,
    hashMatch
}