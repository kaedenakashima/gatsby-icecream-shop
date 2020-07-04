import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Velit dolore dolor anim Lorem pariatur. Sunt anim duis elit
              pariatur quis adipisicing pariatur aliquip adipisicing ipsum eu et
              laborum labore. Fugiat commodo nisi ut qui sint pariatur eiusmod.
            </p>
            <>
              <Link to="/about">
                <button className="btn text-upppercase btn-mint">
                  about page
                </button>
              </Link>
            </>
          </div>
        </div>
      </div>
    </section>
  )
}
