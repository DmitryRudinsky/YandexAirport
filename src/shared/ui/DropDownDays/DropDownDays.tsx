import React from 'react';
import * as classes from "./DropDownDays.module.scss";
import {Dropdown, MenuProps, message, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";


interface DropDownProps {
    dateFormat1: string;
    daysName: string;
    dateFormat2: string;
    dateFormatYesterday: string;
    dateFormatTomorrow: string;
    setDaysName: React.Dispatch<React.SetStateAction<string>>;
    setCurrentDate: React.Dispatch<React.SetStateAction<string>>;
    dateFormatYesterdayFull: string;
    dateFormatTomorrowFull: string;
}

const DropDownDays: React.FC<DropDownProps> = ({
                                                   dateFormat1,
                                                   dateFormat2,
                                                   setDaysName,
                                                   daysName,
                                                   dateFormatYesterday,
                                                   dateFormatTomorrow,
                                                   setCurrentDate,
                                                   dateFormatYesterdayFull,
                                                   dateFormatTomorrowFull,
                                               }) => {

    const items: ({ label: string; key: string })[] = [
        {
            label: `${dateFormatYesterday}`,
            key: '0',
        },
        {
            label: `${dateFormat2}`,
            key: '1',
        },
        {
            label: `${dateFormatTomorrow}`,
            key: '2',
        }
    ];

    const onClick: MenuProps['onClick'] = ({key}) => {
        setDaysName(items[Number(key)].label);
        if(key === "0") setCurrentDate(dateFormatYesterdayFull);
        else if(key === "1") setCurrentDate(dateFormat1);
        else if(key === "2") setCurrentDate(dateFormatTomorrowFull);
        // refetch();
    };

    return (
        <div className={classes.dropdown}>
            <Dropdown menu={{items, onClick}} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space className={classes.space}>
                        {`${daysName}`}
                        <DownOutlined/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};

export default DropDownDays;