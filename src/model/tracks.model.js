import mongoose from "mongoose";


const TracksSchema = mongoose.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true, unique: true},
    album: {type: String, required: true},
    image: {type: String},
    src: {type: String, required: true},
    genre: {type: String, required: true},
    year: Number
}, {timestamps: true});


const Track = mongoose.model('Track', TracksSchema);

export async function findTrackById(id) {
    let track = await Track.findById(id);

    if (track === null) {
        return new Error(`Track with id ${id} not found`)
    }
    return track;
}

export async function getAllTracks() {
    return await Track.find({});
}

export async function findTrackByTitle(title) {

    let track = await Track.findOne({title: title});
    console.log(track);
    if (track === null) {
        return new Error(`Track with title ${title} not found`)
    }
    console.log(track);
    return track;
}


export default Track;