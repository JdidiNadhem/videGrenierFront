import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register_utilisateur } from "../../JS/Actions/utilisateur.action";

const Register = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.utilisateurReducer.errors);

  let [utilisateurData, setUtilisateurData] = useState({
   nom:"",
   prenom:"",
   nomUtilisateur:"",
   motDePasse:"",
   reMotDePasse:""
  });

  const handleUtilisateurData = (e) => {
    setUtilisateurData({ ...utilisateurData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container py-5" style={{height:"100vh"}}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                      height:"555px"
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">S’inscrire</h3>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            name="nom"
                            onChange={(e) => {
                              handleUtilisateurData(e);
                              
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m"
                          >
                            Nom
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1n"
                            className="form-control form-control-lg"
                            name="prenom"
                            onChange={(e) => {
                              handleUtilisateurData(e);
                              
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n"
                          >
                            Prenom
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m1"
                            className="form-control form-control-lg"
                            name="nomUtilisateur"
                            onChange={(e) => {
                              handleUtilisateurData(e);
                              
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m1"
                          >
                            Nom utilisateur
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="form3Example1n1"
                            className="form-control form-control-lg"
                            name="motDePasse"
                            onChange={(e) => {
                              handleUtilisateurData(e);
                              
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n1"
                          >
                            Mot de passe
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                      <input
                            type="password"
                            id="form3Example1n1"
                            className="form-control form-control-lg"
                            name="reMotDePasse"
                            onChange={(e) => {
                              handleUtilisateurData(e);
                              
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n1"
                          >
                            Répeter mot de passe
                          </label>
                      </div>
                      <div className="col-md-6 mb-4">
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-3">
                        {errors && errors.length > 0 ? (
                          <label className="text-danger error">
                            {errors[0].msg}
                          </label>
                        ) : null}
                      </div>
                    <div className="d-flex justify-content-center pt-3">
                      <button
                        type="button"
                        className="btn btn-dark btn-lg ms-2 w-100"
                        onClick={()=>{
                          dispatch(register_utilisateur({...utilisateurData},navigate))
                        }}
                      >
                        S'inscrire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
