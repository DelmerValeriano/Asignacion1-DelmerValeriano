import React, { useEffect, useState } from "react";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useForm } from "../../hooks/useForm";

import { Comments } from "./Comments";
import { getCommentsImg, postComments } from "../../actions/comment";

const appland = require.context("../../imagenes", true);

export const Calificacion = () => {
  const [qualify, setQualify] = useState(5);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formvalues, handleInputChange, reset] = useForm({ comment: "" });
  const { comment } = formvalues;

  const { cheking, displayName, uid } = useSelector((state) => state.auth);

  const { id, category } = useSelector(
    (state) => state.producto.activeproducts
  );

  const fecha = moment().format("MMMM Do, YYYY");

  const { commentActivo } = useSelector((state) => state.comment);
  const { commentActivo: commentUser } = useSelector((state) => state.comment);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    dispatch(getCommentsImg(id));
  }, [dispatch, id]);

 
  const hadlesubmit = (e) => {
    e.preventDefault();

    const IdUser = commentUser.map((userid) => (userid = userid.uid));

    if (cheking) {
      let idComparar = "";
      for (let i = 0; i < IdUser.length; i++) {
        if (uid === IdUser[i]) {
          idComparar = IdUser[i];
        }
      }

      if (uid !== idComparar) {
        setComments([
          ...comments,
          {
            qualify: qualify,
            comment: comment,
            date: fecha,
            user: displayName,
          },
        ]);

        dispatch(
          postComments(id, qualify, comment, fecha, displayName, uid, category)
        );

        reset();
        setQualify(5);

        Swal.fire({
          icon: "success",
          title: "Se agrego el comentario correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Ya no puedes calificar este producto",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setQualify(5);
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Inicia sesion para crear un comentario",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    }
  };

  const handlelleno1 = () => {
    setQualify(1);
  };
  const handlelleno2 = () => {
    setQualify(2);
  };
  const handlelleno3 = () => {
    setQualify(3);
  };
  const handlelleno4 = () => {
    setQualify(4);
  };
  const handlelleno5 = () => {
    setQualify(5);
  };

  return (
    <div>
      <hr className="mt-8 border-t-1 border-solid  border-current mx-5" />
      <div className="m-5 font-serif">
        <h1 className="mb-5">Your Rating</h1>
        <form onSubmit={hadlesubmit}>
          <div className="flex overflow-hidden mb-4">
            <div>
              <img
                src={appland(
                  qualify < 1 ? "./star-empty.jpg" : "./FilledStar.jpg"
                )}
                onClick={handlelleno1}
                className="h-6 w-6 "
                alt=""
              />
            </div>
            <div>
              <img
                src={appland(
                  qualify < 2 ? "./star-empty.jpg" : "./FilledStar.jpg"
                )}
                onClick={handlelleno2}
                className="h-6 w-6 "
                alt=""
              />
            </div>
            <div>
              <img
                src={appland(
                  qualify < 3 ? "./star-empty.jpg" : "./FilledStar.jpg"
                )}
                onClick={handlelleno3}
                className="h-6 w-6 "
                alt=""
              />
            </div>
            <div>
              <img
                src={appland(
                  qualify < 4 ? "./star-empty.jpg" : "./FilledStar.jpg"
                )}
                onClick={handlelleno4}
                className="h-6 w-6 "
                alt=""
              />
            </div>
            <div>
              <img
                src={appland(
                  qualify < 5 ? "./star-empty.jpg" : "./FilledStar.jpg"
                )}
                onClick={handlelleno5}
                className="h-6 w-6 "
                alt=""
              />
            </div>
          </div>

          <input
            placeholder="Write your comment"
            className="shadow appearance-none border rounded pr-64 py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            name="comment"
            autoComplete="off"
            required
            value={comment}
            onChange={handleInputChange}
          />
          <div
            className=" bg-blue-700 ml-96 w-40 text-center cursor-pointer text-white rounded  hover:bg-blue-800 mt-6 py-2 mb-2"
            type="submit"
            onClick={hadlesubmit}
          >
            Send
          </div>
        </form>
        {/* <i className="fa fa-ligth fa-star mt-1 h-8 w-8 absolute "></i> */}
      </div>
      <hr className="mt-8 mb-8 border-t-1 border-solid border-current mx-5 " />
      <div className="font-serif ml-5">
        <h1 className="mb-5">Comments</h1>

        {/* comentarios */}

        {commentActivo.map((comment) => (
          <Comments key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};
