import React from "react";

const tableFill = {
    primary: "table-primary",
    secondary: "table-secondary",
    success: "table-success",
    danger: "table-danger",
    info: "table-info",
    warning: "table-warning",
    dark: "table-dark",
};
export const Table = ({
    className,
    table,
    tableType,
    tableHeading,
    tableH,
}) => {
    const TableHead = ({ item }) => {
        let classHead = [];

        const tableHead = [tableFill[tableH]];

        if (tableHeading === "coloured") {
            classHead.push(...tableHead);
        }

        classHead = classHead.join(" ");
        return (
            <td className={classHead} title={item}>
                {item}
            </td>
        );
    };
    const TableRow = ({ data }) => {
        return (
            <tr>
                {data.map((item) => {
                    return <td key={item}>{item}</td>;
                })}
            </tr>
        );
    };
    const thData = ["name", "email", "date"];
    const tbData = [
        {
            id: "1",
            items: ["simon", "simon@gmail.com", "01/01/2022"],
        },
        {
            id: "2",
            items: ["effie", "effie@gmail.com", "01/01/2022"],
        },
        {
            id: "3",
            items: ["sydo", "sydo@gmail.com", "01/01/2022"],
        },
    ];

    let classes = [];

    const tableFilled = [tableFill[table]];

    if (tableType === "filled") {
        classes.push(...tableFilled);
    }

    classes = classes.join(" ");

    return (
        <div>
            <table className={` table ${classes} ${className}`}>
                <thead>
                    <tr>
                        {thData.map((h) => {
                            return <TableHead key={h} item={h} />;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tbData.map((item, id) => {
                        return <TableRow key={id} data={item.items} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};
