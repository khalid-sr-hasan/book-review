import React from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { getDataToLocalStorage } from "../../utils/localStorage";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
        x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
        x + width
    }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const readPage = getDataToLocalStorage() || [];
    console.log(readPage);

    return (
        <div className="container p-5 mx-auto mt-32 bg-base-200 rounded-lg border">
            <ResponsiveContainer width="100%" height={480}>
                <BarChart
                    data={readPage}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="totalPages"
                        fill="#8884d8"
                        shape={<TriangleBar />}
                        label={{ position: "top" }}
                    >
                        {readPage.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;
