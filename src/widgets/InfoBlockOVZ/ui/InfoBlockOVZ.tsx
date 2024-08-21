import React from 'react';
import * as classes from "./InfoBlockOVZ.module.scss"
import * as globalClasses from "@/shared/global_styles/_global.module.scss"

interface InfoBlockProps {
    needSmallText: boolean;
}

const InfoBlockOVZ: React.FC<InfoBlockProps> = ({needSmallText}) => {
    return (
        <section className={classes.section}>
            <div className={globalClasses.container}>
                <div className={classes.line}/>
                <div className={classes.main__text__container}>
                    <p className={classes.main__text}>
                        Если вам нужна помощь в аэропорту, закажите</p>
                    <p className={classes.main__text}>
                        бесплатную услугу сопровождения за три дня
                    </p>
                    <p className={classes.main__text}>
                        до
                        прилета на
                        сайте или по телефону <span className={classes.span}>+7 (495) 578-65-65</span>.
                    </p>
                </div>
                {needSmallText ?
                    <div>
                        <p className={classes.small__text}>
                            В случае если вы прилетаете в Шереметьево, до отправления вашего рейса из аэропорта вылета
                            вам
                            требуется сообщить сотруднику авиакомпании о необходимости предоставления специального
                            обслуживания,
                            так как в аэропорту Шереметьево специальные услуги предоставляются в соответствии с
                            поступившим
                            запросом от авиаперевозчика.
                        </p>
                        <p className={classes.small__text}>
                            Мы окажем помощь при высадке из воздушного судна и получении
                            багажа,
                            обеспечим ваше сопровождение до привокзальной площади, зала повышенной комфортности для
                            пассажиров
                            из числа инвалидов и других лиц с ограничениями жизнедеятельности или до стойки оформления
                            на
                            стыковочный рейс, при следовании трансфером через аэропорт Шереметьево.
                        </p>
                    </div>
                    : <></>}
                <h4 className={classes.title}>Что мы сможем для вас сделать</h4>
                <ul className={classes.list}>
                    <li className={classes.list__elem}><span className={classes.list__span}>—</span>Встретим по прилету
                        у трапа самолета
                    </li>
                    <li className={classes.list__elem}><span className={classes.list__span}>—</span>Предоставим
                        инвалидное кресло или носилки
                    </li>
                    <li className={classes.list__elem}><span className={classes.list__span}>—</span>Поможем без очереди
                        пройти контроль
                    </li>
                    <li className={classes.list__elem}><span className={classes.list__span}>—</span>Донесем багаж</li>
                    <li className={classes.list__elem}><span className={classes.list__span}>—</span>Проводим до
                        транспорта из аэропорта
                    </li>
                </ul>

                <div>
                    <p className={classes.small__text}>
                        Пожалуйста, заказывайте помощь заранее, чтобы мы ждали <br/>Вашего приезда и были готовы предоставить
                        все необходимое.
                    </p>
                    <p className={classes.small__text}>
                        Обращаем Ваше внимание, что высадка пассажиров, нуждающихся <br/>в предоставлении специального
                        обслуживания, производится <br/>в последнюю очередь, по окончании высадки основного потока.
                    </p>
                    <p className={classes.small__text}>
                        <span className={classes.span}>Подробная информация</span> об услугах аэропорта для пассажиров <br/>с ОВЗ
                        опубликована в <a href="#" className={classes.link}>специальном разделе</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InfoBlockOVZ;