import React from 'react';


class Banner extends React.Component{
  
  render(){
      const { id, title, overview, poster_path,backdrop_path } = this.props;
      const style = {border:'1px solid #000',marginTop:'10px'};
    return <>
    <div style={style}>
        <div>Id : {id}</div>
        <div>title : {title}</div>
        <div> overview : {overview}</div>
        <div>poster_path : {poster_path}</div>
        <div>backdrop_path : {backdrop_path}</div>
    </div>
    </>
  }
}


export default Banner;