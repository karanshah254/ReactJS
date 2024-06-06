import React, { Component } from 'react'

export class NewItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, source, date } = this.props;

        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '89%', zIndex: '1' }}>
                            {source}
                        </span>
                    </div>
                    <img className="card-img-top" src={!imageUrl ? "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800" : imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">On {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItem;