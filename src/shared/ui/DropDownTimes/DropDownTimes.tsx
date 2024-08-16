import React from 'react';
import * as classes from "./DropDownTimes.module.scss";
import {Dropdown, MenuProps, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";


interface DropDownProps{
    timeName: string;
    setTimeName: React.Dispatch<React.SetStateAction<string>>;
    setCurrentInterval: React.Dispatch<React.SetStateAction<string[]>>;
}

const DropDownTimes: React.FC<DropDownProps> = ({timeName, setTimeName, setCurrentInterval}) => {

    const items: ({ label: string; key: string })[] = [
        {
            label: "00:00 – 02:00",
            key: '0',
        },
        {
            label: "02:00 – 04:00",
            key: '1',
        },
        {
            label: "04:00 – 06:00",
            key: '2',
        },
        {
            label: "06:00 – 08:00",
            key: '3',
        },
        {
            label: "08:00 – 10:00",
            key: '4',
        },
        {
            label: "10:00 – 12:00",
            key: '5',
        },
        {
            label: "12:00 – 14:00",
            key: '6',
        },
        {
            label: "14:00 – 16:00",
            key: '7',
        },
        {
            label: "16:00 – 18:00",
            key: '8',
        },
        {
            label: "18:00 – 20:00",
            key: '9',
        },
        {
            label: "20:00 – 22:00",
            key: '10',
        },
        {
            label: "22:00 – 0:00",
            key: '11',
        },
    ];

    const onClick: MenuProps['onClick'] = ({key}) => {
        const inters = items[Number(key)].label.split(" – ").map(time => time.trim());
        setCurrentInterval([inters[0], inters[1]]);
        setTimeName(items[Number(key)].label);
    };



    return (
        <div className={classes.dropdown}>
            <Dropdown menu={{items, onClick}} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space className={classes.space}>
                        {timeName}
                        <DownOutlined/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};

export default DropDownTimes;