import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DrowndownChallenges() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownItem
            className="dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Link>Desafios</Link>
            {isOpen && (
                <DropdownMenu>
                    <li><Link>Desafio 1</Link></li>
                    <li><Link>Desafio 2</Link></li>
                    <li><Link>Desafio 3</Link></li>
                </DropdownMenu>
            )}
        </DropdownItem>
    );
}

const DropdownItem = styled.div`
    position: relative;
    font-size: clamp(1rem, 2vw, 1.2rem);
`;

const DropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    top: 50px;
    border-radius: 10px;
    

    li {
        padding: 5px;
        border-radius: 30px;
        text-align: center;
        list-style: none;
        font-size: clamp(1rem, 2vw, 1.2rem);
        cursor: pointer;
        background-color: var(--secondary-color);
        margin-bottom: 2px;
    }
`;