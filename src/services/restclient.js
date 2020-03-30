import Axios from 'axios';

let getAll = async () => {
    let result = await Axios.get('http://suvijatkuvaprojekti-ebenv.eba-mpvrixqn.eu-west-1.elasticbeanstalk.com/api/topic')
    return result.data;
}

let getOne = async (id) => {
    let getTopic = await Axios.get('http://suvijatkuvaprojekti-ebenv.eba-mpvrixqn.eu-west-1.elasticbeanstalk.com/api/topic/' + id, {
    })
    return getTopic.data;
}

let addNew = async (t) => {
    let newOne = await Axios.post('http://suvijatkuvaprojekti-ebenv.eba-mpvrixqn.eu-west-1.elasticbeanstalk.com/api/topic', t)
    return newOne;
}

let deleteOne = async (id) => {
    let delOne = await Axios.delete('http://suvijatkuvaprojekti-ebenv.eba-mpvrixqn.eu-west-1.elasticbeanstalk.com/api/topic/' + id, {
    })
    return delOne;
}

let editOne = async (id, t) => {
    let edited = await Axios.put('http://suvijatkuvaprojekti-ebenv.eba-mpvrixqn.eu-west-1.elasticbeanstalk.com/api/topic/'+ id, t)
    return edited;
}   

export { getAll, getOne, addNew, deleteOne, editOne }