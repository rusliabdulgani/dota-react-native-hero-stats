import axios from 'axios'


export const mangalist = manga => ({
  type: 'GET_MANGA',
  payload: {
    mangalist: manga
  }
})

export const getManga = () => dispatch => {
  const url = `https://api.opendota.com/api/heroStats` 
  axios.get(url)
  .then( ({data}) => {
    console.log('===================',data)
    dispatch(mangalist(data))
  })
  .catch( err => {
    dispatch(error(err))
  })
}