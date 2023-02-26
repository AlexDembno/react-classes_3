import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/users-slice';
import { nanoid } from 'nanoid';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const handlChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    name === 'name' ? setName(value) : setAge(value);
  };

  const navigate = useNavigate();

  const handlSubmit = e => {
    e.preventDefault();
    const newUser = {
      id: nanoid(),
      name,
      age,
      status: 'offline',
    };
    dispatch(addUser(newUser));
    navigate('/');
  };

  return (
    <form onSubmit={handlSubmit}>
      <label>
        Name
        <input name="name" type="text" onChange={handlChange} />
      </label>
      <label>
        Age
        <input name="age" type="text" onChange={handlChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
