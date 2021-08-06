import React from 'react';
import { getImageRequest } from '../../services/dapplets-hiring-api'
import s from './dappletImage.module.css'

const initialState = {
  image: '',
  imageRequest: false,
  imageFailed: false
}

function DappletImage(props:{name:string}) {
  const [state, setState] = React.useState(initialState)
  
  React.useEffect(()=>{
    setState({...state,imageRequest:true})
    getImageRequest(props.name)
      .then(res => {
        setState({...state, imageRequest: false, image: `data:image/jpeg;base64,${res}` })
      })
      .catch(err => {
        setState({...state, imageRequest: false, imageFailed: true })
      })
  }, [])
  if (state.imageRequest) {
    return (
      <span>Wait</span>
    )
  }
  if (state.imageFailed) {
    return (
      <span>Fail</span>
    )
  }
  const temp = `https://dapplets-hiring-api.herokuapp.com/api/v1/files/${props.name}`
  return (
    <img className={s.dapplets_img} src={temp} alt='-'>
    </img>
  );
}

export default DappletImage;
