import React, {useState} from 'react';
import * as classes from "./Input.module.scss";
import {useSpring, animated} from "react-spring";
import type { MenuProps } from 'antd';
import {Dropdown, message, Space} from 'antd';
import { DownOutlined } from '@ant-design/icons';


const Input: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const [timeName, setTimeName] = useState<string>("Любое время");
    const setActiveHandle = () => {
        setActive(true);
    }

    const setUnActiveHandle = () => {
        setActive(false);
    }

    const onClick: MenuProps['onClick'] = ({ key }) => {
        setTimeName(items[Number(key)].label)
    };

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

    //@ts-ignore
    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-40px)' },
        config: { tension: 40, friction: 10 },
        reset: true,
    });



    return (
        <div className={`${classes.searchBar} ${active ? classes.searchBar__active : ""}`}>
            <input className={`${classes.searchBar__input}`} onClick={setActiveHandle} type="text"
                   placeholder="Поиск по номеру рейса, городу и авиакомпании"/>
            <div className={classes.options}>
                {
                    !active
                        ?
                        <animated.div style={props}>
                            <div className={classes.dropCont}>
                                <div>
                                    <Dropdown menu={{items}} trigger={['click']}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space className={classes.space} style={{color: "#ffcc00"}}>
                                                Сегодня 15 авг.
                                                <DownOutlined/>
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className={classes.dropdown}>
                                    <Dropdown menu={{ items, onClick }} trigger={['click']}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space className={classes.space}>
                                                {timeName}
                                                <DownOutlined/>
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                        </animated.div>
                        :
                        <animated.div style={props}>
                            <button className={classes.cancel} onClick={setUnActiveHandle}>Отменить</button>
                            <button className={classes.find}>Искать</button>
                        </animated.div>
                }
            </div>
        </div>
    );
};

export default Input;