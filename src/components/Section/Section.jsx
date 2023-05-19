import { Title } from "../Section/styled";
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <Title>
            <h2>{title}</h2>
            {children}
        </Title>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

