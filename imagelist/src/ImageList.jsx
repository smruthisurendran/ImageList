import React, { useEffect,useState } from 'react';

const ImageList = () => {
  const [dataList,setDataList] = useState({});

  useEffect(() => {
     new Promise((resolve, reject) => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coconut')
        .then(resp => resp.json())
        .then(data => resolve(data))       
        .catch(err => reject(err))        
     })
    .then(data => setDataList(data))
    .catch(err => setDataList(err)); 
  },[]);

  return (
  <>
  <div style={{
    display:"flex",  
    flexDirection:"column",
    color: "#ffffff",
    justifyContent:"space-between",
  }}>
  {Object.values(dataList)?.map((data)=>(
    data?.map((item)=>( 
        <div style={{backgroundColor:"black"}}>      
            <img key={item.idDrink} src={item.strDrinkThumb} alt='strDrinkThumb'/>    
        </div>  
    ))
  ))}  
  </div>                                          
  </>
  );
};
export default ImageList;
