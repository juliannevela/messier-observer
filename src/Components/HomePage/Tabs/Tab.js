import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const {label, onClick } = this.props;
        onClick(label);
    }
    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab-list-item border-wrap';

        if(activeTab === label) {
            className += ' tab-list-active border-wrap2';
        }
        return (
            <li 
                className={className}
                onClick={onClick}
            >
                {label}
            </li>
        );
    }
}
