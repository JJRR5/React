import React from 'react'
import { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../firebase";

const LinkForm = ({addLink, editLink, links, currentId, setCurrentId}) => {
    const initialStateValues = {
        url: "",
        name: "",
        description: ""
    }

    const [formValues, setFormValues] = useState(initialStateValues);
    const [discardChanges, setDiscardChanges] = useState(false);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (discardChanges) {
            setDiscardChanges(false);
            setCurrentId("");
        }
        else if(currentId.length) {
            editLink({...formValues, id: currentId});
        }else {
            addLink(formValues);
            setFormValues({...initialStateValues})
        }
    }

    const getLinkById = async id => {
        const document = await getDoc(doc(db, "Links", id));
        setFormValues({...document.data()});
    };

    useEffect(() => {
        if (!currentId.length) {
            setFormValues({...initialStateValues})
            return;
        } 
        getLinkById(currentId);
    }, [currentId]);

    return (
        <form className='fs-4' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="url" className="form-label">URL</label>
                <input 
                    type="url" 
                    required
                    className="form-control p-3 fs-4" 
                    id="url" 
                    placeholder="https://google.com" 
                    name="url"
                    value={formValues.url}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="url-name" className="form-label">Name</label>
                <input 
                    type="text"
                    required
                    className="form-control p-3 fs-4" 
                    id="url-name" 
                    placeholder="name for the url"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea 
                    type="text" 
                    className="form-control p-3 fs-4" 
                    id="description" 
                    placeholder="a description for the url"
                    name="description"
                    value={formValues.description}
                    onChange={handleInputChange}
                />
            </div>
            <div 
                className={currentId.length ? "d-flex flex-column" : "d-flex justify-content-center"}
            >
                <button 
                    type="submit" 
                    className="btn btn-lg btn-outline-primary px-5 py-2 fs-3 mt-5"
                >
                    {currentId.length ? "Update" : "Save"}
                </button>
                <button 
                    onClick={() => setDiscardChanges(true)} 
                    className={currentId.length ? "btn btn-lg btn-outline-danger px-3 py-2 fs-3 mt-5" : "d-none"}
                >
                    Discard changes
                </button>
            </div>
        </form>
    )
}

export default LinkForm
