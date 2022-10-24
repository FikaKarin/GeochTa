const SelectButton = (size) => {
  //fetch parent and update it locally, make response to an object
  fetch('http://localhost:3001/parents/0').then((response) => {
    response.json().then(parent => {
      parent.children[0].package = size

      //We want to update parent in db.json with the value we have locally
      //body is our new parent that we want to raplace parent in db.json with
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parent),
      };
      //put object we made on this location in db
      fetch('http://localhost:3001/parents/0', requestOptions)
        .then((response) => response.json());
    })
  });

  console.log(size);

  return (
    <div>

    </div>
  );
};

export default SelectButton;