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
                <p className={classes.main__text}>
                    Если вам нужна помощь в аэропорту, закажите бесплатную услугу сопровождения за три дня до прилета на
                    сайте или по телефону <span className={classes.span}>+7 (495) 578-65-65</span>.
                </p>
                {needSmallText ? <p className={classes.small__text}>
                    В случае если вы прилетаете в Шереметьево, до отправления вашего рейса из аэропорта вылета вам
                    требуется сообщить сотруднику авиакомпании о необходимости предоставления специального обслуживания,
                    так как в аэропорту Шереметьево специальные услуги предоставляются в соответствии с поступившим
                    запросом от авиаперевозчика. Мы окажем помощь при высадке из воздушного судна и получении багажа,
                    обеспечим ваше сопровождение до привокзальной площади, зала повышенной комфортности для пассажиров
                    из числа инвалидов и других лиц с ограничениями жизнедеятельности или до стойки оформления на
                    стыковочный рейс, при следовании трансфером через аэропорт Шереметьево.
                </p> : <></>}
                <h4 className={classes.title}>Что мы сможем для вас сделать</h4>
                <ul className={classes.list}>
                    <li className={classes.list__elem}><span className={classes.list__span}>-</span>Встретим по прилету у трапа самолета</li>
                    <li className={classes.list__elem}><span className={classes.list__span}>-</span>Предоставим инвалидное кресло или носилки</li>
                    <li className={classes.list__elem}><span className={classes.list__span}>-</span>Поможем без очереди пройти контроль</li>
                    <li className={classes.list__elem}><span className={classes.list__span}>-</span>Донесем багаж</li>
                    <li className={classes.list__elem}><span className={classes.list__span}>-</span>Проводим до транспорта из аэропорта</li>
                </ul>
                <p className={classes.small__text}>
                    Пожалуйста, заказывайте помощь заранее, чтобы мы ждали вашего приезда и были готовы предоставить все необходимое.

                    Обращаем Ваше внимание, что высадка пассажиров, нуждающихся в предоставлении специального обслуживания, производится в последнюю очередь, по окончании высадки основного потока.

                    <span className={classes.span}>Подробная информация</span> об услугах аэропорта для пассажиров с ОВЗ опубликована в специальном разделе.
                </p>
            </div>
        </section>
    );
};

export default InfoBlockOVZ;