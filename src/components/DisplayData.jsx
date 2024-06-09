import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteForm, EditForm } from '../redux/counter/FormSlice';
import { useState } from 'react';

function DisplayData() {
  const dispatch = useDispatch();
  const Forms = useSelector(state => state.form.Addform);

  const [editId, setEditId] = useState(null);
  const [editFname, setEditFname] = useState("");
  const [editSname, setEditSname] = useState("");
  const [editCountry, setEditCountry] = useState("");
  const [editSubject, setEditSubject] = useState("");

  const handleDelete = (id) => {
    dispatch(DeleteForm({ id }));
  };

  const handleEdit = (id, form) => {
    setEditId(id);
    setEditFname(form.Fname);
    setEditSname(form.Sname);
    setEditCountry(form.Country);
    setEditSubject(form.Subject);
  };

  const submitEdit = (id) => {
    dispatch(EditForm({
      id,
      data: {
        Fname: editFname,
        Sname: editSname,
        Country: editCountry,
        Subject: editSubject,
      }
    }));
    setEditId(null); // Exit edit mode
  };

  return (
    <>
      {Forms.map((val) => (
        <div className='main' key={val.id}>
          {editId === val.id ? (
            <>
            <label className='label'>   First Name:</label>
              <input  className='field1' type="text" value={editFname} onChange={(e) => setEditFname(e.target.value)} />
              <label className='label'>   Last Name:</label>
              <input   className='field1' type="text" value={editSname} onChange={(e) => setEditSname(e.target.value)} />
              <label className='label'>   Country:</label> 
              <input  className='field1' type="text" value={editCountry} onChange={(e) => setEditCountry(e.target.value)} />
              <label className='label'>   Subject:</label>
              <input className='field1' type="text" value={editSubject} onChange={(e) => setEditSubject(e.target.value)} />
              <button  className='btn2' onClick={() => submitEdit(val.id)}>Save</button>
              <button   className='btn1'onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <div className='field'><strong>Name: {val.Fname}</strong></div>
              <div className='field'><strong>LastName: {val.Sname}</strong></div>
              <div className='field'><strong>Country: {val.Country}</strong></div>
              <div className='field'><strong>Subject: {val.Subject}</strong></div>
              <button className='btn1' onClick={() => handleDelete(val.id)}>Delete</button>
              <button className='btn2' onClick={() => handleEdit(val.id, val)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default DisplayData;
