const AddInfo = ({
  setAddress,
  setName,
  setNumber,
  setEmail,
  email,
  name,
  number,
  address,
  setContacts,
  contacts,
}) => {
  const addInfo = (event) => {
    const newId = contacts.length * 5;
    event.preventDefault();

    //create a new object which add the new input details with old contacts info
    const newContacts = {
      id: String(newId),
      FullName: name,
      Email: email,
      PhoneNumber: number,
      Address: address,
    };
    setContacts(contacts.concat(newContacts));
    setName("");
    setEmail("");
    setNumber("");
    setAddress("");
  };
  const nameChange = (event) => {
    setName(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const numberChange = (event) => {
    setNumber(event.target.value);
  };
  const addressChange = (event) => {
    setAddress(event.target.value);
  };


  //for btn functionality
  const addBtn = () => {
    window.alert(`${name} added to the contacts.`);
  }

  return (
    <>
      <form className="align-items-center col-auto" onSubmit={addInfo}>
        <label className="col-sm-2 col-form-label">Full Name: </label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={nameChange}
        />{" "}
        <br />
        <label className="col-sm-2 col-form-label">Email: </label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={emailChange}
        />
        <br />
        <label className="col-sm-2 col-form-label">Phone Number: </label>
        <input
          type="text"
          className="form-control"
          value={number}
          onChange={numberChange}
        />
        <label className="col-sm-2 col-form-label">Address: </label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={addressChange}
        />
        <button type="submit" className="btn btn-success" onClick={addBtn}>
          Add
        </button>
      </form>
    </>
  );
};

export default AddInfo;
