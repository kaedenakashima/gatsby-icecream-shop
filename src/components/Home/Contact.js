import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="contact" />
            <div className="row">
                <div class="col-10 col-sm-8 com-md-6 mx-auto">
                    <form
                        action="https://formspree.io/kaede.nakashima@yahoo.com" method="POST"
                    >
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">
                                name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="your name" />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">
                                Email</label>
                            <input type="text" className="form-control" name="name" id="email" placeholder="email@email.com" />
                        </div>
                        {/* description */}
                        <div className="form-group">
                            <label htmlFor="description">
                                Description</label>
                            <textarea
                                name="description" id="description" className="form-control" rows="5" placeholder="your description here..."
                            />
                        </div>
                        {/* submit */}
                        <button type="submit" className="btn btn-mint btn-block text-capitalize mt-5">submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
