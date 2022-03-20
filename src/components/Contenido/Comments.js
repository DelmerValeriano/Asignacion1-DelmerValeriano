import React from 'react';


const appland = require.context("../../imagenes", true);

export const Comments = ({qualify,comment,date,user}) => {


 
  return (

    <div className="font-serif ml-5">
   
    <div className="grid sm:grid-cols-2 md:grid-cols-4 rounded-xl shadow-md  mb-10 border mx-10 overflow-hidden  ">
      <div className="mx-10   ">
      <div className="flex overflow-hidden  mt-8">


          <div>
            <img src={appland((qualify<1) ?  ('./star-empty.jpg') : ('./FilledStar.jpg') )}  className="h-6 w-6 " alt="" />
          </div>
          <div>
          <img src={appland((qualify<2) ?  ('./star-empty.jpg'):('./FilledStar.jpg') )}  className="h-6 w-6 " alt="" />
            
          </div>
          <div>
          <img src={appland((qualify<3) ?  ('./star-empty.jpg'):('./FilledStar.jpg') )}  className="h-6 w-6 " alt="" />

          </div>
          <div>
          <img src={appland((qualify<4) ?  ('./star-empty.jpg'): ('./FilledStar.jpg') )}  className="h-6 w-6 " alt="" />

          </div>
          <div>
          <img src={appland((qualify <5) ?  ('./star-empty.jpg') :('./FilledStar.jpg') )}  className="h-6 w-6 " alt="" />

          </div>       
        </div>
      </div>
      <div className="mt-8 ml-10">{comment}</div>
      <div className="mt-8 ml-10">{date}</div>
      <div className="mt-8 ml-10 mb-10">{user}</div>
    </div>
  </div>
  )
}
