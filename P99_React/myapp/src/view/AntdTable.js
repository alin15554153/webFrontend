import { Table } from 'antd';
import 'antd/dist/antd.css'
import React from "react";
import { sensors } from "../api/test";

function antdTable() {
    var dataSource = [];
    const columns = [
        {
            title: '姓名',
            dataIndex: 'sensorTypeName',
            key: 'sensorTypeName',
        },
        {
            title: '年龄',
            dataIndex: 'dateTime',
            key: 'dateTime',
        },
        {
            title: '住址',
            dataIndex: 'pointLocation',
            key: 'pointLocation',
        },
    ];
    sensors({orgId:0}).then(res=>{
        // console.log(res.content)
        dataSource = res.content
    })


    return <Table dataSource={dataSource}  columns={columns} />;
}

export default antdTable;
