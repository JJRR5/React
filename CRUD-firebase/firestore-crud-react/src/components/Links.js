import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm';
import { db } from "../firebase"
import { collection, addDoc, onSnapshot , query, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { toast } from "react-toastify"

const Links = () => {

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const addLink = async linkObj => {
        try {
            await addDoc(collection(db, "Links"), linkObj);
            toast("New link added successfully", {
                type: "success",
                autoClose: 2000
            })
        } catch(e) {
            toast("An error courrer while creating the link", {
                type: "error",
                autoClose: 2000
            })
        }
    }

    const editLink = async linkObj => {
        try {
            await updateDoc(doc(db, "Links", linkObj.id), linkObj);
            toast("New link updated successfully", {
                type: "info",
                autoClose: 2000
            })
            setCurrentId("");
        } catch(e) {
            toast("An error courrer while updating the link", {
                type: "error",
                autoClose: 2000
            })
        }
    }

    const onDeleteLink = async id => {
        if (!window.confirm("Are you sure you want to delete this link?")) {
            return;
        }
        const documentRef = doc(db, "Links", id);
        try {
            await deleteDoc(documentRef);
            toast("Link removed succesfully", {
                type: "error",
                autoClose: 2000
            })
        } catch (error) {
            alert(`Error deleteing the document ${error}`);
        }
    }

    
    const setupSnapshotListener = () => {
        const q = query(collection(db, 'Links'));
    
        const unsubscribe = onSnapshot(q, querySnapshot => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id: doc.id})
            });
            setLinks(docs);
        });
        // The `unsubscribe` function can be called to stop listening to updates.
        return unsubscribe;
    }

    useEffect(()=> {
        setupSnapshotListener();
    }, [])

    return (
        <>
            <div className="row">
                <div className='col-md-6 col-sm-12'>
                    <LinkForm 
                        addLink={addLink}
                        editLink={editLink}
                        links={links}
                        currentId={currentId}
                        setCurrentId={setCurrentId}
                    />
                </div>
                <div className='col-md-6 text-center col-sm-12'>
                    <h3 className="fw-bold link-items">Your links</h3>
                    <ul className="list-group mt-3">
                        {
                            links.length ? (
                                links.map(link => {
                                    const {id, name, url, description} = link
                                    return (
                                        <li 
                                            className="list-group-item fs-4 pb-4" 
                                            key={id}
                                        >
                                            <div className="card w-100 border-0">
                                                <div className="card-body">
                                                    <h3 className="card-title fw-bold text-uppercase">
                                                        {name}
                                                    </h3>
                                                    <p className="card-text">
                                                        {description}
                                                    </p>
                                                    <a href={url} className="card-link fs-6" target="_blank" rel="noreferrer">
                                                        Go to website
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-around">
                                                <button 
                                                    type="button" 
                                                    className="btn btn-primary btn px-4 text-uppercase"
                                                    onClick={() => setCurrentId(id)}
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-danger btn px-4 text-uppercase"
                                                    onClick={() => onDeleteLink(id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })
                            ) : (
                                <h3 className="text-success fw-bold fs-3 mt-5">No links added, start by adding one</h3>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Links
