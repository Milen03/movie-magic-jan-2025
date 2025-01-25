import Cast from "../models/Cast.js"

export default {
    getAll(){
        return Cast.find({})
// return Cast.find({_id:{$in: ids}})
    },
    create(castData){
        return Cast.create(castData)
    }
}