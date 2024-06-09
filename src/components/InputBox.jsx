import { useState } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { AddsForm } from '../redux/counter/FormSlice';

function InputBox() {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [country, setCountry] = useState("");
  const [subject, setSubject] = useState("");
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(AddsForm({
      Fname: fname,
      Sname: sname,
      Country: country,
      Subject: subject
    }));
    setFname("");
    setSname("");
    setCountry("");
    setSubject("");
  };

  return (
    <>
      <form className='form' onSubmit={submitForm}>
        <label>First Name</label>
        <input type="text" value={fname} name="firstname" onChange={(e) => setFname(e.target.value)} placeholder="Your name.." />

        <label>Last Name</label>
        <input type="text" className="lname" value={sname} name="lastname" onChange={(e) => setSname(e.target.value)} placeholder="Your last name.." />

        <label>Country</label>
        <select className="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label>Subject</label>
        <input type="text" className="subject" value={subject} name="subject" onChange={(e) => setSubject(e.target.value)} placeholder="Your subject.." />

        <input type="submit" value="Submit"></input>
      </form>
      <div className='space'></div>
    </>
  );
}

export default InputBox;
