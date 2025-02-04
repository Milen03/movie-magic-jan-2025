import { Schema,model } from 'mongoose'

const castSchema = new Schema({
    name: {
        type: String,
        require: [true,'Name is require!'],
        minLength: [5,'Name should be at least 5 characters long!'],
        match:[/^[a-zA-Z 0-9]+$/, 'Name should be alphanumeric, digits and whitespaces only!']
    },
    age:{
        type: Number,
        min:0,
        mix:120,
    },
    born: {
        type: String,
        minLength: 10,
        match: /^[a-zA-Z 0-9]+$/
    },
    imageUrl: {
        type: String,
        validate: {
            validator: function(v) {
                return /^https?:\/\//.text(v)
            },
            message: (props) => `${props.value} is invalid image url!`
        }
    },
})

const Cast = model('Cast',castSchema)

export default Cast

