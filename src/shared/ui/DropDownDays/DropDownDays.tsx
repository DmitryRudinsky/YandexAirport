import React from 'react';
import * as classes from "./DropDownDays.module.scss";
import {Dropdown, MenuProps, message, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";


interface DropDownProps {
    daysName: string;
    dateFormat2: string;
    dateFormatYesterday: string;
    dateFormatTomorrow: string;
    setDaysName: React.Dispatch<React.SetStateAction<string>>;
}

const DropDownDays: React.FC<DropDownProps> = ({
                                                   dateFormat2,
                                                   setDaysName,
                                                   daysName,
                                                   dateFormatYesterday,
                                                   dateFormatTomorrow
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