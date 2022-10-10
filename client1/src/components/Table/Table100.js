import React, { useEffect, useState } from "react";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from "./Table"; // new

function Table100() {
  const columns = React.useMemo(
    () => [
      {
        Header: "User",
        accessor: "userName",
        Cell: AvatarCell,
        imgAccessor: "image",
        emailAccessor: "email",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Score",
        accessor: "totalSum",
      },
      {
        Header: "Deviec",
        accessor: "device",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/top100")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className=""></div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default Table100;
