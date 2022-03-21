import { types } from "../types/types";
import { TraidaDatos } from "../helpers/fetch";




export const getComments = () => {
  return async (dispatch) => {
    const resp = await TraidaDatos(`api/comments/`, {}, "GET");
    const body = await resp.json();

    if (body.ok) {
      dispatch(traerComentario(body.comment));
    }
  };
};

export const getCommentsImg = (id) => {
  return async (dispatch) => {
    const resp = await TraidaDatos(`api/comments/${id}`, {}, "GET");
    const body = await resp.json();

    if (body.ok) {
      dispatch(commentActivo(body.commentImg));
    }
  };
};

export const traerComentario = (comments) => ({
  type: types.traerComentario,
  payload: comments,
});

export const EliminarComment = () => ({
  type: types.EliminarComentarioAvtivo,
});

export const commentActivo = (commentActivo) => ({
  type: types.commentActivo,
  payload: commentActivo,
});

export const AgregarComment = (comments) => ({
  type: types.agregarComment,
  payload: comments,
});

export const postComments = (
  id,
  qualify,
  comment,
  date,
  user,
  uid,
  category
) => {
  return async (dispatch) => {
    const resp = await TraidaDatos(
      `api/comments/${id}`,
      { qualify, comment, date, user, uid },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch(putCalificacion(category, id));
      dispatch(getComments());
      dispatch(getCommentsImg(id));

    
    }
  };
};

const putCalificacion = (category, idImg) => {
  return async (dispatch) => {
    const commentImage = await TraidaDatos(`api/comments/${idImg}`, {}, "GET");
    const comment = await commentImage.json();

  
    const { commentImg } = comment;
    const calificacion = commentImg.map(
      (qualify) => (qualify = qualify.qualify)
      );
      const count = calificacion.length;
      let suma = 0;
      
      for (let i = 0; i < count; i++) {
        suma += calificacion[i];
      }
      
      const commentcalificacion = Math.round(suma / count);


    const resp = await TraidaDatos(`api/comments/${category}/${idImg}`,{commentcalificacion},"PUT");


  const body =  await resp.json();
    dispatch(ActualizarCalificaciones(commentcalificacion));

  };
};

export const ActualizarCalificaciones=(commentcalificacion)=>({
  type: types.Actualizar,
  payload:commentcalificacion
}
)