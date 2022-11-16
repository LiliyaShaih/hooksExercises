import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const OrderedList = ({ children }) => {
    let index = 0;

    return React.Children.map(children, (child) => {
        index++;
        const config = { ...child.props, i: index };
        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <OrderedList>
                <Component />
                <Component />
                <Component />
            </OrderedList>
        </CollapseWrapper>
    );
};

const Component = ({ i }) => {
    return <div>Компонент списка {i} </div>;
};
Component.propTypes = {
    i: PropTypes.number
};

export default ChildrenExercise;
