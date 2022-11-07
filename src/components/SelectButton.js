//SelectButton component
//fetch parents object from db.json
//PUT method
const SelectButton = (size) => {
  //fetch parent and update it locally, make response to an object
  fetch('http://localhost:3001/parents/0').then((response) => {
    response.json().then((parent) => {
      parent.children[0].package = size;

      //We want to update parent in db.json with the value we have locally
      //body is our new parent that we want to replace parent in db.json with
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parent),
      };
      //Put object we made on this location in db
      fetch('http://localhost:3001/parents/0', requestOptions).then(
        (response) => response.json()
      );
    });
  });

  return <div></div>;
};

export default SelectButton;
