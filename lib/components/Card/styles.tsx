import styled, { css } from 'styled-components';

export const Container = styled.div<{isDragging: boolean;}>`
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 4px 1px rgba(0, 0, 0,.05);
    border-top: 1px solid rgba(0, 0, 0,.05);
    cursor: grab;

    header {
        position: absolute;
        width: 100%;
        top: -22px;
        left: 15px;
    }

    p {
        font-weight: 500;
        line-height: 20px;
    }

    img {
        width: 24px;
        height: 25px;
        border-radius: 4px;
    }

    ${props => props.isDragging && css`
        border: 2px dashed rgba(0, 0, 0,.05);
        padding-top: 30px;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;

        p, img, header {
            opacity: 0;
        }
    `}
`;

export const Label = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background: ${props => props.color};
`;