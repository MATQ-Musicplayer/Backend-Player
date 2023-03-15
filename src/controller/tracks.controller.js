import * as TracksModel from '../model/tracks.model.js';


export async function getAll(req, res) {
    try {
        res.send(await TracksModel.getAllTracks())
    } catch (error) {
        console.log(error);
    }
}

export async function getById(req, res) {
    let id = req.params.id;
    try {
        res.send(await TracksModel.findTrackById(id))
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}

export async function getByName(req, res) {
    let title = req.params.title;

    try {
        let track = await TracksModel.findTrackByTitle(title);
        res.send(track);
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}