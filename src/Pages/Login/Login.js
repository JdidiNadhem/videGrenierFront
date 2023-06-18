import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login_utilisateur } from "../../JS/Actions/utilisateur.action";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.utilisateurReducer.errors);
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div style={{ borderRadius: "1rem",border:"1px solid" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    style={{ borderRadius: "1rem 0 0 1rem",width:"96%",height:"555px" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 mb-0" style={{ fontWeight: 400 }}>
                          S'identifier
                        </span>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setNomUtilisateur(e.target.value);
                          }}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Nom utilisateur
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => {
                            setMotDePasse(e.target.value);
                          }}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Mot de passe
                        </label>
                      </div>
                      <div className="form-outline mb-4 text-center">
                        {errors && errors.length > 0 ? (
                          <label className="text-danger error">
                            {errors[0].msg}
                          </label>
                        ) : null}
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block w-100"
                          type="submit"
                          onClick={(e) => {
                            dispatch(
                              login_utilisateur({ nomUtilisateur, motDePasse }, navigate)
                            );
                            e.preventDefault()
                          }}
                        >
                          Login
                        </button>
                      </div>
                      {/* <a className="small text-muted" href="#!">
                        Forgot password?
                      </a> */}
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Vous n'avez pas de compte ?
                        <Link to="/inscription" style={{ color: "#393f81" }}>
                          Inscrivez-vous
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
