import React, { useEffect, useState } from "react";
import ListData from "./ListAll";

const ListAll = () => {
  useEffect(() => {
    ListData().then(({ found }) => {
      setFoundState(found);
      return () => {
        setFoundState("");
      };
    });
  }, []);

  const [foundState, setFoundState] = useState(null);

  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          {/* list items */}
          {foundState ? (
            <>
              <h2>Items Found</h2>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Item Desc</th>
                    <th>place</th>
                    <th>Contact</th>
                    <th>picture</th>
                  </tr>
                </thead>
                <tbody>
                  {foundState.map((fond) => {
                    return (
                      <tr key={fond._id}>
                        <td>{fond.item}</td>
                        <td>{fond.itemDesc}</td>
                        <td>{fond.place}</td>
                        <td>{fond.contact}</td>
                        <td>{fond.pic}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            "Loading....."
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ListAll;
