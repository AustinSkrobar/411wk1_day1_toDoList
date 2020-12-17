import React from "react";

// const removeItem = (evt) => {
//   evt.preventDefault();
//   let indexFound = evt.items.findIndex(evt.items.index)
//   evt.items.splice(indexFound, 1,'')
// }

function FirstComponent(props) {
  console.log("This is FirstComp Props***", props.items);
  const items = props.items;
  const listItems = items.map((item, index) => (
    <li key={index}>{item.text}</li>
  ));
  return (
    <div>
      <ul>
        {listItems}
        <button>Delete</button>;
      </ul>
    </div>
  );
}

export default FirstComponent;
